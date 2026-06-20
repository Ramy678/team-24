# Minimal Dockerfile for the upload-menu-backend service.
# Build context must be the repository root (Render defaults to .), so we
# COPY files using their full repo-relative paths.
FROM python:3.12-slim

WORKDIR /app

# Install deps first so this layer is cached when only source changes.
COPY src/upload-menu-backend/requirements.txt ./
RUN pip install --no-cache-dir -r requirements.txt

# Source.
COPY src/upload-menu-backend/main.py ./

# Run as non-root for safety.
RUN useradd --create-home appuser && chown -R appuser /app
USER appuser

# Render expects $PORT; default to 8000 for local docker runs.
ENV PORT=8000
EXPOSE 8000

CMD ["sh", "-c", "uvicorn main:app --host 0.0.0.0 --port ${PORT}"]