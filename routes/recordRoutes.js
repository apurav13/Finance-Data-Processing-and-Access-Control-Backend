import express from "express";
import { createRecord, getRecords, updateRecord, deleteRecord } from "../controllers/recordController.js";
import { protect } from "../middleware/authMiddleware.js";
import { authorizeRoles } from "../middleware/roleMiddleware.js";
const router = express.Router();

router.post("/", protect, authorizeRoles("admin"), createRecord);
router.get("/", protect, authorizeRoles("admin", "analyst"), getRecords);
router.put("/:id", protect, authorizeRoles("admin"), updateRecord);
router.delete("/:id", protect, authorizeRoles("admin"), deleteRecord);

export default router;