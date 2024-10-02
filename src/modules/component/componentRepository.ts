import { prisma } from "../../database";

class ComponentRepository {
  async listByUserId(userId: number) {
    return prisma.component.findMany({ where: { userId } });
  }

  async findById(id: number) {
    return prisma.component.findUnique({ where: { id } });
  }

  async create(data: any) {
    return prisma.component.create({ data });
  }

  async update({ id, ...data }: any) {
    return prisma.component.update({ where: { id }, data });
  }

  async delete(id: number) {
    return prisma.component.delete({ where: { id } });
  }
}

export default new ComponentRepository();
