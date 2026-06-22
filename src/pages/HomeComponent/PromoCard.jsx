const promos = [
  {
    id: 1,
    small: "LIMITED TIME",
    title: "30% OFF",
    subtitle: "All Single Origin Beans",
    bgFrom: "from-amber-700",
    bgTo: "to-amber-900",
  },
  {
    id: 2,
    small: "BREW DEAL",
    title: "Starter Kit Bundle",
    subtitle: "Beans + French Press + Grinder",
    bgFrom: "from-orange-500",
    bgTo: "to-amber-700",
  },
];

const PromoCard = () => {
  return (
    <div className="flex flex-col gap-4 h-full">
      {promos.map((promo) => (
        <div
          key={promo.id}
          className={`relative flex-1 rounded-2xl overflow-hidden cursor-pointer bg-gradient-to-br ${promo.bgFrom} ${promo.bgTo}`}
        >
          <div className="absolute -right-10 -top-10 w-32 h-32 bg-white/10 rounded-full" />
          <div className="absolute -left-6 -bottom-6 w-24 h-24 bg-white/10 rounded-full" />

          <div className="relative z-10 h-full p-8 flex flex-col justify-center items-center text-center">
            <p className="text-white/80 font-semibold mb-2 text-sm uppercase tracking-wider">
              {promo.small}
            </p>
            <h2 className="text-white font-bold text-3xl leading-tight" style={{ fontFamily: "Georgia, serif" }}>
              {promo.title}
            </h2>
            {promo.subtitle && (
              <p className="text-white/70 mt-2 text-base">
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
