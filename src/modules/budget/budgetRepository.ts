import { prisma } from "../../database";
import {
  BudgetStatus,
  ICreateBudgetArgs,
  IUpdateBudgetArgs,
} from "./budgetModel";

class BudgetRepository {
  async listByUserId(userId: number) {
    return prisma.budget.findMany({
      where: {
        customer: {
          userId,
        },
      },
    });
  }

  async listByCustomerId(customerId: number) {
    return prisma.budget.findMany({
      where: {
        customerId,
      },
    });
  }

  async findById(id: number) {
    return prisma.budget.findUnique({ where: { id } });
  }

  async create(data: ICreateBudgetArgs) {
    return prisma.budget.create({
      data: {
        status: BudgetStatus.PENDING,
        ...data,
      },
    });
  }

  async update({ id, ...data }: IUpdateBudgetArgs) {
    return prisma.budget.update({ where: { id }, data });
  }
}

export default new BudgetRepository();
