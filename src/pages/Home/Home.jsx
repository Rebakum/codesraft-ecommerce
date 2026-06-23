import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { HiBars3 } from "react-icons/hi2";
import Sidebar from "../HomeComponent/Sidebar";
import HeroSlider from "../HomeComponent/HeroSlider";
import PromoCard from "../HomeComponent/PromoCard";
import HomePopularCategories from "../HomeComponent/HomePopularCategories";
import PopularProducts from "../HomeComponent/PopularProducts";
import SpecialOfferBanner from "../HomeComponent/SpecialOfferBanner";
import NewArrivals from "../HomeComponent/NewArrivals";
import WhyChooseUs from "../HomeComponent/WhyChooseUs";
import Testimonials from "../HomeComponent/Testimonials";
import Blog from "../HomeComponent/Blog";
import Newsletter from "../HomeComponent/Newsletter";


const fadeUp = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" } },
};

const Home = () => {
  const [sidebarOpen, setSidebarOpen] = useState(false);

  return (
    <section className="max-w-[1280px] mx-auto px-4 sm:px-6 pt-4 pb-8">
      {/* Mobile Sidebar Toggle */}
      <button
        onClick={() => setSidebarOpen(true)}
        className="flex items-center gap-2 px-4 py-2.5 mb-4 text-sm font-semibold text-white transition-all bg-amber-700 rounded-xl lg:hidden hover:bg-amber-800 active:scale-95 shadow-md"
      >
        <HiBars3 className="text-lg" />
        Browse Categories
      </button>

      {/* Mobile Sidebar Overlay */}
      <AnimatePresence>
        {sidebarOpen && (
          <>
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setSidebarOpen(false)}
              className="fixed inset-0 z-40 bg-black/50 lg:hidden"
            />
            <motion.div
              initial={{ x: -300 }}
              animate={{ x: 0 }}
              exit={{ x: -300 }}
              transition={{ type: "spring", damping: 25, stiffness: 200 }}
              className="fixed top-0 left-0 z-50 h-full w-72 lg:hidden"
            >
              <Sidebar onClose={() => setSidebarOpen(false)} />
            </motion.div>
          </>
        )}
      </AnimatePresence>

      {/* Two-Column Layout */}
      <div className="flex gap-5">
        {/* Left Sidebar - 25% */}
        <div className="hidden w-[25%] shrink-0 lg:block">
          <div className="sticky top-[140px]">
            <Sidebar />
          </div>
        </div>

        {/* Right Content - 75% */}
        <div className="w-full lg:w-[75%] space-y-8">
          {/* Hero + Promo */}
         <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="grid grid-cols-1 gap-4 md:grid-cols-7"
          >
            <div className="md:col-span-5">
              <HeroSlider />
            </div>

            <div className="md:col-span-2">
              <PromoCard />
            </div>
          </motion.div>

          {/* Featured Categories */}
          <motion.div initial="hidden" whileInView="visible" viewport={{ once: true, amount: 0.2 }} variants={fadeUp}>
            <HomePopularCategories />
          </motion.div>

          {/* Best Selling Products */}
          <motion.div initial="hidden" whileInView="visible" viewport={{ once: true, amount: 0.2 }} variants={fadeUp}>
            <PopularProducts />
          </motion.div>

          {/* Special Offer Banner */}
          <motion.div initial="hidden" whileInView="visible" viewport={{ once: true, amount: 0.2 }} variants={fadeUp}>
            <SpecialOfferBanner />
          </motion.div>

          {/* New Arrivals */}
          <motion.div initial="hidden" whileInView="visible" viewport={{ once: true, amount: 0.2 }} variants={fadeUp}>
            <NewArrivals />
          </motion.div>

          {/* Why Choose Us */}
          <motion.div initial="hidden" whileInView="visible" viewport={{ once: true, amount: 0.2 }} variants={fadeUp}>
            <WhyChooseUs />
          </motion.div>

          {/* Testimonials */}
          <motion.div initial="hidden" whileInView="visible" viewport={{ once: true, amount: 0.2 }} variants={fadeUp}>
            <Testimonials />
          </motion.div>

          {/* Blog */}
          <motion.div initial="hidden" whileInView="visible" viewport={{ once: true, amount: 0.2 }} variants={fadeUp}>
            <Blog />
          </motion.div>
         

          {/* Newsletter */}
          <motion.div initial="hidden" whileInView="visible" viewport={{ once: true, amount: 0.2 }} variants={fadeUp}>
            <Newsletter />
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Home;
