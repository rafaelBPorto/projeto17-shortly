import { findUser } from "../../repository/users/signgin.repositories.js";
import bcrypt from "bcrypt";
import { singinSchema } from "../../models/users/signin.Schema.js";


export default async function signinValidation(req, res, next) {
    const user = req.body;

    const { error } = singinSchema.validate(user, { abortEarly: false });

    if (error) {
        const errors = error.details.map((detail) => detail.message)
        return res.status(422).send(errors);
    }

    try {
        
        const userDB =  await findUser(user)

        if(!userDB?.password){
            return res.sendStatus(401)
        }
        
        const checkPassword = bcrypt.compareSync(user.password, userDB.password)
        
        if (!checkPassword) {
            return res.sendStatus(401)
        }
        
        res.locals.userId = userDB.id;
        
    } catch (err) {
        return res.status(500).send(err.message);
    }
    next();
}