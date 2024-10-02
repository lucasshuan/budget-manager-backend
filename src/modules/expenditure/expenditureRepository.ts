import { prisma } from "../../database";
import { ICreateExpenditureArgs } from "./expenditureModel";

class ExpenditureRepository {
  async create(data: ICreateExpenditureArgs) {
    return prisma.expenditure.create({ data });
  }
}

export default new ExpenditureRepository();
