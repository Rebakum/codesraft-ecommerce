import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Pagination, EffectFade } from "swiper/modules";
import { FaArrowRight } from "react-icons/fa";
import { Link } from "react-router-dom";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/effect-fade";

import banner1 from "../../assets/home-assets/banner/bannar-01.jpg";
import banner2 from "../../assets/home-assets/banner/bannar-02.jpg";
import banner3 from "../../assets/home-assets/banner/bannar-03.jpg";

const slides = [
  {
    id: 1,
    tag: "Single Origin",
    title: "Bold Flavor\nStarts Here",
    discount: "20% OFF",
    description: "Discover our handpicked single-origin beans from Ethiopia, Colombia, and Guatemala.",
    image: banner1,
    accent: "bg-amber-700",
  },
  {
    id: 2,
    tag: "Fresh Roast",
    title: "Artisan Coffee\nCollection",
    discount: "25% OFF",
    description: "Small-batch roasted beans crafted by master roasters. Every sip tells a story.",
    image: banner2,
    accent: "bg-coffee-700",
  },
  {
    id: 3,
    tag: "Best Sellers",
    title: "Premium Brew\nEssentials",
    discount: "15% OFF",
    description: "Everything you need for the perfect brew at unbeatable prices.",
    image: banner3,
    accent: "bg-amber-800",
  },
];

const HeroSlider = () => {
  return (
    <div className="h-full overflow-hidden shadow-lg rounded-2xl">
      <Swiper
        modules={[Autoplay, Pagination, EffectFade]}
        effect="fade"
        autoplay={{ delay: 5000, disableOnInteraction: false }}
        pagination={{ clickable: true }}
        loop={true}
        className="h-full"
      >
        {slides.map((slide) => (
          <SwiperSlide key={slide.id}>
            <div className="relative h-full">
              <img
                src={slide.image}
                alt={slide.title}
                className="absolute inset-0 object-cover w-full h-full"
              />
              <div className="absolute inset-0 bg-gradient-to-r from-coffee-950/80 via-coffee-900/50 to-transparent" />
              <div className="relative z-10 flex flex-col justify-center h-full px-8 md:px-12 lg:px-16">
                <span className={`inline-block ${slide.accent} text-white text-xs font-bold px-4 py-1.5 rounded-full mb-4 tracking-wide uppercase w-fit`}>
                  {slide.tag}
                </span>
                <h2 className="mb-3 text-3xl font-extrabold leading-tight text-white whitespace-pre-line md:text-4xl lg:text-5xl" style={{ fontFamily: "Georgia, serif" }}>
                  {slide.title}
                </h2>
                <div className="flex items-center gap-3 mb-3">
                  <span className="text-sm text-white/80">Today only</span>
                  <span className="px-4 py-1.5 text-sm font-extrabold text-amber-800 bg-white rounded-lg shadow-lg">
                    {slide.discount}
                  </span>
                </div>
                <p className="max-w-sm mb-5 text-sm text-white/70">{slide.description}</p>
                <Link
                  to="/shop"
                  className="flex items-center gap-2 px-6 py-3 text-sm font-bold transition-all bg-white rounded-full text-amber-800 hover:shadow-lg w-fit hover:bg-cream-100 active:scale-95"
                >
                  Shop Now <FaArrowRight className="text-xs" />
                </Link>
              </div>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};

export default HeroSlider;
