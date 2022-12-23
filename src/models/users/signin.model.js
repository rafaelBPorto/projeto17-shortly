import Joi from "joi";

export const singinSchema = Joi.object({
    email: Joi.string()
        .email()
        .required(),
    
    password: Joi.string()
        .required()
});