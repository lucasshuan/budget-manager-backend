import { Request, Response } from "express";
import customerService from "./customerService";

class CustomerController {
  async listByUserId(req: Request, res: Response) {
    const userId = Number(req.params.userId);
    const customers = await customerService.listByUserId(userId);
    res.status(200).json(customers);
  }

  async create(req: Request, res: Response) {
    const input = req.body;
    const customer = await customerService.create(input);
  }

  async update(req: Request, res: Response) {}

  async delete(req: Request, res: Response) {}
}

export default new CustomerController();
