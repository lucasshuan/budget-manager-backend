import { Request, Response } from "express";
import { createBudgetSchema, updateBudgetSchema } from "./budgetSchema";
import budgetService from "./budgetService";

class BudgetController {
  async listByUserId(req: Request, res: Response) {
    const budgets = await budgetService.listByUserId(req.user.id);
    res.status(200).json(budgets);
  }

  async create(req: Request, res: Response) {
    const input = await createBudgetSchema.validateAsync(req.body);
    const budget = await budgetService.create(input);
    res.status(201).json(budget);
  }

  async update(req: Request, res: Response) {
    const input = await updateBudgetSchema.validateAsync(req.body);
    const budget = await budgetService.update(input);
    res.status(200).json(budget);
  }
}

export default new BudgetController();
