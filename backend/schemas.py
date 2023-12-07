from typing import List, Optional, Generic, TypeVar
from pydantic import BaseModel, Field
from pydantic.generics import GenericModel
from . import models
from uuid import UUID

T = TypeVar('T')

class UserSchema(BaseModel):
    user_id: Optional[int] = None
    username: Optional[str] = None
    password: Optional[str] = None
    role: Optional[str] = None

    class Config:
        orm_mode = True

class MaterialSchema(BaseModel):
    material_id: Optional[int] = None
    material_name: Optional[str] = None
    quantity_available: Optional[float] = None
    price_per_unit: Optional[float] = None

    class Config:
        orm_mode = True

class OrderSchema(BaseModel):
    order_id: Optional[int] = None
    user_id: Optional[int] = None
    material_id: Optional[int] = None
    quantity_ordered: Optional[float] = None
    order_date: Optional[str] = None
    status: Optional[str] = None

    class Config:
        orm_mode = True

class PaymentSchema(BaseModel):
    payment_id: Optional[int] = None
    order_id: Optional[int] = None
    amount: Optional[float] = None
    payment_date: Optional[str] = None
    payment_status: Optional[str] = None

    class Config:
        orm_mode = True

class WarehouseSchema(BaseModel):
    warehouse_id: Optional[int] = None
    material_id: Optional[int] = None
    quantity_in_stock: Optional[float] = None

    class Config:
        orm_mode = True

class Request(GenericModel, Generic[T]):
    parameter: Optional[T] = Field(...)

class RequestUser(BaseModel):
    parameter: UserSchema = Field(...)

class RequestMaterial(BaseModel):
    parameter: MaterialSchema = Field(...)

class RequestOrder(BaseModel):
    parameter: OrderSchema = Field(...)

class RequestPayment(BaseModel):
    parameter: PaymentSchema = Field(...)

class RequestWarehouse(BaseModel):
    parameter: WarehouseSchema = Field(...)

class Response(GenericModel, Generic[T]):
    code: str
    status: str
    message: str
    result: Optional[T]

def user_model_to_schema(user: models.User) -> UserSchema:
    return UserSchema(
        user_id=user.user_id,
        username=user.username,
        password=user.password,
        role=user.role
    )

def material_model_to_schema(material: models.Material) -> MaterialSchema:
    return MaterialSchema(
        material_id=material.material_id,
        material_name=material.material_name,
        quantity_available=material.quantity_available,
        price_per_unit=material.price_per_unit
    )

def order_model_to_schema(order: models.Order) -> OrderSchema:
    return OrderSchema(
        order_id=order.order_id,
        user_id=order.user_id,
        material_id=order.material_id,
        quantity_ordered=order.quantity_ordered,
        order_date=str(order.order_date),
        status=order.status
    )

def payment_model_to_schema(payment: models.Payment) -> PaymentSchema:
    return PaymentSchema(
        payment_id=payment.payment_id,
        order_id=payment.order_id,
        amount=payment.amount,
        payment_date=str(payment.payment_date),
        payment_status=payment.payment_status
    )

def warehouse_model_to_schema(warehouse: models.Warehouse) -> WarehouseSchema:
    return WarehouseSchema(
        warehouse_id=warehouse.warehouse_id,
        material_id=warehouse.material_id,
        quantity_in_stock=warehouse.quantity_in_stock
    )