import express from "express";
import { getCoursesAnalytics, getOrdersAnalytics, getUsersAnalytics } from "../controllers/analyticsController";
import { isAuthenticated } from "../middleware/auth";
import { authorizeRoles } from "../controllers/userController";
const router = express.Router();

router.get("/get-users-analytics", isAuthenticated, authorizeRoles("admin"), getUsersAnalytics);
router.get("/get-courses-analytics", isAuthenticated, authorizeRoles("admin"), getCoursesAnalytics);
router.get("/get-orders-analytics", isAuthenticated, authorizeRoles("admin"), getOrdersAnalytics);

export default router;