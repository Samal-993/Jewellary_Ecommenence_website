import React from "react";

import s1 from "../../public/s1.png";   // hero
import s2 from "../../public/s2.jpg";   // sarees
import s3 from "../../public/s3.jpg";   // kurta
import s4 from "../../public/s4.jpg";   // lehenga

import s5 from "../../public/s5.jpg";
import s6 from "../../public/s6.jpg";
import s7 from "../../public/s7.jpg";
import s8 from "../../public/s8.png";

import s9 from "../../public/s9.jpg";
import s10 from "../../public/s10.jpg";
import s11 from "../../public/s11.jpg";

import s13 from "../../public/s13.jpg";
import Footer from "../components/Footer";

const HomePage = () => {
  return (
    <section className="bg-[#fffaf0]">

      {/* ================= HERO ================= */}
      <div className="relative">
        <img src={s1} className="w-full h-[460px] object-cover" />

        <div className="absolute inset-0 flex items-center justify-center">
          <div className="text-center max-w-xl">
            <p className="tracking-[0.4em] text-sm text-[#7a1f16] mb-2">
              EVERYDAY ELEGANCE
            </p>
            <p className="italic text-sm text-[#7a1f16] mb-3">
              Comfort Meets Craftsmanship In Every Thread
            </p>
            <p className="tracking-widest text-sm mb-4">
              UP TO 50% OFF
            </p>
            <button className="bg-[#7a1f16] text-white px-8 py-3 text-xs tracking-widest">
              SHOP NOW
            </button>
          </div>
        </div>
      </div>

      {/* ================= CATEGORIES ================= */}
      <div className="px-24 py-20">
        <h3 className="text-center tracking-[0.35em] text-xs mb-2">
          CELEBRATE YOUR SIGNATURE STYLE
        </h3>
        <p className="text-center text-xs italic text-gray-500 mb-12">
          Explore Pareenita’s Most-Loved Categories
        </p>

        <div className="grid grid-cols-3 gap-12">
          {[
            { img: s2, label: "SAREES" },
            { img: s3, label: "KURTA SETS" },
            { img: s4, label: "LEHENGAS" },
          ].map((c, i) => (
            <div key={i} className="text-center">
              <img
                src={c.img}
                className="w-full h-[420px] object-cover mb-4"
              />
              <p className="tracking-widest text-sm">{c.label}</p>
            </div>
          ))}
        </div>
      </div>

      {/* ================= FRESH FROM ATELIER ================= */}
      <div className="px-24 pb-24">
        <h3 className="text-center tracking-[0.35em] text-xs mb-2">
          FRESH FROM OUR ATELIER
        </h3>
        <p className="text-center text-xs italic text-gray-500 mb-12">
          Handcrafted Pieces That Just Arrived
        </p>

        <div className="flex justify-center gap-4 mb-10">
          {["ALL NEW", "WEDDING", "FESTIVE", "EVERYDAY"].map((t) => (
            <button
              key={t}
              className="border px-4 py-1 text-xs tracking-widest"
            >
              {t}
            </button>
          ))}
        </div>

        <div className="grid grid-cols-4 gap-8">
          {[s5, s6, s7, s8].map((img, i) => (
            <div key={i} className="text-center">
              <div className="relative">
                <img
                  src={img}
                  className="w-full h-[360px] object-cover"
                />
                <span className="absolute top-3 left-3 bg-[#7a1f16] text-white text-[10px] px-2 py-1">
                  NEW
                </span>
              </div>

              <p className="text-xs mt-3">
                Pareenita Signature Wear
              </p>
              <p className="text-sm font-medium">₹ 6,999</p>
            </div>
          ))}
        </div>

        <div className="flex justify-center mt-12">
          <button className="bg-[#7a1f16] text-white px-10 py-3 text-xs tracking-widest">
            EXPLORE COLLECTIONS
          </button>
        </div>
      </div>

      {/* ================= INSTAGRAM ================= */}
      <div className="px-24 pb-20">
        <h3 className="text-center tracking-[0.35em] text-xs mb-2">
          YOUR PAREENITA STYLE
        </h3>
        <p className="text-center text-xs italic text-gray-500 mb-10">
          Real Stories, Real Celebrations, Real Women
        </p>

        <div className="grid grid-cols-3 gap-8">
          {[s9, s10, s11].map((img, i) => (
            <div key={i}>
              <img
                src={img}
                className="w-full h-[420px] object-cover mb-3"
              />
              <p className="text-xs text-gray-500">
                @pareenita
              </p>
            </div>
          ))}
        </div>

        <h2 className="text-center text-6xl text-[#e8d8b4] font-serif mt-16">
          PAREENITA
        </h2>
        <p className="text-center italic mt-2">
          Follow Us on Instagram
        </p>
      </div>

      {/* ================= LOVED BY THOUSANDS ================= */}
      <div className="px-24 pb-20">
        <h3 className="tracking-[0.35em] text-xs mb-2">
          LOVED BY THOUSANDS
        </h3>
        <p className="text-xs italic text-gray-500 mb-10">
          Real Experiences From Our Pareenita Family
        </p>

        <div className="grid grid-cols-2 gap-16 items-center">
          <img
            src={s13}
            className="w-full h-[420px] object-cover"
          />

          <div>
            <p className="text-5xl text-[#7a1f16] mb-4">“</p>
            <p className="text-sm leading-relaxed mb-4">
              Lorem ipsum dolor sit amet consectetur. Facilisis non
              scelerisque nisl elementum quis quam. Velit scelerisque
              curabitur lectus ut amet dictumst.
            </p>
            <p className="text-xs font-medium">Jenny Wilson</p>
          </div>
        </div>
      </div>
<Footer/>
    </section>
  );
};

export default HomePage;
