import { connectionDB } from "../../database/db.js";

export async function insertUrls(id, url, shortUrl) {
    await connectionDB.query(`INSERT INTO urls (user_id, url, short_url, visits) VALUES ($1, $2, $3, $4)`, [id, url, shortUrl, 0]);
}

export async function selectIdUrl(id) {

    const url = await connectionDB.query(`SELECT id, short_url, url FROM urls WHERE id = $1`, [id]);
    if (url.rowCount === 0) {
        return false
    }
    return url.rows[0];
}

export async function selectUrl(shortUrl) {
    const url = await connectionDB.query(`SELECT * FROM urls WHERE short_url=$1`, [shortUrl]);
    
    if (url.rowCount === 0) {
        return false
    }

    const id = url.rows[0].id
    console.log(id)
    const visit = await connectionDB.query(`SELECT visits FROM urls WHERE id = $1;`,[id]);
    await connectionDB.query(`UPDATE urls SET visits = visits + 1 WHERE id = $1;`, [id]);
    return url.rows[0].url;
}

export async function deleteIdUrl(urlId, userId) {

    const del = await connectionDB.query(`DELETE FROM urls WHERE id = $1 and user_id=$2`, [urlId, userId]);
    return del.rowCount;
}

