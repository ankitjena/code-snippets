//Code Snippet Routes
import { Router } from "express";
import * as codeControllers from "../controllers/code";

const codeRouter = Router();

codeRouter.post("/new", codeControllers.newCodeSnippet);

export default codeRouter;