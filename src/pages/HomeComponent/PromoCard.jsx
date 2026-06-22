import promo1 from "../../assets/home-assets/banner/bannar-06.jpg";
import promo2 from "../../assets/home-assets/banner/bannar-05.jpg";
const promos = [
  {
    id: 1,
    small: "LIMITED TIME",
    title: "30% OFF",
    subtitle: "All Single Origin Beans",
    bgFrom: "from-red-700",
    image: promo1,
  },
  {
    id: 2,
    small: "BREW DEAL",
    title: "Starter Kit Bundle",
    subtitle: "Beans + French Press + Grinder",
    bgFrom: "from-red-500",
    image: promo2,
    
  },
];

const PromoCard = () => {
  return (
    <div className="flex flex-col h-full gap-4">
      {promos.map((promo) => (
        <div
          key={promo.id}
          className={`relative flex-1 rounded-2xl overflow-hidden cursor-pointer bg-gradient-to-r ${promo.bgFrom} to-transparent group-hover:from-red-600 transition-all`}
          img={promo.image}
          style={{
            backgroundImage: `url(${promo.image})`,
            backgroundSize: "cover",
            backgroundPosition: "center",
          }}
        >
          <div className="absolute w-32 h-32 rounded-full -right-10 -top-10 bg-white/10" />
          <div className="absolute w-24 h-24 rounded-full -left-6 -bottom-6 bg-white/10" />

          <div className="relative z-10 flex flex-col items-center justify-center h-full p-8 text-center">
            <p className="mb-2 text-sm font-semibold tracking-wider uppercase text-white/80">
              {promo.small}
            </p>
            <h2 className="text-3xl font-bold leading-tight text-red-500" style={{ fontFamily: "Georgia, serif" }}>
              {promo.title}
            </h2>
            {promo.subtitle && (
              <p className="mt-2 text-base text-white/70">
                {promo.subtitle}
              </p>
            )}
            <button className="mt-5 bg-white/20 backdrop-blur-sm text-white font-semibold px-6 py-2.5 rounded-full hover:bg-white/30 transition-all border border-white/30 text-sm">
              Shop Now &rarr;
            </button>
          </div>
        </div>
      ))}
    </div>
  );
};

export default PromoCard;
