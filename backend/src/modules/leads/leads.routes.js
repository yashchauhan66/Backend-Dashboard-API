import { Router } from "express";
import auth from "../../middleware/authMiddleware.js";
import { create, getAll } from "./leads.controller.js";

const router = Router();

router.post("/", auth, create);
router.get("/", auth, getAll);

export default router;
