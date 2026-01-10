import border from "../../public/border.png";

const PriceSection = () => {
  const prices = [999, 1999, 2999, 3999];

  return (
    <section className="bg-[#fffdf5] px-16 py-20">

      {/* Heading with side lines */}
      <div className="flex items-center justify-center gap-6 mb-14">
        <div className="flex-1 h-px bg-black/20"></div>

        <div className="text-center">
          <h3 className="text-2xl font-serif">Shop By Price</h3>
          <p className="text-xs text-gray-500 mt-1">
            Brilliant design and unparalleled craftsmanship.
          </p>
        </div>

        <div className="flex-1 h-px bg-black/20"></div>
      </div>

      {/* Price Cards */}
      <div className="flex justify-center gap-8">
        {prices.map((price, index) => (
          <div
            key={index}
            className="w-[260px] h-[150px] flex items-center justify-center"
            style={{
              backgroundImage: `url(${border})`,
              backgroundRepeat: "no-repeat",
              backgroundSize: "contain",
              backgroundPosition: "center",
            }}
          >
            <div className="text-center">
              <p className="text-sm text-gray-600 mb-1">Under</p>
              <p className="text-3xl font-semibold text-[#3a2f2a]">
                ₹{price}
              </p>
            </div>
          </div>
        ))}
      </div>

    </section>
  );
};

export default PriceSection;
