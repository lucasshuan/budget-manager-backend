import userService from "../user/userService";
import { LoginDTO, RegisterDTO } from "./authModel";
import bcrypt from "bcrypt";
import jwt from "jsonwebtoken";

class AuthService {
  async login({ email, password }: LoginDTO) {
    const user = await userService.findByEmail(email);

    if (!user) throw new Error("Usuário ou senha inválido");

    const passwordMatch = await bcrypt.compare(password, user.passwordHash);

    if (!passwordMatch) throw new Error("Usuário ou senha inválido");

    const payload = { id: user.id, email: user.email };
    const secret = process.env.JWT_SECRET ?? "";
    const token = jwt.sign(payload, secret, {
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
