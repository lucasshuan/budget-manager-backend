import Joi from "joi";

export const createComponentSchema = Joi.object({
  name: Joi.string().required().messages({
    "string.base": "'name' deve ser uma string",
    "any.required": "'name' é obrigatório",
  }),
  description: Joi.string().optional().messages({
    "string.base": "'name' deve ser uma string",
  }),
  price: Joi.number().required().messages({
    "number.base": "'price' deve ser um número",
    "any.required": "'price' é obrigatório",
  }),
});

export const updateComponentSchema = Joi.object({
  name: Joi.string().optional().messages({
    "string.base": "'name' deve ser uma string",
  }),
  description: Joi.string().optional().messages({
    "string.base": "'name' deve ser uma string",
  }),
  price: Joi.number().optional().messages({
    "number.base": "'price' deve ser um número",
  }),
});
