from fastapi import Response, status, HTTPException, Depends, APIRouter
from sqlalchemy.orm import Session
from typing import List
from .. import schemas, models, oauth2
from ..database import get_db

router = APIRouter(
    prefix="/orders",
    tags=["Orders"]
)


@router.post("", status_code=status.HTTP_201_CREATED, response_model=schemas.OrderSchema)
def place_order(request: schemas.OrderCreate, db: Session = Depends(get_db), current_user: int = Depends(oauth2.get_current_user)):
    material = db.query(models.Material).filter(
        models.Material.material_id == request.material_id).first()
    if not material:
        raise HTTPException(status_code=404, detail="Material not found")
    if material.quantity_available < request.quantity:
        raise HTTPException(
            status_code=400, detail="Insufficient quantity available")

    order = models.Order(
        user_id=current_user.user_id,
        material_id=request.material_id,
        quantity_ordered=request.quantity,
        status="Pick Up"
    )
    db.add(order)
    db.commit()
    db.refresh(order)

    material.quantity_available -= request.quantity
    db.commit()
    db.refresh(material)

    return order


@router.get("", response_model=List[schemas.OrderSchema])
def list_orders(db: Session = Depends(get_db), current_user: int = Depends(oauth2.get_current_user)):
    orders = db.query(models.Order).all()
    return orders


@router.get("/{order_id}", response_model=schemas.OrderSchema)
def get_order_details(order_id: int, db: Session = Depends(get_db), current_user: int = Depends(oauth2.get_current_user)):
    order = db.query(models.Order).filter(
        models.Order.order_id == order_id).first()
    if not order:
        raise HTTPException(status_code=404, detail="Order not found")
    return order
