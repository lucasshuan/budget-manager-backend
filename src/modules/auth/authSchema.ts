import Joi from "joi";

export const loginSchema = Joi.object({
  email: Joi.string().email().required().messages({
    "string.email": "Campo 'email' não é um email válido",
    "any.required": "Campo 'email' é obrigatório",
  }),
  password: Joi.string().min(8).max(20).required().messages({
    "string.min": "Campo 'password' deve ter pelo menos 8 caracteres",
    "string.max": "Campo 'password' deve ter no máximo 20 caracteres",
    "any.required": "Campo 'password' é obrigatório",
  }),
});

export const registerSchema = loginSchema;
