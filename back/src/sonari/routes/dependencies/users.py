"""User dependencies."""

from typing import Annotated, AsyncGenerator

from fastapi import Depends

from sonari import models
from sonari.routes.dependencies.session import Session
from sonari.system.users import UserDatabase, UserManager

__all__ = [
    "get_user_manager",
    "get_user_db",
]


async def get_user_db(session: Session) -> AsyncGenerator[UserDatabase, None]:
    """Get the user database.""" ""
    yield UserDatabase(session, models.User)


async def get_user_manager(
    user_database: Annotated[UserDatabase, Depends(get_user_db)],
) -> AsyncGenerator[UserManager, None]:
    """Get a UserManager context."""
    yield UserManager(user_database)
