import { Router } from "express";
import { Route } from "../../utils/route";
import budgetController from "./budgetController";

const budgetRouter = Router();

budgetRouter.get("/user/:userId", Route(budgetController.listByUserId));
budgetRouter.post("/", Route(budgetController.create));
budgetRouter.put("/:id", Route(budgetController.update));

export default budgetRouter;
