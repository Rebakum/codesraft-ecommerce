import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { FaStar, FaQuoteLeft } from "react-icons/fa";

const container = { hidden: {}, visible: { transition: { staggerChildren: 0.12 } } };
const item = { hidden: { opacity: 0, y: 25 }, visible: { opacity: 1, y: 0, transition: { duration: 0.5, ease: "easeOut" } } };

const Testimonials = () => {
  const [testimonials, setTestimonials] = useState([]);

  useEffect(() => {
    fetch("/testimonial.json")
      .then((res) => res.json())
      .then((data) => setTestimonials(data.slice(0, 3)))
      .catch((err) => console.error(err));
  }, []);

  return (
    <section className="py-4">
      <div className="mb-6">
        <p className="mb-1 text-sm font-semibold tracking-[0.2em] uppercase text-amber-700">Testimonials</p>
        <h2 className="text-3xl font-bold text-coffee-900 dark:text-cream-100 md:text-4xl" style={{ fontFamily: "Georgia, serif" }}>
          What Coffee Lovers Say
        </h2>
      </div>

      <motion.div
        variants={container}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.2 }}
        className="grid grid-cols-1 gap-6 md:grid-cols-3"
      >
        {testimonials.map((testimonial, index) => (
          <motion.div
            key={`testimonial-${testimonial.name}-${index}`}
            variants={item}
            whileHover={{ y: -5 }}
            className="relative p-6 transition-all duration-300 bg-white border border-coffee-100 dark:bg-[#2b1a0d] dark:border-coffee-800 rounded-2xl hover:shadow-lg"
          >
            <div className="absolute text-4xl text-amber-100 dark:text-amber-950/50 top-5 right-5">
              <FaQuoteLeft />
            </div>
            <div className="flex gap-1 mb-4">
              {[...Array(5)].map((_, i) => (
                <FaStar
                  key={i}
                  className={`text-sm ${i < testimonial.rating ? "text-amber-400" : "text-coffee-200 dark:text-coffee-700"}`}
                />
              ))}
            </div>
            <p className="mb-6 text-sm leading-relaxed text-coffee-600 dark:text-coffee-400">
              &ldquo;{testimonial.testimonial}&rdquo;
            </p>
            <div className="flex items-center gap-3">
              <img src={testimonial.image} alt={testimonial.name} className="object-cover border-2 border-amber-200 dark:border-amber-800 rounded-full w-11 h-11" />
              <div>
                <h4 className="text-sm font-semibold text-coffee-900 dark:text-cream-100">{testimonial.name}</h4>
                <p className="text-xs text-coffee-500 dark:text-coffee-400">Verified Customer</p>
              </div>
            </div>
          </motion.div>
        ))}
      </motion.div>
    </section>
  );
};

export default Testimonials;
