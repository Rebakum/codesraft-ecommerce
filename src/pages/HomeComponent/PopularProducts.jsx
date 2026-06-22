import { FaArrowRight, FaStar } from "react-icons/fa";
import coffe01 from "../../assets/home-assets/banner/coffe01.webp";
import coffee02 from "../../assets/home-assets/banner/coffee02.webp";
import coffe03 from "../../assets/home-assets/banner/coffe03.webp";
import coffe04 from "../../assets/home-assets/banner/coffe04.webp";
import coffe05 from "../../assets/home-assets/banner/coffe05.webp";
import coffe06 from "../../assets/home-assets/banner/coffe06.webp";

const products = [
  {
    id: 1,
    name: "Colombian Supremo",
    category: "Single Origin",
    price: 18.99,
    discount: 14.99,
    rating: 4.8,
    sale: 21,
    image: coffe01,
  },
  {
    id: 2,
    name: "Ethiopian Yirgacheffe",
    category: "Single Origin",
    price: 22.99,
    discount: 17.99,
    rating: 4.9,
    sale: 22,
    image: coffee02,
  },
  {
    id: 3,
    name: "Italian Espresso",
    category: "Blend",
    price: 16.99,
    discount: 12.99,
    rating: 4.7,
    sale: 24,
    image: coffe03,
  },
  {
    id: 4,
    name: "Vanilla Cold Brew",
    category: "Cold Brew",
    price: 12.99,
    discount: 9.99,
    rating: 4.6,
    sale: 23,
    image: coffe04,
  },
  {
    id: 5,
    name: "Hazelnut Roast",
    category: "Flavored",
    price: 15.99,
    discount: 11.99,
    rating: 4.5,
    sale: 25,
    image: coffe05,
  },
  {
    id: 6,
    name: "Caramel Drip Blend",
    category: "Blends",
    price: 34.0,
    discount: 34.0,
    rating: 4.0,
    sale: 3,
    image: coffe06,
  },
];

const PopularProducts = () => {
  return (
    <section className="py-10">
      {/* Header */}
      <div className="max-w-3xl mx-auto mb-10 text-center">
        <p className="mb-3 text-sm font-semibold tracking-[0.2em] uppercase text-amber-700">
          Premium Coffee Collection
        </p>

        <h1
          className="mb-4 text-3xl font-bold text-gray-600 md:text-5xl"
          style={{ fontFamily: "Georgia, serif" }}
        >
          Best Selling Coffee Beans
        </h1>

        <p className="text-gray-600">
          Explore our most loved coffee selections, expertly sourced and roasted
          to bring rich flavors, smooth aromas, and an unforgettable coffee
          experience to every cup.
        </p>
      </div>

      {/* View All */}
      <div className="flex justify-end mb-8">
        <button className="flex items-center gap-2 text-sm font-semibold text-amber-700 hover:underline">
          View All Products
          <FaArrowRight />
        </button>
      </div>

      {/* Products */}
      <div className="grid grid-cols-2 gap-4 md:grid-cols-3 xl:grid-cols-6">
        {products.map((p) => (
          <div
            key={p.id}
            className="relative p-3 transition-all duration-300 bg-white border border-amber-100 rounded-2xl hover:border-amber-600 hover:shadow-xl group"
          >
            {/* Sale Badge */}
            {p.sale && (
              <span className="absolute z-10 px-2 py-1 text-[10px] md:text-xs font-bold text-white rounded-lg top-3 left-3 bg-amber-700">
                {p.sale}% OFF
              </span>
            )}

            {/* Product Image */}
            <div className="flex items-center justify-center h-32 mb-3 overflow-hidden md:h-40 rounded-xl bg-amber-50">
              <img
                src={p.image}
                alt={p.name}
                className="object-cover w-full h-full transition-transform duration-500 group-hover:scale-110"
              />
            </div>

            {/* Category */}
            <p className="mb-1 text-[10px] md:text-xs font-semibold uppercase text-amber-700">
              {p.category}
            </p>

            {/* Name */}
            <h3 className="mb-2 text-sm font-semibold text-gray-800 md:text-base group-hover:text-amber-700">
              {p.name}
            </h3>

            {/* Rating */}
            <div className="flex items-center gap-1 mb-2">
              {[...Array(5)].map((_, i) => (
                <FaStar
                  key={i}
                  className={`text-[10px] md:text-xs ${
                    i < Math.floor(p.rating)
                      ? "text-amber-400"
                      : "text-gray-200"
                  }`}
                />
              ))}
              <span className="ml-1 text-[10px] md:text-xs text-gray-400">
                ({p.rating})
              </span>
            </div>

            {/* Price */}
            <div className="flex flex-wrap items-center gap-2">
              <span className="text-sm font-bold md:text-base text-amber-700">
                ${p.discount.toFixed(2)}
              </span>

              {p.price !== p.discount && (
                <span className="text-xs text-gray-400 line-through md:text-sm">
                  ${p.price.toFixed(2)}
                </span>
              )}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default PopularProducts;