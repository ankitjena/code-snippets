import { Router } from "express";
import * as homeController from "../controllers/home";

const router = Router();

router.get("/", homeController.index);

// router.post("/new")

export default router;