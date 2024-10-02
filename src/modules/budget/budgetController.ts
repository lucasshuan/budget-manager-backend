import { Request, Response } from "express";
import { createBudgetSchema, updateBudgetSchema } from "./budgetSchema";
import budgetService from "./budgetService";
import { idJoi } from "../../utils/joi";

class BudgetController {
  async listByUserId(req: Request, res: Response) {
    const budgets = await budgetService.listByUserId(req.user.id);
    res.status(200).json(budgets);
  }

  async findById(req: Request, res: Response) {
    const id = await idJoi.validateAsync(req.params.id);
    const budgets = await budgetService.findById(id);
    res.status(200).json(budgets);
  }

  async create(req: Request, res: Response) {
    const input = await createBudgetSchema.validateAsync(req.body);
    const budget = await budgetService.create({
      userId: req.user.id,
      ...input,
    });
    res.status(201).json(budget);
  }

  async update(req: Request, res: Response) {
    const id = await idJoi.validateAsync(req.params.id);
    const input = await updateBudgetSchema.validateAsync(req.body);
    const budget = await budgetService.update({ id, ...input });
    res.status(200).json(budget);
  }

  async delete(req: Request, res: Response) {
    const id = await idJoi.validateAsync(req.params.id);
    const budget = await budgetService.delete(id);
    res.status(200).json(budget);
  }
}

export default new BudgetController();
