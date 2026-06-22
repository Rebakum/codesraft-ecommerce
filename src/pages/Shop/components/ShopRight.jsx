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
          <span className="mr-2 text-gray">Sort By:</span>
          <select className="w-32 px-3 py-2 text-sm border rounded-md shadow-sm md:w-48 focus:outline-none">
            <option value="latest">Latest</option>
            <option value="price-low">Price: Low to High</option>
            <option value="price-high">Price: High to Low</option>
            <option value="rating">Rating</option>
          </select>
        </div>
        <div>
          <span className="font-bold">{products.length} </span>
          Result Found
        </div>
      </div>

      {/* PRODUCTS */}
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
