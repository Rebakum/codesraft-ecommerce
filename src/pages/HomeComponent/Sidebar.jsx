import {
  FaCoffee,
  FaMugHot,
  FaLeaf,
  FaBreadSlice,
  FaCookieBite,
  FaGlassWhiskey,
  FaSearch,
} from "react-icons/fa";

const categories = [
  { name: "Single Origin", icon: FaCoffee, count: 32 },
  { name: "Espresso Blends", icon: FaMugHot, count: 24 },
  { name: "Cold Brew", icon: FaGlassWhiskey, count: 18 },
  { name: "Decaf", icon: FaLeaf, count: 12 },
  { name: "Flavored", icon: FaCookieBite, count: 21 },
  { name: "Accessories", icon: FaBreadSlice, count: 15 },
];

const Sidebar = () => {
  return (
    <div className="w-full p-2 bg-white rounded shadow-md">
      <div className="relative mb-5">
        <label htmlFor="category-search" className="sr-only">
          Search coffee
        </label>
        <input
          id="category-search"
          type="text"
          placeholder="Search our menu..."
          className="w-full pl-10 pr-4 text-sm transition-all border h-11 bg-amber-50 border-amber-100 rounded-xl focus:outline-none focus:border-amber-500 focus:bg-white"
        />
        <FaSearch className="absolute left-3.5 top-1/2 -translate-y-1/2 text-amber-400 text-sm" />
      </div>

      <h3 className="mb-4 text-lg font-bold text-gray-800" style={{ fontFamily: "Georgia, serif" }}>
        Shop By Category
      </h3>

      <ul className="space-y-1" role="list">
        {categories.map((cat) => {
          const Icon = cat.icon;
          return (
            <li key={cat.name}>
              <button className="w-full flex items-center gap-3 px-3 py-2.5 rounded-xl text-gray-700 hover:bg-amber-50 hover:text-amber-800 transition-all duration-200 group">
                <span className="flex items-center justify-center transition-all duration-200 rounded-lg w-9 h-9 bg-amber-50 group-hover:bg-amber-700 group-hover:text-white">
                  <Icon className="text-sm" />
                </span>
                <span className="flex-1 text-sm font-medium text-left">
                  {cat.name}
                </span>
                <span className="text-xs font-medium text-gray-400 group-hover:text-amber-700">
                  {cat.count}
                </span>
              </button>
            </li>
          );
        })}
      </ul>
    </div>
  );
};

export default Sidebar;
