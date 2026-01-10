import React from "react";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

import p1 from "../../public/ring1.jpg";
import p2 from "../../public/ring2.jpg";

const BuyItem = () => {
  return (
    <section className="bg-[#fffdf5] min-h-screen">
      <Navbar />

      {/* ===== PAGE TITLE ===== */}
      <h2 className="text-center tracking-[0.35em] text-sm text-[#9c1c2f] mt-10 mb-12">
        PAYMENT METHODS
      </h2>

      {/* ===== MAIN LAYOUT ===== */}
      <div className="px-20 grid grid-cols-[420px_1fr] gap-20">

        {/* ================= LEFT SIDE ================= */}
        <div className="space-y-6">

          {/* CART SUMMARY */}
          <div className="bg-[#faf7f1] p-6">
            <h4 className="tracking-[0.25em] text-xs mb-4">CART SUMMARY</h4>

            <div className="space-y-3 text-sm">
              <div className="flex justify-between">
                <span>Subtotal</span>
                <span>₹99.00</span>
              </div>

              <div className="flex justify-between">
                <span className="flex items-center gap-1">
                  Shipping charges
                  <i className="ri-information-line text-xs"></i>
                </span>
                <span>₹5.00</span>
              </div>

              <div className="flex justify-between">
                <span>Total Discount</span>
                <span>- ₹100.00</span>
              </div>

              <div className="flex justify-between">
                <span className="flex items-center gap-1">
                  Tax estimate
                  <i className="ri-information-line text-xs"></i>
                </span>
                <span>₹8.32</span>
              </div>

              <div className="flex justify-between font-medium pt-3 border-t">
                <span>Total Payable</span>
                <span>₹27000</span>
              </div>
            </div>
          </div>

          {/* COD INFO */}
          <div className="bg-[#faf7f1] p-4 text-sm">
            Your order is eligible for{" "}
            <span className="text-[#9c1c2f] font-medium">
              Cash on Delivery
            </span>
          </div>

          {/* PRODUCT SUMMARY */}
          <div className="bg-[#faf7f1] p-6">
            <h4 className="tracking-[0.25em] text-xs mb-4">
              PRODUCT SUMMARY
            </h4>

            {/* Item 1 */}
            <div className="flex gap-4 mb-4">
              <img src={p1} className="w-16 h-16 object-cover" />
              <div className="flex-1 text-sm">
                <p className="font-medium">Lorem Ipsum</p>
                <p className="text-xs text-gray-500">
                  Lorem ipsum dolor sit amet consectetur. Amet amet orci semper et
                  diam ut sagittis cras diam.
                </p>
              </div>
              <span className="text-sm">₹27000</span>
            </div>

            {/* Item 2 */}
            <div className="flex gap-4">
              <img src={p2} className="w-16 h-16 object-cover" />
              <div className="flex-1 text-sm">
                <p className="font-medium">Lorem Ipsum</p>
                <p className="text-xs text-gray-500">
                  Lorem ipsum dolor sit amet consectetur. Amet amet orci semper et
                  diam ut sagittis cras diam.
                </p>
              </div>
              <span className="text-sm">₹27000</span>
            </div>
          </div>
        </div>

        {/* ================= RIGHT SIDE ================= */}
        <div>

          {/* PAYMENT OPTIONS */}
          <div className="space-y-4 text-sm">

            <label className="flex items-center gap-3">
              <input type="radio" name="payment" />
              <span>Cash on Delivery</span>
              <i className="ri-cash-line"></i>
            </label>

            <label className="flex items-center gap-3">
              <input type="radio" name="payment" />
              <span>Credit/Debit Card</span>
              <i className="ri-bank-card-line"></i>
            </label>

            <label className="flex items-center gap-3">
              <input type="radio" name="payment" />
              <span>UPI</span>
              <span className="font-medium">UPI</span>
            </label>

            <label className="flex items-center gap-3">
              <input type="radio" name="payment" />
              <span>Net Banking</span>
              <i className="ri-bank-line"></i>
            </label>
          </div>

          {/* PAY NOW BUTTON */}
          <button className="mt-10 w-full bg-[#6b1f0f] text-white py-4 tracking-wide text-sm">
            Pay Now
          </button>

          {/* Small dot (centered) */}
          <div className="flex justify-center mt-2">
            <span className="w-1.5 h-1.5 bg-[#6b1f0f] rounded-full"></span>
          </div>
        </div>
      </div>

      <Footer />
    </section>
  );
};

export default BuyItem;

