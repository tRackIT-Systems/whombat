"""Base class for SqlAlchemy Models.

All whombat models should inherit from this class.
"""

import datetime
import uuid
from pathlib import Path

import sqlalchemy.orm as orm
import sqlalchemy.types as types
from fastapi_users_db_sqlalchemy.generics import GUID

__all__ = [
    "Base",
]


class PathType(types.TypeDecorator):
    """SqlAlchemy type for Path objects."""

    impl = types.String

    cache_ok = True

    def process_bind_param(self, value: Path, _) -> str:
        return str(value)

    def process_result_value(self, value: str, _) -> Path:
        return Path(value)


class Base(orm.MappedAsDataclass, orm.DeclarativeBase):
    """Base class for SqlAlchemy Models."""

    created_at: orm.Mapped[datetime.datetime] = orm.mapped_column(
        name="created_at",
        default_factory=datetime.datetime.utcnow,
        kw_only=True,
    )

    # Add a type annotation map to allow for custom types.
    type_annotation_map = {
        uuid.UUID: GUID,
        Path: PathType,
    }

    # This is needed to make the default values work with
    # async sqlalchemy.
    __mapper_args__ = {
        "eager_defaults": True,
    }
