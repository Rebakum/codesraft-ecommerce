import { Link, NavLink } from "react-router-dom";
import { useState } from "react";
import { FaSearch, FaHeart, FaShoppingCart, FaUser, FaSun, FaMoon } from "react-icons/fa";
import { HiBars3, HiXMark } from "react-icons/hi2";
import { useTheme } from "../../Context/ThemeContext";

const navLinks = [
  { to: "/", label: "Home" },
  { to: "/shop", label: "Shop" },
  { to: "/about", label: "About" },
  { to: "/contact", label: "Contact" },
];

const Navbar = () => {
  const [mobileOpen, setMobileOpen] = useState(false);
  const { dark, toggleTheme } = useTheme();

  return (
    <div className="w-full">
      {/* Top Bar */}
      <div className="hidden text-sm bg-black text-gray-300 md:block">
        <div className="flex items-center justify-between px-4 py-2 mx-auto max-w-7xl">
          <div className="flex gap-4">
            <a href="/" className="transition-colors hover:text-red-400">
              Track Order
            </a>
            <a href="/" className="transition-colors hover:text-red-400">
              Help Center
            </a>
          </div>
          <div className="flex items-center gap-3">
            <Link to="/login" className="transition-colors hover:text-red-400">
              Sign In
            </Link>
            <span>/</span>
            <Link to="/register" className="transition-colors hover:text-red-400">
              Sign Up
            </Link>
          </div>
        </div>
      </div>

      {/* Main Navbar */}
      <nav className="sticky top-0 z-50 bg-white shadow-md dark:bg-gray-900">
        <div className="px-4 mx-auto max-w-7xl">
          <div className="flex items-center justify-between h-20">
            {/* Mobile Menu Button */}
            <button
              className="text-2xl lg:hidden dark:text-white"
              onClick={() => setMobileOpen(!mobileOpen)}
            >
              {mobileOpen ? <HiXMark /> : <HiBars3 />}
            </button>

            {/* Logo */}
            <Link to="/" className="flex items-center gap-3">
              <img src="/image/fav.png" alt="Brew & Bean" className="w-10 h-10" />
              <span
                className="text-2xl font-bold"
                style={{ fontFamily: "Georgia, serif" }}
              >
                Brew
                <span className="text-red-600">&amp;Bean</span>
              </span>
            </Link>

            {/* Desktop Menu */}
            <ul className="items-center hidden gap-8 font-medium lg:flex">
              {navLinks.map((link) => (
                <li key={link.to}>
                  <NavLink
                    to={link.to}
                    className={({ isActive }) =>
                      `pb-1 border-b-2 transition-all ${
                        isActive
                          ? "border-red-600 text-red-600"
                          : "border-transparent hover:text-red-600 hover:border-red-300"
                      }`
                    }
                  >
                    {link.label}
                  </NavLink>
                </li>
              ))}
            </ul>

            {/* Right Side */}
            <div className="flex items-center gap-2 sm:gap-4">
              <button
                onClick={toggleTheme}
                className="p-2 rounded-full hover:bg-gray-100 dark:hover:bg-gray-800"
                title={dark ? "Switch to Light Mode" : "Switch to Dark Mode"}
              >
                {dark ? <FaSun className="text-yellow-400" /> : <FaMoon />}
              </button>

              <button className="hidden p-2 rounded-full sm:block hover:bg-gray-100 dark:hover:bg-gray-800 dark:text-white">
                <FaSearch />
              </button>

              <button className="hidden p-2 rounded-full sm:block hover:bg-gray-100 dark:hover:bg-gray-800 dark:text-white">
                <FaUser />
              </button>

              <Link
                to="/wishList"
                className="relative p-2 rounded-full hover:bg-gray-100 dark:hover:bg-gray-800 dark:text-white"
              >
                <FaHeart />
                <span className="absolute flex items-center justify-center w-5 h-5 text-xs text-white rounded-full -top-1 -right-1 bg-red-600">
                  2
                </span>
              </Link>

              <Link
                to="/shopping-cart"
                className="relative p-2 rounded-full hover:bg-gray-100 dark:hover:bg-gray-800 dark:text-white"
              >
                <FaShoppingCart />
                <span className="absolute flex items-center justify-center w-5 h-5 text-xs text-white rounded-full -top-1 -right-1 bg-red-600">
                  3
                </span>
              </Link>
            </div>
          </div>
        </div>

        {/* Mobile Menu */}
        {mobileOpen && (
          <div className="border-t lg:hidden dark:border-gray-700 bg-white dark:bg-gray-900">
            <ul className="flex flex-col gap-2 p-4">
              {navLinks.map((link) => (
                <li key={link.to}>
                  <NavLink
                    to={link.to}
                    onClick={() => setMobileOpen(false)}
                    className={({ isActive }) =>
                      `block px-4 py-3 rounded-lg transition-all ${
                        isActive
                          ? "bg-red-100 text-red-700 dark:bg-red-900 dark:text-red-300"
                          : "hover:bg-gray-100 dark:hover:bg-gray-800"
                      }`
                    }
                  >
                    {link.label}
                  </NavLink>
                </li>
              ))}
            </ul>
          </div>
        )}
      </nav>
    </div>
  );
};

export default Navbar;
