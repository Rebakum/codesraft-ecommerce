import React from "react";

import ShopLeft from "./components/ShopLeft";
import ShopRight from "./components/ShopRight";
import Nav_Banner from "../Shared/Nav_Banner";

const Shop = () => {
  return (
    <div className="">
      <div>
        <div>
          <Nav_Banner name={"Shop"} path={"/shop"} />
        </div>
        <div className="container grid grid-cols-4 gap-6 mx-auto mt-8 max-w-7xl">
          <div className="hidden col-span-1 md:block">
            <ShopLeft />
          </div>
          <div className="col-span-4 md:col-span-3 ">
            <ShopRight />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Shop;
