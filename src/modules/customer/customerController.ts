import { Request, Response } from "express";
import customerService from "./customerService";
import { idJoi } from "../../utils/joi";
import { createCustomerSchema, updateCustomerSchema } from "./customerSchema";

class CustomerController {
  async listByUserId(req: Request, res: Response) {
    const customers = await customerService.listByUserId(req.user.id);
    res.status(200).json(customers);
  }

  async create(req: Request, res: Response) {
    const input = await createCustomerSchema.validateAsync(req.body);
    const customer = await customerService.create({
      userId: req.user.id,
      ...input,
    });
    res.status(200).json(customer);
  }

  async update(req: Request, res: Response) {
    const id = await idJoi.validateAsync(req.params.id);
    const input = await updateCustomerSchema.validateAsync(req.body);
    const customer = await customerService.update({ id, ...input });
    res.status(200).json(customer);
  }

  async delete(req: Request, res: Response) {
    const id = await idJoi.validateAsync(req.params.id);
    const customer = await customerService.delete(id);
    res.status(200).json(customer);
  }
}

export default new CustomerController();
