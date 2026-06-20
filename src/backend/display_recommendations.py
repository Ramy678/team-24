from fastapi import APIRouter
from pydantic import BaseModel

from ai_service import get_recommendation_struct

router = APIRouter(prefix="/display", tags=["display"])


class RecommendationRequest(BaseModel):
    message: str = ""


@router.post("/recommendations")
def display_recommendations(data: RecommendationRequest):
    """
    Return a single recommendation formatted for the frontend card UI.

    Frontend expects:
        { recommendations: [{ id, name, price, description, ingredients, reason }] }
    """
    pick = get_recommendation_struct(data.message)
    return {
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