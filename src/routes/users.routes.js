import { Router } from "express";
import { signup, singin, userMe } from "../controllers/users/users.controller.js";
import { authorizationToken } from "../middlewares/authorization/authorization.validaton.middleware.js";
import signinValidation from "../middlewares/users/signin.validation.middleware.js";
import { signupValidation } from "../middlewares/users/signup.validation.middleware.js";

const router = Router();


//Realizar cadastro
router.post("/signup", signupValidation, signup)

//Realizar login
router.post("/signin", signinValidation, singin)

router.get("/users/me", authorizationToken, userMe);


export default router;