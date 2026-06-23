import { motion } from "framer-motion";
import { FaCalendarAlt, FaUser, FaArrowRight } from "react-icons/fa";
import coffe01 from "../../assets/home-assets/banner/coffe01.webp";
import coffee02 from "../../assets/home-assets/banner/coffee02.webp";
import coffe03 from "../../assets/home-assets/banner/coffe03.webp";

const posts = [
  {
    id: 1,
    title: "The Ultimate Guide to Pour-Over Coffee",
    excerpt: "Master the art of pour-over brewing with our step-by-step guide for the perfect cup every time.",
    image: coffe01,
    date: "Jan 15, 2026",
    author: "Brew Master",
    category: "Brewing Tips",
  },
  {
    id: 2,
    title: "Single Origin vs Blends: What's the Difference?",
    excerpt: "Discover the unique characteristics that set single-origin coffees apart from expertly crafted blends.",
    image: coffee02,
    date: "Jan 10, 2026",
    author: "Coffee Expert",
    category: "Education",
  },
  {
    id: 3,
    title: "5 Coffee Accessories Every Home Barista Needs",
    excerpt: "Elevate your home brewing game with these essential tools and accessories.",
    image: coffe03,
    date: "Jan 5, 2026",
    author: "Brew Master",
    category: "Gear",
  },
];

const container = { hidden: {}, visible: { transition: { staggerChildren: 0.12 } } };
const item = { hidden: { opacity: 0, y: 25 }, visible: { opacity: 1, y: 0, transition: { duration: 0.5, ease: "easeOut" } } };

const Blog = () => {
  return (
    <section className="py-4">
      <div className="flex items-end justify-between mb-6">
        <div>
          <p className="mb-1 text-sm font-semibold tracking-[0.2em] uppercase text-amber-700">Our Blog</p>
          <h2 className="text-3xl font-bold text-coffee-900 dark:text-cream-100 md:text-4xl" style={{ fontFamily: "Georgia, serif" }}>
            Latest Stories
          </h2>
        </div>
        <button className="flex items-center gap-1 text-sm font-semibold text-amber-700 hover:text-amber-800 transition-colors">
          View All <FaArrowRight className="text-xs" />
        </button>
      </div>

      <motion.div
        variants={container}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.1 }}
        className="grid grid-cols-1 gap-6 md:grid-cols-3"
      >
        {posts.map((post) => (
          <motion.article
            key={post.id}
            variants={item}
            whileHover={{ y: -5 }}
            className="overflow-hidden bg-white dark:bg-[#2b1a0d] border border-coffee-100 dark:border-coffee-800 rounded-2xl hover:shadow-lg transition-all duration-300 group cursor-pointer"
          >
            <div className="overflow-hidden h-48">
              <img
                src={post.image}
                alt={post.title}
                className="object-cover w-full h-full transition-transform duration-500 group-hover:scale-110"
              />
            </div>
            <div className="p-5">
              <div className="flex items-center gap-3 mb-3">
                <span className="px-2.5 py-1 text-[10px] font-bold uppercase bg-amber-50 dark:bg-amber-950/30 text-amber-700 dark:text-amber-400 rounded-full">
                  {post.category}
                </span>
                <div className="flex items-center gap-1 text-[10px] text-coffee-400 dark:text-coffee-500">
                  <FaCalendarAlt /> {post.date}
                </div>
                <div className="flex items-center gap-1 text-[10px] text-coffee-400 dark:text-coffee-500">
                  <FaUser /> {post.author}
                </div>
              </div>
              <h3 className="mb-2 text-lg font-bold text-coffee-800 dark:text-cream-100 group-hover:text-amber-700 transition-colors line-clamp-2">
                {post.title}
              </h3>
              <p className="text-sm text-coffee-500 dark:text-coffee-400 line-clamp-2">{post.excerpt}</p>
              <button className="flex items-center gap-1 mt-4 text-sm font-semibold text-amber-700 hover:text-amber-800 transition-colors">
                Read More <FaArrowRight className="text-xs" />
              </button>
            </div>
          </motion.article>
        ))}
      </motion.div>
    </section>
  );
};

export default Blog;
