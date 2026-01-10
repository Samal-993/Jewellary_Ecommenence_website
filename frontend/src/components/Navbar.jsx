import React, { useState } from "react";
import logo from "../../public/logo.png";
import { NavLink } from "react-router-dom";
import LoginModal from "../Path/LoginModel";
import CreateAccountModal from "../Path/CreateAccountModal";

const menuItemClass =
  "relative cursor-pointer leading-none flex flex-col items-center text-gray-600";

const Navbar = ({ cartCount, openCart }) => {
  const [openLogin, setOpenLogin] = useState(false);
  const [openCreate, setOpenCreate] = useState(false);
  const [openUserMenu, setOpenUserMenu] = useState(false);

  const token = localStorage.getItem("token");

  return (
    <>
      <nav className="bg-[#fffdf5] border-b border-black/10">
        {/* ================= TOP BAR ================= */}
        <div className="flex items-center justify-between px-10 py-4">
          <i className="ri-menu-line text-xl cursor-pointer"></i>

          <img src={logo} alt="Pareenita" className="h-22 object-contain" />

          <div className="flex items-center gap-5 text-lg relative">
            <i className="ri-search-line cursor-pointer"></i>

            {/* USER ICON */}
            <div className="relative">
              <i
                className="ri-user-6-line cursor-pointer"
                onClick={() => {
                  if (token) {
                    setOpenUserMenu((p) => !p);
                  } else {
                    setOpenLogin(true);
                  }
                }}
              ></i>

              {token && openUserMenu && (
                <div className="absolute right-0 mt-2 w-36 bg-white border shadow-md text-sm z-50">
                  <p className="px-4 py-2 hover:bg-gray-100 cursor-pointer">
                    Orders
                  </p>
                  <p
                    className="px-4 py-2 hover:bg-gray-100 cursor-pointer text-red-600"
                    onClick={() => {
                      localStorage.removeItem("token");
                      window.location.reload();
                    }}
                  >
                    Logout
                  </p>
                </div>
              )}
            </div>

            <i className="ri-heart-line cursor-pointer"></i>

            {/* CART ICON */}
            <div className="relative cursor-pointer" onClick={openCart}>
              <i className="ri-shopping-bag-line"></i>
              {cartCount > 0 && (
                <span className="absolute -bottom-1 -right-1 w-4 h-4 bg-black text-white rounded-full text-[10px] text-center">
                  {cartCount}
                </span>
              )}
            </div>
          </div>
        </div>

        <div className="w-full h-[1px] bg-black/10"></div>

        {/* ================= MENU ================= */}
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
                `${menuItemClass} ${
                  isActive ? "text-black" : "text-gray-600"
                }`
              }
            >
              {({ isActive }) => (
                <>
                  {/* 🔴 DOT – THIS MOVES CORRECTLY */}
                  <span
                    className={`absolute -top-2 w-1.5 h-1.5 rounded-full bg-[#7a1f16] transition-opacity duration-200 ${
                      isActive ? "opacity-100" : "opacity-0"
                    }`}
                  ></span>

                  {item.name}
                </>
              )}
            </NavLink>
          ))}

          <span className="bg-[#c9a44a] px-4 py-2 cursor-pointer">
            ZIVAA BOUTIQUE
          </span>
        </div>
      </nav>

      {/* ================= MODALS ================= */}
      <LoginModal
        open={openLogin}
        onClose={() => setOpenLogin(false)}
        onCreateAccount={() => {
          setOpenLogin(false);
          setOpenCreate(true);
        }}
      />

      <CreateAccountModal
        open={openCreate}
        onClose={() => setOpenCreate(false)}
        onLogin={() => {
          setOpenCreate(false);
          setOpenLogin(true);
        }}
      />
    </>
  );
};

export default Navbar;
