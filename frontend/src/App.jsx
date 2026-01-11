import { Route, Routes } from "react-router-dom";
import { useEffect, useState } from "react";

import Home from "./Path/Home";
import Jewellery from "./Pages/Jewellery";
import Product from "./Pages/Product";
import BuyItem from "./Pages/BuyItem";
import Navbar from "./components/Navbar";
import CartSection from "./Pages/CartSection";
import SareesSection from "./sarees/SareesSection";
import OrderModel from "./api/Orderapi";

const App = () => {
  const [cartItems, setCartItems] = useState([]);
  const [openCart, setOpenCart] = useState(false);

  useEffect(() => {
    const savedCart = localStorage.getItem("cart");
    if (savedCart) {
      setCartItems(JSON.parse(savedCart));
    }
  }, []);

   useEffect(() => {
    const savedCart = localStorage.getItem("cart");
    if (savedCart) {
      setCartItems(JSON.parse(savedCart));
    }
  }, []);

  // Save cart to localStorage on change
  useEffect(() => {
    localStorage.setItem("cart", JSON.stringify(cartItems));
  }, [cartItems]);

  useEffect(() => {
    localStorage.setItem("cart", JSON.stringify(cartItems));
  }, [cartItems]);

  const addToCart = (product) => {
    setCartItems((prev) => {
      const existing = prev.find((p) => p.id === product.id);
      if (existing) {
        return prev.map((p) =>
          p.id === product.id
            ? { ...p, qty: p.qty + product.qty }
            : p
        );
      }
      return [...prev, product];
    });
    setOpenCart(true);
  };

  const removeFromCart = (id) => {
    setCartItems((prev) => prev.filter((p) => p.id !== id));
  };

  const updateQty = (id, qty) => {
    if (qty <= 0) {
      removeFromCart(id);
    } else {
      setCartItems((prev) =>
        prev.map((p) =>
          p.id === id ? { ...p, qty } : p
        )
      );
    }
  };

  return (
    <>
      <Navbar
        cartCount={cartItems.reduce((a, c) => a + c.qty, 0)}
        openCart={() => setOpenCart(true)}
      />
      <CartSection
        openCart={openCart}
        setOpenCart={setOpenCart}
        cartItems={cartItems}
        removeFromCart={removeFromCart}
        updateQty={updateQty}
      />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/jewellery" element={<Jewellery addToCart={addToCart} />} />
        <Route path="/product/:id" element={<Product addToCart={addToCart} />} />
        <Route path="/payment" element={<BuyItem cartItems={cartItems} />} />
        <Route path="/sarees" element={<SareesSection />} />
        <Route path="/orders" element={<OrderModel />} />
      </Routes>
    </>
  );
};

export default App;