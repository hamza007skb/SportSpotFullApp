from fastapi import FastAPI

from Routers import auth_router

app = FastAPI()
app.include_router(auth_router.router)
