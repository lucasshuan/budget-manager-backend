import { prisma } from "../../database";
import { CustomError } from "../../utils/error";
import {
  BudgetStatus,
  IAcceptBudgetDTO,
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
    return prisma.budget.findUnique({
      where: { id },
      include: {
        customer: true,
        expenditures: {
          include: {
            component: true,
          },
        },
      },
    });
  }

  async create({ customerId, expenditures }: ICreateBudgetDTO) {
    return prisma.budget.create({
      data: {
        customerId,
        status: BudgetStatus.PENDING,
        expenditures: {
          createMany: {
            data: expenditures,
          },
        },
      },
    });
  }

  async accept({ id }: IAcceptBudgetDTO) {
    const budget = await prisma.$transaction(async (tx) => {
      const budget = await tx.budget.update({
        where: {
          id,
        },
        data: {
          status: BudgetStatus.ACCEPTED,
        },
        include: {
          expenditures: true,
        },
      });
      for (const expenditure of budget.expenditures) {
        const component = await tx.component.findUnique({
          where: { id: expenditure.componentId },
        });
        if (!component) {
          throw new CustomError(404, "Componente não encontrado");
        }
        await tx.expenditure.update({
          where: {
            id: expenditure.id,
          },
          data: {
            price: component.price,
          },
        });
      }
      return budget;
    });
    return budget;
  }

  async update({ id, ...data }: IUpdateBudgetArgs) {
    return prisma.budget.update({ where: { id }, data });
  }
}

export default new BudgetRepository();
