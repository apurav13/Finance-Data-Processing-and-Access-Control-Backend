import express from "express";
import { getUsers, updateUserRole, updateUserStatus } from "../controllers/userController.js";
import { protect } from "../middleware/authMiddleware.js";
import { authorizeRoles } from "../middleware/roleMiddleware.js";
const router = express.Router();

router.get("/", protect, authorizeRoles("admin"), getUsers);
router.put("/:id/role", protect, authorizeRoles("admin"), updateUserRole);
router.put("/:id/status", protect, authorizeRoles("admin"), updateUserStatus);

export default router;