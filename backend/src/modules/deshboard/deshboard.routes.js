import { Router } from "express";
import auth from "../../middleware/authMiddleware.js";
import { createData, getData } from "./dashboard.controller.js";

const router = Router();

/**
 * @swagger
 * /api/dashboard:
 *   post:
 *     tags: [Dashboard]
 *     summary: Create Dashboard Data
 *     security:
 *       - bearerAuth: []
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               title:
 *                 type: string
 *               value:
 *                 type: string
 *     responses:
 *       201:
 *         description: Dashboard Data Created
 */
router.post("/", auth, createData);

/**
 * @swagger
 * /api/dashboard:
 *   get:
 *     summary: Get Dashboard Data
 *     tags: [Dashboard]
 *     security:
 *       - bearerAuth: []
 *     parameters:
 *       - in: query
 *         name: page
 *         schema:
 *           type: integer
 *       - in: query
 *         name: limit
 *         schema:
 *           type: integer
 *     responses:
 *       200:
 *         description: Dashboard Data Fetched
 */
router.get("/", auth, getData);

export default router;
