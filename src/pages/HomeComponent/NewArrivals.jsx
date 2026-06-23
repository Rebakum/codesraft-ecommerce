import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { FaStar } from "react-icons/fa";
import coffe05 from "../../assets/home-assets/banner/coffe05.webp";
import coffe06 from "../../assets/home-assets/banner/coffe06.webp";
import coffe07 from "../../assets/home-assets/banner/coffe07.webp";
import coffe08 from "../../assets/home-assets/banner/coffe08.webp";

const products = [
  { id: 7, name: "Kenyan AA Reserve", category: "Single Origin", price: 24.99, discount: 19.99, rating: 4.8, image: coffe05, badge: "New" },
  { id: 8, name: "Brazilian Santos", category: "Medium Roast", price: 19.99, discount: 15.99, rating: 4.7, image: coffe06, badge: "New" },
  { id: 9, name: "Sumatra Mandheling", category: "Dark Roast", price: 21.99, discount: 17.99, rating: 4.6, image: coffe07, badge: "New" },
  { id: 10, name: "Costa Rica Tarrazu", category: "Light Roast", price: 22.99, discount: 18.99, rating: 4.9, image: coffe08, badge: "New" },
];

const container = { hidden: {}, visible: { transition: { staggerChildren: 0.1 } } };
const item = { hidden: { opacity: 0, y: 25 }, visible: { opacity: 1, y: 0, transition: { duration: 0.4, ease: "easeOut" } } };

const NewArrivals = () => {
  return (
    <section className="py-4">
      <div className="flex items-end justify-between mb-6">
        <div>
          <p className="mb-1 text-sm font-semibold tracking-[0.2em] uppercase text-amber-700">Just Landed</p>
          <h2 className="text-3xl font-bold text-coffee-900 dark:text-cream-100 md:text-4xl" style={{ fontFamily: "Georgia, serif" }}>
            New Arrivals
          </h2>
        </div>
        <Link to="/shop" className="flex items-center gap-1 text-sm font-semibold text-amber-700 hover:text-amber-800 transition-colors">
          View All <FaStar className="text-xs" />
        </Link>
      </div>

      <motion.div
        variants={container}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.1 }}
        className="grid grid-cols-2 gap-4 md:grid-cols-4"
      >
        {products.map((p) => (
          <motion.div key={p.id} variants={item}>
            <Link
              to={`/product/${p.id}`}
              className="block p-3 bg-white dark:bg-[#2b1a0d] border border-coffee-100 dark:border-coffee-800 rounded-2xl hover:border-amber-400 hover:shadow-lg transition-all duration-300 group"
            >
              <div className="relative mb-3">
                <span className="absolute z-10 px-2 py-1 text-[10px] font-bold text-white bg-amber-600 rounded-lg top-2 left-2">
                  {p.badge}
                </span>
                <div className="overflow-hidden rounded-xl bg-coffee-50 dark:bg-coffee-900 h-40">
                  <img src={p.image} alt={p.name} className="object-cover w-full h-full transition-transform duration-500 group-hover:scale-110" />
                </div>
              </div>
              <p className="mb-1 text-[10px] font-semibold uppercase text-amber-700">{p.category}</p>
              <h3 className="mb-2 text-sm font-semibold text-coffee-800 dark:text-cream-100 group-hover:text-amber-700 transition-colors">{p.name}</h3>
              <div className="flex items-center gap-1 mb-1">
                {[...Array(5)].map((_, i) => (
                  <FaStar key={i} className={`text-[10px] ${i < Math.floor(p.rating) ? "text-amber-400" : "text-coffee-200 dark:text-coffee-700"}`} />
                ))}
              </div>
              <div className="flex items-center gap-2">
                <span className="text-sm font-bold text-amber-700">${p.discount.toFixed(2)}</span>
                <span className="text-xs text-coffee-400 dark:text-coffee-500 line-through">${p.price.toFixed(2)}</span>
              </div>
            </Link>
          </motion.div>
        ))}
      </motion.div>
    </section>
  );
};

export default NewArrivals;
