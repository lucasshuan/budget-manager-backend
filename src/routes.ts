import { Router } from "express";
import authRouter from "./modules/auth/authRouter";
import componentRouter from "./modules/component/componentRouter";
import customerRouter from "./modules/customer/customerRouter";

const routes = Router();

routes.use("/auth", authRouter);
routes.use("/components", componentRouter);
routes.use("/customers", customerRouter);

export default routes;
