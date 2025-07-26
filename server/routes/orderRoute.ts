import express from "express";
import { isAuthenticated } from "../middleware/auth";
import {
  createOrder,
  getAllOrders,
  sendStripePublishableKey,
  stripeNewPayment,
} from "../controllers/orderController";
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

router.get("/payment/stripepublishablekey", sendStripePublishableKey);

router.post("/payment", isAuthenticated, stripeNewPayment);

export default router;
