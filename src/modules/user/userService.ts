import { CustomError } from "../../utils/error";
import { CreateUserDTO } from "./userModel";
import userRepository from "./userRepository";
import bcrypt from "bcrypt";

class UserService {
  async findById(id: number) {
    const user = await userRepository.findById(id);
    if (!user) throw new CustomError(404, "Usuário não encontrado");
    return user;
  }

  async findByEmail(email: string) {
    const user = await userRepository.findByEmail(email);
    if (!user) throw new CustomError(404, "Usuário não encontrado");
    return user;
  }

  async create({ password, email }: CreateUserDTO) {
    const passwordHash = await bcrypt.hash(password, 10);
    const user = await userRepository.create({ passwordHash, email });
    return user;
  }
}

export default new UserService();
