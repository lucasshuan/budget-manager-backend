import { Router } from "express";
import authRouter from "./modules/auth/authRouter";

const routes = Router();

routes.use("/auth", authRouter);

export default routes;
