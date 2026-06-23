import { motion } from "framer-motion";
import { FaArrowRight, FaCoffee, FaMugHot, FaLeaf, FaBreadSlice, FaCookieBite, FaGlassWhiskey } from "react-icons/fa";
import { Link } from "react-router-dom";

const categories = [
  { name: "Single Origin", icon: FaCoffee, count: 32, color: "from-amber-500 to-amber-700" },
  { name: "Espresso Blends", icon: FaMugHot, count: 24, color: "from-coffee-500 to-coffee-700" },
  { name: "Cold Brew", icon: FaGlassWhiskey, count: 18, color: "from-cream-500 to-cream-700" },
  { name: "Decaf", icon: FaLeaf, count: 12, color: "from-green-500 to-green-700" },
  { name: "Flavored Roasts", icon: FaCookieBite, count: 21, color: "from-orange-500 to-orange-700" },
  { name: "Brewing Gear", icon: FaBreadSlice, count: 15, color: "from-amber-600 to-amber-800" },
];

const container = { hidden: {}, visible: { transition: { staggerChildren: 0.08 } } };
const item = { hidden: { opacity: 0, scale: 0.9 }, visible: { opacity: 1, scale: 1, transition: { duration: 0.4, ease: "easeOut" } } };

const HomePopularCategories = () => {
  return (
    <section className="py-4">
      <div className="flex items-end justify-between mb-6">
        <div>
          <p className="mb-1 text-sm font-semibold tracking-[0.2em] uppercase text-amber-700">Explore Our Collection</p>
          <h2 className="text-3xl font-bold text-coffee-900 dark:text-cream-100 md:text-4xl" style={{ fontFamily: "Georgia, serif" }}>
            Featured Categories
          </h2>
        </div>
        <Link to="/shop" className="flex items-center gap-1 text-sm font-semibold transition-colors text-amber-700 hover:text-amber-800">
          View All <FaArrowRight className="text-xs" />
        </Link>
      </div>

      <motion.div
        variants={container}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.2 }}
        className="grid grid-cols-2 gap-4 sm:grid-cols-3 lg:grid-cols-6"
      >
        {categories.map((cat) => {
          const Icon = cat.icon;
          return (
            <motion.div key={cat.name} variants={item} whileHover={{ y: -5, scale: 1.03 }}>
              <Link
                to="/shop"
                className="flex flex-col items-center p-5 bg-white dark:bg-[#2b1a0d] border border-coffee-100 dark:border-coffee-800 rounded-2xl hover:border-amber-400 hover:shadow-lg transition-all duration-300 group"
              >
                <span className={`flex items-center justify-center w-14 h-14 mb-3 rounded-2xl bg-gradient-to-br ${cat.color} text-white shadow-lg group-hover:scale-110 transition-transform`}>
                  <Icon className="text-xl" />
                </span>
                <h3 className="mb-1 text-sm font-bold text-center text-coffee-800 dark:text-cream-100">{cat.name}</h3>
                <p className="text-xs text-coffee-400 dark:text-coffee-500">{cat.count} items</p>
              </Link>
            </motion.div>
          );
        })}
      </motion.div>
    </section>
  );
};

export default HomePopularCategories;
