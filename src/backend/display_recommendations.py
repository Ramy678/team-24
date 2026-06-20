from fastapi import APIRouter
from pydantic import BaseModel
from ai_service import get_recommendation

router = APIRouter(
    prefix="/display",
    tags=["display"]
)

class RecommendationRequest(BaseModel):
    message: str

@router.post("/recommendations")
def display_recommendations(data: RecommendationRequest):
    recommendation_text = get_recommendation(data.message)
    return {
        "recommendations": [
            {
                "id": 1,
                "name": recommendation_text,
                "price": None,
                "description": "",
                "ingredients": [],
                "reason": "Recommended by AI"
            }
        ]
    }