from fastapi import  HTTPException, Depends, APIRouter
from sqlalchemy.orm import Session
from .. import schemas, models, oauth2
from ..database import get_db

router = APIRouter(
    prefix="/payment",
    tags=["Payment"]
)


@router.post("/{order_id}", response_model=schemas.PaymentSchema)
def make_payment(order_id: int, db: Session = Depends(get_db), current_user: int = Depends(oauth2.get_current_user)):

    # Check if the order exists
    order = db.query(models.Order).filter(
        models.Order.order_id == order_id).first()
    if not order:
        raise HTTPException(status_code=404, detail="Order not found")

    # Check if the order is not already paid
    if order.status == "Paid":
        raise HTTPException(status_code=400, detail="Order is already paid")
    price_per_unit = db.query(models.Material).filter(
        models.Material.material_id == order.material_id).first().price_per_unit
    # Create payment
    payment = models.Payment(
        order_id=order_id, amount=order.quantity_ordered * price_per_unit)
    payment.payment_status = "Paid"
    db.add(payment)
    db.commit()
    db.refresh(payment)

    # Update order status to "paid"
    order.status = "Paid"
    db.commit()

    warehouse = db.query(models.Warehouse).filter(order.material_id == models.Warehouse.material_id).first()
    if warehouse:
        warehouse.quantity_in_stock += order.quantity_ordered
    else:
        warehouse = models.Warehouse(material_id=order.material_id, quantity_in_stock=order.quantity_ordered)
        db.add(warehouse)
    db.commit()

    return payment
