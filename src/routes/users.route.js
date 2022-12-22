import { Router } from "express";
import signup from "../controllers/users/users.controller.js";
import { signupValidation } from "../middlewares/users/signup.validation.middleware.js";

const router = Router();


//Realizar cadastro
router.post("/signup", signupValidation, signup)

//Realizar login
router.post("/singin",)

export default router;