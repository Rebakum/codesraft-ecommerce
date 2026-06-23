import { motion } from "framer-motion";
import promo1 from "../../assets/home-assets/banner/bannar-06.jpg";
import promo2 from "../../assets/home-assets/banner/bannar-05.jpg";

const promos = [
  {
    id: 1,
    small: "LIMITED TIME",
    title: "30% OFF",
    subtitle: "All Single Origin Beans",
    bgFrom: "from-amber-800",
    image: promo1,
  },
  {
    id: 2,
    small: "BREW DEAL",
    title: "Starter Kit Bundle",
    subtitle: "Beans + French Press + Grinder",
    bgFrom: "from-coffee-700",
    image: promo2,
  },
];

const PromoCard = () => {
  return (
    <div className="flex flex-col h-full gap-4">
      {promos.map((promo, i) => (
        <motion.div
          key={promo.id}
          initial={{ opacity: 0, x: 20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.5, delay: i * 0.15 }}
          whileHover={{ scale: 1.02 }}
          className="relative flex-1 rounded-2xl overflow-hidden cursor-pointer group shadow-md"
          style={{
            backgroundImage: `url(${promo.image})`,
            backgroundSize: "cover",
            backgroundPosition: "center",
          }}
        >
          <div className={`absolute inset-0 bg-gradient-to-r ${promo.bgFrom}/90 to-transparent`} />
          <div className="absolute w-20 h-20 rounded-full -right-5 -top-5 bg-white/10" />
          <div className="absolute w-16 h-16 rounded-full -left-4 -bottom-4 bg-white/10" />
          <div className="relative z-10 flex flex-col items-center justify-center h-full p-6 text-center">
            <p className="mb-1 text-xs font-semibold tracking-wider uppercase text-white/80">{promo.small}</p>
            <h2 className="text-2xl font-bold leading-tight text-white" style={{ fontFamily: "Georgia, serif" }}>
              {promo.title}
            </h2>
            {promo.subtitle && (
              <p className="mt-1 text-xs text-white/70">{promo.subtitle}</p>
            )}
            <button className="mt-3 bg-white/20 backdrop-blur-sm text-white font-semibold px-5 py-2 rounded-full hover:bg-white/30 transition-all border border-white/30 text-xs">
              Shop Now &rarr;
            </button>
          </div>
        </motion.div>
      ))}
    </div>
  );
};

export default PromoCard;
