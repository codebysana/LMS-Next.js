import express from "express";
import { isAuthenticated } from "../middleware/auth";
import {
  authorizeRoles,
  updateAccessToken,
} from "../controllers/userController";
import {
  createLayout,
  editLayout,
  getLayoutByType,
} from "../controllers/layoutController";

const router = express.Router();

router.post(
  "/create-layout",
  updateAccessToken,
  isAuthenticated,
  authorizeRoles("admin"),
  createLayout
);
router.put(
  "/edit-layout",
  updateAccessToken,
  isAuthenticated,
  authorizeRoles("admin"),
  editLayout
);
router.get("/get-layout", updateAccessToken, getLayoutByType);

export default router;
