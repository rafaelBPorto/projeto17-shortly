import { nanoid } from 'nanoid'
import { insertUrls } from '../../repository/urls/urls.repositoires.js  '

export async function genarateShortUrl(req, res, next) {
    const { url } = req.body
    const { user_id } = res.locals.session

    const shortUrl = nanoid(10)
    try {
        await insertUrls(user_id, url, shortUrl)
        res.locals.shortUrl = shortUrl;
   } catch (error) {
        return res.staut(500).send(error.message);
    }

    next()

}