import { CreateUserDTO } from "./userModel";
import userRepository from "./userRepository";

class UserService {
  async findById(id: number) {
    const user = await userRepository.findById(id);
    return user;
  }

  async findByEmail(email: string) {
    const user = await userRepository.findByEmail(email);
    return user;
  }

  async create(input: CreateUserDTO) {
    const user = await userRepository.create(input);
    return user;
  }
}

export default new UserService();
