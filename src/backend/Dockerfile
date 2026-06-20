# Minimal Dockerfile for the recommender service.
# Build context must be the repository root (Render defaults to .), so we
# COPY files using their full repo-relative paths.
#
# Note: this image is enough for the AI_BACKEND=stub and AI_BACKEND=openai
# paths. AI_BACKEND=lmstudio talks to a model on your laptop over HTTP, so
# it's only useful when running locally, not from a container.
FROM python:3.12-slim

WORKDIR /app

# Install deps first so this layer is cached when only source changes.
COPY src/backend/requirements.txt ./
RUN pip install --no-cache-dir -r requirements.txt

# Source files needed at runtime.
COPY src/backend/main.py ./
COPY src/backend/ai_service.py ./
COPY src/backend/display_recommendations.py ./

# Run as non-root for safety.
RUN useradd --create-home appuser && chown -R appuser /app
USER appuser

# Render/Railway set $PORT; default 8000 for local `docker run`.
ENV PORT=8000 \
    AI_BACKEND=stub
EXPOSE 8000

CMD ["sh", "-c", "uvicorn main:app --host 0.0.0.0 --port ${PORT}"]