import React, { useState } from "react";
import { Link, useParams } from "react-router-dom";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import { products } from "../Data/products";

const Product = () => {
  const { id } = useParams();
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

  return (
    <section className="bg-[#fffdf5]">
      <Navbar />

      <div className="px-16 py-12">
        <div className="grid grid-cols-[1fr_1.15fr] gap-20">

          {/* ================= LEFT ================= */}
          <div>
            {/* MAIN IMAGE */}
            <div className="relative mb-4">
              <img
                src={mainImg}
                alt={product.name}
                className="w-full h-[440px] object-cover"
              />

              {/* Zoom text */}
              <div className="absolute bottom-3 left-3 text-xs text-gray-500 flex items-center gap-1">
                <i className="ri-search-line"></i>
                Zoom the image with mouse
              </div>
            </div>

            {/* THUMBNAILS */}
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

          {/* ================= RIGHT ================= */}
          <div>
            {/* TITLE */}
            <h1 className="text-[18px] font-serif mb-2">
              {product.name}
            </h1>

            {/* PRICE */}
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

            {/* QTY + ICONS */}
            {/* ===== QTY + ADD TO CART + ICONS ===== */}
<div className="flex items-center gap-3 mb-4">

  {/* Quantity Box */}
  <div className="flex items-center border border-[#c7a4a0] rounded-md overflow-hidden">
    <button className="px-4 py-2 text-lg">+</button>
    <span className="px-6 py-2 border-x">1</span>
    <button className="px-4 py-2 text-lg">−</button>
  </div>

  {/* Add to Cart */}
  <button className="flex-1 bg-[#6b1f0f] text-white py-3 uppercase tracking-wide text-sm rounded-md">
    ADD TO CART
  </button>

  {/* Wishlist */}
  <button className="w-12 h-12 border rounded-md flex items-center justify-center">
    <i className="ri-heart-line text-lg"></i>
  </button>

  {/* Share */}
  <button className="w-12 h-12 border rounded-md flex items-center justify-center">
    <i className="ri-share-line text-lg"></i>
  </button>
</div>

{/* ===== BUY IT NOW ===== */}

 
<Link
  to="/payment"
  className="block w-full bg-[#6b1f0f] text-white py-4 uppercase tracking-wide text-sm rounded-md text-center"
>
  BUY IT NOW
</Link>




            

            {/* NOTE */}
            <p className="text-xs text-gray-600 mt-6">
              This feature is only valid for domestic deliveries.
              For international deliveries, expect your package within 7–10 days.
            </p>

            {/* ABOUT */}
            <div className=" pt-4 mb-4">
              <h4 className="text-sm font-medium mb-2">
                ABOUT PRODUCT
              </h4>

              <p className="text-sm text-gray-600 mb-3 leading-relaxed">
                {product.description}
              </p>

              <ul className="list-disc pl-5 text-sm text-gray-600 space-y-1">
                {product.details.map((d, i) => (
                  <li key={i}>{d}</li>
                ))}
              </ul>
            </div>

            {/* ACCORDION SECTIONS */}
            {[
              "AVAILABLE OFFERS",
              "SHIPPING POLICY",
              "RETURNS POLICY",
              "IMPORTER / MARKETER / PACKER DETAILS",
            ].map((item) => (
              <div
                key={item}
                className="border-t py-3 text-sm flex justify-between items-center cursor-pointer"
              >
                {item}
                <i className="ri-arrow-down-s-line"></i>
              </div>
            ))}
          </div>
        </div>

        {/* ================= FREQUENTLY BOUGHT ================= */}
        <div className="mt-20">
          <h3 className="text-sm mb-4">
            FREQUENTLY BOUGHT TOGETHER
          </h3>

          <div className="flex items-center gap-6">
            {product.images.slice(0, 3).map((img, i) => (
              <img
                key={i}
                src={img}
                className="w-20 h-20 object-cover border"
              />
            ))}

            <button className="bg-[#c9a44a] text-white px-6 py-2 text-xs">
              ADD SELECTED TO CART
            </button>
          </div>
        </div>
      </div>

      <Footer />
    </section>
  );
};

export default Product;
