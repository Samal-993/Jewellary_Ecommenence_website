import { Route, Routes } from "react-router-dom";
import { useEffect, useState } from "react";

import Home from "./Path/Home";
import Jewellery from "./Pages/Jewellery";
import Product from "./Pages/Product";
import BuyItem from "./Pages/BuyItem";
import Navbar from "./components/Navbar";
import CartSection from "./Pages/Cartsection.jsx";
import SareesSection from "./sarees/SareesSection.jsx";

const App = () => {
  // ✅ CART STATE
  const [cartItems, setCartItems] = useState([]);

  // ✅ OPEN CART
  const [openCart, setOpenCart] = useState(false);

  // 🔴 LOAD CART FROM localStorage (ONCE)
  useEffect(() => {
    const savedCart = localStorage.getItem("cart");
    if (savedCart) {
      setCartItems(JSON.parse(savedCart));
    }
  }, []);

  // 🔴 SAVE CART TO localStorage (ON CHANGE)
  useEffect(() => {
    localStorage.setItem("cart", JSON.stringify(cartItems));
  }, [cartItems]);

  // ✅ ADD TO CART
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

  // ✅ REMOVE ITEM
  const removeFromCart = (id) => {
    setCartItems((prev) => prev.filter((p) => p.id !== id));
  };

  // ✅ UPDATE QTY
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
        <Route path="/payment" element={<BuyItem />} />
        <Route path="/sarees" element={<SareesSection />} />
      </Routes>
    </>
  );
};

export default App;
