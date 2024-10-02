import { Router } from "express";
import authRouter from "./modules/auth/authRouter";
import componentRouter from "./modules/component/componentRouter";
import customerRouter from "./modules/customer/customerRouter";
import authMiddleware from "./middlewares/auth";
import budgetRouter from "./modules/budget/budgetRouter";
import expenditureRouter from "./modules/expenditure/expenditureRouter";

const routes = Router();

routes.use("/auth", authRouter);
routes.use("/components", authMiddleware, componentRouter);
routes.use("/customers", authMiddleware, customerRouter);
routes.use("/budgets", authMiddleware, budgetRouter);
routes.use("/expenditures", authMiddleware, expenditureRouter);

export default routes;
