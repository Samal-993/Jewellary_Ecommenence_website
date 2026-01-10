import pic1 from "../../public/pic1.jpg";
import pic2 from "../../public/pic2.jpg";
import pic3 from "../../public/pic3.jpg";
import pic4 from "../../public/pic4.jpg";
import pic5 from "../../public/pic5.jpg";
import pic6 from "../../public/pic6.png";

const Category = () => {
  return (
    <section className="bg-[#fffdf5] px-16 py-20">
      
      {/* Small top line */}
    <div className="flex items-center justify-center gap-6 mb-14">
  <div className="flex-1 h-px bg-black/20"></div>

  <div className="text-center">
    <h3 className="text-2xl font-serif">Shop By Category</h3>
    <p className="text-xs text-gray-500 mt-1">
      Brilliant design and unparalleled craftsmanship.
    </p>
  </div>

  <div className="flex-1 h-px bg-black/20"></div>
</div>


      {/* Cards */}
      <div className="flex justify-center gap-6">
        
        <div className="text-center w-[180px]">
          <img src={pic1} className="rounded-2xl mb-3 w-full h-[200px] object-cover" />
          <p className="text-sm">Necklaces & Pendants</p>
        </div>

        <div className="text-center w-[180px]">
          <img src={pic2} className="rounded-2xl mb-3 w-full h-[200px] object-cover" />
          <p className="text-sm">Earrings</p>
        </div>

        <div className="text-center w-[180px]">
          <img src={pic3} className="rounded-2xl mb-3 w-full h-[200px] object-cover" />
          <p className="text-sm">Bracelets</p>
        </div>

        <div className="text-center w-[180px]">
          <img src={pic4} className="rounded-2xl mb-3 w-full h-[200px] object-cover" />
          <p className="text-sm">Rings</p>
        </div>

        <div className="text-center w-[180px]">
          <img src={pic5} className="rounded-2xl mb-3 w-full h-[200px] object-cover" />
          <p className="text-sm">Engagement Rings</p>
        </div>

        <div className="text-center w-[180px]">
          <img src={pic6} className="rounded-2xl mb-3 w-full h-[200px] object-cover" />
          <p className="text-sm">Bangles</p>
        </div>

      </div>
    </section>
  );
};

export default Category;
