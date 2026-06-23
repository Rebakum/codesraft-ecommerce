import { motion } from "framer-motion";
import { FaTruck, FaHeadset, FaShieldAlt, FaUndoAlt, FaLeaf, FaAward } from "react-icons/fa";

const features = [
  { icon: FaTruck, title: "Free Shipping", desc: "Free on orders over $40" },
  { icon: FaHeadset, title: "24/7 Support", desc: "Expert barista advice" },
  { icon: FaShieldAlt, title: "Secure Payment", desc: "100% secure checkout" },
  { icon: FaUndoAlt, title: "Easy Returns", desc: "7-day return policy" },
  { icon: FaLeaf, title: "Freshly Roasted", desc: "Roasted within 48hrs" },
  { icon: FaAward, title: "Premium Quality", desc: "100% Arabica beans" },
];

const container = { hidden: {}, visible: { transition: { staggerChildren: 0.08 } } };
const item = { hidden: { opacity: 0, scale: 0.9 }, visible: { opacity: 1, scale: 1, transition: { duration: 0.4, ease: "easeOut" } } };

const WhyChooseUs = () => {
  return (
    <section className="py-4">
      <div className="mb-6">
        <p className="mb-1 text-sm font-semibold tracking-[0.2em] uppercase text-amber-700">Our Promise</p>
        <h2 className="text-3xl font-bold text-coffee-900 dark:text-cream-100 md:text-4xl" style={{ fontFamily: "Georgia, serif" }}>
          Why Choose Us
        </h2>
      </div>

      <motion.div
        variants={container}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.2 }}
        className="grid grid-cols-2 gap-4 sm:grid-cols-3 lg:grid-cols-6"
      >
        {features.map((f) => {
          const Icon = f.icon;
          return (
            <motion.div
              key={f.title}
              variants={item}
              whileHover={{ y: -5, scale: 1.03 }}
              className="flex flex-col items-center p-5 transition-all duration-300 bg-white border border-coffee-100 cursor-default dark:bg-[#2b1a0d] dark:border-coffee-800 rounded-2xl hover:border-amber-400 hover:shadow-lg group"
            >
              <div className="flex items-center justify-center mb-3 transition-all duration-300 w-14 h-14 bg-amber-50 dark:bg-amber-950/30 rounded-2xl group-hover:bg-amber-600">
                <Icon className="text-xl text-amber-700 dark:text-amber-400 group-hover:text-white transition-colors" />
              </div>
              <h3 className="mb-1 text-sm font-bold text-center text-coffee-800 dark:text-cream-100">{f.title}</h3>
              <p className="text-xs text-center text-coffee-500 dark:text-coffee-400">{f.desc}</p>
            </motion.div>
          );
        })}
      </motion.div>
    </section>
  );
};

export default WhyChooseUs;
