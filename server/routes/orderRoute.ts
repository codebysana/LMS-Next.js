import express from "express";
import { isAuthenticated } from "../middleware/auth";
import { createOrder, getAllOrders } from "../controllers/orderController";
import {
  authorizeRoles,
  updateAccessToken,
} from "../controllers/userController";
const router = express.Router();

router.post("/create-order", isAuthenticated, createOrder);
router.get(
  "/get-orders",
  updateAccessToken,
  isAuthenticated,
  authorizeRoles("admin"),
  getAllOrders
);

export default router;
