import { Router } from "express";
import { authorizationToken } from "../middlewares/authorization/authorization.validaton.middleware.js";
import { urlShotenValidation } from "../middlewares/urls/urls.shoten.validation.middleware.js";

const router = Router();

//recebe a url para encuratar link
router.post("/urls/shorten", authorizationToken, urlShotenValidation)

export default router;