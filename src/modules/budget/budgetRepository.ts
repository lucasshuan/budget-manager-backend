import { prisma } from "../../database";
import { CustomError } from "../../utils/error";
import {
  BudgetStatus,
  ICreateBudgetDTO,
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

  async create({ customerId, expenditures }: ICreateBudgetDTO) {
    const budget = await prisma.$transaction(async (tx) => {
      const newBudget = await tx.budget.create({
        data: {
          status: BudgetStatus.PENDING,
          customerId,
        },
      });
      for (const expenditure of expenditures) {
        const component = await tx.component.findUnique({
          where: { id: expenditure.componentId },
        });
        if (!component) {
          throw new CustomError(404, "Componente não encontrado");
        }
        await tx.expenditure.create({
          data: {
            price: component.price,
            ...expenditure,
            budgetId: newBudget.id,
          },
        });
      }
      return newBudget;
    });
    return prisma.budget.findUnique({ where: { id: budget.id } });
  }

  async update({ id, ...data }: IUpdateBudgetArgs) {
    return prisma.budget.update({ where: { id }, data });
  }
}

export default new BudgetRepository();
