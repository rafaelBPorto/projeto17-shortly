import { connectionDB } from "../../database/db.js";

export async function selectRankig(){
    const raking = await connectionDB.query(`SELECT 
        users.id, 
        users.name, 
        COUNT(urls.url) AS "linkCount", 
        SUM(urls.visits) AS "visitCount" 
        FROM users 
        JOIN urls 
        ON users.id = urls.user_id 
        GROUP BY (users.id)
        ORDER BY "visitCount" DESC
        LIMIT 10
    `);

    return raking.rows;
}