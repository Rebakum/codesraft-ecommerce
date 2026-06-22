import {
  FaCoffee,
  FaMugHot,
  FaLeaf,
  FaBreadSlice,
  FaCookieBite,
  FaGlassWhiskey,
  FaArrowRight,
} from "react-icons/fa";

const categories = [
  { name: "Single Origin", icon: FaCoffee },
  { name: "Espresso Blends", icon: FaMugHot },
  { name: "Cold Brew", icon: FaGlassWhiskey },
  { name: "Decaf", icon: FaLeaf },
  { name: "Flavored Roasts", icon: FaCookieBite },
  { name: "Brewing Gear", icon: FaBreadSlice },
];

const HomePopularCategories = () => {
  return (
    <section className="py-10">
      {/* Section Header */}
      <div className="max-w-3xl mx-auto mb-10 text-center">
        <span className="text-sm font-semibold tracking-wider uppercase text-red-700">
          Explore Our Collection
        </span>

        <h2
          className="mt-3 mb-4 text-4xl font-bold text-gray-600 md:text-5xl"
          style={{ fontFamily: "Georgia, serif" }}
        >
          Discover Coffee Categories
        </h2>

        <p className="leading-relaxed text-gray-600">
          From single-origin gems to versatile blends, find the perfect coffee
          to suit your taste and brewing style. Explore our curated categories
          and elevate your coffee experience.
        </p>
      </div>

      {/* Category Header */}
      

      {/* Categories Grid */}
      <div className="grid grid-cols-2 gap-6 sm:grid-cols-3 lg:grid-cols-6">
        {categories.map((cat) => {
          const Icon = cat.icon;

          return (
            <div
              key={cat.name}
              className="flex flex-col items-center py-6 transition-all bg-white border cursor-pointer border-red-100 rounded-2xl hover:border-red-600 hover:shadow-lg hover:text-red-700 group"
            >
              <span className="flex items-center justify-center mb-3 transition-colors rounded-full w-14 h-14 bg-red-50 group-hover:bg-red-100">
                <Icon className="text-2xl text-red-700" />
              </span>

              <p className="text-sm font-semibold text-center text-gray-600 group-hover:text-red-700">{cat.name}</p>
            </div>
          );
        })}
      </div>
      <div className="flex items-center justify-center mt-10 mb-8">
        

        <button className="flex items-center gap-2 text-sm font-semibold text-red-700 hover:underline">
          View All <FaArrowRight />
        </button>
      </div>
    </section>
  );
};

export default HomePopularCategories;