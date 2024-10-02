import { Expenditure } from "@prisma/client";

export interface ICreateExpenditureDTO {
  quantity: number;
  componentId: number;
  budgetId: number;
}

export type ICreateExpenditureArgs = Pick<
  Expenditure,
  "componentId" | "budgetId" | "price" | "quantity"
>;
