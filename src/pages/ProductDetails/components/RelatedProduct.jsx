import { Link } from "react-router-dom";
import { FaStar } from "react-icons/fa";
import products from "../../../data/products";

const RelatedProduct = ({ currentProduct }) => {
  const related = products
    .filter(
      (p) => p.category === currentProduct.category && p.id !== currentProduct.id
    )
    .slice(0, 4);

  if (related.length === 0) {
    const fallback = products
      .filter((p) => p.id !== currentProduct.id)
      .slice(0, 4);
    return <RelatedGrid title="You May Also Like" items={fallback} />;
  }

  return <RelatedGrid title="Related Products" items={related} />;
};

const RelatedGrid = ({ title, items }) => (
  <div>
    <h3 className="mb-10 text-3xl font-bold text-center dark:text-white">{title}</h3>
    <div className="grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-4">
      {items.map((product) => (
        <Link
          key={product.id}
          to={`/product/${product.id}`}
          className="group"
        >
          <div className="transition-all duration-300 bg-white dark:bg-[#2b1a0d] border border-coffee-100 dark:border-coffee-800 rounded-2xl hover:border-amber-300 dark:hover:border-amber-700 hover:shadow-xl">
            <div className="relative p-3 overflow-hidden">
              {product.discount > 0 && (
                <span className="absolute z-10 px-2 py-1 text-xs font-bold text-white rounded-lg top-3 left-3 bg-amber-700">
                  {product.discount}% OFF
                </span>
              )}
              <div className="flex items-center justify-center h-40 overflow-hidden rounded-xl bg-coffee-50 dark:bg-coffee-900">
                <img
                  src={product.image}
                  alt={product.name}
                  className="object-cover w-full h-full transition-transform duration-500 group-hover:scale-110"
                />
              </div>
            </div>
            <div className="p-4">
              <p className="mb-1 text-xs font-semibold uppercase text-amber-700">
                {product.category}
              </p>
              <h3 className="mb-2 text-sm font-semibold text-coffee-800 dark:text-white md:text-base group-hover:text-amber-700">
                {product.name}
              </h3>
              <div className="flex items-center gap-1 mb-2">
                {[...Array(5)].map((_, i) => (
                  <FaStar
                    key={i}
                    className={`text-xs ${
                      i < product.rating ? "text-amber-400" : "text-coffee-200 dark:text-coffee-700"
                    }`}
                  />
                ))}
              </div>
              <div className="flex items-center gap-2">
                <span className="text-base font-bold text-amber-700">
                  ${(product.offerPrice || product.regularPrice).toFixed(2)}
                </span>
                {product.offerPrice && (
                  <span className="text-xs text-coffee-400 dark:text-coffee-500 line-through">
                    ${product.regularPrice.toFixed(2)}
                  </span>
                )}
              </div>
            </div>
          </div>
        </Link>
      ))}
    </div>
  </div>
);

export default RelatedProduct;
