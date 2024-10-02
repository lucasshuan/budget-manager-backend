import Joi from "joi";
import { idJoi } from "../../utils/joi";

export const createExpenditureSchema = Joi.object({
  budgetId: idJoi.required().messages({
    "number.base": "'budgetId' deve ser um número",
    "number.integer": "'budgetId' deve ser um número inteiro",
    "any.required": "'budgetId' é obrigatório",
  }),
  componentId: idJoi.required().messages({
    "number.base": "'componentId' deve ser um número",
    "number.integer": "'componentId' deve ser um número inteiro",
    "any.required": "'componentId' é obrigatório",
  }),
  quantity: Joi.number().required().messages({
    "number.base": "'quantity' deve ser um número",
    "number.integer": "'quantity' deve ser um número inteiro",
    "any.required": "'quantity' é obrigatório",
  }),
});
