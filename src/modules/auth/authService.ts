import { CustomError } from "../../http/error";
import userService from "../user/userService";
import { LoginDTO, RegisterDTO } from "./authModel";
import bcrypt from "bcrypt";
import jwt from "jsonwebtoken";

class AuthService {
  async login({ email, password }: LoginDTO) {
    const user = await userService.findByEmail(email);

    const passwordMatch = await bcrypt.compare(password, user.passwordHash);
    if (!passwordMatch) throw new CustomError(401, "Usuário ou senha inválido");

    const payload = { id: user.id, email: user.email };
    const token = jwt.sign(payload, String(process.env.JWT_SECRET), {
      expiresIn: "1d",
    });

    return { user, token };
  }

  async register({ email, password }: RegisterDTO) {
    const passwordHash = await bcrypt.hash(password, 10);

    const user = await userService.create({
      email,
      passwordHash,
    });

    return user;
  }
}

export default new AuthService();
