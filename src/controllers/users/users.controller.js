import { insertNewUser } from "../../repository/users/signup.repositories.js"
import { v4 as uuidV4 } from "uuid";
import { insertToken } from "../../repository/users/signgin.repositories.js";

export async function signup(req, res) {
    const user = res.locals.user;

    try {
        await insertNewUser(user);
        res.sendStatus(201);
    } catch (err) {
        return res.status(500).send(err.message);
    }
}

export function singin(req, res) {
    const id = res.locals.userId;
    const token = uuidV4();

    try {
        insertToken(id, token)
        res.sendStatus(201);
    } catch (err) {
        return res.status(500).send(err.message);
    }
}