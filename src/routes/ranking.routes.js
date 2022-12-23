import { Router } from "express";
import { getRanking } from "../controllers/ranking/ranking.controller.js";


const router = Router();

router.get("/ranking", getRanking);

export default router;