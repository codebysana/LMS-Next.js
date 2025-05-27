import express from "express";
import { isAuthenticated } from "../middleware/auth";
import { authorizeRoles } from "../controllers/userController";
import { createLayout, editLayout, getLayoutByType } from "../controllers/layoutController";

const router = express.Router();

router.post("/create-layout", isAuthenticated, authorizeRoles("admin"), createLayout);
router.put("/edit-layout", isAuthenticated, authorizeRoles("admin"), editLayout);
router.get("/get-layout", getLayoutByType);

export default router;