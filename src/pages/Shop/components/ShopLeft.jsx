import { useState } from "react";
import { Range, getTrackBackground } from "react-range";
import { FaStar, FaRegStar, FaChevronDown } from "react-icons/fa";
import { GrLinkNext } from "react-icons/gr";
import { Disclosure, DisclosureButton, DisclosurePanel } from "@headlessui/react";
import discountBanner from "../../../assets/home-assets/banner/bannar-01.jpg";
import discountProduct from "../../../assets/home-assets/banner/bannar-03.jpg";

const ShopLeft = () => {
  const [values, setValues] = useState([50, 800]);
  const min = 0;
  const max = 1000;

  return (
    <div className="dark:text-coffee-300">
      {/* Filter Button */}
      <div className="flex items-center gap-10">
        <button className="btn btnShop">
          Filter{" "}
          <svg xmlns="http://www.w3.org/2000/svg" width="22" height="19" viewBox="0 0 22 19" fill="none">
            <path d="M18 5H9" stroke="white" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
            <path d="M13 14H4" stroke="white" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
            <circle cx="5" cy="5" r="4" stroke="white" strokeWidth="1.5" />
            <circle cx="17" cy="14" r="4" stroke="white" strokeWidth="1.5" />
          </svg>
        </button>
      </div>

      {/* All Categories */}
      <div className="w-full mt-6">
        <Disclosure as="div" defaultOpen={true}>
          <DisclosureButton className="group flex w-full items-center justify-between focus:!outline-none">
            <h3 className="text-xl font-semibold dark:text-white">All Categories</h3>
            <FaChevronDown className="size-5 group-data-[open]:rotate-180" />
          </DisclosureButton>
          <DisclosurePanel>
            <form className="flex flex-col gap-3 mt-3">
              {["Single Origin (25)", "Roastery (25)", "Blends (25)", "Cold Brew (25)", "Subscriptions (25)", "Coffee Gear (25)"].map((cat) => (
                <div key={cat} className="flex items-center gap-2">
                  <input type="radio" name="category" className="radio border-2 border-amber-600 focus:!outline-none" />
                  <span className="cursor-pointer">{cat}</span>
                </div>
              ))}
            </form>
          </DisclosurePanel>
        </Disclosure>
      </div>

      {/* Price */}
      <div className="w-full mt-6">
        <Disclosure as="div" defaultOpen={true}>
          <DisclosureButton className="group flex w-full items-center justify-between focus:!outline-none">
            <h3 className="mb-4 text-xl font-semibold dark:text-white">Price</h3>
            <FaChevronDown className="size-5 group-data-[open]:rotate-180" />
          </DisclosureButton>
          <DisclosurePanel>
            <div className="w-full">
              <Range
                step={1}
                min={min}
                max={max}
                values={values}
                onChange={(values) => setValues(values)}
                renderTrack={({ props, children }) => (
                  <div
                    {...props}
                    style={{
                      ...props.style,
                      height: "6px",
                      width: "100%",
                      background: getTrackBackground({ values, colors: ["#ecdaba", "#7a4f2e", "#ecdaba"], min, max }),
                    }}
                  >
                    {children}
                  </div>
                )}
                renderThumb={({ props, isDragged }) => (
                  <div
                    {...props}
                    style={{
                      ...props.style,
                      height: "20px",
                      width: "20px",
                      borderRadius: "50%",
                      backgroundColor: "#FFF",
                      border: "3px solid #7a4f2e",
                      display: "flex",
                      justifyContent: "center",
                      alignItems: "center",
                      boxShadow: "0px 2px 6px #AAA",
                      outlineColor: "#7a4f2e",
                    }}
                  >
                    <div style={{ height: "10px", width: "10px", backgroundColor: "#FFF" }} />
                  </div>
                )}
              />
              <div className="mt-3">
                <p>
                  Price:<span className="font-bold"> {values[0]} - {values[1]}</span>
                </p>
              </div>
            </div>
          </DisclosurePanel>
        </Disclosure>
      </div>

      {/* Rating */}
      <div className="w-full mt-6">
        <Disclosure as="div" defaultOpen={true}>
          <DisclosureButton className="group flex w-full items-center justify-between focus:!outline-none">
            <h3 className="mb-4 text-xl font-semibold dark:text-white">Rating</h3>
            <FaChevronDown className="size-5 group-data-[open]:rotate-180" />
          </DisclosureButton>
          <DisclosurePanel>
            <form>
              {[
                { id: "fiveStar", stars: 5, label: "5.0" },
                { id: "4Star", stars: 4, label: "4.0 & Up" },
                { id: "3Star", stars: 3, label: "3.0 & Up" },
                { id: "2Star", stars: 2, label: "2.0 & Up" },
                { id: "1Star", stars: 1, label: "1.0 & Up" },
              ].map((r) => (
                <div key={r.id} className="flex items-center mb-3">
                  <input type="checkbox" id={r.id} className="checked:bg-amber-600 mr-3 h-5 w-5 checkbox-rating text-amber-600" />
                  <label htmlFor={r.id} className="flex items-center gap-2">
                    <span className="flex items-center gap-1 text-xl text-amber-500">
                      {[...Array(5)].map((_, i) => (i < r.stars ? <FaStar key={i} /> : <FaRegStar key={i} />))}
                    </span>
                    <span className="text-sm font-bold dark:text-white">{r.label}</span>
                  </label>
                </div>
              ))}
            </form>
          </DisclosurePanel>
        </Disclosure>
      </div>

      {/* Popular Tags */}
      <div className="w-full mt-6">
        <Disclosure as="div" defaultOpen={true}>
          <DisclosureButton className="group flex w-full items-center justify-between focus:!outline-none">
            <h3 className="mb-4 text-xl font-semibold dark:text-white">Popular Tag</h3>
            <FaChevronDown className="size-5 group-data-[open]:rotate-180" />
          </DisclosureButton>
          <DisclosurePanel>
            <div className="grid grid-cols-3 gap-2">
              {["Arabica", "Robusta", "Organic", "Single Origin", "Blends", "Dark Roast", "Medium Roast", "Light Roast", "Cold Brew"].map((tag) => (
                <button key={tag} className={`btn rounded-[43px] ${tag === "Robusta" ? "bg-amber-700 text-white" : "dark:bg-coffee-800 dark:text-coffee-300"}`}>
                  {tag}
                </button>
              ))}
            </div>
          </DisclosurePanel>
        </Disclosure>
      </div>

      {/* Discount Banner */}
      <div className="w-full h-[300px] mt-7 relative rounded-xl overflow-hidden">
        <img className="w-full h-full object-cover" src={discountBanner} alt="discount Banner" />
        <div className="absolute inset-0 flex flex-col items-center space-y-3">
          <h3 className="mt-6 text-2xl font-semibold text-white">
            <span className="text-amber-400">79%</span> Discount
          </h3>
          <p className="text-center text-white">on your first order</p>
          <button className="font-bold flex items-center gap-2 bg-white px-4 py-2 rounded-full text-amber-700">
            Shop Now <GrLinkNext />
          </button>
        </div>
      </div>

      {/* Sale Products */}
      <div>
        <h3 className="mt-6 mb-4 text-xl font-semibold dark:text-white">Sale Products</h3>
        {[
          { name: "Ethiopia Roast", price: 14.99, oldPrice: 20.99, img: discountProduct },
          { name: "Organic Beans", price: 14.0, oldPrice: 20.0, img: discountProduct },
          { name: "Vanilla Cold Brew", price: 9.0, oldPrice: 20.99, img: discountProduct },
        ].map((item, idx) => (
          <div key={idx} className="mb-4 group">
            <div className="h-28 flex gap-2 items-center border border-coffee-200 dark:border-coffee-700 rounded-xl group-hover:border-amber-600 transition-colors">
              <img className="w-[40%] h-full rounded-l-xl object-cover" src={item.img} alt={item.name} />
              <div className="w-full">
                <h4 className="font-semibold text-sm group-hover:text-amber-700 dark:text-white">{item.name}</h4>
                <h3 className="text-lg font-bold dark:text-white">
                  ${item.price.toFixed(2)} <span className="line-through text-coffee-400 dark:text-coffee-500 text-sm">${item.oldPrice.toFixed(2)}</span>
                </h3>
                <span className="flex items-center gap-1 text-sm text-amber-500">
                  <FaStar /> <FaStar /> <FaStar /> <FaStar /> <FaRegStar />
                </span>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ShopLeft;
