import { urlShortenSchema } from "../../models/urls/urls.shorten.model.js"

export function urlShotenValidation(req, res, next){
    const {url} = req.body

    const {error} =  urlShortenSchema.validate({url}, {abortEarly: false});

    if (error) {
        const errors = error.details.map((detail) => detail.message)
        return res.status(422).send(errors);

    }
    next()
}