import { Request, Response } from "express";
import componentService from "./componentService";
import { createComponentSchema } from "./componentSchema";
import { idJoi } from "../../utils/joi";

class ComponentController {
  async listByUserId(req: Request, res: Response) {
    const components = await componentService.listByUserId(req.user.id);
    res.status(200).json(components);
  }

  async create(req: Request, res: Response) {
    const input = await createComponentSchema.validateAsync(req.body);
    const component = await componentService.create(input);
    res.status(201).json(component);
  }

  async update(req: Request, res: Response) {
    const id = await idJoi.validateAsync(req.params.id);
    const input = await createComponentSchema.validateAsync(req.body);
    const component = await componentService.update({ id, ...input });
    res.status(200).json(component);
  }

  async delete(req: Request, res: Response) {
    const id = await idJoi.validateAsync(req.params.id);
    const component = await componentService.delete(id);
    res.status(200).json(component);
  }
}

export default new ComponentController();
