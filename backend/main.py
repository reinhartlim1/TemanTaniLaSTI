from fastapi import FastAPI
from router import router
from database import engine, Base

app = FastAPI()

app.include_router(router)

Base.metadata.create_all(bind=engine)

if __name__ == "__main__":
    import uvicorn
    uvicorn.run(app, host="127.0.0.1", port=8000)