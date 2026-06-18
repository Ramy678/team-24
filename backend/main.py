from fastapi import FastAPI
from ai_service import get_recommendation

app = FastAPI()


@app.post("/recommend")
def recommend_food(data: dict):

    answer = get_recommendation(
        data["message"]
    )

    return {
        "recommendation": answer
    }