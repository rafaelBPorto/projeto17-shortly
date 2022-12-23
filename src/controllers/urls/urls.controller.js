export async function postShortUrls(req, res) {

    const shortUrl = res.locals.shortUrl

    try {
        res.status(201).send(shortUrl)
    } catch (error) {
        return res.status(500).send(error.message)
    }

}