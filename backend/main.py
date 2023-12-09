from fastapi import FastAPI
from .routers import auth, user, orders, materials, payment, warehouse
from .database import engine
from . import models
from fastapi.middleware.cors import CORSMiddleware

models.Base.metadata.create_all(bind=engine)

app = FastAPI()

app.add_middleware(
    CORSMiddleware,
    allow_origins=["*"],
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"]
)

app.include_router(auth.router)
app.include_router(user.router)
app.include_router(orders.router)
app.include_router(materials.router)
app.include_router(payment.router)
app.include_router(warehouse.router)

@app.get("/")
def root():
    return {"message": "Lasti API"}