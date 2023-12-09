from typing import Optional
from pydantic import BaseModel, EmailStr

class UserSchema(BaseModel):
    user_id: Optional[int] = None
    username: Optional[str] = None
    password: Optional[str] = None
    role: Optional[str] = None

    class Config:
        from_attributes = True

class MaterialSchema(BaseModel):
    material_id: Optional[int] = None
    material_name: Optional[str] = None
    quantity_available: Optional[float] = None
    price_per_unit: Optional[float] = None

    class Config:
        from_attributes = True

class OrderSchema(BaseModel):
    order_id: Optional[int] = None
    user_id: Optional[int] = None
    material_id: Optional[int] = None
    quantity_ordered: Optional[float] = None
    order_date: Optional[str] = None
    status: Optional[str] = None

    class Config:
        from_attributes = True

class PaymentSchema(BaseModel):
    payment_id: Optional[int] = None
    order_id: Optional[int] = None
    amount: Optional[float] = None
    payment_date: Optional[str] = None
    payment_status: Optional[str] = None

    class Config:
        from_attributes = True

class WarehouseSchema(BaseModel):
    warehouse_id: Optional[int] = None
    material_id: Optional[int] = None
    quantity_in_stock: Optional[float] = None

    class Config:
        from_attributes = True

class Token(BaseModel):
    access_token: str
    token_type: str

class TokenData(BaseModel):
    email: Optional[str] = None

class UserOut(BaseModel):
    user_id: int
    email: EmailStr

class UserCreate(BaseModel):
    email: EmailStr
    password: str

    class Config():
        from_attributes = True

class UserLogin(BaseModel):
    email: EmailStr
    password: str

class OrderCreate(BaseModel):
    material_id: int
    quantity_ordered: float

    class Config():
        from_attributes = True