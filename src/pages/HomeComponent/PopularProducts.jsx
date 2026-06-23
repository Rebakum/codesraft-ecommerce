import { motion } from "framer-motion";
import { FaStar } from "react-icons/fa";
import { Link } from "react-router-dom";
import coffe01 from "../../assets/home-assets/banner/coffe01.webp";
import coffee02 from "../../assets/home-assets/banner/coffee02.webp";
import coffe03 from "../../assets/home-assets/banner/coffe03.webp";
import coffe04 from "../../assets/home-assets/banner/coffe04.webp";
import coffe05 from "../../assets/home-assets/banner/coffe05.webp";
import coffe06 from "../../assets/home-assets/banner/coffe06.webp";

const products = [
  { id: 1, name: "Colombian Supremo", category: "Single Origin", price: 18.99, discount: 14.99, rating: 4.8, sale: 21, image: coffe01 },
  { id: 2, name: "Ethiopian Yirgacheffe", category: "Single Origin", price: 22.99, discount: 17.99, rating: 4.9, sale: 22, image: coffee02 },
  { id: 3, name: "Italian Espresso", category: "Blend", price: 16.99, discount: 12.99, rating: 4.7, sale: 24, image: coffe03 },
  { id: 4, name: "Vanilla Cold Brew", category: "Cold Brew", price: 12.99, discount: 9.99, rating: 4.6, sale: 23, image: coffe04 },
  { id: 5, name: "Hazelnut Roast", category: "Flavored", price: 15.99, discount: 11.99, rating: 4.5, sale: 25, image: coffe05 },
  { id: 6, name: "Caramel Drip Blend", category: "Blends", price: 34.0, discount: 34.0, rating: 4.0, sale: 3, image: coffe06 },
  { id: 7, name: "French Vanilla Latte", category: "Flavored", price: 19.99, discount: 14.99, rating: 4.3, sale: 25, image: coffe01 },
  { id: 8, name: "Mocha Java", category: "Blends", price: 21.99, discount: 16.99, rating: 4.4, sale: 22, image: coffee02 },
  { id: 9, name: "Cinnamon Spice Brew", category: "Flavored", price: 17.99, discount: 13.99, rating: 4.2, sale: 22, image: coffe03 },
  { id: 10, name: "Colombian Dark Roast", category: "Single Origin", price: 23.99, discount: 18.99, rating: 4.8, sale: 21, image: coffe04 },
  { id: 11, name: "Ethiopian Sidamo", category: "Single Origin", price: 25.99, discount: 20.99, rating: 4.9, sale: 22, image: coffe05 },
  { id: 12, name: "Italian Roast Espresso", category: "Blend", price: 19.99, discount: 15.99, rating: 4.7, sale: 24, image: coffe06 },

];

const container = { hidden: {}, visible: { transition: { staggerChildren: 0.08 } } };
const item = { hidden: { opacity: 0, y: 25 }, visible: { opacity: 1, y: 0, transition: { duration: 0.4, ease: "easeOut" } } };

const PopularProducts = () => {
  return (
    <section className="py-4">
      <div className="flex items-end justify-between mb-6">
        <div>
          <p className="mb-1 text-sm font-semibold tracking-[0.2em] uppercase text-amber-700">Premium Collection</p>
          <h2 className="text-3xl font-bold text-coffee-900 dark:text-cream-100 md:text-4xl" style={{ fontFamily: "Georgia, serif" }}>
            Best Selling Coffee
          </h2>
        </div>
        <Link to="/shop" className="flex items-center gap-1 text-sm font-semibold transition-colors text-amber-700 hover:text-amber-800">
          View All <FaStar className="text-xs" />
        </Link>
      </div>

      <motion.div
        variants={container}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.1 }}
        className="grid grid-cols-2 gap-4 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-6"
      >
        {products.map((p) => (
          <motion.div key={p.id} variants={item}>
            <Link
              to={`/product/${p.id}`}
              className="block p-3 bg-white dark:bg-[#2b1a0d] border border-coffee-100 dark:border-coffee-800 rounded-2xl hover:border-amber-400 hover:shadow-lg transition-all duration-300 group"
            >
              <div className="relative mb-3">
                {p.sale && (
                  <span className="absolute z-10 px-2 py-1 text-[10px] font-bold text-white bg-amber-700 rounded-lg top-2 left-2">
                    {p.sale}% OFF
                  </span>
                )}
                <div className="overflow-hidden rounded-xl bg-coffee-50 dark:bg-coffee-900 h-36">
                  <img src={p.image} alt={p.name} className="object-cover w-full h-full transition-transform duration-500 group-hover:scale-110" />
                </div>
              </div>
              <p className="mb-1 text-[10px] font-semibold uppercase text-amber-700">{p.category}</p>
              <h3 className="mb-2 text-sm font-semibold transition-colors text-coffee-800 dark:text-cream-100 group-hover:text-amber-700">{p.name}</h3>
              <div className="flex items-center gap-1 mb-1">
                {[...Array(5)].map((_, i) => (
                  <FaStar key={i} className={`text-[10px] ${i < Math.floor(p.rating) ? "text-amber-400" : "text-coffee-200 dark:text-coffee-700"}`} />
                ))}
              </div>
              <div className="flex items-center gap-2">
                <span className="text-sm font-bold text-amber-700">${p.discount.toFixed(2)}</span>
                {p.price !== p.discount && (
                  <span className="text-xs line-through text-coffee-400 dark:text-coffee-500">${p.price.toFixed(2)}</span>
                )}
              </div>
            </Link>
          </motion.div>
        ))}
      </motion.div>
    </section>
  );
};

export default PopularProducts;
