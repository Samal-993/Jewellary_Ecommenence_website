import React, { useState, useEffect } from "react";
import Footer from "../components/Footer";
import API from "../api/axios";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";

const BuyItem = ({ cartItems = [] }) => {
  const [paymentMethod, setPaymentMethod] = useState("COD");
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();

  const subtotal = cartItems.reduce(
    (sum, item) => sum + item.price * item.qty,
    0
  );

  // ✅ Check if user is logged in
  useEffect(() => {
    const token = localStorage.getItem("token");
    if (!token) {
      toast.error("Please login to place order");
      navigate("/");
    }
  }, [navigate]);

  const handlePayNow = async () => {
    if (cartItems.length === 0) {
      toast.error("Cart is empty");
      return;
    }

    const token = localStorage.getItem("token");
    if (!token) {
      toast.error("Please login to place order");
      navigate("/");
      return;
    }

    setLoading(true);

    try {
      await API.post("/orders", {
        items: cartItems,
        totalAmount: subtotal,
        paymentMethod,
      });

      toast.success("Order placed successfully");

      // ✅ Clear cart from localStorage
      localStorage.removeItem("cart");
      
      // ✅ Navigate to orders page
      navigate("/orders");
      
    } catch (err) {
      console.log("ORDER ERROR 👉", err.response?.data || err.message);
      
      if (err.response?.status === 401) {
        toast.error("Session expired. Please login again");
        localStorage.removeItem("token");
        localStorage.removeItem("user");
        navigate("/");
      } else {
        toast.error(err.response?.data?.message || "Order failed");
      }
    } finally {
      setLoading(false);
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
          
          {cartItems.length === 0 ? (
            <p className="text-sm text-gray-500">No items in cart</p>
          ) : (
            <>
              <div className="space-y-2 mb-4">
                {cartItems.map((item) => (
                  <div key={item.id} className="flex justify-between text-sm">
                    <span className="text-gray-600">
                      {item.name} (x{item.qty})
                    </span>
                    <span>₹{item.price * item.qty}</span>
                  </div>
                ))}
              </div>
              
              <div className="border-t pt-4">
                <div className="flex justify-between text-sm font-medium">
                  <span>Total Payable</span>
                  <span className="text-lg">₹{subtotal}</span>
                </div>
              </div>
            </>
          )}
        </div>

        <div>
          <div className="mb-6">
            <h4 className="tracking-[0.25em] text-xs mb-4">SELECT PAYMENT METHOD</h4>
            
            <div className="space-y-3">
              <label className="flex items-center gap-3 cursor-pointer">
                <input
                  type="radio"
                  name="payment"
                  value="COD"
                  checked={paymentMethod === "COD"}
                  onChange={(e) => setPaymentMethod(e.target.value)}
                  className="w-4 h-4"
                />
                <span className="text-sm">Cash on Delivery (COD)</span>
              </label>

              <label className="flex items-center gap-3 cursor-pointer">
                <input
                  type="radio"
                  name="payment"
                  value="Online"
                  checked={paymentMethod === "Online"}
                  onChange={(e) => setPaymentMethod(e.target.value)}
                  className="w-4 h-4"
                />
                <span className="text-sm">Online Payment</span>
              </label>
            </div>
          </div>

          <button
            onClick={handlePayNow}
            disabled={loading || cartItems.length === 0}
            className="mt-10 w-full bg-[#6b1f0f] text-white py-4 tracking-wide text-sm disabled:opacity-50 disabled:cursor-not-allowed"
          >
            {loading ? "PLACING ORDER..." : "Pay Now"}
          </button>

          <p className="text-xs text-center mt-4 text-gray-500">
            *Extra 5% off on Prepaid orders.
          </p>
        </div>
      </div>

      <Footer />
    </section>
  );
};

export default BuyItem;