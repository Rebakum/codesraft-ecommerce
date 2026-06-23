import { motion } from "framer-motion";
import { BsEnvelope } from "react-icons/bs";
import { CiLocationOn } from "react-icons/ci";
import { MdOutlineWifiCalling3 } from "react-icons/md";
import Nav_Banner from "../Shared/Nav_Banner";

const inputClass =
  "w-full px-4 py-2.5 text-sm border border-coffee-200 dark:border-coffee-600 dark:bg-coffee-800 dark:text-white rounded-xl focus:outline-none focus:border-amber-500 focus:ring-1 focus:ring-amber-500";

const fadeUp = {
  hidden: { opacity: 0, y: 25 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.5, ease: "easeOut" } },
};

const ContactPage = () => {
  return (
    <div>
      <Nav_Banner name={"Contact Us"} path={"/contact"} />

      <div className="px-4 py-16 mx-auto all-container">
        {/* Header */}
        <motion.div
          initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeUp}
          className="mb-12 text-center"
        >
          <h1 className="mb-4 text-4xl font-bold dark:text-white md:text-5xl" style={{ fontFamily: "Georgia, serif" }}>
            Get In Touch
          </h1>
          <p className="text-coffee-500 dark:text-coffee-400 max-w-xl mx-auto">
            Have a question, suggestion, or just want to say hello? We&apos;d love to hear from you.
          </p>
        </motion.div>

        <div className="flex flex-col gap-10 lg:flex-row">
          {/* Contact Info */}
          <motion.div
            initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeUp}
            className="flex flex-col gap-4 lg:w-1/3"
          >
            <div className="flex items-start gap-4 p-6 bg-white dark:bg-[#2b1a0d] shadow-sm border border-coffee-100 dark:border-coffee-800 rounded-2xl">
              <div className="shrink-0 w-12 h-12 rounded-xl flex items-center justify-center bg-amber-50 dark:bg-amber-950/30">
                <CiLocationOn className="text-xl text-amber-700" />
              </div>
              <div>
                <h3 className="mb-1 font-bold dark:text-white">Address</h3>
                <p className="text-sm text-coffee-500 dark:text-coffee-400">42 Roaster Lane<br />Portland, OR 97201</p>
              </div>
            </div>

            <div className="flex items-start gap-4 p-6 bg-white dark:bg-[#2b1a0d] shadow-sm border border-coffee-100 dark:border-coffee-800 rounded-2xl">
              <div className="shrink-0 w-12 h-12 rounded-xl flex items-center justify-center bg-amber-50 dark:bg-amber-950/30">
                <MdOutlineWifiCalling3 className="text-xl text-amber-700" />
              </div>
              <div>
                <h3 className="mb-1 font-bold dark:text-white">Phone</h3>
                <p className="text-sm text-coffee-500 dark:text-coffee-400">+1 (234) 567-890</p>
                <p className="text-sm text-coffee-500 dark:text-coffee-400">Mon - Sat: 6:00 AM - 8:00 PM</p>
              </div>
            </div>

            <div className="flex items-start gap-4 p-6 bg-white dark:bg-[#2b1a0d] shadow-sm border border-coffee-100 dark:border-coffee-800 rounded-2xl">
              <div className="shrink-0 w-12 h-12 rounded-xl flex items-center justify-center bg-amber-50 dark:bg-amber-950/30">
                <BsEnvelope className="text-xl text-amber-700" />
              </div>
              <div>
                <h3 className="mb-1 font-bold dark:text-white">Email</h3>
                <p className="text-sm text-coffee-500 dark:text-coffee-400">hello@brewbean.com</p>
                <p className="text-sm text-coffee-500 dark:text-coffee-400">support@brewbean.com</p>
              </div>
            </div>
          </motion.div>

          {/* Contact Form */}
          <motion.div
            initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeUp}
            className="flex-1 p-8 bg-white dark:bg-[#2b1a0d] shadow-sm border border-coffee-100 dark:border-coffee-800 rounded-2xl"
          >
            <h2 className="mb-2 text-2xl font-bold dark:text-white">Send a Message</h2>
            <p className="mb-6 text-sm text-coffee-500 dark:text-coffee-400">Fill out the form below and we&apos;ll get back to you within 24 hours.</p>
            <form onSubmit={(e) => e.preventDefault()} className="space-y-4">
              <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
                <div>
                  <label htmlFor="name" className="block mb-1 text-sm font-medium dark:text-coffee-300">Name</label>
                  <input id="name" type="text" placeholder="Your name" className={inputClass} />
                </div>
                <div>
                  <label htmlFor="email" className="block mb-1 text-sm font-medium dark:text-coffee-300">Email</label>
                  <input id="email" type="email" placeholder="hello@example.com" className={inputClass} />
                </div>
              </div>
              <div>
                <label htmlFor="subject" className="block mb-1 text-sm font-medium dark:text-coffee-300">Subject</label>
                <input id="subject" type="text" placeholder="How can we help?" className={inputClass} />
              </div>
              <div>
                <label htmlFor="message" className="block mb-1 text-sm font-medium dark:text-coffee-300">Message</label>
                <textarea id="message" rows={5} placeholder="Tell us more..." className={`${inputClass} resize-none`} />
              </div>
              <button
                type="submit"
                className="px-8 py-3 text-sm font-semibold text-white transition-all rounded-full bg-amber-700 hover:bg-amber-800 active:scale-95"
              >
                Send Message
              </button>
            </form>
          </motion.div>
        </div>

        {/* Google Map */}
        <motion.div
          initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeUp}
          className="mt-12 overflow-hidden rounded-2xl"
        >
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2795.8!2d-122.4194!3d37.7749!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x8085809c6c8f4459%3A0xb1a62c64e5b9e7!2sPortland%2C%20OR!5e0!3m2!1sen!2sus!4v1700000000000"
            width="100%"
            height="400"
            style={{ border: 0 }}
            allowFullScreen=""
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
            title="Brew & Bean Location"
          />
        </motion.div>
      </div>
    </div>
  );
};

export default ContactPage;
