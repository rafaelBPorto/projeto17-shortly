import { insertNewUser } from "../../repository/users/sigin.repositories.js"

export default async function signup(req, res){
    const user = res.locals.user

    try{
        await insertNewUser(user);
        res.sendStatus(201);
    } catch(err){
        return res.status(500).send(err.message);
    }
}