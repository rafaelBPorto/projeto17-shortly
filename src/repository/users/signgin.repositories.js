import { connectionDB } from "../../database/db.js";

export async function findUser({ email }) {
    
    const user = await connectionDB.query(`SELECT * FROM users WHERE email = $1`, [email]);
  
    if (user.rowCount === 0) {
        return false;
    } else {
        return user.rows[0];
    }

}

export async function insertToken(id, token){
    await connectionDB.query(`INSERT INTO sessions 
        (user_id, token)
        VALUES ($1, $2)`, [id, token])
}