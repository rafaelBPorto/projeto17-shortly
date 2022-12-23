import { insertNewUser } from "../../repository/users/signup.repositories.js"
import { v4 as uuidV4 } from "uuid";
import { insertToken } from "../../repository/users/signgin.repositories.js";

import { getMe } from "../../repository/users/users.respositories.js";

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

export async function userMe(req, res) {
    const userId = res.locals.session.user_id
    try{
        const info = await getMe(userId)
        res.status(200).send(info)
    } catch (error){
        res.status(500).send(error.message)
    }
}