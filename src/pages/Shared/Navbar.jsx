import { useEffect, useState } from "react";
import { Link, NavLink, useNavigate } from "react-router-dom";
import {
  FaSearch,
  FaHeart,
  FaShoppingCart,
  FaUser,
  FaSun,
  FaMoon,
  FaPhoneAlt,
  FaEnvelope,
} from "react-icons/fa";
import { HiBars3, HiXMark } from "react-icons/hi2";
import { useTheme } from "../../Context/ThemeContext";
import { useCart } from "../../Cart/CartContext";
import { useWishlist } from "../../Wishlist/WishlistContext";

const navLinks = [
  { to: "/", label: "Home" },
  { to: "/shop", label: "Shop" },
  { to: "/about", label: "About" },
  { to: "/contact", label: "Contact" },
];

const Navbar = () => {
  const [mobileOpen, setMobileOpen] = useState(false);
  const [hideTopBar, setHideTopBar] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [searchQuery, setSearchQuery] = useState("");
  const [mobileSearchOpen, setMobileSearchOpen] = useState(false);
  const navigate = useNavigate();

  const { dark, toggleTheme } = useTheme();
  const { cartCount } = useCart();
  const { wishlistCount } = useWishlist();

  const handleSearch = (e) => {
    e.preventDefault();
    if (searchQuery.trim()) {
      navigate(`/shop?search=${encodeURIComponent(searchQuery.trim())}`);
      setSearchQuery("");
      setMobileSearchOpen(false);
      setMobileOpen(false);
    }
  };

  useEffect(() => {
    const handleScroll = () => {
      setHideTopBar(window.scrollY > 80);
      setScrolled(window.scrollY > 10);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <>
      <div className="sticky top-0 z-50">
        {/* Top Promotional Header */}
        <div
          className="overflow-hidden transition-all duration-500 ease-in-out bg-coffee-900 text-coffee-200"
          style={{
            maxHeight: hideTopBar ? "0px" : "40px",
            opacity: hideTopBar ? 0 : 1,
          }}
        >
          <div className="items-center justify-between hidden h-10 px-4 mx-auto md:flex max-w-[1280px]">
            <div className="flex items-center gap-5 text-xs">
              <a
                href="mailto:hello@brewbean.com"
                className="flex items-center gap-2 transition-colors duration-200 hover:text-cream-400"
              >
                <FaEnvelope className="text-cream-500" />
                hello@brewbean.com
              </a>
              <a
                href="tel:+123456789"
                className="flex items-center gap-2 transition-colors duration-200 hover:text-cream-400"
              >
                <FaPhoneAlt className="text-cream-500" />
                +1 (234) 567-890
              </a>
            </div>
            <p className="text-xs font-medium text-cream-100">
              Free Shipping On Orders Over $40
            </p>
            <div className="flex items-center gap-3">
              <Link to="/login" className="transition-colors duration-200 hover:text-cream-400">
                Sign In
              </Link>
              <span className="text-coffee-600">|</span>
              <Link to="/register" className="transition-colors duration-200 hover:text-cream-400">
                Sign Up
              </Link>
            </div>
          </div>
        </div>

        {/* Main Navbar */}
        <nav
          className={`transition-all duration-300 ${
            dark
              ? "bg-[#2b1a0d] shadow-lg shadow-black/20"
              : "bg-white shadow-md"
          } ${scrolled ? (dark ? "shadow-xl shadow-black/30" : "shadow-lg") : ""}`}
        >
          <div className="px-4 mx-auto max-w-[1280px]">
            <div className="flex items-center justify-between h-20">
              {/* Mobile Button */}
              <button
                className="p-2 text-2xl transition-colors duration-200 lg:hidden dark:text-coffee-100 rounded-xl hover:bg-coffee-100 dark:hover:bg-coffee-800"
                onClick={() => setMobileOpen(!mobileOpen)}
                aria-label="Toggle menu"
              >
                {mobileOpen ? <HiXMark /> : <HiBars3 />}
              </button>

              {/* Logo */}
              <Link to="/" className="flex items-center gap-3">
                <img
                  src="/image/fav.png"
                  alt="Brew & Bean logo"
                  className="w-10 h-10"
                />
                <h2
                  className="text-2xl font-bold text-coffee-900 dark:text-cream-100"
                  style={{ fontFamily: "Georgia, serif" }}
                >
                  Brew<span className="text-amber-600">&amp;Bean</span>
                </h2>
              </Link>

              {/* Desktop Menu */}
              <ul className="items-center hidden gap-8 font-medium lg:flex">
                {navLinks.map((link) => (
                  <li key={link.to}>
                    <NavLink
                      to={link.to}
                      className={({ isActive }) =>
                        `pb-1 border-b-2 transition-all duration-200 ${
                          isActive
                            ? "border-amber-600 text-amber-700 dark:text-amber-400"
                            : "border-transparent hover:text-amber-700 dark:hover:text-amber-400"
                        }`
                      }
                    >
                      {link.label}
                    </NavLink>
                  </li>
                ))}
              </ul>

              {/* Desktop Search Bar */}
              <form onSubmit={handleSearch} className="items-center hidden lg:flex">
                <div className="flex items-center gap-2 w-56 xl:w-64 px-4 py-2.5 border rounded-full border-coffee-200 dark:border-coffee-700 bg-coffee-50 dark:bg-coffee-800 transition-all duration-200 focus-within:border-amber-500 dark:focus-within:border-amber-600 focus-within:ring-1 focus-within:ring-amber-500/30">
                  <FaSearch className="text-sm text-coffee-400 dark:text-coffee-500 shrink-0" />
                  <input
                    type="text"
                    value={searchQuery}
                    onChange={(e) => setSearchQuery(e.target.value)}
                    placeholder="Search coffee, gear..."
                    className="w-full text-sm bg-transparent outline-none text-coffee-800 dark:text-white placeholder:text-coffee-400 dark:placeholder:text-coffee-500"
                  />
                </div>
              </form>

              {/* Right Side Icons */}
              <div className="flex items-center gap-1.5">
                {/* Mobile Search Button */}
                <button
                  onClick={() => setMobileSearchOpen(true)}
                  className="p-2.5 rounded-full hover:bg-coffee-100 border border-coffee-300 dark:hover:bg-coffee-800 dark:border-coffee-600 transition-all duration-200 active:scale-90 lg:hidden"
                  aria-label="Open search"
                >
                  <FaSearch className="text-sm text-coffee-700 dark:text-coffee-200" />
                </button>
                <button className="hidden p-2.5 rounded-full sm:block hover:bg-coffee-100 dark:hover:bg-coffee-800 transition-all duration-200 active:scale-90">
                  <FaUser className="text-sm text-coffee-700 dark:text-coffee-200" />
                </button>

                {/* Theme Toggle */}
                <button
                  onClick={toggleTheme}
                  className="relative p-2.5 rounded-full hover:bg-coffee-100 dark:hover:bg-coffee-800 transition-all duration-200 active:scale-90 group"
                  aria-label={dark ? "Switch to light mode" : "Switch to dark mode"}
                >
                  <div className="relative w-5 h-5">
                    <FaSun
                      className={`absolute inset-0 text-cream-500 transition-all duration-300 ${
                        dark
                          ? "rotate-0 scale-100 opacity-100"
                          : "rotate-90 scale-0 opacity-0"
                      }`}
                    />
                    <FaMoon
                      className={`absolute inset-0 text-coffee-700 transition-all duration-300 ${
                        dark
                          ? "-rotate-90 scale-0 opacity-0"
                          : "rotate-0 scale-100 opacity-100"
                      }`}
                    />
                  </div>
                  {/* Glow effect */}
                  <span
                    className={`absolute inset-0 rounded-full transition-all duration-300 ${
                      dark
                        ? "bg-cream-400/20 scale-100"
                        : "bg-amber-400/0 scale-0"
                    }`}
                  />
                </button>

                {/* Wishlist */}
                <Link
                  to="/wishList"
                  className="relative p-2.5 rounded-full hover:bg-coffee-100 dark:hover:bg-coffee-800 transition-all duration-200 active:scale-90"
                >
                  <FaHeart className="text-sm text-coffee-700 dark:text-coffee-200" />
                  {wishlistCount > 0 && (
                    <span className="absolute flex items-center justify-center w-5 h-5 text-[10px] font-bold text-white rounded-full bg-amber-600 -top-0.5 -right-0.5 ring-2 ring-white dark:ring-[#2b1a0d] animate-pulse">
                      {wishlistCount}
                    </span>
                  )}
                </Link>

                {/* Cart */}
                <Link
                  to="/shopping-cart"
                  className="relative p-2.5 rounded-full hover:bg-coffee-100 dark:hover:bg-coffee-800 transition-all duration-200 active:scale-90"
                >
                  <FaShoppingCart className="text-sm text-coffee-700 dark:text-coffee-200" />
                  {cartCount > 0 && (
                    <span className="absolute flex items-center justify-center w-5 h-5 text-[10px] font-bold text-white rounded-full bg-amber-600 -top-0.5 -right-0.5 ring-2 ring-white dark:ring-[#2b1a0d] animate-pulse">
                      {cartCount}
                    </span>
                  )}
                </Link>
              </div>
            </div>
          </div>

          {/* Mobile Menu */}
          <div
            className={`overflow-hidden transition-all duration-300 lg:hidden border-t dark:border-coffee-800 ${
              mobileOpen ? "max-h-96 opacity-100" : "max-h-0 opacity-0"
            }`}
          >
            <div className="bg-white dark:bg-[#2b1a0d]">
              <ul className="flex flex-col gap-1 p-4">
                {navLinks.map((link) => (
                  <li key={link.to}>
                    <NavLink
                      to={link.to}
                      onClick={() => setMobileOpen(false)}
                      className={({ isActive }) =>
                        `block px-4 py-3 rounded-xl font-medium transition-all duration-200 ${
                          isActive
                            ? "bg-amber-50 dark:bg-amber-950/30 text-amber-700 dark:text-amber-400"
                            : "hover:bg-coffee-50 dark:hover:bg-coffee-800"
                        }`
                      }
                    >
                      {link.label}
                    </NavLink>
                  </li>
                ))}
              </ul>
            </div>
          </div>

          {/* Mobile Search Overlay */}
          <div
            className={`fixed inset-0 z-[60] bg-black/50 backdrop-blur-sm transition-all duration-300 lg:hidden ${
              mobileSearchOpen ? "opacity-100 visible" : "opacity-0 invisible"
            }`}
            onClick={() => setMobileSearchOpen(false)}
          >
            <div
              className={`bg-white dark:bg-[#2b1a0d] shadow-xl transition-all duration-300 ${
                mobileSearchOpen ? "translate-y-0" : "-translate-y-full"
              }`}
              onClick={(e) => e.stopPropagation()}
            >
              <form onSubmit={handleSearch} className="flex items-center gap-3 px-4 py-3 border-b border-coffee-200 dark:border-coffee-800">
                <FaSearch className="text-coffee-400 dark:text-coffee-500 shrink-0" />
                <input
                  type="text"
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  placeholder="Search coffee, gear..."
                  autoFocus
                  className="flex-1 text-sm bg-transparent outline-none text-coffee-800 dark:text-white placeholder:text-coffee-400 dark:placeholder:text-coffee-500"
                />
                <button
                  type="button"
                  onClick={() => setMobileSearchOpen(false)}
                  className="p-1.5 rounded-full hover:bg-coffee-100 dark:hover:bg-coffee-800 transition-colors"
                >
                  <HiXMark className="text-lg text-coffee-600 dark:text-coffee-300" />
                </button>
              </form>
            </div>
          </div>
        </nav>
      </div>
    </>
  );
};

export default Navbar;
