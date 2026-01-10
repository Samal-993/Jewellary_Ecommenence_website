import React from "react";
import { Link } from "react-router-dom";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import { products } from "../Data/products";

const Jewellery = () => {
  return (
    <section className="bg-[#fffdf5]">
      <Navbar />

      <div className="px-16 py-12">
        <h1 className="text-2xl font-serif mb-8">Jewellery</h1>

        {/* PRODUCT GRID */}
        <div className="grid grid-cols-4 gap-x-8 gap-y-12">
          {Object.entries(products).map(([id, product]) => (
            <Link
              key={id}
              to={`/product/${id}`}
              className="block text-center"
            >
              {/* Image */}
              <div className="w-full h-[240px] overflow-hidden mb-3">
                <img
                  src={product.images[0]}
                  alt={product.name}
                  className="w-full h-full object-cover"
                />
              </div>

              {/* Info */}
              <p className="text-xs text-gray-500 mb-1">Rings</p>
              <p className="text-sm mb-2">{product.name}</p>

              <div className="text-sm mb-3">
                <span className="line-through text-gray-400 mr-2">
                  ₹{product.oldPrice}
                </span>
                <span className="font-medium">
                  ₹{product.price}
                </span>
              </div>

              <button
                onClick={(e) => e.preventDefault()}
                className="w-full bg-[#c9a44a] text-white text-[11px] py-2"
              >
                ADD TO CART
              </button>
            </Link>
          ))}
        </div>
      </div>

      <Footer />
    </section>
  );
};

export default Jewellery;
