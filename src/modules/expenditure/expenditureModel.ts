export interface ICreateExpenditureDTO {
  budgetId: number;
  componentId: number;
  price: number;
  quantity: number;
}

export type ICreateExpenditureArgs = ICreateExpenditureDTO;
