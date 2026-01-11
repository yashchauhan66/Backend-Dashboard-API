import { Router } from "express";
import auth from "../../middleware/authMiddleware.js";
import { createSale, getSales } from "./sales.controller.js";

const router = Router();

router.post("/", auth, createSale);
router.get("/", auth, getSales);

export default router;
