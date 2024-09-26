import { Request, Response } from "express";
import { loginSchema, registerSchema } from "./authSchema";
import userService from "../user/userService";
import authService from "./authService";
import { errorHandler } from "../../utils/error";

class AuthController {
  async login(req: Request, res: Response) {
    const input = await loginSchema.validateAsync(req.body);
    const user = authService.login(input);
    return res.status(200).json(user);
  }

  async register(req: Request, res: Response) {
    const input = await registerSchema.validateAsync(req.body);
    const user = await userService.create(input);
    return res.status(201).json(user);
  }
}

export default new AuthController();
