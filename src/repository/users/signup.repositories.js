import { connectionDB } from "../../database/db.js";
import bcrypt from "bcrypt";

export function insertNewUser({ name, email, password }) {
    const hashPassowrd = bcrypt.hashSync(password, 10);

    return connectionDB.query(`
        INSERT INTO users 
        (name, email, password)
        VALUES ($1, $2, $3)`,
        [name, email, hashPassowrd]);
}