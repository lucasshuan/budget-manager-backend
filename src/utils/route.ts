import { Request, RequestHandler, Response } from "express";
import { CustomError } from "./error";

type RouterHandler = (req: Request, res: Response) => Promise<any>;

export function Route(handler: RouterHandler): RequestHandler {
  return async (req: Request, res: Response) => {
    try {
      await handler(req, res);
    } catch (err) {
      console.log(err);
      if (err instanceof CustomError) {
        res.status(err.status).json({ message: err.message });
        return;
      }
      res.status(500).json(err);
    }
  };
}
