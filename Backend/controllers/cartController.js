import Cart from "../models/cartModel.js";

/**
 * ADD TO CART
 */
export const addToCart = async (req, res) => {
  try {
    const { productId, quantity = 1 } = req.body;
    const userId = req.user.id;

    let cart = await Cart.findOne({ userId }); // ❌ NO populate here

    // If cart does not exist, create one
    if (!cart) {
      cart = new Cart({ userId, items: [] });
    }

    // Check if product already exists
    const itemIndex = cart.items.findIndex(
      (item) => item.productId.toString() === productId
    );

    if (itemIndex > -1) {
      cart.items[itemIndex].quantity += quantity;
    } else {
      cart.items.push({ productId, quantity });
    }

    await cart.save();

    res.status(200).json(cart);
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: "Add to cart failed" });
  }
};

/**
 * GET CART (ONLY HERE WE POPULATE)
 */
export const getCart = async (req, res) => {
  try {
    const cart = await Cart.findOne({ userId: req.user.id }).populate(
      "items.productId",
      "name price category"
    );

    res.status(200).json(cart || { items: [] });
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: "Failed to fetch cart" });
  }
};

/**
 * REMOVE FROM CART
 */
export const removeFromCart = async (req, res) => {
  try {
    const cart = await Cart.findOne({ userId: req.user.id });

    if (!cart) {
      return res.status(404).json({ message: "Cart not found" });
    }

    cart.items = cart.items.filter(
      (item) => item.productId.toString() !== req.params.id
    );

    await cart.save();
    res.status(200).json(cart);
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: "Remove from cart failed" });
  }
};
