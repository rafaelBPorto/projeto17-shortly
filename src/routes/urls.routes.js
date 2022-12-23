import { Router } from "express";
import { getUrl, postShortUrls } from "../controllers/urls/urls.controller.js";
import { authorizationToken } from "../middlewares/authorization/authorization.validaton.middleware.js";
import { genarateShortUrl } from "../middlewares/urls/urls.shoten.generateShortUrl.middleware.js";
import { urlShotenValidation } from "../middlewares/urls/urls.shoten.validation.middleware.js";

const router = Router();

//recebe a url para encuratar link
router.post("/urls/shorten", authorizationToken, urlShotenValidation, genarateShortUrl, postShortUrls)

//retor objeto {id, shorUrl, url}
router.get("/urls/:id", getUrl)

export default router;