import { useEffect, useState } from "react";
import { FaStar, FaQuoteLeft } from "react-icons/fa";

const Testimonials = () => {
  const [testimonials, setTestimonials] = useState([]);

  useEffect(() => {
    fetch("/testimonial.json")
      .then((res) => res.json())
      .then((data) => setTestimonials(data.slice(0, 3)))
      .catch((err) => console.error(err));
  }, []);

  return (
    <section className="py-10">
      {/* Section Header */}
      <div className="max-w-3xl mx-auto mb-10 text-center">
        <span className="mb-3 text-sm font-semibold tracking-[0.2em] uppercase text-amber-700">
          Testimonials
        </span>

        <h2
          className="mt-3 text-4xl font-bold text-gray-600 md:text-5xl"
          style={{ fontFamily: "Georgia, serif" }}
        >
          What Coffee Lovers Say
        </h2>

        <p className="mt-4 text-gray-600">
          Discover why thousands of customers trust us for their daily coffee
          experience.
        </p>
      </div>

      {/* Cards */}
      <div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3">
        {testimonials.map((testimonial) => (
          <div
            key={testimonial.id}
            className="relative p-8 transition-all duration-300 bg-white border border-gray-100 shadow-sm rounded-3xl hover:shadow-xl"
          >
            {/* Quote Icon */}
            <div className="absolute text-5xl text-green-100 top-6 right-6">
              <FaQuoteLeft />
            </div>

            {/* Rating */}
            <div className="flex gap-1 mb-5">
              {[...Array(5)].map((_, i) => (
                <FaStar
                  key={i}
                  className={`${
                    i < testimonial.rating
                      ? "text-yellow-400"
                      : "text-gray-200"
                  }`}
                />
              ))}
            </div>

            {/* Review */}
            <p className="mb-8 leading-relaxed text-gray-600">
              "{testimonial.testimonial}"
            </p>

            {/* User */}
            <div className="flex items-center gap-4">
              <img
                src={testimonial.image}
                alt={testimonial.name}
                className="object-cover border-2 border-green-100 rounded-full w-14 h-14"
              />

              <div>
                <h4 className="font-semibold text-gray-900">
                  {testimonial.name}
                </h4>

                <p className="text-sm text-gray-500">
                  Verified Customer
                </p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Testimonials;