import { Request, Response } from "express";
import createUnitService from "../services/units/createUnit.service";
import deleteUnitService from "../services/units/deleteUnit.service";
import listAllEntitiesService from "../services/units/listUnits.service";
import updateUnitService from "../services/units/updateUnit.service";

export class UnitsController {
  static async store(req: Request, res: Response) {
    const { street, st_number, district, voltage, cable_meter, clientId } = req.body;

    const newUnit = await createUnitService({
      street,
      st_number,
      district,
      voltage,
      cable_meter,
      clientId
    });

    return res.status(201).json(newUnit);
  }

  static async index(req: Request, res: Response) {
    const units = await listAllEntitiesService();

    return res.status(200).json(units);
  }

  static async update(req: Request, res: Response) {
    const { unit_id } = req.params;
    const { street, st_number, district, voltage, cable_meter } = req.body;

    const updateUnit = await updateUnitService(unit_id, {
      street,
      st_number,
      district,
      voltage,
      cable_meter,
    });
    res.status(200).json(updateUnit);
  }

  static async delete(req: Request, res: Response) {
    const { unit_id } = req.params;

    const deletedUnit = await deleteUnitService(unit_id);

    return res.status(204)
  }
}
