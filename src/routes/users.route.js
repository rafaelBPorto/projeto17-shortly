import { Router } from "express";
import { signup, singin } from "../controllers/users/users.controller.js";
import signinValidation from "../middlewares/users/signin.validation.middleware.js";
import { signupValidation } from "../middlewares/users/signup.validation.middleware.js";

const router = Router();


//Realizar cadastro
router.post("/signup", signupValidation, signup)

//Realizar login
router.post("/signin", signinValidation, singin)


export default router;