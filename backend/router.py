from fastapi import APIRouter, HTTPException, Depends
from sqlalchemy.orm import Session
from typing import List
from .models import Material, Order, Payment
from .schemas import MaterialSchema, Request, Response, RequestOrder, OrderSchema, PaymentSchema, RequestPayment
from .database import get_db

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

@router.get("/orders", response_model=List[OrderSchema])
def list_orders(db: Session = Depends(get_db)):
    orders = db.query(Order).all()
    return orders

@router.get("/orders/{order_id}", response_model=OrderSchema)
def get_order_details(order_id: int, db: Session = Depends(get_db)):
    order = db.query(Order).filter(Order.order_id == order_id).first()
    if not order:
        raise HTTPException(status_code=404, detail="Order not found")
    return order

@router.post("/payment", response_model=PaymentSchema)
def make_payment(request: Request[RequestPayment], db: Session = Depends(get_db)):
    order_id = request.parameter.order_id
    amount = request.parameter.amount

    # Check if the order exists
    order = db.query(Order).filter(Order.order_id == order_id).first()
    if not order:
        raise HTTPException(status_code=404, detail="Order not found")

    # Check if the order is not already paid
    if order.status == "paid":
        raise HTTPException(status_code=400, detail="Order is already paid")

    # Create payment
    payment = Payment(order_id=order_id, amount=amount)
    db.add(payment)
    db.commit()
    db.refresh(payment)

    # Update order status to "paid"
    order.status = "paid"
    db.commit()

    return payment

@router.get("/materials/{material_id}/availability")
def check_material_availability(material_id: int, db: Session = Depends(get_db)):
    material = db.query(Material).filter(Material.material_id == material_id).first()
    if not material:
        raise HTTPException(status_code=404, detail="Material not found")

    status = "available" if material.quantity_available > 0 else "out of stock"

    return {"material_id": material.material_id, "name": material.material_name, "quantity": material.quantity_available, "status": status}