import { Router } from "express";
import authController from "./authController";
import { Route } from "../../utils/route";

const authRoutes = Router();

authRoutes.post("/login", Route(authController.login));
authRoutes.post("/register", Route(authController.register));

export default authRoutes;
