import { Router } from "express";
import authController from "./authController";
import { Route } from "../../http/route";

const authRouter = Router();

authRouter.post("/login", Route(authController.login));
authRouter.post("/register", Route(authController.register));

export default authRouter;
