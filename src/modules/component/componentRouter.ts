import { Router } from "express";
import { Route } from "../../utils/route";
import componentController from "./componentController";

const componentRouter = Router();

componentRouter.get("/user/:userId", Route(componentController.listByUserId));
componentRouter.post("/", Route(componentController.create));
componentRouter.put("/:id", Route(componentController.update));
componentRouter.put("/:id", Route(componentController.delete));

export default componentRouter;
