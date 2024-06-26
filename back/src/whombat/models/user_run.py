"""User Run User."""

from typing import TYPE_CHECKING
from uuid import UUID, uuid4

import sqlalchemy.orm as orm
from sqlalchemy import ForeignKey, UniqueConstraint

from whombat.models.base import Base
from whombat.models.clip_prediction import ClipPrediction
from whombat.models.evaluation import Evaluation
from whombat.models.user import User

if TYPE_CHECKING:
    from whombat.models.evaluation_set import (
        EvaluationSet,
        EvaluationSetUserRun,
    )

__all__ = [
    "UserRun",
    "UserRunPrediction",
    "UserRunEvaluation",
]


class UserRun(Base):
    """User Run User.

    Attributes
    ----------
    id
        The database id of the model run.
    uuid
        The uuid of the model run.
    user
        The user that created the run.
    clip_predictions
        The predictions generated by the user.
    created_on
        The date and time the user run was created.

    Parameters
    ----------
    user_id : int
        The id of the user that created the run.
    uuid : UUID, optional
        The uuid of the model run.
    """

    __tablename__ = "user_run"

    id: orm.Mapped[int] = orm.mapped_column(primary_key=True, init=False)
    uuid: orm.Mapped[UUID] = orm.mapped_column(
        nullable=False,
        unique=True,
        default_factory=uuid4,
        kw_only=True,
    )
    user_id: orm.Mapped[int] = orm.mapped_column(
        ForeignKey("user.id"),
        nullable=False,
    )

    # Relations
    user: orm.Mapped["User"] = orm.relationship(
        back_populates="user_runs",
        init=False,
        repr=False,
        lazy="joined",
    )
    clip_predictions: orm.Mapped[list[ClipPrediction]] = orm.relationship(
        secondary="user_run_prediction",
        init=False,
        repr=False,
        viewonly=True,
    )
    evaluations: orm.Mapped[list[Evaluation]] = orm.relationship(
        secondary="user_run_evaluation",
        init=False,
        repr=False,
        viewonly=True,
    )

    # Secondary relations
    user_run_predictions: orm.Mapped[list["UserRunPrediction"]] = orm.relationship(
        init=False,
        repr=False,
        passive_deletes=True,
    )
    user_run_evaluations: orm.Mapped[list["UserRunEvaluation"]] = orm.relationship(
        init=False,
        repr=False,
        passive_deletes=True,
    )

    # Backrefs
    evaluation_sets: orm.Mapped[list["EvaluationSet"]] = orm.relationship(
        secondary="evaluation_set_user_run",
        back_populates="user_runs",
        init=False,
        repr=False,
        default_factory=list,
        viewonly=True,
    )
    evaluation_set_user_runs: orm.Mapped[list["EvaluationSetUserRun"]] = orm.relationship(
        back_populates="user_run",
        init=False,
        repr=False,
        default_factory=list,
    )


class UserRunPrediction(Base):
    """User Run Predictions User."""

    __tablename__ = "user_run_prediction"
    __table_args__ = (UniqueConstraint("user_run_id", "clip_prediction_id"),)

    user_run_id: orm.Mapped[int] = orm.mapped_column(
        ForeignKey("user_run.id", ondelete="CASCADE"),
        nullable=False,
        primary_key=True,
    )
    clip_prediction_id: orm.Mapped[int] = orm.mapped_column(
        ForeignKey("clip_prediction.id"),
        nullable=False,
        primary_key=True,
    )


class UserRunEvaluation(Base):
    """User Run Evaluation Model."""

    __tablename__ = "user_run_evaluation"
    __table_args__ = (UniqueConstraint("user_run_id", "evaluation_set_id"),)

    user_run_id: orm.Mapped[int] = orm.mapped_column(
        ForeignKey("user_run.id", ondelete="CASCADE"),
        nullable=False,
        primary_key=True,
    )
    evaluation_set_id: orm.Mapped[int] = orm.mapped_column(
        ForeignKey("evaluation_set.id"),
        nullable=False,
        primary_key=True,
    )
    evaluation_id: orm.Mapped[int] = orm.mapped_column(
        ForeignKey("evaluation.id", ondelete="CASCADE"),
        nullable=False,
        primary_key=True,
    )
