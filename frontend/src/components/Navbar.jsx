import React, { useEffect, useState } from "react";
import logo from "../../public/logo.png";
import { NavLink } from "react-router-dom";
import LoginModal from "../Path/LoginModel";
import CreateAccountModal from "../Path/CreateAccountModal";


const menuItemClass =
  "relative cursor-pointer leading-none flex flex-col items-center";

const Navbar = ({ cartCount, openCart }) => {
  const [openLogin, setOpenLogin] = useState(false);
  const [openCreate, setOpenCreate] = useState(false);
  const [openUserMenu, setOpenUserMenu] = useState(false);

  // ✅ TOKEN CHECK (ONLY THIS MATTERS)
  const token = localStorage.getItem("token");

  return (
    <>
      <nav className="bg-[#fffdf5] border-b border-black/10">
        {/* TOP BAR */}
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
                    // ✅ logged in → open logout menu
                    setOpenUserMenu((prev) => !prev);
                  } else {
                    // ❌ not logged in → open login
                    setOpenLogin(true);
                  }
                }}
              ></i>

              {/* DROPDOWN WHEN LOGGED IN */}
              {token && openUserMenu && (
                <div className="absolute right-0 mt-2 w-36 bg-white border shadow-md text-sm z-50">
                  <p className="px-4 py-2 hover:bg-gray-100 cursor-pointer">
                    Orders
                  </p>

                  <p
                    className="px-4 py-2 hover:bg-gray-100 cursor-pointer text-red-600"
                    onClick={() => {
                      localStorage.removeItem("token");
                      setOpenUserMenu(false);
                      window.location.reload(); // simple & safe
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

        {/* MENU */}
        <div className="flex items-center justify-center gap-10 h-12 text-[11px] tracking-[0.18em] font-medium">
          {[
            { name: "SAREES", path: "/sarees" },
            { name: "KURTIS", path: "/kurtis" },
            { name: "LEHENGAS", path: "/lehengas" },
            { name: "JEWELLERY", path: "/jewellery" },
            { name: "HANDBAGS", path: "/handbags" },
          ].map((item) => (
            <NavLink key={item.name} to={item.path} className={menuItemClass}>
              {item.name}
            </NavLink>
          ))}

          <span className="bg-[#c9a44a] px-4 py-2 cursor-pointer">
            ZIVAA BOUTIQUE
          </span>
        </div>
      </nav>

      {/* LOGIN MODAL (ONLY IF NO TOKEN) */}
      <LoginModal
        open={openLogin}
        onClose={() => setOpenLogin(false)}
        onCreateAccount={() => {
          setOpenLogin(false);
          setOpenCreate(true);
        }}
      />

      {/* CREATE ACCOUNT MODAL */}
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
