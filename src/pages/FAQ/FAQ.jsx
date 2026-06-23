import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { FaChevronDown } from "react-icons/fa";
import Nav_Banner from "../Shared/Nav_Banner";
import bannerBg from "../../assets/home-assets/banner/banner-second.png";

const faqs = [
  {
    q: "How long does shipping take?",
    a: "Standard shipping takes 3-5 business days within the US. Express shipping delivers within 1-2 business days. International orders typically arrive within 7-14 business days depending on your location.",
  },
  {
    q: "Do you offer refunds?",
    a: "Yes! We offer a full refund within 7 days of delivery if you're not satisfied with your purchase. The coffee must be unopened or less than 20% consumed. Contact our support team to initiate a return.",
  },
  {
    q: "Are your beans freshly roasted?",
    a: "Absolutely. Every batch is roasted to order within 48 hours of shipping. We never stock pre-roasted beans on shelves \u2014 your coffee goes from roaster to your doorstep at peak freshness.",
  },
  {
    q: "How can I track my order?",
    a: "Once your order ships, you'll receive an email with a tracking number and a link to our carrier's tracking page. You can also check your order status by logging into your account and visiting the Orders section.",
  },
  {
    q: "What payment methods do you accept?",
    a: "We accept all major credit cards (Visa, Mastercard, American Express), PayPal, Apple Pay, Google Pay, and Shop Pay. All transactions are secured with 256-bit SSL encryption.",
  },
  {
    q: "Can I subscribe for regular deliveries?",
    a: "Yes! Our Subscribe & Save program lets you set up recurring deliveries at 10% off. Choose your frequency (weekly, bi-weekly, or monthly) and swap or cancel anytime from your account dashboard.",
  },
];

const FAQ = () => {
  const [open, setOpen] = useState(null);

  return (
    <>
      <Nav_Banner name="FAQ" path="/faq" />

      <section className="max-w-3xl px-4 py-16 mx-auto all-container">
        <div className="mb-12">
          <p className="text-lg text-amber-700 dark:text-coffee-400">
            Find answers to your questions.
          </p>
          <h1 className="mt-3 mb-4 text-4xl font-bold text-coffee-800 dark:text-white md:text-5xl" style={{ fontFamily: "Georgia, serif" }}>
            Frequently Asked Questions
          </h1>
        </div>

        <div className="grid grid-cols-1 gap-8 lg:grid-cols-12">
          {/* FAQ */}
          <div className="space-y-3 lg:col-span-7">
            {faqs.map((faq, i) => (
              <div
                key={i}
                className="overflow-hidden border border-coffee-200 rounded-2xl dark:border-coffee-700"
              >
                <button
                  onClick={() => setOpen(open === i ? null : i)}
                  className="flex items-center justify-between w-full p-5 text-left transition-colors bg-white dark:bg-[#2b1a0d] hover:bg-coffee-50 dark:hover:bg-coffee-900"
                >
                  <span className="pr-4 font-semibold text-coffee-800 dark:text-white">
                    {faq.q}
                  </span>

                  <motion.div
                    animate={{ rotate: open === i ? 180 : 0 }}
                    transition={{ duration: 0.3 }}
                  >
                    <FaChevronDown className="text-amber-700" />
                  </motion.div>
                </button>

                <AnimatePresence>
                  {open === i && (
                    <motion.div
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: "auto", opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.3 }}
                    >
                      <div className="px-5 pb-5 text-sm leading-relaxed bg-white dark:bg-[#2b1a0d] text-coffee-600 dark:text-coffee-400">
                        {faq.a}
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            ))}
          </div>

          {/* Banner */}
          <div className="flex items-center lg:col-span-5">
            <img
              src={bannerBg}
              alt="FAQ Banner"
              className="object-cover w-full shadow-lg rounded-3xl"
            />
          </div>
        </div>
      </section>
    </>
  );
};

export default FAQ;
