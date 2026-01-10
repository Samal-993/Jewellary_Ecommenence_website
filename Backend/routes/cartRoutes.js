import express from "express";
import {
  addToCart,
  getCart,
  removeFromCart,
} from "../controllers/cartController.js";
import { protect } from "../middleware/authMiddleware.js";

const router = express.Router();   // 👈 VERY IMPORTANT

// Add product to cart
router.post("/", protect, addToCart);

// Get logged-in user's cart
router.get("/", protect, getCart);

// Remove item from cart
router.delete("/:id", protect, removeFromCart);

export default router;   // 👈 THIS IS REQUIRED
