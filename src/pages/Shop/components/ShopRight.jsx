import "react-tooltip/dist/react-tooltip.css";
import "@smastrom/react-rating/style.css";
import Pagination from "./Pagination";
import Card from "./Card";
import products from "../../../data/products";

const ShopRight = () => {
  return (
    <div>
      <div className="flex items-center justify-between w-full px-4 md:px-0">
        <div>
          <span className="mr-2 text-coffee-500 dark:text-coffee-400">Sort By:</span>
          <select className="w-32 px-3 py-2 text-sm border border-coffee-200 dark:border-coffee-600 dark:bg-coffee-800 dark:text-white rounded-md shadow-sm md:w-48 focus:outline-none">
            <option value="latest">Latest</option>
            <option value="price-low">Price: Low to High</option>
            <option value="price-high">Price: High to Low</option>
            <option value="rating">Rating</option>
          </select>
        </div>
        <div>
          <span className="font-bold dark:text-white">{products.length} </span>
          <span className="text-coffee-500 dark:text-coffee-400">Result Found</span>
        </div>
      </div>

      <div className="grid grid-cols-1 gap-7 mt-6 md:grid-cols-2 lg:grid-cols-3">
        {products.map((product) => (
          <Card key={product.id} product={product} />
        ))}
      </div>

      <div className="mt-8">
        <Pagination />
      </div>
    </div>
  );
};

export default ShopRight;
