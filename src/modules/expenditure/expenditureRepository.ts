import { prisma } from "../../database";
import { ICreateExpenditureArgs } from "./expenditureModel";

class ExpenditureRepository {
  async create(data: ICreateExpenditureArgs) {
    return prisma.expenditure.create({ data });
  }

  async delete(id: number) {
    return prisma.expenditure.delete({ where: { id } });
  }
}

export default new ExpenditureRepository();
