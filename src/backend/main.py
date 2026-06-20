import os

from fastapi import FastAPI
from fastapi.middleware.cors import CORSMiddleware

from ai_service import get_recommendation
from display_recommendations import router as display_router

# Comma-separated list of allowed CORS origins. Override via env in deploy.
# Use "*" for demos; lock down to your frontend origin in production.
ALLOWED_ORIGINS = [o.strip() for o in os.getenv("ALLOWED_ORIGINS", "*").split(",") if o.strip()]

app = FastAPI()

app.add_middleware(
    CORSMiddleware,
    allow_origins=ALLOWED_ORIGINS,
    allow_methods=["GET", "POST"],
    allow_headers=["*"],
)

app.include_router(display_router)


@app.get("/")
def root() -> dict[str, str]:
    """Cheap healthcheck used by Render / uptime monitors."""
    return {"status": "ok", "service": "orderly-recommender"}


@app.post("/recommend")
def recommend_food(data: dict):
    """
    Legacy endpoint kept for backwards compatibility.
    New UI uses POST /display/recommendations.
    """
    answer = get_recommendation(data["message"])
    return {"recommendation": answer}