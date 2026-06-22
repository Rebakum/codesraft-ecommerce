import React from "react";
import bannerBg from "../../../assets/home-assets/banner/bannar-01.jpg";
import { IoHomeOutline } from "react-icons/io5";
import { MdOutlineNavigateNext } from "react-icons/md";
const ShopBanner = () => {
  return (
    <div>
      <div className="relative w-full h-32">
        <img src={bannerBg} className="w-full h-full" alt="" />
        <div className="absolute inset-0">
          <div className="flex items-center w-full h-full mx-auto max-w-7xl">
            <div className="flex items-center gap-1 text-lg text-white">
              <IoHomeOutline />
              <MdOutlineNavigateNext />
              <span>Categories</span>
              <MdOutlineNavigateNext />
              <span className="text-[#DC2626]">Coffee Beans</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ShopBanner;
