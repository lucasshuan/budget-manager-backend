import { Request, Response } from "express";
import { loginSchema, registerSchema } from "./authSchema";
import userService from "../user/userService";
import authService from "./authService";

class AuthController {
  async login(req: Request, res: Response) {
    try {
      const input = await loginSchema.validateAsync(req.body);
      const user = authService.login(input);
      res.status(200).json(user);
    } catch (err: any) {
      console.log(err);
      res.json(err.message ?? err);
    }
  }

  async register(req: Request, res: Response) {
    try {
      const input = await registerSchema.validateAsync(req.body);
      const user = await userService.create(input);
      res.status(201).json(user);
    } catch (err: any) {
      console.log(err);
      res.json(err.message ?? err);
    }
  }
}

export default new AuthController();
