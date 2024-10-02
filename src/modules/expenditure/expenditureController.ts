import { Request, Response } from "express";
import expenditureService from "./expenditureService";
import { createExpenditureSchema } from "./expenditureSchema";
import { idJoi } from "../../utils/joi";

class ExpenditureController {
  async create(req: Request, res: Response) {
    const input = await createExpenditureSchema.validateAsync(req.body);
    const expenditure = await expenditureService.create(input);
    res.status(201).json(expenditure);
  }

  async delete(req: Request, res: Response) {
    const id = await idJoi.validateAsync(req.params.id);
    const expenditure = await expenditureService.delete(id);
    res.status(200).json(expenditure);
  }
}

export default new ExpenditureController();
