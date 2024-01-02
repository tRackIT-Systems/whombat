import datetime
from pathlib import Path

from soundevent.io import aoef
from soundevent.io.aoef import AnnotationProjectObject
from sqlalchemy import insert, select, tuple_
from sqlalchemy.ext.asyncio import AsyncSession

from whombat import models
from whombat.io.aoef.annotation_tasks import get_annotation_tasks
from whombat.io.aoef.clip_annotations import get_clip_annotations
from whombat.io.aoef.clips import get_clips
from whombat.io.aoef.features import get_feature_names
from whombat.io.aoef.recordings import get_recordings
from whombat.io.aoef.sound_event_annotations import get_sound_event_annotations
from whombat.io.aoef.sound_events import get_sound_events
from whombat.io.aoef.tags import import_tags
from whombat.io.aoef.users import import_users


async def import_annotation_project(
    session: AsyncSession,
    obj: dict,
    audio_dir: Path,
    base_audio_dir: Path,
) -> models.AnnotationProject:
    if not isinstance(obj, dict):
        raise TypeError(f"Expected dict, got {type(obj)}")

    if not "data" in obj:
        raise ValueError("Missing 'data' key")

    data = obj["data"]
    project_object = aoef.AnnotationProjectObject.model_validate(data)

    project = await get_or_create_annotation_project(session, project_object)

    tags = await import_tags(session, project_object.tags or [])
    users = await import_users(session, project_object.users or [])
    feature_names = await get_feature_names(
        session,
        project_object,
    )
    recordings = await get_recordings(
        session,
        project_object,
        tags=tags,
        users=users,
        feature_names=feature_names,
        audio_dir=audio_dir,
        base_audio_dir=base_audio_dir,
    )
    clips = await get_clips(
        session,
        project_object,
        recordings=recordings,
        feature_names=feature_names,
    )
    sound_events = await get_sound_events(
        session,
        project_object,
        recordings=recordings,
        feature_names=feature_names,
    )
    clip_annotations = await get_clip_annotations(
        session,
        project_object,
        clips=clips,
        users=users,
        tags=tags,
    )
    await get_sound_event_annotations(
        session,
        project_object,
        sound_events=sound_events,
        clip_annotations=clip_annotations,
        users=users,
        tags=tags,
    )
    await get_annotation_tasks(
        session,
        project_object,
        clips=clips,
        annotation_projects={project.uuid: project.id},
        users=users,
        clip_annotations=clip_annotations,
    )
    await add_annotation_tags(
        session,
        project_object,
        project.id,
        tags,
    )
    return project


async def get_or_create_annotation_project(
    session: AsyncSession,
    obj: AnnotationProjectObject,
) -> models.AnnotationProject:
    stmt = select(models.AnnotationProject).where(
        models.AnnotationProject.uuid == obj.uuid
    )
    result = await session.execute(stmt)
    row = result.one_or_none()
    if row is not None:
        return row[0]

    db_obj = models.AnnotationProject(
        uuid=obj.uuid,
        name=obj.name,
        description=obj.description or "",
        annotation_instructions=obj.instructions,
        created_on=obj.created_on or datetime.datetime.now(),
    )
    session.add(db_obj)
    await session.flush()
    return db_obj


async def add_annotation_tags(
    session: AsyncSession,
    project: AnnotationProjectObject,
    project_id: int,
    tags: dict[int, int],
) -> None:
    """Add annotation tags to a project."""
    proj_tags = project.project_tags or []
    if not proj_tags:
        return

    values = []
    for tag in proj_tags:
        tag_bd_id = tags.get(tag)
        if tag_bd_id is None:
            continue
        values.append(
            {
                "annotation_project_id": project_id,
                "tag_id": tag_bd_id,
                "created_on": datetime.datetime.now(),
            }
        )

    stmt = select(
        models.AnnotationProjectTag.annotation_project_id,
        models.AnnotationProjectTag.tag_id,
    ).where(
        tuple_(
            models.AnnotationProjectTag.annotation_project_id,
            models.AnnotationProjectTag.tag_id,
        ).in_([(v["annotation_project_id"], v["tag_id"]) for v in values])
    )
    result = await session.execute(stmt)
    existing = set(result.all())

    missing = [
        v
        for v in values
        if (v["annotation_project_id"], v["tag_id"]) not in existing
    ]
    if not missing:
        return

    stmt = insert(models.AnnotationProjectTag).values(missing)
    await session.execute(stmt)