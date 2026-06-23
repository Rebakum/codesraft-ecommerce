import { FaTruck, FaClock, FaGlobe, FaBoxOpen } from "react-icons/fa";
import Nav_Banner from "../Shared/Nav_Banner";

const sections = [
  {
    icon: FaTruck,
    title: "Free Shipping Over $40",
    desc: "We offer free standard shipping on all domestic orders over $40. No promo code needed — the discount is applied automatically at checkout. Orders under $40 ship for a flat rate of $5.99.",
  },
  {
    icon: FaClock,
    title: "Processing Time",
    desc: "All orders are processed within 1-2 business days. Orders placed on weekends or holidays will be processed on the next business day. You'll receive a confirmation email once your order has been roasted and shipped.",
  },
  {
    icon: FaTruck,
    title: "Delivery Time",
    desc: "Standard delivery: 3-5 business days. Express delivery: 1-2 business days (additional $9.99). We ship via USPS, UPS, and FedEx. All packages include tracking and are insured against damage.",
  },
  {
    icon: FaGlobe,
    title: "International Shipping",
    desc: "We ship to over 50 countries worldwide. International shipping rates vary by destination and are calculated at checkout. Delivery times range from 7-14 business days. Please note that customs duties and taxes may apply.",
  },
];

const Shipping = () => {
  return (
    <>
      <Nav_Banner name="Shipping & Delivery" path="/shipping" />

      <section className="px-4 py-16 mx-auto all-container">
        <div className="max-w-4xl mx-auto">
          <div className="mb-12 text-center">
            <h1 className="mb-4 text-4xl font-bold dark:text-white md:text-5xl" style={{ fontFamily: "Georgia, serif" }}>
              Shipping & Delivery
            </h1>
            <p className="text-coffee-500 dark:text-coffee-400">
              Freshly roasted coffee, delivered to your door with care.
            </p>
          </div>

          <div className="space-y-6">
            {sections.map((s) => {
              const Icon = s.icon;
              return (
                <div
                  key={s.title}
                  className="flex gap-5 p-6 bg-white dark:bg-[#2b1a0d] border border-coffee-200 dark:border-coffee-800 rounded-2xl"
                >
                  <div className="shrink-0 w-12 h-12 bg-amber-50 dark:bg-amber-950/30 rounded-xl flex items-center justify-center">
                    <Icon className="text-amber-700" />
                  </div>
                  <div>
                    <h2 className="mb-2 text-lg font-bold dark:text-white">{s.title}</h2>
                    <p className="text-sm leading-relaxed text-coffee-600 dark:text-coffee-400">{s.desc}</p>
                  </div>
                </div>
              );
            })}
          </div>

          <div className="p-6 mt-10 text-center bg-amber-50 dark:bg-amber-950/20 border border-amber-200 dark:border-amber-900 rounded-2xl">
            <FaBoxOpen className="mx-auto mb-3 text-3xl text-amber-700" />
            <h3 className="mb-2 text-lg font-bold dark:text-white">Need Help?</h3>
            <p className="text-sm text-coffee-600 dark:text-coffee-400">
              If you have questions about your order, contact us at{" "}
              <span className="font-semibold text-amber-700">hello@brewbean.com</span>{" "}
              or call <span className="font-semibold text-amber-700">+1 (234) 567-890</span>.
            </p>
          </div>
        </div>
      </section>
    </>
  );
};

export default Shipping;
