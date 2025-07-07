import express from "express";
import { isAuthenticated } from "../middleware/auth";
import {
  getNotification,
  updateNotification,
} from "../controllers/notificationController";
import {
  authorizeRoles,
  updateAccessToken,
} from "../controllers/userController";

const router = express.Router();

router.get(
  "/get-all-notifications",
  updateAccessToken,
  isAuthenticated,
  authorizeRoles("admin"),
  getNotification
);
router.put(
  "/update-notification/:id",
  updateAccessToken,
  isAuthenticated,
  authorizeRoles("admin"),
  updateNotification
);

export default router;
