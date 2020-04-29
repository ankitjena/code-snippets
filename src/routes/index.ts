import { Router } from "express";
import * as homeController from "../controllers/home";
import codeRouter from "./code";

const router = Router();

router.get("/", homeController.index);

router.use("/code", codeRouter);

export default router;