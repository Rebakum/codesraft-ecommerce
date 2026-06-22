// import { Link } from "react-router-dom";
// import {
//   FaFacebookF,
//   FaTwitter,
//   FaInstagram,
//   FaYoutube,
//   FaMapMarkerAlt,
//   FaPhone,
//   FaEnvelope,
//   FaClock,
// } from "react-icons/fa";

// const Footer = () => {
//   return (
//     <footer className="bg-amber-950 text-amber-100">
//       {/* Main Footer */}
//       <div className="grid grid-cols-1 gap-8 px-4 py-12 mx-auto max-w-7xl md:grid-cols-2 lg:grid-cols-4">
//         {/* Brand */}
//         <div>
//           <Link to="/" className="flex items-center gap-2 mb-4">
//             <div className="flex items-center justify-center rounded-full w-9 h-9 bg-amber-700">
//               <span className="text-sm font-bold text-white">B</span>
//             </div>
//             <span className="text-xl font-bold text-white" style={{ fontFamily: "Georgia, serif" }}>
//               Brew<span className="text-amber-400">&amp;Bean</span>
//             </span>
//           </Link>
//           <p className="mb-4 text-sm leading-relaxed text-amber-200">
//             Premium artisan coffee sourced from the world&apos;s finest
//             single-origin farms. Crafted with passion, delivered fresh.
//           </p>
//           <div className="flex gap-3">
//             {[FaFacebookF, FaTwitter, FaInstagram, FaYoutube].map(
//               (Icon, i) => (
//                 <a
//                   key={i}
//                   href="#"
//                   className="flex items-center justify-center transition-colors rounded-full w-9 h-9 bg-amber-900 hover:bg-amber-700"
//                 >
//                   <Icon className="text-sm" />
//                 </a>
//               )
//             )}
//           </div>
//         </div>

//         {/* Quick Links */}
//         <div>
//           <h4 className="mb-4 font-bold text-white">Quick Links</h4>
//           <ul className="space-y-2 text-sm">
//             {[
//               "About Us",
//               "Contact Us",
//               "Menu",
//               "Brewing Guides",
//               "FAQs",
//               "Terms & Conditions",
//             ].map((link) => (
//               <li key={link}>
//                 <Link
//                   to="/"
//                   className="transition-colors hover:text-amber-400"
//                 >
//                   {link}
//                 </Link>
//               </li>
//             ))}
//           </ul>
//         </div>

//         {/* Categories */}
//         <div>
//           <h4 className="mb-4 font-bold text-white">Coffee Collection</h4>
//           <ul className="space-y-2 text-sm">
//             {[
//               "Single Origin",
//               "Espresso Blends",
//               "Cold Brew",
//               "Decaf",
//               "Coffee Accessories",
//               "Gift Sets",
//             ].map((cat) => (
//               <li key={cat}>
//                 <Link
//                   to="/shop"
//                   className="transition-colors hover:text-amber-400"
//                 >
//                   {cat}
//                 </Link>
//               </li>
//             ))}
//           </ul>
//         </div>

//         {/* Contact Info */}
//         <div>
//           <h4 className="mb-4 font-bold text-white">Get In Touch</h4>
//           <ul className="space-y-3 text-sm">
//             <li className="flex items-start gap-3">
//               <FaMapMarkerAlt className="text-amber-400 mt-0.5 shrink-0" />
//               <span>42 Roaster Lane, Portland, OR 97201</span>
//             </li>
//             <li className="flex items-center gap-3">
//               <FaPhone className="text-amber-400 shrink-0" />
//               <span>+1 (503) 555-0192</span>
//             </li>
//             <li className="flex items-center gap-3">
//               <FaEnvelope className="text-amber-400 shrink-0" />
//               <span>hello@brewandbean.com</span>
//             </li>
//             <li className="flex items-center gap-3">
//               <FaClock className="text-amber-400 shrink-0" />
//               <span>Mon - Sat: 6:00 AM - 8:00 PM</span>
//             </li>
//           </ul>
//         </div>
//       </div>

//       {/* Bottom Bar */}
//       <div className="border-t border-amber-900">
//         <div className="flex flex-col items-center justify-between px-4 py-4 mx-auto text-sm max-w-7xl sm:flex-row text-amber-400">
//           <p>&copy; 2026 Brew &amp; Bean. All rights reserved.</p>
//           <div className="flex gap-4 mt-2 sm:mt-0">
//             <Link to="/" className="transition-colors hover:text-amber-300">
//               Privacy Policy
//             </Link>
//             <Link to="/" className="transition-colors hover:text-amber-300">
//               Refund Policy
//             </Link>
//           </div>
//         </div>
//       </div>
//     </footer>
//   );
// };

// export default Footer;
