import { Router } from "express";
import { AuthControllerRegister } from "../controllers/AuthControllerRegister";
import { AuthControllerLogin } from "../controllers/AuthControllerLogin";

const router = Router()

router.post("/signup", AuthControllerRegister.register)
router.post('/login', AuthControllerLogin.login)

export default router;