import Cart from "../models/cartModel.js";
import Order from "../models/OrderModel.js";
import Product from "../models/productModel.js";

export const placeOrder = async (req, res) => {
  try {
    // 1️⃣ Get user's cart
    const cart = await Cart.findOne({ userId: req.user.id });

    if (!cart || cart.items.length === 0) {
      return res.status(400).json({ message: "Cart is empty" });
    }

    let totalAmount = 0;
    let orderItems = [];

    // 2️⃣ Calculate total from cart
    for (let item of cart.items) {
      const product = await Product.findById(item.productId);

      if (!product) continue;

      const itemTotal = product.price * item.quantity;
      totalAmount += itemTotal;

      orderItems.push({
        productId: product._id,
        name: product.name,
        price: product.price,
        quantity: item.quantity,
      });
    }

    // 3️⃣ Create order
    const order = await Order.create({
      userId: req.user.id,
      items: orderItems,
      totalAmount,
      status: "Placed",
    });

    // 4️⃣ Clear cart
    await Cart.deleteOne({ userId: req.user.id });

    res.status(201).json(order);
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: "Failed to place order" });
  }
};
