import React from "react";
import logo from "../../public/logo.png";

const Footer = () => {
  return (
    <footer className="bg-[#3b0f0f] text-[#f5efe6] px-16 pt-16 pb-6">

      {/* NEWSLETTER */}
      <div className="bg-[#fffdf5] text-[#3b0f0f] rounded-xl px-8 py-6 flex items-center justify-between mb-16">
        <div>
          <h4 className="font-medium">Newsletter</h4>
          <p className="text-sm text-gray-600">
            Be the first one to know about discounts, offers and events
          </p>
        </div>

        <div className="flex items-center bg-[#3b0f0f] rounded-lg overflow-hidden">
          <span className="px-3 text-white">
            <i className="ri-mail-line"></i>
          </span>
          <input
            type="email"
            placeholder="Enter your email"
            className="bg-transparent px-2 py-2 text-sm outline-none text-white placeholder:text-gray-300"
          />
          <button className="bg-[#fffdf5] text-[#3b0f0f] px-5 py-2 text-sm font-medium">
            Submit
          </button>
        </div>
      </div>

      {/* LOGO + DESCRIPTION */}
      <div className="text-center max-w-3xl mx-auto mb-12">
        <img src={logo} alt="Pareenita" className="mx-auto h-30 mb-4 filter brightness-2000 contrast-1825" />

        <p className="text-sm text-[#e6d9c9]">
          We are a lorem ipsum dolor sit amet, consectetur adipiscing elit,
          sed do eiusmod tempor incididunt ut labore exercitation ullamco
          laboris nisi ut aliquip ex ea commodo consequat.{" "}
          <span className="underline cursor-pointer">Read More</span>
        </p>
      </div>

      {/* CONTACT INFO */}
      <div className="grid grid-cols-1 md:grid-cols-4 gap-8 text-sm mb-16 text-center md:text-left">
        <div className="flex items-start gap-3 justify-center md:justify-start">
          <i className="ri-phone-line text-lg"></i>
          <div>
            <p className="font-medium">Tel</p>
            <p>310-437-2766</p>
          </div>
        </div>

        <div className="flex items-start gap-3 justify-center md:justify-start">
          <i className="ri-mail-line text-lg"></i>
          <div>
            <p className="font-medium">Mail</p>
            <p>unreal@outlook.com</p>
          </div>
        </div>

        <div className="flex items-start gap-3 justify-center md:justify-start">
          <i className="ri-map-pin-line text-lg"></i>
          <div>
            <p className="font-medium">Address</p>
            <p>706 Campfire Ave. Meriden, CT 06450</p>
          </div>
        </div>

        <div className="flex items-start gap-3 justify-center md:justify-start">
          <i className="ri-printer-line text-lg"></i>
          <div>
            <p className="font-medium">Fax</p>
            <p>+1-000-0000</p>
          </div>
        </div>
      </div>

      {/* LINKS */}
      <div className="grid grid-cols-2 md:grid-cols-4 gap-12 text-sm mb-16">
        <div>
          <h4 className="font-medium mb-4">Shop By Category</h4>
          <ul className="space-y-2 text-[#e6d9c9]">
            <li>Sarees</li>
            <li>Kurtis</li>
            <li>Lehengas</li>
            <li>Jewellery</li>
            <li>Handbags</li>
          </ul>
        </div>

        <div>
          <h4 className="font-medium mb-4">Services</h4>
          <ul className="space-y-2 text-[#e6d9c9]">
            <li>Size Guide & Fit Help</li>
            <li>Track Your Order</li>
            <li>Returns & Exchanges</li>
            <li>Bulk/Corporate Orders</li>
          </ul>
        </div>

        <div>
          <h4 className="font-medium mb-4">Zivaa Boutique</h4>
          <ul className="space-y-2 text-[#e6d9c9]">
            <li>Custom Tailoring</li>
            <li>Personal Styling</li>
            <li>Virtual Consultations</li>
            <li>Bridal Services</li>
          </ul>
        </div>

        <div>
          <h4 className="font-medium mb-4">Support</h4>
          <ul className="space-y-2 text-[#e6d9c9]">
            <li>Contact Us</li>
            <li>FAQs</li>
            <li>Shipping Information</li>
            <li>Care Instructions</li>
            <li>Gift Cards</li>
          </ul>
        </div>
      </div>

      {/* BOTTOM BAR */}
      <div className="border-t border-white/20 pt-6 flex flex-col md:flex-row justify-between text-xs text-[#e6d9c9]">
        <div className="flex gap-4 mb-4 md:mb-0">
          <span>About us</span>
          <span>Contact</span>
          <span>Privacy policy</span>
          <span>Sitemap</span>
          <span>Terms of Use</span>
        </div>
        <p>
          © 2025 Pareenita. All rights reserved. | Designed with ❤️ for Indian celebrations
        </p>
      </div>

    </footer>
  );
};

export default Footer;


