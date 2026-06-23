import { Link } from "react-router-dom";
import {
  FaFacebookF,
  FaTwitter,
  FaInstagram,
  FaYoutube,
  FaMapMarkerAlt,
  FaPhone,
  FaEnvelope,
  FaClock,
} from "react-icons/fa";
import logo from "../../../public/image/fav.png";

const Footer = () => {
  return (
    <footer className="text-coffee-300 bg-coffee-950">
      {/* Main Footer */}
      <div className="grid grid-cols-1 gap-8 px-4 py-12 mx-auto max-w-[1280px] md:grid-cols-2 lg:grid-cols-4">
        {/* Brand */}
        <div>
          <Link to="/" className="flex items-center gap-2 mb-4">
            <div className="flex items-center justify-center rounded-full w-9 h-9">
              <img src={logo} alt="Brew & Bean Logo" className="w-9 h-9" />
            </div>
            <span className="text-xl font-bold text-white" style={{ fontFamily: "Georgia, serif" }}>
              Brew<span className="text-amber-500">&amp;Bean</span>
            </span>
          </Link>
          <p className="mb-4 text-sm leading-relaxed text-coffee-400">
            Premium artisan coffee sourced from the world&apos;s finest
            single-origin farms. Crafted with passion, delivered fresh.
          </p>
          <div className="flex gap-3">
            {[FaFacebookF, FaTwitter, FaInstagram, FaYoutube].map(
              (Icon, i) => (
                <a
                  key={i}
                  href="#"
                  className="flex items-center justify-center transition-all duration-300 bg-coffee-800 rounded-full w-9 h-9 hover:bg-amber-600 hover:scale-110"
                >
                  <Icon className="text-sm" />
                </a>
              )
            )}
          </div>
        </div>

        {/* Quick Links */}
        <div>
          <h4 className="mb-4 font-bold text-white">Quick Links</h4>
          <ul className="space-y-2.5 text-sm">
            <li><Link to="/about" className="transition-colors hover:text-amber-400">About Us</Link></li>
            <li><Link to="/contact" className="transition-colors hover:text-amber-400">Contact Us</Link></li>
            <li><Link to="/shop" className="transition-colors hover:text-amber-400">Shop</Link></li>
            <li><Link to="/faq" className="transition-colors hover:text-amber-400">FAQs</Link></li>
            <li><Link to="/shipping" className="transition-colors hover:text-amber-400">Shipping & Delivery</Link></li>
            <li><Link to="/terms" className="transition-colors hover:text-amber-400">Terms & Conditions</Link></li>
          </ul>
        </div>

        {/* Policies */}
        <div>
          <h4 className="mb-4 font-bold text-white">Policies</h4>
          <ul className="space-y-2.5 text-sm">
            <li><Link to="/privacy-policy" className="transition-colors hover:text-amber-400">Privacy Policy</Link></li>
            <li><Link to="/refund-policy" className="transition-colors hover:text-amber-400">Return & Refund Policy</Link></li>
            <li><Link to="/terms" className="transition-colors hover:text-amber-400">Terms & Conditions</Link></li>
            <li><Link to="/shipping" className="transition-colors hover:text-amber-400">Shipping Info</Link></li>
          </ul>
          <h4 className="mt-6 mb-4 font-bold text-white">Coffee Collection</h4>
          <ul className="space-y-2.5 text-sm">
            <li><Link to="/shop" className="transition-colors hover:text-amber-400">Single Origin</Link></li>
            <li><Link to="/shop" className="transition-colors hover:text-amber-400">Espresso Blends</Link></li>
            <li><Link to="/shop" className="transition-colors hover:text-amber-400">Cold Brew</Link></li>
          </ul>
        </div>

        {/* Contact Info */}
        <div>
          <h4 className="mb-4 font-bold text-white">Get In Touch</h4>
          <ul className="space-y-3.5 text-sm">
            <li className="flex items-start gap-3">
              <FaMapMarkerAlt className="text-amber-500 mt-0.5 shrink-0" />
              <span>42 Roaster Lane, Portland, OR 97201</span>
            </li>
            <li className="flex items-center gap-3">
              <FaPhone className="text-amber-500 shrink-0" />
              <span>+1 (503) 555-0192</span>
            </li>
            <li className="flex items-center gap-3">
              <FaEnvelope className="text-amber-500 shrink-0" />
              <span>hello@brewandbean.com</span>
            </li>
            <li className="flex items-center gap-3">
              <FaClock className="text-amber-500 shrink-0" />
              <span>Mon - Sat: 6:00 AM - 8:00 PM</span>
            </li>
          </ul>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="border-t border-coffee-800">
        <div className="flex flex-col items-center justify-between px-4 py-4 mx-auto text-sm text-amber-500 max-w-[1280px] sm:flex-row">
          <p>&copy; 2026 Brew &amp; Bean. All rights reserved.</p>
          <div className="flex gap-4 mt-2 sm:mt-0">
            <Link to="/privacy-policy" className="transition-colors hover:text-amber-300">
              Privacy Policy
            </Link>
            <Link to="/refund-policy" className="transition-colors hover:text-amber-300">
              Refund Policy
            </Link>
            <Link to="/terms" className="transition-colors hover:text-amber-300">
              Terms
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
