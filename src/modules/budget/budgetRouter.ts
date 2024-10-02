import { Router } from "express";
import { Route } from "../../utils/route";
import budgetController from "./budgetController";

const budgetRouter = Router();

budgetRouter.get("/", Route(budgetController.listByUserId));
budgetRouter.get("/:id", Route(budgetController.findById));
budgetRouter.post("/", Route(budgetController.create));
budgetRouter.put("/:id", Route(budgetController.update));
budgetRouter.delete("/:id", Route(budgetController.delete));

export default budgetRouter;
