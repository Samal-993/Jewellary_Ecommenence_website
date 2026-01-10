import mongoose from "mongoose";

const orderSchema = new mongoose.Schema({
  userId: mongoose.Schema.Types.ObjectId,
  items: Array,
  totalAmount: Number,
  status: { type: String, default: "Placed" },
});

export default mongoose.model("Order", orderSchema);
