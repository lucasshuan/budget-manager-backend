import { prisma } from "../../database";
import { ICreateComponentArgs, IUpdateComponentArgs } from "./componentModel";

class ComponentRepository {
  async listByUserId(userId: number) {
    return prisma.component.findMany({ where: { userId } });
  }

  async findById(id: number) {
    return prisma.component.findUnique({ where: { id } });
  }

  async create(data: ICreateComponentArgs) {
    return prisma.component.create({ data });
  }

  async update({ id, ...data }: IUpdateComponentArgs) {
    return prisma.component.update({
      where: { id },
      data,
    });
  }

  async delete(id: number) {
    return prisma.component.delete({ where: { id } });
  }
}

export default new ComponentRepository();
