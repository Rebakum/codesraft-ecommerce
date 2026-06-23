// import { IoHomeOutline } from "react-icons/io5";
// import { LiaGreaterThanSolid } from "react-icons/lia";
// import { Link } from "react-router-dom";
// import bannerBg from "../../assets/home-assets/banner/bannar-01.jpg";

// const Nav_Banner = ({ name, path, nameS, pathS = null }) => {
//   return (
//     <div
//       className="relative h-[180px] md:h-[220px] bg-cover bg-center"
//       style={{
//         backgroundImage: `url(${bannerBg})`,
//       }}
//     >
//       {/* Dark Overlay */}
//       <div className="absolute inset-0 bg-black/50"></div>

//       <div className="relative flex items-center h-full px-4 mx-auto all-container">
//         <div className="flex items-center gap-2 text-sm md:text-lg">
//           <Link
//             to="/"
//             className="text-white transition-colors hover:text-red-400"
//           >
//             <IoHomeOutline className="text-xl" />
//           </Link>

//           <LiaGreaterThanSolid className="text-xs text-white" />

//           <Link
//             to={path}
//             className={`${
//               pathS ? "text-white" : "text-gray-200"
//             } hover:text-red-500 transition-colors`}
//           >
//             {name}
//           </Link>

//           {pathS && (
//             <>
//               <LiaGreaterThanSolid className="text-xs text-white" />

//               <Link
//                 to={pathS}
//                 className="text-red-500 transition-colors hover:text-red-400"
//               >
//                 {nameS}
//               </Link>
//             </>
//           )}
//         </div>
//       </div>
//     </div>
//   );
// };

// export default Nav_Banner;
