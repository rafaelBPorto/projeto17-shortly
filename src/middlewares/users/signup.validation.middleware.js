import { connectionDB } from "../../database/db.js";
import { signupSchema } from "../../models/users/signup.model.js";

export async function signupValidation (req, res, next){
    const user = req.body;

        const { error } = signupSchema.validate(user, {abortyEarly: false});

        if (error){
            const errors = error.details.map((detail) => detail.message);
            return res.status(422).send(errors);
        }

        const userExists = await connectionDB.query(`SELECT email FROM users WHERE email = $1`, [user.email]);
        
        if(userExists.rowCount !==0){
            return res.status(409).send({message: "This email already registered"})
        }

    res.locals.user = user;

    next();
}