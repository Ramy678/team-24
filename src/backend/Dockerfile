FROM python:3.12-slim

WORKDIR /app

COPY src/backend/requirements.txt ./
RUN pip install --no-cache-dir -r requirements.txt

# Copy all backend source files at once (excludes are in src/backend/.dockerignore)
COPY src/backend/ ./

# Run as non-root for safety.
RUN useradd --create-home appuser && chown -R appuser /app
USER appuser

ENV PORT=8000 \
    AI_BACKEND=stub
EXPOSE 8000

CMD ["sh", "-c", "uvicorn main:app --host 0.0.0.0 --port ${PORT}"]
