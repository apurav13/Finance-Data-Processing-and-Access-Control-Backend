import express from "express";
import { getSummary, getCategorySummary, getMonthlyTrends } from "../controllers/dashboardController.js";
import { protect } from "../middleware/authMiddleware.js";
import { authorizeRoles } from "../middleware/roleMiddleware.js";
const router = express.Router();

router.get("/", protect, authorizeRoles("admin", "analyst","viewer"), getSummary);
router.get("/category", protect, getCategorySummary);
router.get("/monthly", protect, getMonthlyTrends);

export default router;