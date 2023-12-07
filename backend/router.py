from fastapi import APIRouter, HTTPException, Depends
from sqlalchemy.orm import Session
from typing import List
from models import Material, Order
from schemas import MaterialSchema, Request, Response, RequestOrder, OrderSchema
from database import get_db

router = APIRouter()

@router.get("/materials", response_model=List[MaterialSchema])
def list_materials(db: Session = Depends(get_db)):
    materials = db.query(Material).all()
    return materials

@router.post("/orders", response_model=OrderSchema)
def place_order(request: Request[RequestOrder], db: Session = Depends(get_db)):
    material_id = request.parameter.material_id
    quantity = request.parameter.quantity

    material = db.query(Material).filter(Material.material_id == material_id).first()
    if not material:
        raise HTTPException(status_code=404, detail="Material not found")

    if material.quantity_available < quantity:
        raise HTTPException(status_code=400, detail="Insufficient quantity available")

    order = Order(material_id=material_id, quantity_ordered=quantity)
    db.add(order)
    db.commit()
    db.refresh(order)

    material.quantity_available -= quantity
    db.commit()

    return order