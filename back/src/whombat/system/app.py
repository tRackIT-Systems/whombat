"""Create the FastAPI application."""
import functools
from contextlib import asynccontextmanager

from fastapi import FastAPI
from fastapi.middleware.cors import CORSMiddleware
from fastapi.responses import JSONResponse
from fastapi.staticfiles import StaticFiles

from whombat import exceptions
from whombat.database.init import init_database
from whombat.plugins import add_plugin_pages, add_plugin_routes, load_plugins
from whombat.routes import main_router
from whombat.settings import Settings
from whombat.system.boot import print_welcome_message


@asynccontextmanager
async def lifespan(settings: Settings, _: FastAPI):
    """Context manager to run startup and shutdown events."""
    print_welcome_message()
    print("Please wait while the database is initialized...")
    await init_database(settings)
    print("Whombat is ready to go!")
    print("Press Ctrl+C to exit.")
    yield


def create_app(settings: Settings) -> FastAPI:
    app = FastAPI(lifespan=functools.partial(lifespan, settings))

    app.add_middleware(
        CORSMiddleware,
        allow_origins=settings.cors_origins,
        allow_credentials=True,
        allow_methods=["*"],
        allow_headers=["*"],
    )

    # Add default routes.
    app.include_router(main_router)

    # Load plugins.
    for name, plugin in load_plugins():
        add_plugin_routes(app, name, plugin)
        add_plugin_pages(app, name, plugin)

    app.mount(
        "/docs/",
        StaticFiles(directory="site", html=True),
        name="docs",
    )

    # NOTE: It is important that the static files are mounted after the
    # plugin routes, otherwise the plugin routes will not be found.
    app.mount(
        "/",
        StaticFiles(packages=["whombat"], html=True),
        name="static",
    )

    @app.exception_handler(exceptions.NotFoundError)
    async def not_found_error_handler(_, exc: exceptions.NotFoundError):
        return JSONResponse(
            status_code=404,
            content={"message": str(exc)},
        )

    @app.exception_handler(exceptions.DuplicateObjectError)
    async def duplicate_object_error_handled(
        _, exc: exceptions.DuplicateObjectError
    ):
        return JSONResponse(
            status_code=409,
            content={"message": str(exc)},
        )

    return app