import Joi from "joi";

export const createCustomerSchema = Joi.object({
  name: Joi.string().required().messages({
    "string.base": "'name' deve ser uma string",
    "any.required": "'name' é obrigatório",
  }),
  userId: Joi.number().integer().required().messages({
    "number.base": "'userId' deve ser um número",
    "number.integer": "'userId' deve ser um número inteiro",
    "any.required": "'userId' é obrigatório",
  }),
});
