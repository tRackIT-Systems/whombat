"""Use indexes on foreign keys.

Revision ID: cc574886f726
Revises: 9dcee2a51077
Create Date: 2024-07-03 16:28:01.367685

"""

from typing import Sequence, Union

from alembic import op

# revision identifiers, used by Alembic.
revision: str = "cc574886f726"
down_revision: Union[str, None] = "9dcee2a51077"
branch_labels: Union[str, Sequence[str], None] = None
depends_on: Union[str, Sequence[str], None] = None


def upgrade() -> None:
    # ### commands auto generated by Alembic - please adjust! ###
    with op.batch_alter_table("accesstoken", schema=None) as batch_op:
        batch_op.create_index(batch_op.f("ix_accesstoken_user_id"), ["user_id"], unique=False)

    with op.batch_alter_table("annotation_project_tag", schema=None) as batch_op:
        batch_op.create_index(
            batch_op.f("ix_annotation_project_tag_annotation_project_id"),
            ["annotation_project_id"],
            unique=False,
        )
        batch_op.create_index(
            batch_op.f("ix_annotation_project_tag_tag_id"),
            ["tag_id"],
            unique=False,
        )
        batch_op.drop_constraint("fk_annotation_project_tag_tag_id_tag", type_="foreignkey")
        batch_op.create_foreign_key(
            batch_op.f("fk_annotation_project_tag_tag_id_tag"),
            "tag",
            ["tag_id"],
            ["id"],
            ondelete="CASCADE",
        )

    with op.batch_alter_table("annotation_status_badge", schema=None) as batch_op:
        batch_op.create_index(
            batch_op.f("ix_annotation_status_badge_annotation_task_id"),
            ["annotation_task_id"],
            unique=False,
        )
        batch_op.create_index(
            batch_op.f("ix_annotation_status_badge_user_id"),
            ["user_id"],
            unique=False,
        )

    with op.batch_alter_table("annotation_task", schema=None) as batch_op:
        batch_op.create_index(
            batch_op.f("ix_annotation_task_annotation_project_id"),
            ["annotation_project_id"],
            unique=False,
        )
        batch_op.create_index(
            batch_op.f("ix_annotation_task_clip_annotation_id"),
            ["clip_annotation_id"],
            unique=False,
        )
        batch_op.create_index(batch_op.f("ix_annotation_task_clip_id"), ["clip_id"], unique=False)

    with op.batch_alter_table("clip", schema=None) as batch_op:
        batch_op.create_index(batch_op.f("ix_clip_recording_id"), ["recording_id"], unique=False)

    with op.batch_alter_table("clip_annotation", schema=None) as batch_op:
        batch_op.create_index(batch_op.f("ix_clip_annotation_clip_id"), ["clip_id"], unique=False)

    with op.batch_alter_table("clip_annotation_note", schema=None) as batch_op:
        batch_op.create_index(
            batch_op.f("ix_clip_annotation_note_clip_annotation_id"),
            ["clip_annotation_id"],
            unique=False,
        )
        batch_op.create_index(
            batch_op.f("ix_clip_annotation_note_note_id"),
            ["note_id"],
            unique=False,
        )

    with op.batch_alter_table("clip_annotation_tag", schema=None) as batch_op:
        batch_op.create_index(
            batch_op.f("ix_clip_annotation_tag_clip_annotation_id"),
            ["clip_annotation_id"],
            unique=False,
        )
        batch_op.create_index(
            batch_op.f("ix_clip_annotation_tag_created_by_id"),
            ["created_by_id"],
            unique=False,
        )
        batch_op.create_index(
            batch_op.f("ix_clip_annotation_tag_tag_id"),
            ["tag_id"],
            unique=False,
        )
        batch_op.drop_constraint("fk_clip_annotation_tag_tag_id_tag", type_="foreignkey")
        batch_op.create_foreign_key(
            batch_op.f("fk_clip_annotation_tag_tag_id_tag"),
            "tag",
            ["tag_id"],
            ["id"],
            ondelete="CASCADE",
        )

    with op.batch_alter_table("clip_evaluation", schema=None) as batch_op:
        batch_op.create_index(
            batch_op.f("ix_clip_evaluation_clip_annotation_id"),
            ["clip_annotation_id"],
            unique=False,
        )
        batch_op.create_index(
            batch_op.f("ix_clip_evaluation_clip_prediction_id"),
            ["clip_prediction_id"],
            unique=False,
        )
        batch_op.create_index(
            batch_op.f("ix_clip_evaluation_evaluation_id"),
            ["evaluation_id"],
            unique=False,
        )

    with op.batch_alter_table("clip_evaluation_metric", schema=None) as batch_op:
        batch_op.create_index(
            batch_op.f("ix_clip_evaluation_metric_clip_evaluation_id"),
            ["clip_evaluation_id"],
            unique=False,
        )
        batch_op.create_index(
            batch_op.f("ix_clip_evaluation_metric_feature_name_id"),
            ["feature_name_id"],
            unique=False,
        )

    with op.batch_alter_table("clip_feature", schema=None) as batch_op:
        batch_op.create_index(batch_op.f("ix_clip_feature_clip_id"), ["clip_id"], unique=False)
        batch_op.create_index(
            batch_op.f("ix_clip_feature_feature_name_id"),
            ["feature_name_id"],
            unique=False,
        )

    with op.batch_alter_table("clip_prediction", schema=None) as batch_op:
        batch_op.create_index(batch_op.f("ix_clip_prediction_clip_id"), ["clip_id"], unique=False)

    with op.batch_alter_table("clip_prediction_tag", schema=None) as batch_op:
        batch_op.create_index(
            batch_op.f("ix_clip_prediction_tag_clip_prediction_id"),
            ["clip_prediction_id"],
            unique=False,
        )
        batch_op.create_index(
            batch_op.f("ix_clip_prediction_tag_tag_id"),
            ["tag_id"],
            unique=False,
        )
        batch_op.drop_constraint("fk_clip_prediction_tag_tag_id_tag", type_="foreignkey")
        batch_op.create_foreign_key(
            batch_op.f("fk_clip_prediction_tag_tag_id_tag"),
            "tag",
            ["tag_id"],
            ["id"],
            ondelete="CASCADE",
        )

    with op.batch_alter_table("dataset_recording", schema=None) as batch_op:
        batch_op.create_index(
            batch_op.f("ix_dataset_recording_dataset_id"),
            ["dataset_id"],
            unique=False,
        )
        batch_op.create_index(
            batch_op.f("ix_dataset_recording_recording_id"),
            ["recording_id"],
            unique=False,
        )

    with op.batch_alter_table("evaluation_metric", schema=None) as batch_op:
        batch_op.create_index(
            batch_op.f("ix_evaluation_metric_evaluation_id"),
            ["evaluation_id"],
            unique=False,
        )
        batch_op.create_index(
            batch_op.f("ix_evaluation_metric_feature_name_id"),
            ["feature_name_id"],
            unique=False,
        )

    with op.batch_alter_table("evaluation_set_annotation", schema=None) as batch_op:
        batch_op.create_index(
            batch_op.f("ix_evaluation_set_annotation_clip_annotation_id"),
            ["clip_annotation_id"],
            unique=False,
        )
        batch_op.create_index(
            batch_op.f("ix_evaluation_set_annotation_evaluation_set_id"),
            ["evaluation_set_id"],
            unique=False,
        )

    with op.batch_alter_table("evaluation_set_model_run", schema=None) as batch_op:
        batch_op.create_index(
            batch_op.f("ix_evaluation_set_model_run_evaluation_set_id"),
            ["evaluation_set_id"],
            unique=False,
        )
        batch_op.create_index(
            batch_op.f("ix_evaluation_set_model_run_model_run_id"),
            ["model_run_id"],
            unique=False,
        )

    with op.batch_alter_table("evaluation_set_tag", schema=None) as batch_op:
        batch_op.create_index(
            batch_op.f("ix_evaluation_set_tag_evaluation_set_id"),
            ["evaluation_set_id"],
            unique=False,
        )
        batch_op.create_index(
            batch_op.f("ix_evaluation_set_tag_tag_id"),
            ["tag_id"],
            unique=False,
        )
        batch_op.drop_constraint("fk_evaluation_set_tag_tag_id_tag", type_="foreignkey")
        batch_op.create_foreign_key(
            batch_op.f("fk_evaluation_set_tag_tag_id_tag"),
            "tag",
            ["tag_id"],
            ["id"],
            ondelete="CASCADE",
        )

    with op.batch_alter_table("evaluation_set_user_run", schema=None) as batch_op:
        batch_op.create_index(
            batch_op.f("ix_evaluation_set_user_run_evaluation_set_id"),
            ["evaluation_set_id"],
            unique=False,
        )
        batch_op.create_index(
            batch_op.f("ix_evaluation_set_user_run_user_run_id"),
            ["user_run_id"],
            unique=False,
        )

    with op.batch_alter_table("model_run_evaluation", schema=None) as batch_op:
        batch_op.create_index(
            batch_op.f("ix_model_run_evaluation_evaluation_id"),
            ["evaluation_id"],
            unique=False,
        )
        batch_op.create_index(
            batch_op.f("ix_model_run_evaluation_evaluation_set_id"),
            ["evaluation_set_id"],
            unique=False,
        )
        batch_op.create_index(
            batch_op.f("ix_model_run_evaluation_model_run_id"),
            ["model_run_id"],
            unique=False,
        )
        batch_op.drop_constraint(
            "fk_model_run_evaluation_evaluation_set_id_evaluation_set",
            type_="foreignkey",
        )
        batch_op.create_foreign_key(
            batch_op.f("fk_model_run_evaluation_evaluation_set_id_evaluation_set"),
            "evaluation_set",
            ["evaluation_set_id"],
            ["id"],
            ondelete="CASCADE",
        )

    with op.batch_alter_table("model_run_prediction", schema=None) as batch_op:
        batch_op.create_index(
            batch_op.f("ix_model_run_prediction_clip_prediction_id"),
            ["clip_prediction_id"],
            unique=False,
        )
        batch_op.create_index(
            batch_op.f("ix_model_run_prediction_model_run_id"),
            ["model_run_id"],
            unique=False,
        )
        batch_op.drop_constraint(
            "fk_model_run_prediction_clip_prediction_id_clip_prediction",
            type_="foreignkey",
        )
        batch_op.create_foreign_key(
            batch_op.f("fk_model_run_prediction_clip_prediction_id_clip_prediction"),
            "clip_prediction",
            ["clip_prediction_id"],
            ["id"],
            ondelete="CASCADE",
        )

    with op.batch_alter_table("note", schema=None) as batch_op:
        batch_op.create_index(
            batch_op.f("ix_note_created_by_id"),
            ["created_by_id"],
            unique=False,
        )

    with op.batch_alter_table("recording_feature", schema=None) as batch_op:
        batch_op.create_index(
            batch_op.f("ix_recording_feature_feature_name_id"),
            ["feature_name_id"],
            unique=False,
        )
        batch_op.create_index(
            batch_op.f("ix_recording_feature_recording_id"),
            ["recording_id"],
            unique=False,
        )

    with op.batch_alter_table("recording_note", schema=None) as batch_op:
        batch_op.create_index(batch_op.f("ix_recording_note_note_id"), ["note_id"], unique=False)
        batch_op.create_index(
            batch_op.f("ix_recording_note_recording_id"),
            ["recording_id"],
            unique=False,
        )

    with op.batch_alter_table("recording_owner", schema=None) as batch_op:
        batch_op.create_index(
            batch_op.f("ix_recording_owner_recording_id"),
            ["recording_id"],
            unique=False,
        )
        batch_op.create_index(batch_op.f("ix_recording_owner_user_id"), ["user_id"], unique=False)

    with op.batch_alter_table("recording_tag", schema=None) as batch_op:
        batch_op.create_index(
            batch_op.f("ix_recording_tag_recording_id"),
            ["recording_id"],
            unique=False,
        )
        batch_op.create_index(batch_op.f("ix_recording_tag_tag_id"), ["tag_id"], unique=False)
        batch_op.drop_constraint("fk_recording_tag_tag_id_tag", type_="foreignkey")
        batch_op.create_foreign_key(
            batch_op.f("fk_recording_tag_tag_id_tag"),
            "tag",
            ["tag_id"],
            ["id"],
            ondelete="CASCADE",
        )

    with op.batch_alter_table("sound_event", schema=None) as batch_op:
        batch_op.create_index(
            batch_op.f("ix_sound_event_recording_id"),
            ["recording_id"],
            unique=False,
        )

    with op.batch_alter_table("sound_event_annotation", schema=None) as batch_op:
        batch_op.create_index(
            batch_op.f("ix_sound_event_annotation_clip_annotation_id"),
            ["clip_annotation_id"],
            unique=False,
        )
        batch_op.create_index(
            batch_op.f("ix_sound_event_annotation_created_by_id"),
            ["created_by_id"],
            unique=False,
        )
        batch_op.create_index(
            batch_op.f("ix_sound_event_annotation_sound_event_id"),
            ["sound_event_id"],
            unique=False,
        )
        batch_op.drop_constraint(
            "fk_sound_event_annotation_sound_event_id_sound_event",
            type_="foreignkey",
        )
        batch_op.create_foreign_key(
            batch_op.f("fk_sound_event_annotation_sound_event_id_sound_event"),
            "sound_event",
            ["sound_event_id"],
            ["id"],
            ondelete="CASCADE",
        )

    with op.batch_alter_table("sound_event_annotation_note", schema=None) as batch_op:
        batch_op.create_index(
            batch_op.f("ix_sound_event_annotation_note_note_id"),
            ["note_id"],
            unique=False,
        )
        batch_op.create_index(
            batch_op.f("ix_sound_event_annotation_note_sound_event_annotation_id"),
            ["sound_event_annotation_id"],
            unique=False,
        )

    with op.batch_alter_table("sound_event_annotation_tag", schema=None) as batch_op:
        batch_op.create_index(
            batch_op.f("ix_sound_event_annotation_tag_created_by_id"),
            ["created_by_id"],
            unique=False,
        )
        batch_op.create_index(
            batch_op.f("ix_sound_event_annotation_tag_tag_id"),
            ["tag_id"],
            unique=False,
        )
        batch_op.drop_constraint("fk_sound_event_annotation_tag_tag_id_tag", type_="foreignkey")
        batch_op.create_foreign_key(
            batch_op.f("fk_sound_event_annotation_tag_tag_id_tag"),
            "tag",
            ["tag_id"],
            ["id"],
            ondelete="CASCADE",
        )

    with op.batch_alter_table("sound_event_evaluation", schema=None) as batch_op:
        batch_op.create_index(
            batch_op.f("ix_sound_event_evaluation_clip_evaluation_id"),
            ["clip_evaluation_id"],
            unique=False,
        )
        batch_op.create_index(
            batch_op.f("ix_sound_event_evaluation_source_id"),
            ["source_id"],
            unique=False,
        )
        batch_op.create_index(
            batch_op.f("ix_sound_event_evaluation_target_id"),
            ["target_id"],
            unique=False,
        )

    with op.batch_alter_table("sound_event_evaluation_metric", schema=None) as batch_op:
        batch_op.create_index(
            batch_op.f("ix_sound_event_evaluation_metric_feature_name_id"),
            ["feature_name_id"],
            unique=False,
        )
        batch_op.create_index(
            batch_op.f("ix_sound_event_evaluation_metric_sound_event_evaluation_id"),
            ["sound_event_evaluation_id"],
            unique=False,
        )

    with op.batch_alter_table("sound_event_feature", schema=None) as batch_op:
        batch_op.create_index(
            batch_op.f("ix_sound_event_feature_feature_name_id"),
            ["feature_name_id"],
            unique=False,
        )
        batch_op.create_index(
            batch_op.f("ix_sound_event_feature_sound_event_id"),
            ["sound_event_id"],
            unique=False,
        )

    with op.batch_alter_table("sound_event_prediction", schema=None) as batch_op:
        batch_op.create_index(
            batch_op.f("ix_sound_event_prediction_clip_prediction_id"),
            ["clip_prediction_id"],
            unique=False,
        )
        batch_op.create_index(
            batch_op.f("ix_sound_event_prediction_score"),
            ["score"],
            unique=False,
        )
        batch_op.create_index(
            batch_op.f("ix_sound_event_prediction_sound_event_id"),
            ["sound_event_id"],
            unique=False,
        )

    with op.batch_alter_table("sound_event_prediction_tag", schema=None) as batch_op:
        batch_op.create_index(
            batch_op.f("ix_sound_event_prediction_tag_tag_id"),
            ["tag_id"],
            unique=False,
        )

    with op.batch_alter_table("user_run", schema=None) as batch_op:
        batch_op.create_index(batch_op.f("ix_user_run_user_id"), ["user_id"], unique=False)

    with op.batch_alter_table("user_run_evaluation", schema=None) as batch_op:
        batch_op.create_index(
            batch_op.f("ix_user_run_evaluation_evaluation_id"),
            ["evaluation_id"],
            unique=False,
        )
        batch_op.create_index(
            batch_op.f("ix_user_run_evaluation_evaluation_set_id"),
            ["evaluation_set_id"],
            unique=False,
        )
        batch_op.create_index(
            batch_op.f("ix_user_run_evaluation_user_run_id"),
            ["user_run_id"],
            unique=False,
        )

    with op.batch_alter_table("user_run_prediction", schema=None) as batch_op:
        batch_op.create_index(
            batch_op.f("ix_user_run_prediction_clip_prediction_id"),
            ["clip_prediction_id"],
            unique=False,
        )
        batch_op.create_index(
            batch_op.f("ix_user_run_prediction_user_run_id"),
            ["user_run_id"],
            unique=False,
        )

    # ### end Alembic commands ###


def downgrade() -> None:
    # ### commands auto generated by Alembic - please adjust! ###
    with op.batch_alter_table("user_run_prediction", schema=None) as batch_op:
        batch_op.drop_index(batch_op.f("ix_user_run_prediction_user_run_id"))
        batch_op.drop_index(batch_op.f("ix_user_run_prediction_clip_prediction_id"))

    with op.batch_alter_table("user_run_evaluation", schema=None) as batch_op:
        batch_op.drop_index(batch_op.f("ix_user_run_evaluation_user_run_id"))
        batch_op.drop_index(batch_op.f("ix_user_run_evaluation_evaluation_set_id"))
        batch_op.drop_index(batch_op.f("ix_user_run_evaluation_evaluation_id"))

    with op.batch_alter_table("user_run", schema=None) as batch_op:
        batch_op.drop_index(batch_op.f("ix_user_run_user_id"))

    with op.batch_alter_table("sound_event_prediction_tag", schema=None) as batch_op:
        batch_op.drop_index(batch_op.f("ix_sound_event_prediction_tag_tag_id"))

    with op.batch_alter_table("sound_event_prediction", schema=None) as batch_op:
        batch_op.drop_index(batch_op.f("ix_sound_event_prediction_sound_event_id"))
        batch_op.drop_index(batch_op.f("ix_sound_event_prediction_score"))
        batch_op.drop_index(batch_op.f("ix_sound_event_prediction_clip_prediction_id"))

    with op.batch_alter_table("sound_event_feature", schema=None) as batch_op:
        batch_op.drop_index(batch_op.f("ix_sound_event_feature_sound_event_id"))
        batch_op.drop_index(batch_op.f("ix_sound_event_feature_feature_name_id"))

    with op.batch_alter_table("sound_event_evaluation_metric", schema=None) as batch_op:
        batch_op.drop_index(batch_op.f("ix_sound_event_evaluation_metric_sound_event_evaluation_id"))
        batch_op.drop_index(batch_op.f("ix_sound_event_evaluation_metric_feature_name_id"))

    with op.batch_alter_table("sound_event_evaluation", schema=None) as batch_op:
        batch_op.drop_index(batch_op.f("ix_sound_event_evaluation_target_id"))
        batch_op.drop_index(batch_op.f("ix_sound_event_evaluation_source_id"))
        batch_op.drop_index(batch_op.f("ix_sound_event_evaluation_clip_evaluation_id"))

    with op.batch_alter_table("sound_event_annotation_tag", schema=None) as batch_op:
        batch_op.drop_constraint(
            batch_op.f("fk_sound_event_annotation_tag_tag_id_tag"),
            type_="foreignkey",
        )
        batch_op.create_foreign_key(
            "fk_sound_event_annotation_tag_tag_id_tag",
            "tag",
            ["tag_id"],
            ["id"],
        )
        batch_op.drop_index(batch_op.f("ix_sound_event_annotation_tag_tag_id"))
        batch_op.drop_index(batch_op.f("ix_sound_event_annotation_tag_created_by_id"))

    with op.batch_alter_table("sound_event_annotation_note", schema=None) as batch_op:
        batch_op.drop_index(batch_op.f("ix_sound_event_annotation_note_sound_event_annotation_id"))
        batch_op.drop_index(batch_op.f("ix_sound_event_annotation_note_note_id"))

    with op.batch_alter_table("sound_event_annotation", schema=None) as batch_op:
        batch_op.drop_constraint(
            batch_op.f("fk_sound_event_annotation_sound_event_id_sound_event"),
            type_="foreignkey",
        )
        batch_op.create_foreign_key(
            "fk_sound_event_annotation_sound_event_id_sound_event",
            "sound_event",
            ["sound_event_id"],
            ["id"],
        )
        batch_op.drop_index(batch_op.f("ix_sound_event_annotation_sound_event_id"))
        batch_op.drop_index(batch_op.f("ix_sound_event_annotation_created_by_id"))
        batch_op.drop_index(batch_op.f("ix_sound_event_annotation_clip_annotation_id"))

    with op.batch_alter_table("sound_event", schema=None) as batch_op:
        batch_op.drop_index(batch_op.f("ix_sound_event_recording_id"))

    with op.batch_alter_table("recording_tag", schema=None) as batch_op:
        batch_op.drop_constraint(batch_op.f("fk_recording_tag_tag_id_tag"), type_="foreignkey")
        batch_op.create_foreign_key("fk_recording_tag_tag_id_tag", "tag", ["tag_id"], ["id"])
        batch_op.drop_index(batch_op.f("ix_recording_tag_tag_id"))
        batch_op.drop_index(batch_op.f("ix_recording_tag_recording_id"))

    with op.batch_alter_table("recording_owner", schema=None) as batch_op:
        batch_op.drop_index(batch_op.f("ix_recording_owner_user_id"))
        batch_op.drop_index(batch_op.f("ix_recording_owner_recording_id"))

    with op.batch_alter_table("recording_note", schema=None) as batch_op:
        batch_op.drop_index(batch_op.f("ix_recording_note_recording_id"))
        batch_op.drop_index(batch_op.f("ix_recording_note_note_id"))

    with op.batch_alter_table("recording_feature", schema=None) as batch_op:
        batch_op.drop_index(batch_op.f("ix_recording_feature_recording_id"))
        batch_op.drop_index(batch_op.f("ix_recording_feature_feature_name_id"))

    with op.batch_alter_table("note", schema=None) as batch_op:
        batch_op.drop_index(batch_op.f("ix_note_created_by_id"))

    with op.batch_alter_table("model_run_prediction", schema=None) as batch_op:
        batch_op.drop_constraint(
            batch_op.f("fk_model_run_prediction_clip_prediction_id_clip_prediction"),
            type_="foreignkey",
        )
        batch_op.create_foreign_key(
            "fk_model_run_prediction_clip_prediction_id_clip_prediction",
            "clip_prediction",
            ["clip_prediction_id"],
            ["id"],
        )
        batch_op.drop_index(batch_op.f("ix_model_run_prediction_model_run_id"))
        batch_op.drop_index(batch_op.f("ix_model_run_prediction_clip_prediction_id"))

    with op.batch_alter_table("model_run_evaluation", schema=None) as batch_op:
        batch_op.drop_constraint(
            batch_op.f("fk_model_run_evaluation_evaluation_set_id_evaluation_set"),
            type_="foreignkey",
        )
        batch_op.create_foreign_key(
            "fk_model_run_evaluation_evaluation_set_id_evaluation_set",
            "evaluation_set",
            ["evaluation_set_id"],
            ["id"],
        )
        batch_op.drop_index(batch_op.f("ix_model_run_evaluation_model_run_id"))
        batch_op.drop_index(batch_op.f("ix_model_run_evaluation_evaluation_set_id"))
        batch_op.drop_index(batch_op.f("ix_model_run_evaluation_evaluation_id"))

    with op.batch_alter_table("evaluation_set_user_run", schema=None) as batch_op:
        batch_op.drop_index(batch_op.f("ix_evaluation_set_user_run_user_run_id"))
        batch_op.drop_index(batch_op.f("ix_evaluation_set_user_run_evaluation_set_id"))

    with op.batch_alter_table("evaluation_set_tag", schema=None) as batch_op:
        batch_op.drop_constraint(batch_op.f("fk_evaluation_set_tag_tag_id_tag"), type_="foreignkey")
        batch_op.create_foreign_key("fk_evaluation_set_tag_tag_id_tag", "tag", ["tag_id"], ["id"])
        batch_op.drop_index(batch_op.f("ix_evaluation_set_tag_tag_id"))
        batch_op.drop_index(batch_op.f("ix_evaluation_set_tag_evaluation_set_id"))

    with op.batch_alter_table("evaluation_set_model_run", schema=None) as batch_op:
        batch_op.drop_index(batch_op.f("ix_evaluation_set_model_run_model_run_id"))
        batch_op.drop_index(batch_op.f("ix_evaluation_set_model_run_evaluation_set_id"))

    with op.batch_alter_table("evaluation_set_annotation", schema=None) as batch_op:
        batch_op.drop_index(batch_op.f("ix_evaluation_set_annotation_evaluation_set_id"))
        batch_op.drop_index(batch_op.f("ix_evaluation_set_annotation_clip_annotation_id"))

    with op.batch_alter_table("evaluation_metric", schema=None) as batch_op:
        batch_op.drop_index(batch_op.f("ix_evaluation_metric_feature_name_id"))
        batch_op.drop_index(batch_op.f("ix_evaluation_metric_evaluation_id"))

    with op.batch_alter_table("dataset_recording", schema=None) as batch_op:
        batch_op.drop_index(batch_op.f("ix_dataset_recording_recording_id"))
        batch_op.drop_index(batch_op.f("ix_dataset_recording_dataset_id"))

    with op.batch_alter_table("clip_prediction_tag", schema=None) as batch_op:
        batch_op.drop_constraint(batch_op.f("fk_clip_prediction_tag_tag_id_tag"), type_="foreignkey")
        batch_op.create_foreign_key("fk_clip_prediction_tag_tag_id_tag", "tag", ["tag_id"], ["id"])
        batch_op.drop_index(batch_op.f("ix_clip_prediction_tag_tag_id"))
        batch_op.drop_index(batch_op.f("ix_clip_prediction_tag_clip_prediction_id"))

    with op.batch_alter_table("clip_prediction", schema=None) as batch_op:
        batch_op.drop_index(batch_op.f("ix_clip_prediction_clip_id"))

    with op.batch_alter_table("clip_feature", schema=None) as batch_op:
        batch_op.drop_index(batch_op.f("ix_clip_feature_feature_name_id"))
        batch_op.drop_index(batch_op.f("ix_clip_feature_clip_id"))

    with op.batch_alter_table("clip_evaluation_metric", schema=None) as batch_op:
        batch_op.drop_index(batch_op.f("ix_clip_evaluation_metric_feature_name_id"))
        batch_op.drop_index(batch_op.f("ix_clip_evaluation_metric_clip_evaluation_id"))

    with op.batch_alter_table("clip_evaluation", schema=None) as batch_op:
        batch_op.drop_index(batch_op.f("ix_clip_evaluation_evaluation_id"))
        batch_op.drop_index(batch_op.f("ix_clip_evaluation_clip_prediction_id"))
        batch_op.drop_index(batch_op.f("ix_clip_evaluation_clip_annotation_id"))

    with op.batch_alter_table("clip_annotation_tag", schema=None) as batch_op:
        batch_op.drop_constraint(batch_op.f("fk_clip_annotation_tag_tag_id_tag"), type_="foreignkey")
        batch_op.create_foreign_key("fk_clip_annotation_tag_tag_id_tag", "tag", ["tag_id"], ["id"])
        batch_op.drop_index(batch_op.f("ix_clip_annotation_tag_tag_id"))
        batch_op.drop_index(batch_op.f("ix_clip_annotation_tag_created_by_id"))
        batch_op.drop_index(batch_op.f("ix_clip_annotation_tag_clip_annotation_id"))

    with op.batch_alter_table("clip_annotation_note", schema=None) as batch_op:
        batch_op.drop_index(batch_op.f("ix_clip_annotation_note_note_id"))
        batch_op.drop_index(batch_op.f("ix_clip_annotation_note_clip_annotation_id"))

    with op.batch_alter_table("clip_annotation", schema=None) as batch_op:
        batch_op.drop_index(batch_op.f("ix_clip_annotation_clip_id"))

    with op.batch_alter_table("clip", schema=None) as batch_op:
        batch_op.drop_index(batch_op.f("ix_clip_recording_id"))

    with op.batch_alter_table("annotation_task", schema=None) as batch_op:
        batch_op.drop_index(batch_op.f("ix_annotation_task_clip_id"))
        batch_op.drop_index(batch_op.f("ix_annotation_task_clip_annotation_id"))
        batch_op.drop_index(batch_op.f("ix_annotation_task_annotation_project_id"))

    with op.batch_alter_table("annotation_status_badge", schema=None) as batch_op:
        batch_op.drop_index(batch_op.f("ix_annotation_status_badge_user_id"))
        batch_op.drop_index(batch_op.f("ix_annotation_status_badge_annotation_task_id"))

    with op.batch_alter_table("annotation_project_tag", schema=None) as batch_op:
        batch_op.drop_constraint(
            batch_op.f("fk_annotation_project_tag_tag_id_tag"),
            type_="foreignkey",
        )
        batch_op.create_foreign_key("fk_annotation_project_tag_tag_id_tag", "tag", ["tag_id"], ["id"])
        batch_op.drop_index(batch_op.f("ix_annotation_project_tag_tag_id"))
        batch_op.drop_index(batch_op.f("ix_annotation_project_tag_annotation_project_id"))

    with op.batch_alter_table("accesstoken", schema=None) as batch_op:
        batch_op.drop_index(batch_op.f("ix_accesstoken_user_id"))

    # ### end Alembic commands ###