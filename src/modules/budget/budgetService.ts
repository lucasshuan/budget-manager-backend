import { prisma } from "../../database";
import { CustomError } from "../../utils/error";
import { ICreateBudgetDTO, IUpdateBudgetDTO } from "./budgetModel";
import budgetRepository from "./budgetRepository";

class BudgetService {
  async listByUserId(userId: number) {
    const budgets = await budgetRepository.listByUserId(userId);
    return budgets;
  }

  async listByCustomerId(customerId: number) {
    const budgets = await budgetRepository.listByCustomerId(customerId);
    return budgets;
  }

  async findById(id: number) {
    const budget = await budgetRepository.findById(id);

    if (!budget) throw new CustomError(404, "Orçamento não encontrado");

    return budget;
  }

  async create(input: ICreateBudgetDTO) {
    const budget = await budgetRepository.create(input);
    return budget;
  }

  async update(input: IUpdateBudgetDTO) {
    const budget = await budgetRepository.update(input);
    return budget;
  }
}

export default new BudgetService();
