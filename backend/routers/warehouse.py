from fastapi import HTTPException, Depends, APIRouter
from sqlalchemy.orm import Session
from typing import List
from .. import schemas, models, oauth2
from ..database import get_db

router = APIRouter(
    prefix="/warehouse",
    tags=["Warehouse"]
)

@router.get("", response_model=List[schemas.WarehouseSchema])
def get_warehouse_stock(db: Session = Depends(get_db), current_user: int = Depends(oauth2.get_current_user)):
    warehouse = db.query(models.Warehouse).all()
    return warehouse
