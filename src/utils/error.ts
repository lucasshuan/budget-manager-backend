import { Response } from "express";

export class CustomError {
  public readonly message: string;
  public readonly status: number;
  constructor(message: string, status: number) {
    this.message = message;
    this.status = status;
  }
}

export function errorHandler(err: any, res: Response) {}
