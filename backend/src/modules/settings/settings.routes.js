import { Router } from "express";
import auth from "../../middleware/authMiddleware.js";
import { updateSettings, getSettings } from "./settings.controller.js";

const router = Router();

router.post("/", auth, updateSettings);
router.get("/", auth, getSettings);

export default router;
