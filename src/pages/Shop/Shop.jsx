import ShopLeft from "./components/ShopLeft";
import ShopRight from "./components/ShopRight";
import ShopBanner from "./components/ShopBanner";

const Shop = () => {
  return (
    <div className="dark:text-coffee-100">
      <ShopBanner />
      <div className="grid grid-cols-4 gap-6 px-4 mx-auto mt-8 max-w-[1280px]">
        <div className="hidden col-span-1 md:block">
          <ShopLeft />
        </div>
        <div className="col-span-4 md:col-span-3">
          <ShopRight />
        </div>
      </div>
    </div>
  );
};

export default Shop;
