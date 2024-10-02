export interface ICreateExpenditureDTO {
  budgetId: number;
  componentId: number;
  quantity: number;
}

export type ICreateExpenditureArgs = ICreateExpenditureDTO;
