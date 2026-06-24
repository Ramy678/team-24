from fastapi import APIRouter
from pydantic import BaseModel

from ai_service import get_recommendation_struct
from recommendation_session import create_session, mark_shown

router = APIRouter(prefix="/display", tags=["display"])

class RecommendationRequest(BaseModel):
    message: str = ""
    menu: list = []

@router.post("/recommendations")
def display_recommendations(data: RecommendationRequest):
    pick = get_recommendation_struct(data.message)
    session_id = create_session(data.menu)
    mark_shown(session_id, pick["name"])
    return {
        "session_id": session_id,
        "recommendations": [
            {
                "id": 1,
                "name": pick["name"],
                "price": pick["price"],
                "description": pick["description"],
                "ingredients": pick["ingredients"],
                "reason": pick["reason"],
            }
        ]
    }