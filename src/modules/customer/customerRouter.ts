import { Router } from "express";
import customerController from "./customerController";
import { Route } from "../../utils/route";

const customerRouter = Router();

customerRouter.get("/", Route(customerController.listByUserId));
customerRouter.post("/", Route(customerController.create));
customerRouter.put("/:id", Route(customerController.update));
customerRouter.put("/:id", Route(customerController.delete));

export default customerRouter;
