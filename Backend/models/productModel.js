import mongoose from "mongoose";

const productSchema = new mongoose.Schema({
  name: { type: String, required: true },
  description: { type: String, required: true },
  price: { type: Number, required: true },   // 🔥 make price Number
  category: { type: String, required: true }, // 🔥 fix spelling
});

const productModel =
  mongoose.models.Product || mongoose.model("Product", productSchema);

export default productModel;
