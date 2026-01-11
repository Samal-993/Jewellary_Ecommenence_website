import { Route, Routes } from "react-router-dom";
import { useEffect, useState } from "react";

import Home from "./Path/Home.jsx";
import Jewellery from "./Pages/Jewellery.jsx";
import Product from "./Pages/Product.jsx";
import BuyItem from "./Pages/BuyItem.jsx";
import Navbar from "./components/Navbar.jsx";
import CartSection from "./Pages/Cartsection.jsx";
import SareesSection from "./sarees/SareesSection.jsx";
import Orders from "./api/Orderapi.jsx";

import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const App = () => {
  const [cartItems, setCartItems] = useState([]);
  const [openCart, setOpenCart] = useState(false);

  // ✅ Load cart from localStorage (ONCE on mount)
  useEffect(() => {
    const savedCart = localStorage.getItem("cart");
    if (savedCart) {
      try {
        const parsed = JSON.parse(savedCart);
        setCartItems(Array.isArray(parsed) ? parsed : []);
      } catch (err) {
        console.error("Error parsing cart:", err);
        localStorage.removeItem("cart");
        setCartItems([]);
      }
    }
  }, []);

  // ✅ Save cart to localStorage on change
  useEffect(() => {
    if (cartItems.length > 0) {
      localStorage.setItem("cart", JSON.stringify(cartItems));
    } else {
      localStorage.removeItem("cart");
    }
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
      {/* Navbar */}
      <Navbar
        cartCount={cartItems.reduce((a, c) => a + c.qty, 0)}
        openCart={() => setOpenCart(true)}
      />

      {/* Cart Sidebar */}
      <CartSection
        openCart={openCart}
        setOpenCart={setOpenCart}
        cartItems={cartItems}
        removeFromCart={removeFromCart}
        updateQty={updateQty}
      />

      {/* Routes */}
      <Routes>
        <Route path="/" element={<Home />} />
        <Route
          path="/jewellery"
          element={<Jewellery addToCart={addToCart} />}
        />
        <Route
          path="/product/:id"
          element={<Product addToCart={addToCart} />}
        />
        <Route
          path="/payment"
          element={<BuyItem cartItems={cartItems} />}
        />
        <Route path="/sarees" element={<SareesSection />} />
        <Route path="/orders" element={<Orders />} />
        <Route 
          path="/kurtis" 
          element={
            <div className="bg-[#fffdf5] min-h-screen flex items-center justify-center">
              <p className="text-gray-500">Coming Soon</p>
            </div>
          } 
        />
        <Route 
          path="/lehengas" 
          element={
            <div className="bg-[#fffdf5] min-h-screen flex items-center justify-center">
              <p className="text-gray-500">Coming Soon</p>
            </div>
          } 
        />
        <Route 
          path="/handbags" 
          element={
            <div className="bg-[#fffdf5] min-h-screen flex items-center justify-center">
              <p className="text-gray-500">Coming Soon</p>
            </div>
          } 
        />
        {/* Catch all 404 route */}
        <Route 
          path="*" 
          element={
            <div className="bg-[#fffdf5] min-h-screen flex flex-col items-center justify-center">
              <h2 className="text-2xl mb-4">404 - Page Not Found</h2>
              <button
                onClick={() => window.location.href = "/"}
                className="bg-[#c9a44a] text-white px-6 py-2"
              >
                Go Home
              </button>
            </div>
          } 
        />
      </Routes>

      {/* ✅ TOASTER (GLOBAL) */}
      <ToastContainer
        position="top-right"
        autoClose={3000}
        hideProgressBar={false}
        closeOnClick
        pauseOnHover
        draggable
        theme="light"
      />
    </>
  );
};

export default App;