import { Router } from "express";
import authRouter from "./modules/auth/authRouter";
import componentRouter from "./modules/component/componentRouter";
import customerRouter from "./modules/customer/customerRouter";
import authMiddleware from "./middlewares/auth";

const routes = Router();

routes.use("/auth", authRouter);
routes.use("/components", authMiddleware, componentRouter);
routes.use("/customers", authMiddleware, customerRouter);

export default routes;
