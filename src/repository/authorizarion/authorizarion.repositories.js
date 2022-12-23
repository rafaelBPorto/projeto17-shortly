import { connectionDB } from "../../database/db.js";

export async function checkToken (token){

    const session = await connectionDB.query(`SELECT * FROM sessions WHERE token = $1`, [token]);
    if (session.rowCount === 0){
        return false;
    }
    return session.rows[0];
}