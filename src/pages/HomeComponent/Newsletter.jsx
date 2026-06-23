import { motion } from "framer-motion";
import { FaEnvelope } from "react-icons/fa";

const Newsletter = () => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.3 }}
      transition={{ duration: 0.5, ease: "easeOut" }}
      className="p-8 bg-gradient-to-br from-amber-700 to-coffee-800 rounded-2xl shadow-lg"
    >
      <div className="max-w-2xl mx-auto text-center">
        <motion.div
          initial={{ scale: 0 }}
          whileInView={{ scale: 1 }}
          viewport={{ once: true }}
          transition={{ type: "spring", stiffness: 200, damping: 15 }}
        >
          <FaEnvelope className="mx-auto mb-4 text-4xl text-amber-200" />
        </motion.div>
        <h2 className="mb-3 text-2xl font-bold text-white md:text-3xl" style={{ fontFamily: "Georgia, serif" }}>
          Join the Brew &amp; Bean Club
        </h2>
        <p className="mb-6 text-sm text-amber-100">
          Subscribe for exclusive deals, new roast announcements, and brewing tips from our master roasters.
        </p>
        <form onSubmit={(e) => e.preventDefault()} className="flex flex-col max-w-md gap-3 mx-auto sm:flex-row">
          <input
            type="email"
            placeholder="Enter your email address"
            aria-label="Email address"
            className="flex-1 px-5 py-3 text-sm bg-white/20 backdrop-blur-sm text-white placeholder-amber-200 border border-white/30 rounded-full focus:outline-none focus:bg-white/30 transition-all"
          />
          <button
            type="submit"
            className="px-8 py-3 text-sm font-semibold text-amber-800 transition-colors bg-white rounded-full hover:bg-cream-100 whitespace-nowrap"
          >
            Subscribe
          </button>
        </form>
      </div>
    </motion.div>
  );
};

export default Newsletter;
