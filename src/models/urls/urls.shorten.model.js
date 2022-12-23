import Joi from "joi";

export const urlShortenSchema = Joi.object({
    url: Joi.string().trim().min(3).required()
})