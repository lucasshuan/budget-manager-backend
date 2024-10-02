import { prisma } from "../../database";
import { CustomError } from "../../utils/error";
import componentRepository from "./componentRepository";

class ComponentService {
  async listByUserId(userId: number) {
    const component = await componentRepository.listByUserId(userId);
    return component;
  }

  async findById(id: number) {
    const component = await componentRepository.findById(id);
    if (!component)
      throw new CustomError(404, "Componente de id " + id + " não encontrado");
    return component;
  }

  async create(data: any) {
    const component = await componentRepository.create({ data });
    return component;
  }

  async update(input: any) {
    const component = await componentRepository.update(input);
    return component;
  }

  async delete(id: number) {
    const component = await componentRepository.delete(id);
    return component;
  }
}

export default new ComponentService();
