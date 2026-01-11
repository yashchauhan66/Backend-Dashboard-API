import { Router } from "express";
import auth from "../../middleware/authMiddleware.js";
import { createContent, getContent } from "./content.controller.js";

const router = Router();

router.post("/", auth, createContent);
router.get("/", auth, getContent);

export default router;
