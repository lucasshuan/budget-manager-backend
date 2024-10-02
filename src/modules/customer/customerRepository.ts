import { prisma } from "../../database";
import { ICreateCustomerDTO, IUpdateCustomerDTO } from "./customerModel";

class CustomerRepository {
  async list() {
    return prisma.customer.findMany();
  }

  async listByUserId(userId: number) {
    return prisma.customer.findMany({ where: { userId } });
  }

  async findById(id: number) {
    return prisma.customer.findUnique({ where: { id } });
  }

  async create(data: ICreateCustomerDTO) {
    return prisma.customer.create({ data });
  }

  async update({ id, ...data }: IUpdateCustomerDTO) {
    return prisma.customer.update({
      where: { id },
      data,
    });
  }

  async delete(id: number) {
    return prisma.customer.delete({ where: { id } });
  }
}

export default new CustomerRepository();
