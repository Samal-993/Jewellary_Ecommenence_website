import express from "express";
import Order from "../models/OrderModel.js";
import { protect } from "../middleware/authMiddleware.js";
import { placeOrder } from "../controllers/orderController.js";

const router = express.Router();

/**
 * PLACE ORDER
 */
router.post("/", protect, placeOrder);

/**
 * GET USER ORDERS
 */
router.get("/my-orders", protect, async (req, res) => {
  try {
    const orders = await Order.find({ userId: req.user.id })
      .sort({ createdAt: -1 });

    res.json(orders);
  } catch (error) {
    res.status(500).json({ message: "Server Error" });
  }
});

/**
 * GET SINGLE ORDER
 */
router.get("/:id", protect, async (req, res) => {
  try {
    const order = await Order.findOne({
      _id: req.params.id,
      userId: req.user.id,
    }).populate("userId", "name email");

    if (!order) {
      return res.status(404).json({ message: "Order not found" });
    }

    res.json(order);
  } catch (error) {
    res.status(500).json({ message: "Server Error" });
  }
});

export default router;
