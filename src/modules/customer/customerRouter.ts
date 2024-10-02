import { Router } from "express";
import customerController from "./customerController";
import { Route } from "../../utils/route";

const customerRouter = Router();

customerRouter.get("/", Route(customerController.listByUserId));
customerRouter.get("/:id", Route(customerController.findById));
customerRouter.post("/", Route(customerController.create));
customerRouter.put("/:id", Route(customerController.update));
customerRouter.delete("/:id", Route(customerController.delete));

export default customerRouter;
