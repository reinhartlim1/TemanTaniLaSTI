from sqlalchemy import Column, Integer, String, ForeignKey, Date, Float
from sqlalchemy.orm import relationship
from .database import Base

class User(Base):
    __tablename__ = "user"

    user_id = Column(Integer, primary_key=True, index=True)
    email = Column(String, unique=True, index=True)
    password = Column(String)
    role = Column(String)

class Material(Base):
    __tablename__ = "material"

    material_id = Column(Integer, primary_key=True, index=True)
    material_name = Column(String, unique=True, index=True)
    quantity_available = Column(Float)
    price_per_unit = Column(Float)

class Order(Base):
    __tablename__ = "order"

    order_id = Column(Integer, primary_key=True, index=True)
    user_id = Column(Integer, ForeignKey('user.user_id'))
    material_id = Column(Integer, ForeignKey('material.material_id'))
    quantity_ordered = Column(Float)
    order_date = Column(Date)
    status = Column(String)

    user = relationship("User", back_populates="orders")
    material = relationship("Material", back_populates="orders")

class Payment(Base):
    __tablename__ = "payment"

    payment_id = Column(Integer, primary_key=True, index=True)
    order_id = Column(Integer, ForeignKey('order.order_id'))
    amount = Column(Float)
    payment_date = Column(Date)
    payment_status = Column(String)

    order = relationship("Order", back_populates="payment")

class Warehouse(Base):
    __tablename__ = "warehouse"

    warehouse_id = Column(Integer, primary_key=True, index=True)
    material_id = Column(Integer, ForeignKey('material.material_id'))
    quantity_in_stock = Column(Float)

    material = relationship("Material", back_populates="warehouse")

# Menyambungkan relasi antar tabel
User.orders = relationship("Order", back_populates="user")
Material.orders = relationship("Order", back_populates="material")
Order.payment = relationship("Payment", back_populates="order")
Material.warehouse = relationship("Warehouse", back_populates="material")