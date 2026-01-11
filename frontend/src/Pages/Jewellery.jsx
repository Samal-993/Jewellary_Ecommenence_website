import React, { useState, useMemo } from "react";
import { Link } from "react-router-dom";
import Footer from "../components/Footer";
import ringHero from "../../public/ringBanner.png";
import { products } from "../Data/products";

const Jewellery = ({ addToCart }) => {
  // Filter states
  const [selectedTypes, setSelectedTypes] = useState([]);
  const [selectedLooks, setSelectedLooks] = useState([]);
  const [selectedPriceRanges, setSelectedPriceRanges] = useState([]);
  const [itemsPerPage, setItemsPerPage] = useState(12);
  const [sortBy, setSortBy] = useState("featured");

  // Filter options
  const typeOptions = ["Engagement Rings", "Bands", "Cocktail", "Solitaires"];
  const lookOptions = ["Gold", "Silver", "Pearl", "Kundan", "American Diamond"];
  const priceRanges = [
    { label: "0–499", min: 0, max: 499 },
    { label: "500–999", min: 500, max: 999 },
    { label: "1000–1499", min: 1000, max: 1499 },
    { label: "1500–1999", min: 1500, max: 1999 },
    { label: "2000 & above", min: 2000, max: Infinity },
  ];

  // Handle filter changes
  const toggleFilter = (value, filterState, setFilterState) => {
    if (filterState.includes(value)) {
      setFilterState(filterState.filter((item) => item !== value));
    } else {
      setFilterState([...filterState, value]);
    }
  };

  // Filter and sort products
  const filteredAndSortedProducts = useMemo(() => {
    let productsList = Object.entries(products);

    // Apply price filter
    if (selectedPriceRanges.length > 0) {
      productsList = productsList.filter(([id, product]) => {
        return selectedPriceRanges.some((range) => {
          return product.price >= range.min && product.price <= range.max;
        });
      });
    }

    // Apply type filter (you can customize this based on your product data structure)
    if (selectedTypes.length > 0) {
      productsList = productsList.filter(([id, product]) => {
        // If your products have a 'type' field, use it
        // Otherwise, this will show all products when type filter is selected
        return selectedTypes.some((type) => 
          product.type?.includes(type) || product.name?.toLowerCase().includes(type.toLowerCase())
        );
      });
    }

    // Apply look filter (you can customize this based on your product data structure)
    if (selectedLooks.length > 0) {
      productsList = productsList.filter(([id, product]) => {
        // If your products have a 'look' or 'material' field, use it
        return selectedLooks.some((look) => 
          product.look?.includes(look) || 
          product.material?.includes(look) ||
          product.name?.toLowerCase().includes(look.toLowerCase())
        );
      });
    }

    // Sort products
    switch (sortBy) {
      case "price-low":
        productsList.sort((a, b) => a[1].price - b[1].price);
        break;
      case "price-high":
        productsList.sort((a, b) => b[1].price - a[1].price);
        break;
      case "newest":
        // If you have a date field, use it. Otherwise, reverse the array
        productsList.reverse();
        break;
      default:
        // Featured - keep original order
        break;
    }

    // Apply items per page limit
    return productsList.slice(0, itemsPerPage);
  }, [selectedTypes, selectedLooks, selectedPriceRanges, sortBy, itemsPerPage]);

  // Clear all filters
  const clearAllFilters = () => {
    setSelectedTypes([]);
    setSelectedLooks([]);
    setSelectedPriceRanges([]);
  };

  const activeFiltersCount = selectedTypes.length + selectedLooks.length + selectedPriceRanges.length;

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
        <div className="flex justify-between items-center">
          {/* Active filters and clear button */}
          <div className="flex items-center gap-3">
            {activeFiltersCount > 0 && (
              <>
                <span className="text-xs text-gray-600">
                  {activeFiltersCount} filter{activeFiltersCount > 1 ? "s" : ""} active
                </span>
                <button
                  onClick={clearAllFilters}
                  className="text-xs text-red-600 underline"
                >
                  Clear all
                </button>
              </>
            )}
          </div>

          {/* Sort and items per page */}
          <div className="flex items-center gap-6 text-xs text-gray-600">
            <div className="flex items-center gap-2">
              <span>Items per page</span>
              <select 
                className="border border-gray-300 bg-white px-2 py-1 text-xs"
                value={itemsPerPage}
                onChange={(e) => setItemsPerPage(Number(e.target.value))}
              >
                <option value={12}>12</option>
                <option value={24}>24</option>
                <option value={48}>48</option>
              </select>
            </div>

            <div className="flex items-center gap-2">
              <span>Sort by</span>
              <select 
                className="border border-gray-300 bg-white px-2 py-1 text-xs"
                value={sortBy}
                onChange={(e) => setSortBy(e.target.value)}
              >
                <option value="featured">Featured</option>
                <option value="price-low">Price: Low to High</option>
                <option value="price-high">Price: High to Low</option>
                <option value="newest">Newest</option>
              </select>
            </div>
          </div>
        </div>
      </div>

      {/* ================= CONTENT ================= */}
      <div className="px-16 pb-20 grid grid-cols-[240px_1fr] gap-10">
        {/* ========== FILTER SIDEBAR ========== */}
        <aside className="text-sm space-y-8 text-gray-600">
          {/* Shop by Type */}
          <div>
            <h4 className="font-medium text-[#402d27] uppercase text-xs mb-3">
              Shop by Type
            </h4>
            <ul className="space-y-2">
              {typeOptions.map((type) => (
                <li key={type} className="flex items-center gap-2">
                  <input
                    type="checkbox"
                    id={`type-${type}`}
                    checked={selectedTypes.includes(type)}
                    onChange={() => toggleFilter(type, selectedTypes, setSelectedTypes)}
                    className="cursor-pointer"
                  />
                  <label htmlFor={`type-${type}`} className="cursor-pointer">
                    {type}
                  </label>
                </li>
              ))}
            </ul>
          </div>

          {/* Shop by Look */}
          <div>
            <h4 className="font-medium text-[#402d27] uppercase text-xs mb-3">
              Shop by Look
            </h4>
            <ul className="space-y-2">
              {lookOptions.map((look) => (
                <li key={look} className="flex items-center gap-2">
                  <input
                    type="checkbox"
                    id={`look-${look}`}
                    checked={selectedLooks.includes(look)}
                    onChange={() => toggleFilter(look, selectedLooks, setSelectedLooks)}
                    className="cursor-pointer"
                  />
                  <label htmlFor={`look-${look}`} className="cursor-pointer">
                    {look}
                  </label>
                </li>
              ))}
            </ul>
          </div>

          {/* Shop by Price */}
          <div>
            <h4 className="font-medium text-[#402d27] uppercase text-xs mb-3">
              Shop by Price
            </h4>
            <ul className="space-y-2">
              {priceRanges.map((range) => (
                <li key={range.label} className="flex items-center gap-2">
                  <input
                    type="checkbox"
                    id={`price-${range.label}`}
                    checked={selectedPriceRanges.some(r => r.label === range.label)}
                    onChange={() => toggleFilter(range, selectedPriceRanges, setSelectedPriceRanges)}
                    className="cursor-pointer"
                  />
                  <label htmlFor={`price-${range.label}`} className="cursor-pointer">
                    ₹{range.label}
                  </label>
                </li>
              ))}
            </ul>
          </div>
        </aside>

        {/* ========== PRODUCT GRID ========== */}
        <div>
          {/* Results count */}
          <p className="text-xs text-gray-600 mb-4">
            Showing {filteredAndSortedProducts.length} of {Object.keys(products).length} products
          </p>

          {filteredAndSortedProducts.length === 0 ? (
            <div className="text-center py-20">
              <p className="text-gray-500 mb-4">No products found matching your filters</p>
              <button
                onClick={clearAllFilters}
                className="bg-[#c9a44a] text-white px-6 py-2 text-sm"
              >
                Clear Filters
              </button>
            </div>
          ) : (
            <div className="grid grid-cols-4 gap-x-8 gap-y-12">
              {filteredAndSortedProducts.map(([id, product]) => (
                <Link
                  key={id}
                  to={`/product/${id}`}
                  className="text-center block group"
                >
                  {/* Image */}
                  <div className="mb-3 w-full h-[240px] overflow-hidden bg-[#f6f3ee]">
                    <img
                      src={product.images[0]}
                      alt={product.name}
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                    />
                  </div>

                  {/* Text */}
                  <p className="text-xs text-gray-500 mb-1">Rings</p>
                  <p className="text-sm mb-2 group-hover:text-[#c9a44a] transition-colors">
                    {product.name}
                  </p>

                  {/* Price */}
                  <div className="text-sm mb-3">
                    {product.oldPrice && (
                      <span className="line-through text-gray-400 mr-2">
                        ₹{product.oldPrice}
                      </span>
                    )}
                    <span className="font-medium">₹{product.price}</span>
                    {product.oldPrice && (
                      <span className="ml-2 text-[10px] bg-[#f3e7c9] px-2 py-0.5">
                        Save ₹{product.oldPrice - product.price}
                      </span>
                    )}
                  </div>

                  {/* ADD TO CART BUTTON */}
                  <button
                    onClick={(e) => {
                      e.preventDefault();
                      addToCart({
                        id,
                        name: product.name,
                        price: product.price,
                        image: product.images[0],
                        qty: 1,
                      });
                    }}
                    className="w-full bg-[#c9a44a] text-white text-[11px] py-2 tracking-wide hover:bg-[#b89340] transition-colors"
                  >
                    ADD TO CART
                  </button>
                </Link>
              ))}
            </div>
          )}
        </div>
      </div>

      <Footer />
    </section>
  );
};

export default Jewellery;