"""Model Run Model."""

from typing import TYPE_CHECKING
from uuid import UUID, uuid4

import sqlalchemy.orm as orm
from sqlalchemy import ForeignKey, UniqueConstraint

from whombat.models.base import Base
from whombat.models.clip_prediction import ClipPrediction
from whombat.models.evaluation import Evaluation

if TYPE_CHECKING:
    from whombat.models.evaluation_set import (
        EvaluationSet,
        EvaluationSetModelRun,
    )

__all__ = [
    "ModelRun",
    "ModelRunPrediction",
    "ModelRunEvaluation",
]


class ModelRun(Base):
    """Model Run Model.

    Attributes
    ----------
    id
        The database id of the model run.
    uuid
        The uuid of the model run.
    name
        The name of the model used to generate the predictions.
    version
        The version of the model used to generate the predictions.
    description
        A description of the model.
    clip_predictions
        The predictions generated by the model.
    created_on
        The date and time the model run was created.

    Parameters
    ----------
    name : str
        The name of the model used to generate the predictions.
    version : str
        The version of the model used to generate the predictions.
    description : str
        A description of the model.
    uuid : UUID, optional
        The uuid of the model run.
    """

    __tablename__ = "model_run"
    __table_args__ = (UniqueConstraint("name", "version"),)

    id: orm.Mapped[int] = orm.mapped_column(primary_key=True, init=False)
    uuid: orm.Mapped[UUID] = orm.mapped_column(
        nullable=False,
        unique=True,
        default_factory=uuid4,
        kw_only=True,
    )
    name: orm.Mapped[str] = orm.mapped_column(nullable=False)
    version: orm.Mapped[str] = orm.mapped_column(nullable=False)
    description: orm.Mapped[str] = orm.mapped_column(nullable=False)

    # Relations
    clip_predictions: orm.Mapped[list[ClipPrediction]] = orm.relationship(
        secondary="model_run_prediction",
        init=False,
        repr=False,
        viewonly=True,
        lazy="selectin",
    )
    evaluations: orm.Mapped[list[Evaluation]] = orm.relationship(
        secondary="model_run_evaluation",
        init=False,
        repr=False,
        viewonly=True,
        lazy="selectin",
    )

    # Secondary relations
    model_run_predictions: orm.Mapped[list["ModelRunPrediction"]] = orm.relationship(
        init=False,
        repr=False,
        passive_deletes=True,
    )
    model_run_evaluations: orm.Mapped[list["ModelRunEvaluation"]] = orm.relationship(
        init=False,
        repr=False,
        passive_deletes=True,
    )

    # Backrefs
    evaluation_sets: orm.Mapped[list["EvaluationSet"]] = orm.relationship(
        secondary="evaluation_set_model_run",
        back_populates="model_runs",
        init=False,
        repr=False,
        default_factory=list,
        viewonly=True,
    )
    evaluation_set_model_runs: orm.Mapped[list["EvaluationSetModelRun"]] = orm.relationship(
        back_populates="model_run",
        passive_deletes=True,
        init=False,
        repr=False,
        default_factory=list,
    )


class ModelRunPrediction(Base):
    """Model Run Predictions Model."""

    __tablename__ = "model_run_prediction"
    __table_args__ = (UniqueConstraint("model_run_id", "clip_prediction_id"),)

    model_run_id: orm.Mapped[int] = orm.mapped_column(
        ForeignKey("model_run.id", ondelete="CASCADE"),
        nullable=False,
        primary_key=True,
    )
    clip_prediction_id: orm.Mapped[int] = orm.mapped_column(
        ForeignKey("clip_prediction.id"),
        nullable=False,
        primary_key=True,
    )


class ModelRunEvaluation(Base):
    """Model Run Evaluation Model."""

    __tablename__ = "model_run_evaluation"
    __table_args__ = (
        UniqueConstraint(
            "model_run_id",
            "evaluation_set_id",
        ),
    )

    model_run_id: orm.Mapped[int] = orm.mapped_column(
        ForeignKey("model_run.id", ondelete="CASCADE"),
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
