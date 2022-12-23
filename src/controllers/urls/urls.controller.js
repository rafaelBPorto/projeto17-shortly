import { deleteIdUrl, selectIdUrl, selectUrl } from "../../repository/urls/urls.repositoires.js"

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
        res.redirect(url);
    } catch (error) {
        return res.status(500).send(error.message);
    }
}

export async function deleteUrl(req, res) {
    const urlId = req.params.id;
    const userId = res.locals.session.user_id
    
    try {
        const del = await deleteIdUrl(urlId, userId);
        if(del===0){
            return res.sendStatus(404); 
        }
        res.sendStatus(204);

    } catch (error) {
        return res.status(500).send(error.message)
    }
}