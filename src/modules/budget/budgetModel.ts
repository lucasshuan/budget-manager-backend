import { Budget } from "@prisma/client";

export enum BudgetStatus {
  PENDING = "Pendente",
  ACCEPTED = "Aceito",
  REJECTED = "Rejeitado",
  CANCELED = "Cancelado",
  FINISHED = "Finalizado",
}

interface IBudgetExpenditure {
  quantity: number;
  componentId: number;
}

export interface ICreateBudgetDTO {
  customerId: number;
  expenditures: IBudgetExpenditure[];
}

export interface IUpdateBudgetDTO {
  id: number;
  status: BudgetStatus;
}

export type IUpdateBudgetArgs = Pick<Budget, "id" | "status">;
