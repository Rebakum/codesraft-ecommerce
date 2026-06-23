import { motion } from "framer-motion";
import { FaArrowRight } from "react-icons/fa";

import image01 from "../../assets/home-assets/banner/bannar-01.jpg";
import image02 from "../../assets/home-assets/banner/banner-second.png";
import image03 from "../../assets/home-assets/banner/banner-third.png";

const offers = [
  { id: 1, subtitle: "BEST DEALS", title: "Sale of the Month", description: "Up to 50% OFF", image: image01 },
  { id: 2, subtitle: "FRESH ROAST", title: "New Batch Weekly", description: "Roasted every Friday", image: image02 },
  { id: 3, subtitle: "SUMMER SALE", title: "Cold Brew Special", description: "Buy 2 Get 1 Free", image: image03 },
];

const container = { hidden: {}, visible: { transition: { staggerChildren: 0.15 } } };
const item = { hidden: { opacity: 0, y: 30 }, visible: { opacity: 1, y: 0, transition: { duration: 0.5, ease: "easeOut" } } };

const SpecialOfferBanner = () => {
  return (
    <motion.section
      variants={container}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.2 }}
      className="grid grid-cols-1 gap-4 py-4 md:grid-cols-3"
    >
      {offers.map((offer) => (
        <motion.div
          key={offer.id}
          variants={item}
          whileHover={{ scale: 1.02 }}
          className="relative overflow-hidden rounded-2xl h-[280px] group cursor-pointer shadow-md"
        >
          <img src={offer.image} alt={offer.title} className="absolute inset-0 object-cover w-full h-full transition-transform duration-500 group-hover:scale-110" />
          <div className="absolute inset-0 transition-colors bg-coffee-950/40 group-hover:bg-coffee-950/50" />
          <div className="relative z-10 flex flex-col items-center justify-center h-full px-6 text-center">
            <p className="text-xs font-medium tracking-wider uppercase text-white/80">{offer.subtitle}</p>
            <h2 className="mt-3 text-3xl font-bold text-white md:text-4xl" style={{ fontFamily: "Georgia, serif" }}>{offer.title}</h2>
            <p className="mt-2 text-sm font-semibold text-white">{offer.description}</p>
            <button className="flex items-center gap-2 px-6 py-2.5 mt-4 text-sm font-semibold text-amber-800 transition-all bg-white rounded-full hover:bg-cream-100 active:scale-95">
              Shop Now <FaArrowRight className="text-xs" />
            </button>
          </div>
        </motion.div>
      ))}
    </motion.section>
  );
};

export default SpecialOfferBanner;
