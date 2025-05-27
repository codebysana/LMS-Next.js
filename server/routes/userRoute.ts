import express from "express";
import { isAuthenticated } from "../middleware/auth";
import {
  activateUser,
  authorizeRoles,
  deleteUser,
  getUserInfo,
  registerUser,
  socialAuth,
  updateAccessToken,
  updatePassword,
  updateProfile,
  updateUser,
  updateUserRole,
  userLogin,
  userLogout,
} from "../controllers/userController";
import { getAllUsers } from "../controllers/courseController";
const router = express.Router();

router.post("/registration", registerUser);
router.post("/activate-user", activateUser);
router.post("/login", userLogin);
router.get("/logout", isAuthenticated, userLogout);
router.get("/refresh", updateAccessToken);
router.get("/user-details", isAuthenticated, getUserInfo);
router.post("/social-auth", socialAuth);
router.put("/update-user", isAuthenticated, updateUser);
router.put("/update-password", isAuthenticated, updatePassword);
router.put("/update-image", isAuthenticated, updateProfile);
router.get("/get-users", isAuthenticated, authorizeRoles("admin"), getAllUsers);
router.put("/update-user-role", isAuthenticated, authorizeRoles("admin"), updateUserRole);
router.delete("/delete-user/:id", isAuthenticated, authorizeRoles("admin"), deleteUser);

export default router;
