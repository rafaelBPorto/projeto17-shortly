import { connectionDB } from "../../database/db.js";

export async function getMe(userId) {

    const infoUser = await connectionDB.query(`SELECT users.id, users.name, SUM(urls.visits) AS "visitCount" FROM users JOIN urls ON users.id = urls.user_id WHERE users.id = $1 group by (users.id);`, [userId])
    const urlsUser = await connectionDB.query(`SELECT id, short_url AS "shortUrl", url, visits AS "visitCount" FROM urls WHERE user_id = $1`, [userId])

    const obj = {
        id: infoUser.rows[0].id,
        name: infoUser.rows[0].name,
        visitCount: infoUser.rows[0].visitCount,
        shortenedUrls: urlsUser.rows
    }
    return obj;
}