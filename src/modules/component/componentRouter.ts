import { Router } from "express";
import { Route } from "../../utils/route";
import componentController from "./componentController";

const componentRouter = Router();

componentRouter.get("/", Route(componentController.listByUserId));
componentRouter.get("/:id", Route(componentController.findById));
componentRouter.post("/", Route(componentController.create));
componentRouter.put("/:id", Route(componentController.update));
componentRouter.delete("/:id", Route(componentController.delete));

export default componentRouter;
