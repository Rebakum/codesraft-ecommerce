import {
  FaArrowRightLong,
  FaTwitter,
  FaPinterest,
  FaInstagram,
  FaFacebook,
} from "react-icons/fa6";
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
  { icon: leaf, title: "100% Arabica Coffee", desc: "100% healthy & Fresh coffee, " },
  { icon: headPhone, title: "Great Support 24/7", desc: "Instant access to Contact" },
  { icon: star, title: "Customer Feedback", desc: "Our happy customer" },
  { icon: bag, title: "100% Secure Payment", desc: "We ensure your money is safe" },
  { icon: truck, title: "Free Shipping", desc: "Free shipping with discount" },
  { icon: box, title: "Premium Quality", desc: "100% healthy & Fresh coffee." },
];

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
    <div className="dark:text-gray-200">
      <Nav_Banner name="About Us" path="/about" />
      

      {/* Hero Section 1 */}
      <section className="px-4 mx-auto my-16 md:my-20 all-container">
        <div className="flex flex-col items-center gap-8 md:flex-row">
          <div className="w-full md:w-1/2">
            <h2 className="mb-6 text-4xl font-bold md:text-6xl">
              100% Trusted <br /> Coffee Brand
            </h2>
            <p className="text-base text-gray-500 dark:text-gray-400 md:text-xl">
              Morbi porttitor ligula in nunc varius sagittis. Proin dui nisi,
              laoreet ut tempor ac, cursus vitae eros. Cras quis ultricies elit.
              Proin ac lectus arcu. Maecenas aliquet vel tellus at accumsan.
              Donec a eros non massa vulputate ornare. Vivamus ornare commodo
              ante, at commodo felis congue vitae.
            </p>
          </div>
          <div className="w-full md:w-1/2">
            <img src={farmer3} alt="Coffee farmer" className="w-full h-auto rounded-lg" />
          </div>
        </div>
      </section>

      {/* Hero Section 2 */}
      <section className="px-4 dark:bg-gray-800">
        <div className="flex flex-col gap-8 py-16 md:flex-row all-container">
          <div className="w-full md:w-1/2">
            <img src={farmer2} alt="Coffee beans" className="w-full h-auto rounded-lg" />
          </div>
          <div className="w-full md:w-1/2">
            <h2 className="mb-6 text-4xl font-bold md:text-6xl">
              100% Trusted <br /> Coffee Brand
            </h2>
            <p className="text-base text-gray-500 dark:text-gray-400 md:text-xl">
              Pellentesque a ante vulputate leo porttitor luctus sed eget eros.
              Nulla et rhoncus neque. Duis non diam eget est luctus tincidunt a a
              mi. Nulla eu eros consequat tortor tincidunt feugiat.
            </p>

            <div className="grid grid-cols-2 gap-4 mt-6 md:grid-cols-3 md:gap-6">
              {features.map((f) => (
                <div key={f.title} className="flex gap-4">
                  <img src={f.icon} alt="" className="w-8 h-8 shrink-0" />
                  <div>
                    <h3 className="mb-1 text-sm font-bold md:text-base">{f.title}</h3>
                    <p className="text-xs text-gray-500 dark:text-gray-400">{f.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Hero Section 3 */}
      <section className="px-4 mx-auto mt-16 all-container">
        <div className="flex flex-col items-center gap-8 md:flex-row">
          <div className="w-full md:w-1/2">
            <h2 className="mb-6 text-4xl font-bold md:text-6xl">
              We Delivered, You <br /> Enjoy Your Order.
            </h2>
            <p className="text-base text-gray-500 dark:text-gray-400 md:text-xl">
              Ut suscipit egestas suscipit. Sed posuere pellentesque nunc,
              ultrices consectetur velit dapibus eu. Mauris sollicitudin
              dignissim diam, ac mattis eros accumsan rhoncus.
            </p>
            <div className="my-6 space-y-2">
              {[
                "Sed in metus pellentesque.",
                "Fusce et ex commodo, aliquam nulla efficitur, tempus lorem.",
                "Maecenas ut nunc fringilla erat varius.",
              ].map((text) => (
                <div key={text} className="flex items-center gap-2">
                  <img src={check} alt="" className="w-5 h-5 shrink-0" />
                  <p>{text}</p>
                </div>
              ))}
            </div>
            <button className="flex items-center gap-2 px-10 py-3 text-white transition-colors bg-red-600 rounded-full hover:bg-red-700">
              Shop Now <FaArrowRightLong />
            </button>
          </div>
          <div className="w-full md:w-1/2">
            <img src={farmer3} alt="Delivery" className="w-full h-auto rounded-lg" />
          </div>
        </div>

        <div className="grid grid-cols-2 gap-4 mt-6 md:grid-cols-3 lg:grid-cols-6 md:gap-6">
              {features.map((f) => (
                <div key={f.title} className="flex flex-col items-center gap-4 justify-content">
                  <img src={f.icon} alt="" className="w-8 h-8 shrink-0" />
                  <div>
                    <h3 className="mb-1 text-sm font-bold md:text-base">{f.title}</h3>
                    <p className="text-xs text-gray-500 dark:text-gray-400">{f.desc}</p>
                  </div>
                </div>
              ))}
            </div>
      </section>

      {/* Our Awesome Team */}
      <section className="px-4 mx-auto mt-20 all-container">
        <div className="mb-10 text-center">
          <h2 className="mb-4 text-3xl font-bold md:text-5xl">Our Awesome Team</h2>
          <p className="text-sm text-gray-500 dark:text-gray-400">
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
                <div className="relative w-full mb-4 overflow-hidden rounded-lg group h-72">
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
                <h3 className="text-lg font-semibold">{member.name}</h3>
                <p className="text-sm text-gray-500 dark:text-gray-400">{member.position}</p>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </section>

      {/* Client Testimonials */}
      {testimonials.length > 0 && (
        <section className="px-4 mx-auto mt-20 mb-16 all-container">
          <div className="mb-10 text-center">
            <h2 className="mb-4 text-3xl font-bold md:text-5xl">Client Testimonials</h2>
            <p className="text-sm text-gray-500 dark:text-gray-400">
              See what our clients are saying about us.
            </p>
          </div>
          <div className="grid grid-cols-1 gap-6 md:grid-cols-3">
            {testimonials.map((t, i) => (
              <div key={i} className="flex flex-col items-center p-6 text-center bg-white rounded-lg shadow dark:bg-gray-800">
                <img
                  src={t.image}
                  alt={t.name}
                  className="object-cover w-16 h-16 mb-4 rounded-full"
                />
                <h3 className="mb-1 font-semibold">{t.name}</h3>
                <div className="flex gap-0.5 mb-3">
                  {[...Array(5)].map((_, i) => (
                    <svg key={i} className={`w-4 h-4 ${i < t.rating ? "text-yellow-400" : "text-gray-300"}`} fill="currentColor" viewBox="0 0 20 20">
                      <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.847 5.674h5.964c.969 0 1.371 1.24.588 1.81l-4.821 3.501 1.847 5.674c.3.921-.755 1.688-1.538 1.118L10 15.347l-4.821 3.501c-.783.57-1.838-.197-1.538-1.118l1.847-5.674-4.821-3.501c-.783-.57-.38-1.81.588-1.81h5.964L9.049 2.927z" />
                    </svg>
                  ))}
                </div>
                <p className="text-sm text-gray-500 dark:text-gray-400">"{t.testimonial}"</p>
              </div>
            ))}
          </div>
        </section>
      )}
    </div>
  );
};

export default About;
