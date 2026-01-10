import express from "express";
import {
  getAllProducts,
  getProductById,
} from "../controllers/productController.js";

const router = express.Router();   // ✅ REQUIRED

// Get all products (with filter & search)
router.get("/", getAllProducts);

// Get single product by ID
router.get("/:id", getProductById);

export default router;   // ✅ REQUIRED
