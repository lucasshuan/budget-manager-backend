import Joi from "joi";
import { idJoi } from "../../utils/joi";
import { BudgetStatus } from "./budgetModel";

export const createBudgetSchema = Joi.object({
  customerId: idJoi.required().messages({
    "number.base": "'name' deve ser um número",
    "number.integer": "'name' deve ser um número inteiro",
    "any.required": "'name' é obrigatório",
  }),
});

export const updateBudgetSchema = Joi.object({
  status: Joi.string()
    .valid(...Object.values(BudgetStatus))
    .default(BudgetStatus.PENDING)
    .required()
    .messages({
      "string.base": "'status' deve ser uma string",
      "string.empty": "'status' não pode ser vazio",
      "any.only":
        "'status' deve ser um dos seguintes valores: 'Pendente', 'Aceito', 'Rejeitado', 'Cancelado', 'Finalizado'",
      "any.required": "'status' é obrigatório",
    }),
});
