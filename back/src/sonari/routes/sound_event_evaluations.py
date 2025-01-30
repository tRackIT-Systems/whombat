"""REST API routes for Sound Event Predictions."""

from typing import Annotated

from fastapi import APIRouter, Depends

from sonari import api, schemas
from sonari.filters.sound_event_evaluations import SoundEventEvaluationFilter
from sonari.routes.dependencies import Session
from sonari.routes.types import Limit, Offset

sound_event_evaluations_router = APIRouter()

__all__ = [
    "sound_event_evaluations_router",
]


@sound_event_evaluations_router.get(
    "/",
    response_model=schemas.Page[schemas.SoundEventEvaluation],
)
async def get_sound_event_evaluations(
    session: Session,
    filter: Annotated[
        SoundEventEvaluationFilter, Depends(SoundEventEvaluationFilter)  # type: ignore
    ],
    offset: Offset = 0,
    limit: Limit = 100,
) -> schemas.Page[schemas.SoundEventEvaluation]:
    """Get a page of sound event evaluations."""
    (
        sound_event_evaluations,
        total,
    ) = await api.sound_event_evaluations.get_many(
        session=session,
        offset=offset,
        limit=limit,
        filters=[filter],
    )
    return schemas.Page(
        items=sound_event_evaluations,
        offset=offset,
        limit=limit,
        total=total,
    )
