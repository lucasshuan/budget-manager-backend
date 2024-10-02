import { Router } from "express";
import { Route } from "../../utils/route";
import expenditureController from "./expenditureController";

const expenditureRouter = Router();

expenditureRouter.post("/", Route(expenditureController.create));
expenditureRouter.delete("/:id", Route(expenditureController.delete));

export default expenditureRouter;
