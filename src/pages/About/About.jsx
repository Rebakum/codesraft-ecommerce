import { motion } from "framer-motion";
import { FaArrowRightLong, FaTwitter, FaPinterest, FaInstagram, FaFacebook } from "react-icons/fa6";
import { useEffect, useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/swiper-bundle.css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import { Navigation, Pagination } from "swiper/modules";
import "./styles/styles.css";

import farmer1 from "../../assets/about-assets/image/farmer1.png";
import farmer2 from "../../assets/about-assets/image/customer/customer02.jpg";
import farmer3 from "../../assets/about-assets/image/customer/customer03.jpg";
import leaf from "../../assets/about-assets/image/icon/leaf.png";
import box from "../../assets/about-assets/image/icon/box.png";
import bag from "../../assets/about-assets/image/icon/bag.png";
import truck from "../../assets/about-assets/image/icon/truck.png";
import star from "../../assets/about-assets/image/icon/star.png";
import headPhone from "../../assets/about-assets/image/icon/headPhone.png";
import check from "../../assets/about-assets/image/icon/check.png";
import Nav_Banner from "../Shared/Nav_Banner";

const features = [
  { icon: leaf, title: "100% Arabica Coffee", desc: "100% healthy & Fresh coffee" },
  { icon: headPhone, title: "Great Support 24/7", desc: "Instant access to Contact" },
  { icon: star, title: "Customer Feedback", desc: "Our happy customer" },
  { icon: bag, title: "100% Secure Payment", desc: "We ensure your money is safe" },
  { icon: truck, title: "Free Shipping", desc: "Free shipping with discount" },
  { icon: box, title: "Premium Quality", desc: "100% healthy & Fresh coffee" },
];

const stats = [
  { value: "10K+", label: "Happy Customers" },
  { value: "50+", label: "Coffee Origins" },
  { value: "8+", label: "Years of Roasting" },
  { value: "99%", label: "Satisfaction Rate" },
];

const fadeUp = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" } },
};

const About = () => {
  const [team, setTeam] = useState([]);
  const [testimonials, setTestimonials] = useState([]);

  useEffect(() => {
    fetch("/team.json")
      .then((res) => res.json())
      .then((data) => setTeam(data))
      .catch((err) => console.error("Error fetching team data:", err));
  }, []);

  useEffect(() => {
    fetch("/testimonial.json")
      .then((res) => res.json())
      .then((data) => setTestimonials(data))
      .catch((err) => console.error("Error fetching testimonial data:", err));
  }, []);

  return (
    <div className="dark:text-coffee-100">
      <Nav_Banner name="About Us" path="/about" />

      {/* Our Story */}
      <motion.section
        initial="hidden" whileInView="visible" viewport={{ once: true, amount: 0.2 }} variants={fadeUp}
        className="px-4 mx-auto my-16 md:my-20 all-container"
      >
        <div className="flex flex-col items-center gap-8 md:flex-row">
          <div className="w-full md:w-1/2">
            <span className="text-sm font-semibold tracking-wider uppercase text-amber-700">Our Story</span>
            <h2 className="mt-3 mb-6 text-4xl font-bold md:text-5xl dark:text-white" style={{ fontFamily: "Georgia, serif" }}>
              Since 2015, We&apos;ve Been <br /> Sourcing Premium Coffee
            </h2>
            <p className="text-base leading-relaxed text-coffee-500 dark:text-coffee-400 md:text-lg">
              From humble beginnings in a small Portland roastery, Brew &amp; Bean has grown into a beloved coffee brand trusted by thousands. We travel to the world&apos;s finest farms in Ethiopia, Colombia, Guatemala, and beyond &mdash; building direct relationships with farmers who share our passion for quality.
            </p>
            <p className="mt-4 text-base leading-relaxed text-coffee-500 dark:text-coffee-400 md:text-lg">
              Every bag we ship tells a story of craftsmanship, sustainability, and an unwavering commitment to delivering the freshest beans possible. Roasted within 48 hours of shipping, our coffee arrives at your doorstep at peak flavor.
            </p>
          </div>
          <div className="w-full md:w-1/2">
            <img src={farmer1} alt="Coffee farmer" className="w-full h-auto shadow-lg dark:shadow-none rounded-2xl" />
          </div>
        </div>
      </motion.section>

      {/* Coffee Journey */}
      <motion.section
        initial="hidden" whileInView="visible" viewport={{ once: true, amount: 0.2 }} variants={fadeUp}
        className="px-4 py-16 bg-coffee-50 dark:bg-[#2b1a0d]"
      >
        <div className="flex flex-col gap-8 all-container md:flex-row">
          <div className="w-full md:w-1/2">
            <img src={farmer2} alt="Coffee journey" className="w-full h-auto shadow-lg dark:shadow-none rounded-2xl" />
          </div>
          <div className="w-full md:w-1/2">
            <span className="text-sm font-semibold tracking-wider uppercase text-amber-700">Coffee Journey</span>
            <h2 className="mt-3 mb-6 text-4xl font-bold md:text-5xl dark:text-white" style={{ fontFamily: "Georgia, serif" }}>
              From Farm to Cup, <br /> Every Sip Tells a Story
            </h2>
            <p className="text-base leading-relaxed text-coffee-500 dark:text-coffee-400 md:text-lg">
              Our journey begins at high-altitude farms where the world&apos;s finest Arabica beans are hand-picked at peak ripeness. Each batch is carefully processed, sun-dried, and shipped directly to our roastery in Portland.
            </p>
          </div>
        </div>
      </motion.section>

      {/* Mission & Vision */}
      <motion.section
        initial="hidden" whileInView="visible" viewport={{ once: true, amount: 0.2 }} variants={fadeUp}
        className="px-4 mx-auto my-16 all-container"
      >
        <div className="flex flex-col items-center gap-8 md:flex-row">
          <div className="w-full md:w-1/2">
            <span className="text-sm font-semibold tracking-wider uppercase text-amber-700">Mission & Vision</span>
            <h2 className="mt-3 mb-6 text-4xl font-bold md:text-5xl dark:text-white" style={{ fontFamily: "Georgia, serif" }}>
              We Delivered, You <br /> Enjoy Your Order
            </h2>
            <p className="text-base leading-relaxed text-coffee-500 dark:text-coffee-400 md:text-lg">
              Our mission is to connect coffee lovers with the world&apos;s best single-origin beans &mdash; ethically sourced, freshly roasted, and delivered with care. We envision a world where every cup of coffee is a moment of joy, connection, and conscious consumption.
            </p>
            <div className="my-6 space-y-3">
              {[
                "Ethically sourced from 50+ farms worldwide",
                "Freshly roasted within 48 hours of shipping",
                "Carbon-neutral delivery on all orders",
              ].map((text) => (
                <div key={text} className="flex items-center gap-2">
                  <img src={check} alt="" className="w-5 h-5 shrink-0" />
                  <p className="text-sm text-coffee-700 dark:text-coffee-300">{text}</p>
                </div>
              ))}
            </div>
            <button className="flex items-center gap-2 px-10 py-3 text-white transition-colors rounded-full bg-amber-700 hover:bg-amber-800">
              Shop Now <FaArrowRightLong />
            </button>
          </div>
          <div className="w-full md:w-1/2">
            <img src={farmer3} alt="Mission" className="w-full h-auto shadow-lg dark:shadow-none rounded-2xl" />
          </div>
        </div>
      </motion.section>

      {/* Why Choose Us */}
      <motion.section
        initial="hidden" whileInView="visible" viewport={{ once: true, amount: 0.2 }} variants={fadeUp}
        className="px-4 py-16 bg-coffee-50 dark:bg-[#2b1a0d]"
      >
        <div className="max-w-6xl mx-auto text-center all-container">
          <span className="text-sm font-semibold tracking-wider uppercase text-amber-700">Why Choose Us</span>
          <h2 className="mt-3 mb-10 text-3xl font-bold md:text-4xl dark:text-white" style={{ fontFamily: "Georgia, serif" }}>
            What Makes Brew &amp; Bean Different
          </h2>
          <div className="grid grid-cols-2 gap-6 md:grid-cols-3 lg:grid-cols-6">
            {features.map((f) => (
              <div key={f.title} className="flex flex-col items-center gap-3 p-4 bg-white shadow-sm dark:bg-[#1a0f08] rounded-2xl">
                <img src={f.icon} alt="" className="w-10 h-10" />
                <h3 className="text-sm font-bold dark:text-white">{f.title}</h3>
                <p className="text-xs text-coffee-500 dark:text-coffee-400">{f.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </motion.section>

      {/* Statistics */}
      <motion.section
        initial="hidden" whileInView="visible" viewport={{ once: true, amount: 0.3 }} variants={fadeUp}
        className="px-4 py-16 mx-auto all-container"
      >
        <div className="grid grid-cols-2 gap-6 md:grid-cols-4">
          {stats.map((s) => (
            <div key={s.label} className="p-6 text-center bg-white border border-coffee-100 dark:bg-[#2b1a0d] dark:border-coffee-800 rounded-2xl">
              <h3 className="text-4xl font-extrabold text-amber-700 md:text-5xl" style={{ fontFamily: "Georgia, serif" }}>
                {s.value}
              </h3>
              <p className="mt-2 text-sm text-coffee-500 dark:text-coffee-400">{s.label}</p>
            </div>
          ))}
        </div>
      </motion.section>

      {/* Team Members */}
      <motion.section
        initial="hidden" whileInView="visible" viewport={{ once: true, amount: 0.2 }} variants={fadeUp}
        className="px-4 mx-auto mt-10 all-container"
      >
        <div className="mb-10 text-center">
          <h2 className="mb-4 text-3xl font-bold md:text-5xl dark:text-white">Our Awesome Team</h2>
          <p className="text-sm text-coffee-500 dark:text-coffee-400">
            Meet the passionate people behind Brew &amp; Bean.
          </p>
        </div>

        <Swiper
          spaceBetween={20}
          slidesPerView={1}
          breakpoints={{
            640: { slidesPerView: 2 },
            768: { slidesPerView: 3 },
            1024: { slidesPerView: 4 },
          }}
          pagination={{ clickable: true }}
          navigation={true}
          modules={[Navigation, Pagination]}
        >
          {team.map((member, index) => (
            <SwiperSlide key={index}>
              <div className="flex flex-col items-center p-4">
                <div className="relative w-full mb-4 overflow-hidden rounded-2xl group h-72">
                  <img
                    src={member.photo}
                    alt={member.name}
                    className="object-cover w-full h-full transition-transform duration-500 group-hover:scale-105"
                  />
                  <div className="absolute inset-0 flex items-center justify-center transition-opacity duration-500 opacity-0 bg-black/50 group-hover:opacity-100">
                    <div className="flex gap-4">
                      {member.social_links.twitter && (
                        <a href={member.social_links.twitter} target="_blank" rel="noopener noreferrer" className="text-white transition hover:text-blue-400">
                          <FaTwitter size={20} />
                        </a>
                      )}
                      {member.social_links.pinterest && (
                        <a href={member.social_links.pinterest} target="_blank" rel="noopener noreferrer" className="text-white transition hover:text-red-400">
                          <FaPinterest size={20} />
                        </a>
                      )}
                      {member.social_links.instagram && (
                        <a href={member.social_links.instagram} target="_blank" rel="noopener noreferrer" className="text-white transition hover:text-pink-400">
                          <FaInstagram size={20} />
                        </a>
                      )}
                      {member.social_links.facebook && (
                        <a href={member.social_links.facebook} target="_blank" rel="noopener noreferrer" className="text-white transition hover:text-blue-600">
                          <FaFacebook size={20} />
                        </a>
                      )}
                    </div>
                  </div>
                </div>
                <h3 className="text-lg font-semibold dark:text-white">{member.name}</h3>
                <p className="text-sm text-coffee-500 dark:text-coffee-400">{member.position}</p>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </motion.section>

      {/* Testimonials */}
      {testimonials.length > 0 && (
        <section className="px-4 mx-auto mt-20 mb-16 all-container">
          <div className="mb-10 text-center">
            <h2 className="mb-4 text-3xl font-bold md:text-5xl dark:text-white">Client Testimonials</h2>
            <p className="text-sm text-coffee-500 dark:text-coffee-400">See what our clients are saying about us.</p>
          </div>
          <div className="grid grid-cols-1 gap-6 md:grid-cols-3">
            {testimonials.map((t, i) => (
              <div key={i} className="flex flex-col items-center p-6 text-center bg-white border border-coffee-100 shadow-sm dark:bg-[#2b1a0d] dark:border-coffee-800 rounded-2xl">
                <img src={t.image} alt={t.name} className="object-cover w-16 h-16 mb-4 rounded-full" />
                <h3 className="mb-1 font-semibold dark:text-white">{t.name}</h3>
                <div className="flex gap-0.5 mb-3">
                  {[...Array(5)].map((_, j) => (
                    <svg key={j} className={`w-4 h-4 ${j < t.rating ? "text-amber-400" : "text-coffee-200 dark:text-coffee-700"}`} fill="currentColor" viewBox="0 0 20 20">
                      <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.847 5.674h5.964c.969 0 1.371 1.24.588 1.81l-4.821 3.501 1.847 5.674c.3.921-.755 1.688-1.538 1.118L10 15.347l-4.821 3.501c-.783.57-1.838-.197-1.538-1.118l1.847-5.674-4.821-3.501c-.783-.57-.38-1.81.588-1.81h5.964L9.049 2.927z" />
                    </svg>
                  ))}
                </div>
                <p className="text-sm text-coffee-500 dark:text-coffee-400">&ldquo;{t.testimonial}&rdquo;</p>
              </div>
            ))}
          </div>
        </section>
      )}
    </div>
  );
};

export default About;
