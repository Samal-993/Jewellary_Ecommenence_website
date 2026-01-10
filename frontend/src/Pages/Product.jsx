import React, { useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
import Footer from "../components/Footer";
import { products } from "../Data/products";

const Product = ({ addToCart }) => {
  const { id } = useParams();
  const navigate = useNavigate();
  const product = products[id];

  if (!product) {
    return (
      <div className="h-screen flex items-center justify-center text-xl">
        Product not found
      </div>
    );
  }

  const [mainImg, setMainImg] = useState(product.images[0]);
  const [qty, setQty] = useState(1);

  // ✅ ADD TO CART
  const handleAddToCart = () => {
    addToCart({
      id,
      name: product.name,
      price: product.price,
      image: product.images[0],
      qty,
    });
  };

  // ✅ BUY NOW (TOKEN CHECK)
  const handleBuyNow = () => {
    const token = localStorage.getItem("token");

    if (!token) {
      // ❌ Not logged in → open login modal
      window.dispatchEvent(new Event("open-login"));
      alert("please login")
    } else {
      // ✅ Logged in → go to payment

      navigate("/payment");
    }
  };

  return (
    <section className="bg-[#fffdf5]">
      <div className="px-16 py-12">
        <div className="grid grid-cols-[1fr_1.15fr] gap-20">

          {/* LEFT */}
          <div>
            <div className="relative mb-4">
              <img
                src={mainImg}
                alt={product.name}
                className="w-full h-[440px] object-cover"
              />
            </div>

            <div className="flex gap-3">
              {product.images.map((img, i) => (
                <img
                  key={i}
                  src={img}
                  onClick={() => setMainImg(img)}
                  className={`w-20 h-20 object-cover cursor-pointer border ${
                    mainImg === img ? "border-black" : "border-gray-300"
                  }`}
                />
              ))}
            </div>
          </div>

          {/* RIGHT */}
          <div>
            <h1 className="text-[18px] font-serif mb-2">
              {product.name}
            </h1>

            <div className="flex items-center gap-3 mb-5 text-sm">
              <span className="text-lg font-medium text-[#402d27]">
                ₹{product.price}
              </span>
              <span className="line-through text-gray-400">
                ₹{product.oldPrice}
              </span>
              <span className="text-red-600">
                {product.discount}
              </span>
            </div>

            {/* QTY + ADD TO CART */}
            <div className="flex items-center gap-3 mb-4">
              {/* QTY */}
              <div className="flex items-center border rounded-md overflow-hidden">
                <button
                  className="px-4 py-2 text-lg"
                  onClick={() => setQty((q) => q + 1)}
                >
                  +
                </button>

                <span className="px-6 py-2 border-x">{qty}</span>

                <button
                  className="px-4 py-2 text-lg"
                  onClick={() => setQty((q) => Math.max(1, q - 1))}
                >
                  −
                </button>
              </div>

              {/* ADD TO CART */}
              <button
                onClick={handleAddToCart}
                className="flex-1 bg-[#6b1f0f] text-white py-3 uppercase tracking-wide text-sm rounded-md"
              >
                ADD TO CART
              </button>

              <button className="w-12 h-12 border rounded-md flex items-center justify-center">
                <i className="ri-heart-line text-lg"></i>
              </button>

              <button className="w-12 h-12 border rounded-md flex items-center justify-center">
                <i className="ri-share-line text-lg"></i>
              </button>
            </div>

            {/* BUY IT NOW (UPDATED) */}
            <button
              onClick={handleBuyNow}
              className="block w-full bg-[#6b1f0f] text-white py-4 uppercase tracking-wide text-sm rounded-md text-center"
            >
              BUY IT NOW
            </button>

            <p className="text-xs text-gray-600 mt-6">
              This feature is only valid for domestic deliveries.
            </p>
          </div>
        </div>
      </div>

      <Footer />
    </section>
  );
};

export default Product;
