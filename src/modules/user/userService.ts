import { CreateUserDTO } from "./userModel";
import userRepository from "./userRepository";

class UserService {
  async findById(id: number) {
    const user = await userRepository.findById(id);
    if (!user) throw new Error("Usuário inexistente");
    return user;
  }

  async findByEmail(email: string) {
    const user = await userRepository.findByEmail(email);
    if (!user) throw new Error("Usuário não encontrado");
    return user;
  }

  async create(input: CreateUserDTO) {
    const user = await userRepository.create(input);
    return user;
  }
}

export default new UserService();
