import { useState, useEffect, useCallback } from "react";
import { FaArrowRight } from "react-icons/fa";

import banner1 from "../../assets/home-assets/banner/bannar-01.jpg";
import banner2 from "../../assets/home-assets/banner/bannar-02.jpg";
import banner3 from "../../assets/home-assets/banner/bannar-03.jpg";


const slides = [
  {
    id: 1,
    tag: "Single Origin",
    title: "Bold Flavor\nStarts Here",
    discount: "20% OFF",
    description:
      "Discover our handpicked single-origin beans from Ethiopia, Colombia, and Guatemala. Roasted fresh weekly.",
    image: banner1,
    accent: "bg-amber-600",
  },
  {
    id: 2,
    tag: "Fresh Roast",
    title: "Artisan Coffee\nCollection",
    discount: "25% OFF",
    description:
      "Small-batch roasted beans crafted by master roasters. From farm to cup, every sip tells a story.",
    image: banner2,
    accent: "bg-orange-500",
  },
  {
    id: 3,
    tag: "Best Sellers",
    title: "Premium Brew\nEssentials",
    discount: "15% OFF",
    description:
      "Everything you need for the perfect brew. Beans, equipment, and accessories at unbeatable prices.",
    image: banner3,
    accent: "bg-rose-600",
  },
];

const HeroSlider = () => {
  const [current, setCurrent] = useState(0);

  const nextSlide = useCallback(() => {
    setCurrent((prev) => (prev + 1) % slides.length);
  }, []);

  useEffect(() => {
    const timer = setInterval(nextSlide, 5000);
    return () => clearInterval(timer);
  }, [nextSlide]);

  const slide = slides[current];

  return (
    <div className="relative w-full h-full rounded-2xl overflow-hidden">
        <div key={slide.id} className="absolute inset-0 h-full">
          <img
            src={slide.image}
            alt={slide.title}
            className="absolute inset-0 object-cover w-full h-full"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-amber-950/90 via-amber-900/60 to-transparent" />

          <div className="relative z-10 flex flex-col items-center justify-center h-full px-8 text-center sm:px-10 md:px-14 lg:px-16">
            <span className={`inline-block ${slide.accent} text-white text-xs font-bold px-4 py-1.5 rounded-full mb-4 tracking-wide uppercase`}>
              {slide.tag}
            </span>

            <h1 className="mb-3 text-3xl font-extrabold leading-tight text-white whitespace-pre-line sm:text-4xl md:text-5xl lg:text-6xl" style={{ fontFamily: "Georgia, serif" }}>
              {slide.title}
            </h1>

            <div className="flex items-center justify-center gap-3 mb-4">
              <span className="text-base font-medium text-white/80 md:text-lg">
                Today only
              </span>
              <span className="px-5 py-2 text-lg font-extrabold bg-white rounded-lg shadow-lg text-amber-800 md:text-xl">
                {slide.discount}
              </span>
            </div>

            <p className="max-w-md mb-6 text-sm leading-relaxed text-white/75 md:text-base">
              {slide.description}
            </p>

            <button className="bg-white text-amber-800 font-bold px-8 py-3.5 rounded-full flex items-center gap-2 hover:shadow-lg transition-shadow text-sm md:text-base">
              Order Now
              <FaArrowRight className="text-sm" />
            </button>
          </div>

          <div className="absolute bottom-5 left-1/2 -translate-x-1/2 flex gap-2.5 z-20" role="tablist" aria-label="Slide navigation">
            {slides.map((s, i) => (
              <button
                key={i}
                onClick={() => setCurrent(i)}
                role="tab"
                aria-selected={i === current}
                aria-label={`Go to slide ${i + 1}: ${s.tag}`}
                className={`h-2.5 rounded-full transition-all duration-300 ${
                  i === current
                    ? "w-8 bg-white"
                    : "w-2.5 bg-white/40 hover:bg-white/60"
                }`}
              />
            ))}
          </div>
        </div>
    </div>
  );
};

export default HeroSlider;
