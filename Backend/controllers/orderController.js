import Order from "../models/OrderModel.js";

export const createOrder = async (req, res) => {
  try {
    const { items, totalAmount, paymentMethod } = req.body;

    if (!items || items.length === 0) {
      return res.status(400).json({
        success: false,
        message: "No items in order",
      });
    }

    const order = await Order.create({
      user: req.user.id, // 🔥 IMPORTANT
      items,
      totalAmount,
      paymentMethod,
    });

    res.status(201).json({
      success: true,
      order,
    });
  } catch (error) {
    console.log("ORDER CREATE ERROR 👉", error);
    res.status(500).json({
      success: false,
      message: "Failed to create order",
    });
  }
};

// Get all orders for the logged-in user
export const getMyOrders = async (req, res) => {
  try {
    const userId = req.user.id;
    const orders = await Order.find({ user: userId }).sort({ createdAt: -1 });
    res.json({ orders });
  } catch (error) {
    console.log("ORDER FETCH ERROR 👉", error);
    res.status(500).json({ message: "Failed to fetch orders" });
  }
};
