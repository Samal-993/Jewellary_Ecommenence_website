import img1 from "../../public/img1.png";
import img2 from "../../public/img2.png";
import img3 from "../../public/img3.png";
import img4 from "../../public/img4.png";
import img5 from "../../public/img5.png";

const Products = () => {
  const products = [
    {
      category: "Rings",
      title: "Kundan Crescent Ring",
      img: img1,
      oldPrice: "₹60,200",
      price: "₹43,500",
      save: "Save ₹16,700",
    },
    {
      category: "Rings",
      title: "Karisma Diamond-Pave Ring",
      img: img2,
      oldPrice: "₹4,599",
      price: "₹3,899",
      save: "Save ₹700",
    },
    {
      category: "Earrings",
      title: "Lexus Classic Hoop Earrings",
      img: img3,
      oldPrice: "₹4,599",
      price: "₹3,899",
      save: "Save ₹700",
    },
    {
      category: "Rings",
      title: "Aria Minimalist Pendant Necklace",
      img: img4,
      oldPrice: "₹4,599",
      price: "₹3,899",
      save: "Save ₹700",
    },
    {
      category: "Rings",
      title: "Tiffany’s Wire Bracelet",
      img: img5,
      oldPrice: "₹6,599",
      price: "₹3,899",
      save: "Save ₹2,700",
    },
  ];

  return (
    <section className="bg-[#fffdf5] px-16 py-20">

      {/* Title with side lines */}
      <div className="flex items-center justify-center gap-6 mb-14">
        <div className="flex-1 h-px bg-black/20"></div>

        <div className="text-center">
          <h3 className="text-2xl font-serif">
            Curated Sparks of <span className="italic">Brilliance</span>
          </h3>
          <p className="text-xs text-gray-500 mt-1">
            Innovative designs fusing heritage with contemporary flair.
          </p>
        </div>

        <div className="flex-1 h-px bg-black/20"></div>
      </div>

      {/* Products */}
      <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-8">
        {products.map((item, i) => (
          <div key={i} className="text-left">

            {/* Image */}
            <div className="bg-white flex items-center justify-center h-[220px] mb-4">
              <img
                src={item.img}
                alt={item.title}
                className="object-contain h-[160px]"
              />
            </div>

            {/* Category */}
            <p className="text-xs text-gray-500 mb-1">{item.category}</p>

            {/* Title */}
            <p className="text-sm mb-2">{item.title}</p>

            {/* Divider */}
            <div className="w-full h-px bg-black/10 mb-2"></div>

            {/* Price */}
            <div className="flex items-center gap-2 text-sm">
              <span className="line-through text-gray-400">{item.oldPrice}</span>
              <span className="font-semibold text-[#3a2f2a]">{item.price}</span>
              <span className="text-[10px] bg-[#f3e7c9] px-2 py-0.5">
                {item.save}
              </span>
            </div>
          </div>
        ))}
      </div>

      {/* Button */}
      <div className="text-center mt-14">
        <button className="px-6 py-3 bg-[#f3e7c9] text-sm tracking-wide flex items-center gap-2 mx-auto">
          Shop New Arrivals →
        </button>
      </div>

    </section>
  );
};

export default Products;
