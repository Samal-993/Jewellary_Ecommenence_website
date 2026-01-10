import React from "react";
import { Link } from "react-router-dom";
import Footer from "../components/Footer";
import ringHero from "../../public/ringBanner.png";
import { products } from "../Data/products";

const Jewellery = ({ addToCart }) => {
  return (
    <section className="bg-[#fffdf5]">
      {/* ================= HERO ================= */}
      <div className="px-16 pt-10 pb-14">
        <div className="bg-[#f6f3ee] rounded-xl overflow-hidden">
          <img
            src={ringHero}
            alt="Sterling Silver"
            className="w-full h-[280px] object-cover"
          />
        </div>
      </div>

      {/* ===== ITEMS PER PAGE & SORT BAR ===== */}
      <div className="px-16 mb-6">
        <div className="flex justify-end items-center gap-6 text-xs text-gray-600">
          <div className="flex items-center gap-2">
            <span>Items per page</span>
            <select className="border border-gray-300 bg-white px-2 py-1 text-xs">
              <option>12</option>
              <option>24</option>
              <option>48</option>
            </select>
          </div>

          <div className="flex items-center gap-2">
            <span>Sort by</span>
            <select className="border border-gray-300 bg-white px-2 py-1 text-xs">
              <option>Featured</option>
              <option>Price: Low to High</option>
              <option>Price: High to Low</option>
              <option>Newest</option>
            </select>
          </div>
        </div>
      </div>

      {/* ================= CONTENT ================= */}
      <div className="px-16 pb-20 grid grid-cols-[240px_1fr] gap-10">
        {/* ========== FILTER SIDEBAR ========== */}
        <aside className="text-sm space-y-8 text-gray-600">
          <div>
            <h4 className="font-medium text-[#402d27] uppercase text-xs mb-3">
              Shop by Type
            </h4>
            <ul className="space-y-2">
              <li><input type="checkbox" /> Engagement Rings</li>
              <li><input type="checkbox" /> Bands</li>
              <li><input type="checkbox" /> Cocktail</li>
              <li><input type="checkbox" /> Solitaires</li>
            </ul>
          </div>

          <div>
            <h4 className="font-medium text-[#402d27] uppercase text-xs mb-3">
              Shop by Look
            </h4>
            <ul className="space-y-2">
              <li><input type="checkbox" /> Gold</li>
              <li><input type="checkbox" /> Silver</li>
              <li><input type="checkbox" /> Pearl</li>
              <li><input type="checkbox" /> Kundan</li>
              <li><input type="checkbox" /> American Diamond</li>
            </ul>
          </div>

          <div>
            <h4 className="font-medium text-[#402d27] uppercase text-xs mb-3">
              Shop by Price
            </h4>
            <ul className="space-y-2">
              <li><input type="checkbox" /> 0–499</li>
              <li><input type="checkbox" /> 500–999</li>
              <li><input type="checkbox" /> 1000–1499</li>
              <li><input type="checkbox" /> 1500–1999</li>
              <li><input type="checkbox" /> 2000 & above</li>
            </ul>
          </div>
        </aside>

        {/* ========== PRODUCT GRID ========== */}
        <div className="grid grid-cols-4 gap-x-8 gap-y-12">
          {Object.entries(products).map(([id, product]) => (
            <Link
              key={id}
              to={`/product/${id}`}
              className="text-center block"
            >
              {/* Image */}
              <div className="mb-3 w-full h-[240px] overflow-hidden">
                <img
                  src={product.images[0]}
                  alt={product.name}
                  className="w-full h-full object-cover"
                />
              </div>

              {/* Text */}
              <p className="text-xs text-gray-500 mb-1">Rings</p>
              <p className="text-sm mb-2">{product.name}</p>

              {/* Price */}
              <div className="text-sm mb-3">
                <span className="line-through text-gray-400 mr-2">
                  ₹{product.oldPrice}
                </span>
                <span className="font-medium">₹{product.price}</span>
                <span className="ml-2 text-[10px] bg-[#f3e7c9] px-2 py-0.5">
                  Save ₹700
                </span>
              </div>

              {/* ADD TO CART BUTTON */}
              <button
                onClick={(e) => {
                  e.preventDefault(); // stop navigation
                  addToCart({
                    id,
                    name: product.name,
                    price: product.price,
                    image: product.images[0],
                    qty: 1,
                  });
                }}
                className="w-full bg-[#c9a44a] text-white text-[11px] py-2 tracking-wide"
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
