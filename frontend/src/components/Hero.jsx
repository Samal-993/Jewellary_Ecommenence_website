
import { Link } from "react-router-dom";
import hero from "../../public/hero.png";

const Hero = () => {
  return (
    <section className="relative w-full h-[85vh]  overflow-hidden">
      
      {/* Background Image */}
      <img
        src={hero}
        alt="Hero"
        className="absolute inset-0 w-full h-full object-cover"
      />

      {/* Overlay (soft warm tone) */}
      <div className="absolute inset-0 bg-[#f5e2c8]/0"></div>

      {/* Content */}
      <div className="relative z-10 h-full flex items-center px-20">
        <div className="max-w-xl  pb-45">
          
          <h1 className="text-[94px] leading-[1.05] font-serif text-[#3a2f2a]">
            Sparkle<br />
            
           
          </h1>

          <h1 className="text-[94px] leading-[1.05] font-serif text-[#8c7b6d]">Redefined</h1>

          <p className="mb-7 text-sm tracking-wide text-[#6b5a4d]">
            From Whispers To Wonders
          </p>

          <Link to="/jewellery" className="mt-1 px-8 py-3 border border-[#3a2f2a] text-sm tracking-widest text-[#3a2f2a] hover:bg-[#3a2f2a] hover:text-white rounded-3xl transition">
            SHOP NOW
          </Link>
        </div>
      </div>

      {/* Quote (Right Side) */}
      <div className="absolute right-16 top-28 max-w-[320px] text-right text-[#3a2f2a]">
  
  {/* Icon */}
  <span className="block mb-2 text-lg">✦</span>

  {/* Quote */}
  <p className="text-[18px] leading-[1.35] font-serif">
    “Jewellery That Dances With Your Dreams, Far Beyond Ordinary Sparkle”
  </p>

  {/* Author */}
  <p className="mt-4 text-sm italic text-[#5a4a3f]">
    – Pareenita Visionaries
  </p>
</div>


    </section>
  );
};

export default Hero;
