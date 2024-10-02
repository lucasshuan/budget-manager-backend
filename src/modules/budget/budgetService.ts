import { prisma } from "../../database";
import { CustomError } from "../../utils/error";
import customerService from "../customer/customerService";
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
    const customerBelongsToUser = await customerService.belongsToUser(
      input.customerId,
      input.userId
    );
    if (!customerBelongsToUser) throw new CustomError(404, "Cliente inválido");
    const budget = await budgetRepository.create(input);
    return budget;
  }

  async update(input: IUpdateBudgetDTO) {
    const budget = await budgetRepository.update(input);
    return budget;
  }

  async delete(id: number) {
    const budget = await budgetRepository.delete(id);
    return budget;
  }
}

export default new BudgetService();
