import { Link } from "react-router-dom";
import { motion } from "framer-motion";

const Error = () => {
  return (
    <div className="flex flex-col items-center justify-center min-h-[80vh] px-4">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="text-center"
      >
        <h1 className="text-8xl font-extrabold text-amber-700 md:text-9xl" style={{ fontFamily: "Georgia, serif" }}>
          404
        </h1>
        <h2 className="mt-4 text-2xl font-bold text-coffee-800 dark:text-white md:text-3xl">
          Page Not Found
        </h2>
        <p className="max-w-md mx-auto mt-4 text-coffee-500 dark:text-coffee-400">
          Oops! The page you&apos;re looking for doesn&apos;t exist or has been moved. Let&apos;s get you back to brewing the perfect cup.
        </p>
        <Link
          to="/"
          className="inline-block mt-8 px-8 py-3 text-sm font-semibold text-white transition-all rounded-full bg-amber-700 hover:bg-amber-800 active:scale-95"
        >
          Back to Home
        </Link>
      </motion.div>
    </div>
  );
};

export default Error;
