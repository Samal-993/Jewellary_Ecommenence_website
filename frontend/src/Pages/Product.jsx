import React, { useState } from "react";
import { useParams } from "react-router-dom";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import { products } from "../Data/products";

const Product = () => {
  const { id } = useParams();
  const product = products[id];

  // SAFETY CHECK
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
        <div className="grid grid-cols-[1fr_1.1fr] gap-20">

          {/* LEFT IMAGE */}
          <div>
            <img
              src={mainImg}
              alt={product.name}
              className="w-full h-[440px] object-cover mb-4"
            />

            <div className="flex gap-3">
              {product.images.map((img, index) => (
                <img
                  key={index}
                  src={img}
                  onClick={() => setMainImg(img)}
                  className={`w-20 h-20 object-cover cursor-pointer border ${
                    mainImg === img ? "border-black" : "border-gray-300"
                  }`}
                />
              ))}
            </div>
          </div>

          {/* RIGHT DETAILS */}
          <div>
            <h1 className="text-xl font-serif mb-2">
              {product.name}
            </h1>

            <div className="text-sm mb-4">
              <span className="text-lg font-medium text-[#402d27]">
                ₹{product.price}
              </span>
              <span className="line-through text-gray-400 ml-3">
                ₹{product.oldPrice}
              </span>
              <span className="ml-3 text-red-600">
                -{product.discount}
              </span>
            </div>

            {/* Quantity */}
            <div className="flex items-center gap-4 mb-5">
              <button onClick={() => qty > 1 && setQty(qty - 1)}>−</button>
              <span>{qty}</span>
              <button onClick={() => setQty(qty + 1)}>+</button>
            </div>

            <button className="w-full bg-[#5b1f14] text-white py-3 mb-3">
              ADD TO CART
            </button>

            <button className="w-full border border-[#5b1f14] py-3 mb-6">
              BUY IT NOW
            </button>

            <p className="text-sm text-gray-600 mb-6">
              {product.description}
            </p>

            <ul className="list-disc pl-5 text-sm text-gray-600">
              {product.details.map((d, i) => (
                <li key={i}>{d}</li>
              ))}
            </ul>
          </div>
        </div>
      </div>

      <Footer />
    </section>
  );
};

export default Product;
