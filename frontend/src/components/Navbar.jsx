import React from "react";
import logo from "../../public/logo.png";
import { Link, NavLink } from "react-router-dom";

const menuItemClass =
  "relative cursor-pointer leading-none flex flex-col items-center";

const Navbar = () => {
  return (
    <nav className="bg-[#fffdf5] border-b border-black/10">
      {/* TOP BAR */}
      <div className="flex items-center justify-between px-10 py-4">
        <i className="ri-menu-line text-xl cursor-pointer"></i>

        <img
          src={logo}
          alt="Pareenita"
          className="h-22 object-contain filter brightness-50 contrast-825"
        />

        <div className="flex items-center gap-5 text-lg">
          <i className="ri-search-line cursor-pointer"></i>
          <div className="group relative">
            <i className="ri-user-6-line cursor-pointer"></i>

            <div className="group-hover:block hidden absolute dropdown-menu right-0 pt-4">
              <div className="flex flex-col gap-2 w-36 py-2 px-3 bg-slate-100 text-gray-500 rounded">
                <p className="cursor-pointer hover:text-black">My Profile</p>
                <p className="cursor-pointer hover:text-black">Orders</p>
                <p className="cursor-pointer hover:text-black">Logout</p>
              </div>
            </div>
          </div>
          <i className="ri-heart-line cursor-pointer"></i>

          <Link to="/cart" className="relative">
            <i className="ri-shopping-bag-line"></i>
            <p className="absolute right-[-5px] bottom-[-5px] w-4 text-center leading-4 bg-black text-white aspect-square rounded-full  text-[10px]">
              10
            </p>
          </Link>
        </div>
      </div>

      <div className="w-full h-[1px] bg-black/10"></div>

      {/* BOTTOM MENU */}
      <div className="flex items-center justify-center gap-10 h-12 text-[11px] tracking-[0.18em] font-medium">
        {[
          { name: "SAREES", path: "/sarees" },
          { name: "KURTIS", path: "/kurtis" },
          { name: "LEHENGAS", path: "/lehengas" },
          { name: "JEWELLERY", path: "/jewellery" },
          { name: "HANDBAGS", path: "/handbags" },
        ].map((item) => (
          <NavLink
            key={item.name}
            to={item.path}
            className={({ isActive }) =>
              `${menuItemClass} ${isActive ? "text-black" : ""}`
            }
          >
            {/* DOT */}
            <span
              className={`absolute -top-2 w-1.5 h-1.5 rounded-full bg-[#7a1f16] transition-opacity ${
                location.pathname === item.path ? "opacity-100" : "opacity-0"
              }`}
            ></span>

            {item.name}
          </NavLink>
        ))}

        <span className="bg-[#c9a44a] px-4 py-2 leading-none text-black cursor-pointer">
          ZIVAA BOUTIQUE
        </span>
      </div>
    </nav>
  );
};

export default Navbar;
