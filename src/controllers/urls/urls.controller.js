import { selectIdUrl, selectUrl } from "../../repository/urls/urls.repositoires.js"

export async function postShortUrls(req, res) {

    const shortUrl = res.locals.shortUrl

    try {
        res.status(201).send(shortUrl)
    } catch (error) {
        return res.status(500).send(error.message)
    }

}

export async function getUrl(req, res) {
    const { id } = req.params;

    try {
        const url = await selectIdUrl(id);
        if (!url) {
            return res.sendStatus(404);
        }
        res.send({
            id: url.id,
            shortUrl: url.short_url,
            url: url.url
        })

    } catch (error) {
        return res.status(500).send(error.message)
    }
}

export async function acessShortUrl(req, res) {
    const { shortUrl } = req.params;
    

    try {
        const url = await selectUrl(shortUrl)
        if (!url) {
            return res.sendStatus(404);
        }
        res.send(url);
    } catch (error) {
        return res.status(500).send(error.message);
    }
}