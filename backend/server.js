import express from "express";
import dotenv from "dotenv";
import { swaggerUi, swaggerSpec } from "./swagger.js";
import connectDB from "./src/config/db.js";
import authRoutes from "./src/modules/auth/auth.routes.js";
import dashboardRoutes from "./src/modules/deshboard/deshboard.routes.js";
import analyticsRoutes from "./src/modules/analytics/analytics.routes.js";
import leadsRoutes from "./src/modules/leads/leads.routes.js";
import salesRoutes from "./src/modules/sales/sales.routes.js";
import contentRoutes from "./src/modules/content/content.routes.js";
import settingsRoutes from "./src/modules/settings/settings.routes.js";

connectDB();
dotenv.config();
const app = express();
app.use(express.json());

app.use("/api/auth", authRoutes);
app.use("/api/dashboard", dashboardRoutes);
app.use("/api/analytics", analyticsRoutes);
app.use("/api/leads", leadsRoutes);
app.use("/api/sales", salesRoutes);
app.use("/api/content", contentRoutes);
app.use("/api/settings", settingsRoutes);
app.use("/api-docs", swaggerUi.serve, swaggerUi.setup(swaggerSpec));

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));


