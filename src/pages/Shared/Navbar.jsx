// import { Link, NavLink } from "react-router-dom";
// import { useEffect, useState } from "react";
// import {
//   FaSearch,
//   FaHeart,
//   FaShoppingCart,
//   FaUser,
// } from "react-icons/fa";
// import { HiBars3, HiXMark } from "react-icons/hi2";
// import Topbar from "./Topbar";

// const navLinks = [
//   { to: "/", label: "Home" },
//   { to: "/shop", label: "Menu" },
//   { to: "/about", label: "About" },
//   { to: "/contact", label: "Contact" },
// ];

// const Navbar = () => {
//   const [mobileOpen, setMobileOpen] = useState(false);
//   const [theme, setTheme] = useState(
//     localStorage.getItem("theme") || "coffee"
//   );

//   useEffect(() => {
//     document.documentElement.setAttribute("data-theme", theme);
//     localStorage.setItem("theme", theme);
//   }, [theme]);

//   return (
//     <div>
//      <Topbar/>

//       {/* Main Navbar */}
//       <nav className="sticky top-0 z-50 shadow-md bg-base-100">
//         <div className="px-4 mx-auto max-w-7xl">
//           <div className="flex items-center justify-between h-20">
//             {/* Mobile Menu Button */}
//             <button
//               className="text-2xl lg:hidden"
//               onClick={() => setMobileOpen(!mobileOpen)}
//             >
//               {mobileOpen ? <HiXMark /> : <HiBars3 />}
//             </button>

//             {/* Logo */}
//             <Link to="/" className="flex items-center gap-3">
//               <div className="flex items-center justify-center w-10 h-10 rounded-full bg-amber-700">
//                 <span className="text-lg font-bold text-white">B</span>
//               </div>

//               <span
//                 className="text-2xl font-bold"
//                 style={{ fontFamily: "Georgia, serif" }}
//               >
//                 Brew
//                 <span className="text-amber-600">&Bean</span>
//               </span>
//             </Link>

//             {/* Desktop Menu */}
//             <ul className="items-center hidden gap-8 font-medium lg:flex">
//               {navLinks.map((link) => (
//                 <li key={link.to}>
//                   <NavLink
//                     to={link.to}
//                     className={({ isActive }) =>
//                       `pb-1 border-b-2 transition-all ${
//                         isActive
//                           ? "border-amber-600 text-amber-600"
//                           : "border-transparent hover:text-amber-600 hover:border-amber-300"
//                       }`
//                     }
//                   >
//                     {link.label}
//                   </NavLink>
//                 </li>
//               ))}
//             </ul>

//             {/* Right Side */}
//             <div className="flex items-center gap-2 sm:gap-4">
             
//               {/* Theme Toggle */}
              

//               {/* Search */}
//               <button className="hidden p-2 rounded-full sm:block hover:bg-base-200">
//                 <FaSearch />
//               </button>

//               {/* User */}
//               <button className="hidden p-2 rounded-full sm:block hover:bg-base-200">
//                 <FaUser />
//               </button>
//               {/* toggle theme */}
            

//               {/* Wishlist */}
//               <Link
//                 to="/wishlist"
//                 className="relative p-2 rounded-full hover:bg-base-200"
//               >
//                 <FaHeart />

//                 <span className="absolute flex items-center justify-center w-5 h-5 text-xs text-white rounded-full -top-1 -right-1 bg-amber-600">
//                   2
//                 </span>
//               </Link>

//               {/* Cart */}
//               <Link
//                 to="/cart"
//                 className="relative p-2 rounded-full hover:bg-base-200"
//               >
//                 <FaShoppingCart />

//                 <span className="absolute flex items-center justify-center w-5 h-5 text-xs text-white rounded-full -top-1 -right-1 bg-amber-600">
//                   3
//                 </span>
//               </Link>
//             </div>
//           </div>
//         </div>

//         {/* Mobile Menu */}
//         {mobileOpen && (
//           <div className="border-t lg:hidden bg-base-100">
//             <ul className="flex flex-col gap-2 p-4">
//               {navLinks.map((link) => (
//                 <li key={link.to}>
//                   <NavLink
//                     to={link.to}
//                     onClick={() => setMobileOpen(false)}
//                     className={({ isActive }) =>
//                       `block px-4 py-3 rounded-lg transition-all ${
//                         isActive
//                           ? "bg-amber-100 text-amber-700"
//                           : "hover:bg-base-200"
//                       }`
//                     }
//                   >
//                     {link.label}
//                   </NavLink>
//                 </li>
//               ))}

//               {/* Mobile Theme Selector */}
//               <div className="mt-4">
//                 <select
//                   value={theme}
//                   onChange={(e) => setTheme(e.target.value)}
//                   className="w-full select select-bordered"
//                 >
//                   <option value="light">Light Theme</option>
//                   <option value="dark">Dark Theme</option>
//                   <option value="coffee">Coffee Theme</option>
//                   <option value="forest">Forest Theme</option>
//                 </select>
//               </div>
//             </ul>
//           </div>
//         )}
//       </nav>
//     </div>
//   );
// };

// export default Navbar;