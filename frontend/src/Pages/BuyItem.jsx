import React, { useState } from "react";
import Footer from "../components/Footer";
import API from "../api/axios";
import { useNavigate } from "react-router-dom";

const BuyItem = ({ cartItems = [] }) => {
  const [paymentMethod, setPaymentMethod] = useState("COD");
  const navigate = useNavigate();

  const subtotal = cartItems.reduce(
    (sum, item) => sum + item.price * item.qty,
    0
  );

  const handlePayNow = async () => {
    if (cartItems.length === 0) {
      alert("Cart is empty");
      return;
    }

    try {
      await API.post("/orders", {
        items: cartItems,
        totalAmount: subtotal,
        paymentMethod,
      });

      alert("Order placed successfully");

      window.dispatchEvent(new Event("cart-clear"));
      navigate("/orders");
    } catch (err) {
      console.log("ORDER ERROR 👉", err.response?.data || err.message);
      alert(err.response?.data?.message || "Order failed");
    }
  };

  return (
    <section className="bg-[#fffdf5] min-h-screen">
      <h2 className="text-center tracking-[0.35em] text-sm text-[#9c1c2f] mt-10 mb-12">
        PAYMENT METHODS
      </h2>

      <div className="px-20 grid grid-cols-[420px_1fr] gap-20">
        <div className="bg-[#faf7f1] p-6">
          <h4 className="tracking-[0.25em] text-xs mb-4">CART SUMMARY</h4>
          <div className="flex justify-between text-sm font-medium">
            <span>Total Payable</span>
            <span>₹{subtotal}</span>
          </div>
        </div>

        <div>
          <button
            onClick={handlePayNow}
            className="mt-10 w-full bg-[#6b1f0f] text-white py-4 tracking-wide text-sm"
          >
            Pay Now
          </button>
        </div>
      </div>

      <Footer />
    </section>
  );
};

export default BuyItem;
