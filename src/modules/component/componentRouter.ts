import { Router } from "express";
import { Route } from "../../utils/route";
import componentController from "./componentController";
import authMiddleware from "../../middlewares/auth";

const componentRouter = Router();

componentRouter.get("/", Route(componentController.listByUserId));
componentRouter.post("/", Route(componentController.create));
componentRouter.put("/:id", Route(componentController.update));
componentRouter.put("/:id", Route(componentController.delete));

export default componentRouter;
