import Joi from "joi";

export const createCustomerSchema = Joi.object({
  name: Joi.string().required().messages({
    "string.base": "'name' deve ser uma string",
    "any.required": "'name' é obrigatório",
  }),
});

export const updateCustomerSchema = createCustomerSchema;
