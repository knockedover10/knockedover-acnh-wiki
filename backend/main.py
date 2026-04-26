import json
import sqlite3
from pathlib import Path
from fastapi import FastAPI
from fastapi.middleware.cors import CORSMiddleware
from fastapi.staticfiles import StaticFiles
from pydantic import BaseModel

# ── Config ──────────────────────────────────────────────────
DB_PATH = Path(__file__).parent / "critters.db"
DOCS_PATH = Path(__file__).parent.parent / "docs"

# ── Database ─────────────────────────────────────────────────
def get_db():
    conn = sqlite3.connect(DB_PATH)
    conn.row_factory = sqlite3.Row
    return conn

def init_db():
    with get_db() as conn:
        conn.execute("""
            CREATE TABLE IF NOT EXISTS progress (
                key TEXT PRIMARY KEY,
                caught INTEGER DEFAULT 0,
                donated INTEGER DEFAULT 0
            )
        """)
        conn.commit()

init_db()

# ── App ───────────────────────────────────────────────────────
app = FastAPI()

app.add_middleware(
    CORSMiddleware,
    allow_origins=["*"],
    allow_methods=["*"],
    allow_headers=["*"],
)

# ── Models ────────────────────────────────────────────────────
class UpdateRequest(BaseModel):
    key: str        # e.g. "fish__Sea Bass"
    field: str      # "caught" or "donated"
    value: bool

# ── API Routes ────────────────────────────────────────────────

@app.get("/api/progress")
def get_progress():
    with get_db() as conn:
        rows = conn.execute("SELECT key, caught, donated FROM progress").fetchall()
    return {row["key"]: {"caught": bool(row["caught"]), "donated": bool(row["donated"])} for row in rows}

@app.post("/api/progress")
def update_progress(body: UpdateRequest):
    with get_db() as conn:
        conn.execute(
            "INSERT INTO progress (key, caught, donated) VALUES (?, 0, 0) ON CONFLICT(key) DO NOTHING",
            (body.key,)
        )
        field = "caught" if body.field == "caught" else "donated"
        conn.execute(
            f"UPDATE progress SET {field} = ? WHERE key = ?",
            (1 if body.value else 0, body.key)
        )
        conn.commit()
    return {"ok": True}

# ── Serve static docs/ folder ─────────────────────────────────
app.mount("/", StaticFiles(directory=str(DOCS_PATH), html=True), name="static")
