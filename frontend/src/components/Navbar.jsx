import React from "react";
import logo from "../../public/logo.png";
import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <nav className="bg-[#fffdf5] border-b border-black/10">
      
      {/* TOP BAR */}
      <div className="flex items-center justify-between px-10 py-4">
        
        {/* Left menu */}
        <i className="ri-menu-line text-xl cursor-pointer"></i>

        {/* Center logo */}
        <img
          src={logo}
          alt="Pareenita"
          className="h-22 object-contain filter brightness-50 contrast-825"
        />

        {/* Right icons */}
        <div className="flex items-center gap-5 text-lg">
          <i className="ri-search-line cursor-pointer"></i>
          <i className="ri-heart-line cursor-pointer"></i>
         <i className="ri-shopping-bag-line"></i>
          <i className="ri-user-6-line cursor-pointer"></i>
        </div>
      </div>
     <div className="w-full h-[1px] bg-black/10"></div>

      {/* BOTTOM MENU */}
     <div className="flex items-center justify-center gap-10 h-12 text-[11px] tracking-[0.18em] font-medium">
  <span className="cursor-pointer leading-none">SAREES</span>
  <span className="cursor-pointer leading-none">KURTIS</span>
  <span className="cursor-pointer leading-none">LEHENGAS</span>
  <Link to="/jewellery" className="cursor-pointer leading-none">JEWELLERY</Link>


  <span className="cursor-pointer leading-none">HANDBAGS</span>
  <span className="bg-[#c9a44a] px-4 py-2 leading-none text-black cursor-pointer">
    ZIVAA BOUTIQUE
  </span>
</div>


    </nav>
  );
};

export default Navbar;
