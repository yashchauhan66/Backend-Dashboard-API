import { Router } from "express";
import auth from "../../middleware/authMiddleware.js";
import { createAnalytics, getAnalytics } from "./analytics.controller.js";

const router = Router();

router.post("/", auth, createAnalytics);
router.get("/", auth, getAnalytics);

export default router;
