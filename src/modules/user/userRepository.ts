import { prisma } from "../../database";
import { CreateUserArgs, CreateUserDTO } from "./userModel";

class UserRepository {
  private selectPublicUser = {
    id: true,
    email: true,
    createdAt: true,
  };

  private selectPrivateUser = {
    ...this.selectPublicUser,
    passwordHash: true,
  };

  async findById(id: number) {
    return prisma.user.findUnique({
      where: { id },
      select: this.selectPublicUser,
    });
  }

  async findByEmail(email: string) {
    return prisma.user.findUnique({
      where: { email },
      select: this.selectPrivateUser,
    });
  }

  async create(data: CreateUserArgs) {
    return prisma.user.create({
      data,
      select: this.selectPublicUser,
    });
  }
}

export default new UserRepository();
