
import { FaArrowRight } from "react-icons/fa";
import image01 from "../../assets/home-assets/banner/bannar-01.jpg";
import image02 from "../../assets/home-assets/banner/banner-second.png";
import image03 from "../../assets/home-assets/banner/banner-third.png";

const offers = [
  {
    id: 1,
    subtitle: "BEST DEALS",
    title: "Sale of the Month",
    description: "00 DAYS : 02 HOURS : 18 MINS : 46 SECS",
    image: image01,
  },
  {
    id: 2,
    subtitle: "85% FAT FREE",
    title: "Low-Fat Meat",
    description: "Started at $79.99",
    image: image02,
  },
  {
    id: 3,
    subtitle: "SUMMER SALE",
    title: "100% Fresh Fruit",
    description: "Up to 64% OFF",
    image: image03,
  },
];



const OfferSlider = () => {
  return (
    <section className="grid grid-cols-1 gap-6 py-10 lg:grid-cols-3">
      {offers.map((offer) => (
        <div
          key={offer.id}
          className="relative overflow-hidden rounded-xl h-[520px] group"
        >
          {/* Background Image */}
          <img
            src={offer.image}
            alt={offer.title}
            className="z-0 object-cover w-full h-full transition-transform duration-500 group-hover:scale-105"
          />

          {/* Overlay */}
          <div className="absolute inset-0 z-10 bg-black/25"></div>

          {/* Content */}
          <div className="absolute inset-0 z-20 flex flex-col items-center px-6 pt-10 text-center">
            <p className="text-sm font-medium tracking-wider text-white uppercase">
              {offer.subtitle}
            </p>

            <h2 className="mt-6 text-4xl font-bold text-white md:text-5xl">
              {offer.title}
            </h2>

            <p className="mt-5 text-lg font-semibold text-white">
              {offer.description}
            </p>

            <button className="flex items-center gap-2 px-8 py-4 mt-8 text-lg font-semibold text-red-600 transition-all bg-white rounded-full hover:bg-red-600 hover:text-white">
              Shop Now
              <FaArrowRight />
            </button>
          </div>
        </div>
      ))}
    </section>
  );
};

export default OfferSlider;
