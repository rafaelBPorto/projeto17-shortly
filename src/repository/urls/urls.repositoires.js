import { connectionDB } from "../../database/db.js";

export async function insertUrls(id, url, shortUrl) {
    await connectionDB.query(`INSERT INTO urls (user_id, url, short_url, visits) VALUES ($1, $2, $3, $4)`, [id, url, shortUrl, 0]);
}

export async function selectIdUrl(id) {
    console.log(id)
    const url = await connectionDB.query(`SELECT id, short_url, url FROM urls WHERE id = $1`, [id]);
    if (url.rowCount === 0) {
        return false
    }
    return url.rows[0];
}       