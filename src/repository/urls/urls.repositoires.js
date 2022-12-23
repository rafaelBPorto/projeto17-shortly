import { connectionDB } from "../../database/db.js";

export async function insertUrls(id, url, shortUrl){
        await connectionDB.query(`INSERT INTO urls (user_id, url, short_url, visits) VALUES ($1, $2, $3, $4)`, [id, url, shortUrl, 0]);
}