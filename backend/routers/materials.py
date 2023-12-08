from fastapi import Response, status, HTTPException, Depends, APIRouter
from sqlalchemy.orm import Session
from typing import List
from .. import schemas, models, oauth2
from ..database import get_db

router = APIRouter(
    prefix="/materials",
    tags=["Materials"]
)


@router.get("", response_model=List[schemas.MaterialSchema])
def list_materials(db: Session = Depends(get_db)):
    materials = db.query(models.Material).all()
    return materials


@router.get("/{material_id}/availability")
def check_material_availability(material_id: int, db: Session = Depends(get_db)):
    material = db.query(models.Material).filter(
        models.Material.material_id == material_id).first()
    if not material:
        raise HTTPException(status_code=404, detail="Material not found")

    status = "available" if material.quantity_available > 0 else "out of stock"

    return {"material_id": material.material_id, "name": material.material_name, "quantity": material.quantity_available, "status": status}
