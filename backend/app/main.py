from fastapi import FastAPI

app = FastAPI(title="fastapi-vite-template")


@app.get("/api/health")
def health() -> dict[str, str]:
    return {"status": "ok"}
