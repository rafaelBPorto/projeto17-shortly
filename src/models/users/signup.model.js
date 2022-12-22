import Joi from "joi";

export const signupSchema = Joi.object({
    name: Joi.string()
        .trim()
        .min(3)
        .max(50)
        .required(),

    email: Joi.string()
        .email()
        .required(),

    password: Joi.string()
        .required()
        .label('password'),

    confirmPassword: Joi.any()
        .equal(Joi.ref('password'))
        .required()
        .label('Confirm password')
        .messages({ 'any.only': '{{#label}} does not match' })
});