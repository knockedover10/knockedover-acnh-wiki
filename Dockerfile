FROM python:3.11-slim

WORKDIR /app

# Install dependencies
COPY backend/requirements.txt ./backend/requirements.txt
RUN pip install --no-cache-dir -r backend/requirements.txt

# Copy all project files
COPY . .

# Expose port
EXPOSE 8080

# Start FastAPI serving docs/ as static site
CMD uvicorn backend.main:app --host 0.0.0.0 --port ${PORT:-8080}
