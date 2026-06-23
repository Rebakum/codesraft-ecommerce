import { FaCoffee, FaMugHot, FaLeaf, FaBreadSlice, FaCookieBite, FaGlassWhiskey, FaSearch, FaTruck, FaTag, FaGift, FaStar } from "react-icons/fa";
import { HiXMark } from "react-icons/hi2";
import { Link } from "react-router-dom";

const categories = [
  { name: "Single Origin", icon: FaCoffee, count: 32, to: "/shop" },
  { name: "Espresso Blends", icon: FaMugHot, count: 24, to: "/shop" },
  { name: "Cold Brew", icon: FaGlassWhiskey, count: 18, to: "/shop" },
  { name: "Decaf", icon: FaLeaf, count: 12, to: "/shop" },
  { name: "Flavored Roasts", icon: FaCookieBite, count: 21, to: "/shop" },
  { name: "Brewing Gear", icon: FaBreadSlice, count: 15, to: "/shop" },
];

const Sidebar = ({ onClose }) => {
  return (
    <div 
     className="h-full bg-white dark:bg-[#2b1a0d] rounded-2xl shadow-md border border-coffee-100 dark:border-coffee-800 overflow-hidden">
      {/* Header with close button (mobile) */}
      <div className="flex items-center justify-between p-4 border-b border-coffee-100 dark:border-coffee-800 lg:hidden">
        <h3 className="font-bold dark:text-cream-100" style={{ fontFamily: "Georgia, serif" }}>Categories</h3>
        <button onClick={onClose} className="p-1 transition-colors rounded-lg hover:bg-coffee-100 dark:hover:bg-coffee-800">
          <HiXMark className="text-xl dark:text-cream-100" />
        </button>
      </div>

      {/* Search */}
      <div className="p-4">
        <div className="relative">
          <input
            type="text"
            placeholder="Search coffee..."
            className="w-full pl-10 pr-4 py-2.5 text-sm bg-coffee-50 dark:bg-coffee-900 border border-coffee-200 dark:border-coffee-700 rounded-xl focus:outline-none focus:border-amber-500 focus:ring-1 focus:ring-amber-500 dark:text-cream-100 placeholder-coffee-400 transition-all"
          />
          <FaSearch className="absolute left-3.5 top-1/2 -translate-y-1/2 text-coffee-400 text-sm" />
        </div>
      </div>

 
     {/* Categories */}
<div className="px-4 pb-4">
  <h3 className="mb-3 text-xs font-bold tracking-wider uppercase text-coffee-400 dark:text-coffee-500">
    Shop By Category
  </h3>

  <div className="overflow-x-auto lg:overflow-visible scrollbar-hide">
    <ul className="flex gap-3 pb-2 lg:flex-col lg:gap-1">
      {categories.map((cat) => {
        const Icon = cat.icon;

        return (
          <li key={cat.name} className="shrink-0 lg:w-full">
            <Link
              to={cat.to}
              className="flex items-center gap-3 px-3 py-2.5 rounded-xl text-coffee-700 dark:text-coffee-300 hover:bg-amber-50 dark:hover:bg-amber-950/30 hover:text-amber-700 dark:hover:text-amber-400 transition-all duration-200 group bg-white dark:bg-coffee-900 min-w-[220px] lg:min-w-full"
            >
              <span className="flex items-center justify-center transition-all duration-200 rounded-lg w-9 h-9 bg-amber-50 dark:bg-amber-950/30 text-amber-700 dark:text-amber-400 group-hover:bg-amber-600 group-hover:text-white">
                <Icon className="text-sm" />
              </span>

              <span className="flex-1 text-sm font-medium">
                {cat.name}
              </span>

              <span className="text-xs font-medium text-coffee-400 dark:text-coffee-500 group-hover:text-amber-600 dark:group-hover:text-amber-400 bg-coffee-100 dark:bg-coffee-800 px-2 py-0.5 rounded-full">
                {cat.count}
              </span>
            </Link>
          </li>
        );
      })}
    </ul>
  </div>
</div>

      {/* Promo Banner */}
      <div className="p-4 mx-4 mb-4 text-white bg-gradient-to-br from-amber-600 to-amber-700 rounded-2xl">
        <FaGift className="mb-2 text-2xl text-amber-200" />
        <h4 className="mb-1 text-sm font-bold">Free Shipping</h4>
        <p className="text-xs text-amber-100">On orders over $40. Freshly roasted &amp; delivered.</p>
      </div>

      {/* Quick Links */}
      <div className="px-4 pb-4 space-y-2">
        <Link to="/shipping" className="flex items-center gap-2 text-xs transition-colors text-coffee-500 dark:text-coffee-400 hover:text-amber-700">
          <FaTruck className="text-amber-600" /> Shipping & Delivery
        </Link>
        <Link to="/refund-policy" className="flex items-center gap-2 text-xs transition-colors text-coffee-500 dark:text-coffee-400 hover:text-amber-700">
          <FaTag className="text-amber-600" /> Return Policy
        </Link>
        <Link to="/faq" className="flex items-center gap-2 text-xs transition-colors text-coffee-500 dark:text-coffee-400 hover:text-amber-700">
          <FaStar className="text-amber-600" /> FAQ
        </Link>
      </div>
    </div>
  );
};

export default Sidebar;
