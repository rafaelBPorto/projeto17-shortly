import { Router } from "express";
import { authorizationToken } from "../middlewares/authorization/authorization.validaton.middleware.js";

const router = Router();

//recebe a url para encuratar link
router.post("/urls/shorten", authorizationToken)

export default router;