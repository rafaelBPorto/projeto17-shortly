import { Router } from "express";
import { postShortUrls } from "../controllers/urls/urls.controller.js";
import { authorizationToken } from "../middlewares/authorization/authorization.validaton.middleware.js";
import { genarateShortUrl } from "../middlewares/urls/urls.shoten.generateShortUrl.middleware.js";
import { urlShotenValidation } from "../middlewares/urls/urls.shoten.validation.middleware.js";

const router = Router();

//recebe a url para encuratar link
router.post("/urls/shorten", authorizationToken, urlShotenValidation, genarateShortUrl, postShortUrls)

export default router;