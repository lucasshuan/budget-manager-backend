import { CustomError } from "../../utils/error";
import { BudgetStatus } from "../budget/budgetModel";
import budgetRepository from "../budget/budgetRepository";
import { ICreateExpenditureDTO } from "./expenditureModel";
import expenditureRepository from "./expenditureRepository";

class ExpenditureService {
  async create(input: ICreateExpenditureDTO) {
    const budget = await budgetRepository.findById(input.budgetId);

    if (!budget) {
      throw new CustomError(404, "Orçamento não encontrado");
    }
    if (budget.status !== BudgetStatus.PENDING) {
      throw new CustomError(400, "Orçamento não está pendente");
    }

    const expenditure = await expenditureRepository.create(input);
    return expenditure;
  }

  async delete(id: number) {
    const expenditure = await expenditureRepository.findById(id);

    if (!expenditure) {
      throw new CustomError(404, "Despesa não encontrada");
    }
    if (expenditure.budget.status !== BudgetStatus.PENDING) {
      throw new CustomError(400, "Orçamento não está pendente");
    }

    await expenditureRepository.delete(id);

    return expenditure;
  }
}

export default new ExpenditureService();
