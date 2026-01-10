import React from "react";
import dis1 from "../../public/dis1.png"; // big banner
import dis2 from "../../public/dis2.png"; // small right banner
import dis3 from "../../public/dis3.png"; // stats banner
import dis4 from "../../public/dis4.png"; // product 1
import dis5 from "../../public/dis5.png"; // product 2

const Banner = () => {
  return (
    <section className="px-16 py-20 bg-[#fffdf5]">
      
      {/* ===== TOP ROW ===== */}
      <div className="grid grid-cols-3 gap-6 mb-6">

        {/* BIG LEFT BANNER */}
        <div
          className="col-span-2 h-[260px] rounded-2xl bg-cover bg-center relative"
          style={{ backgroundImage: `url(${dis1})` }}
        >
          <div className="absolute inset-0 flex items-center px-12">
            <div className="max-w-xl">
              <h2 className="text-[34px] leading-tight font-serif text-[#3a2f2a]">
                Elevate Your <span className="italic">Glow</span> Where <br />
                heritage <span className="italic">shines</span> with edge
              </h2>

              <p className="mt-3 text-sm text-[#6b5a4d]">
                Discover ethnic culture reimagined for modern icons.
                Limited drops. Unmatched artistry.
              </p>

              <button className="mt-5 px-5 py-2 bg-[#3a2f2a] text-white text-sm">
                Shop New Arrivals →
              </button>
            </div>
          </div>
        </div>

        {/* RIGHT SMALL BANNER */}
        <div
          className="h-[260px] rounded-2xl bg-cover bg-center flex items-end p-6"
          style={{ backgroundImage: `url(${dis2})` }}
        >
          <h3 className="text-white text-sm font-serif tracking-wide">
            NEW SEASON.<br />NEW SPARKLE!
          </h3>
        </div>
      </div>

      {/* ===== BOTTOM ROW ===== */}
      <div className="grid grid-cols-3 gap-6">

        {/* STATS BANNER */}
        <div
          className="col-span-2 h-[120px] rounded-2xl bg-cover bg-center"
          style={{ backgroundImage: `url(${dis3})` }}
        >
          <div className="h-full flex items-center justify-center">
            <div className="flex gap-20 text-center">
              <div>
                <h3 className="text-2xl font-semibold text-[#3a2f2a]">3M+</h3>
                <p className="text-xs text-[#6b5a4d]">
                  Women Celebrating<br />in Pareenita
                </p>
              </div>

              <div>
                <h3 className="text-2xl font-semibold text-[#3a2f2a]">15K+</h3>
                <p className="text-xs text-[#6b5a4d]">
                  Handcrafted Products
                </p>
              </div>

              <div>
                <h3 className="text-2xl font-semibold text-[#3a2f2a] flex items-center justify-center gap-1">
                  4.9 <span className="text-yellow-500">★</span>
                </h3>
                <p className="text-xs text-[#6b5a4d]">
                  Average Customer Joy
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* TWO SMALL IMAGES SIDE BY SIDE */}
        <div className="grid grid-cols-2 gap-6">
          <div
            className="h-[120px] rounded-2xl bg-cover bg-center"
            style={{ backgroundImage: `url(${dis4})` }}
          ></div>

          <div
            className="h-[120px] rounded-2xl bg-cover bg-center"
            style={{ backgroundImage: `url(${dis5})` }}
          ></div>
        </div>
      </div>

    </section>
  );
};

export default Banner;
