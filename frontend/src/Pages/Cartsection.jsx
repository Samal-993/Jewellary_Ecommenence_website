import React from "react";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import b1 from "../../public/b1.jpg";
import b2 from "../../public/b2.jpg";

const CartSection = ({
  openCart,
  setOpenCart,
  cartItems,
  removeFromCart,
  updateQty,
}) => {
  const navigate = useNavigate();
  
  const subtotal = cartItems.reduce(
    (sum, item) => sum + item.price * item.qty,
    0
  );

  const handleCheckout = () => {
    const token = localStorage.getItem("token");
    
    if (!token) {
      toast.error("Please login to checkout");
      setOpenCart(false);
      return;
    }

    if (cartItems.length === 0) {
      toast.error("Cart is empty");
      return;
    }

    // ✅ Navigate to payment page
    setOpenCart(false);
    navigate("/payment");
  };

  return (
    <>
      {/* OVERLAY */}
      {openCart && (
        <div
          className="fixed inset-0 bg-black/40 z-40"
          onClick={() => setOpenCart(false)}
        />
      )}

      {/* SIDEBAR */}
      <div
        className={`fixed top-0 right-0 h-full w-[380px] bg-white z-50 transition-transform duration-300 ${
          openCart ? "translate-x-0" : "translate-x-full"
        }`}
      >
        {/* HEADER */}
        <div className="flex justify-between items-center px-4 py-4 border-b">
          <h2 className="text-xs tracking-widest uppercase">
            Cart {cartItems.length}
          </h2>
          <button
            className="w-6 h-6 rounded-full bg-gray-100 flex items-center justify-center"
            onClick={() => setOpenCart(false)}
          >
            ✕
          </button>
        </div>

        {/* CONTENT */}
        <div className="flex flex-col h-[calc(100%-64px)]">
          {/* CART ITEMS */}
          <div className="flex-1 overflow-y-auto px-4 py-4 space-y-4">
            {cartItems.length === 0 && (
              <p className="text-sm text-center text-gray-500">
                Your cart is empty
              </p>
            )}

            {cartItems.map((item) => (
              <div
                key={item.id}
                className="flex gap-3 border-b pb-4"
              >
                <img
                  src={item.image}
                  alt={item.name}
                  className="w-20 h-20 object-cover bg-[#f6f3ee]"
                />

                <div className="flex-1 text-sm">
                  <p className="font-medium leading-snug">
                    {item.name}
                  </p>

                  {/* QTY */}
                  <div className="flex items-center gap-2 mt-2">
                    <button
                      className="border px-2 text-sm"
                      onClick={() =>
                        updateQty(item.id, item.qty - 1)
                      }
                    >
                      −
                    </button>
                    <span className="min-w-[16px] text-center">
                      {item.qty}
                    </span>
                    <button
                      className="border px-2 text-sm"
                      onClick={() =>
                        updateQty(item.id, item.qty + 1)
                      }
                    >
                      +
                    </button>
                  </div>
                </div>

                <div className="flex flex-col items-end justify-between">
                  <button
                    onClick={() => removeFromCart(item.id)}
                    className="text-gray-400 hover:text-black"
                  >
                    ✕
                  </button>
                  <span className="text-sm">
                    ₹ {item.price}
                  </span>
                </div>
              </div>
            ))}

            {/* EXTRA SPECIAL */}
            {cartItems.length > 0 && (
              <>
                <p className="text-xs text-center mt-6 mb-3">
                  Make your order <em>extra special</em>
                </p>

                <div className="space-y-3">
                  <div className="flex items-center justify-between bg-[#f6f3ee] p-3">
                    <div className="flex items-center gap-3">
                      <img
                        src={b1}
                        alt="Gift Bag"
                        className="w-10 h-10 object-cover"
                      />
                      <div className="text-xs">
                        <p>Gift Bag</p>
                        <p className="text-gray-500">₹ 50</p>
                      </div>
                    </div>
                    <button className="bg-[#c9a44a] text-white text-xs px-3 py-1">
                      ADD
                    </button>
                  </div>

                  <div className="flex items-center justify-between bg-[#f6f3ee] p-3">
                    <div className="flex items-center gap-3">
                      <img
                        src={b2}
                        alt="Jewellery Organizer"
                        className="w-10 h-10 object-cover"
                      />
                      <div className="text-xs">
                        <p>Jewellery Organizer</p>
                        <p className="text-gray-500">₹ 200</p>
                      </div>
                    </div>
                    <button className="bg-[#c9a44a] text-white text-xs px-3 py-1">
                      ADD
                    </button>
                  </div>
                </div>
              </>
            )}
          </div>

          {/* FOOTER */}
          {cartItems.length > 0 && (
            <div className="border-t px-4 py-4">
              <div className="flex justify-between text-sm mb-3">
                <span>Shipping</span>
                <span className="text-gray-400 text-xs">
                  Calculated at checkout
                </span>
              </div>

              <div className="flex justify-between text-sm font-medium mb-4">
                <span>Subtotal</span>
                <span>₹ {subtotal}</span>
              </div>

              <button 
                onClick={handleCheckout}
                className="w-full bg-[#c9a44a] text-black py-3 text-sm tracking-widest hover:bg-[#b89340] transition-colors"
              >
                Checkout
              </button>

              <p className="text-[10px] text-center mt-2 text-gray-500">
                *Extra 5% off on Prepaid orders.
              </p>
            </div>
          )}
        </div>
      </div>
    </>
  );
};

export default CartSection;