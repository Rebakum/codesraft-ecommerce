import { Link } from "react-router-dom";
import { FaRegHeart, FaStar } from "react-icons/fa";
import { RiShoppingBagLine } from "react-icons/ri";
import { Tooltip } from "react-tooltip";
import "react-tooltip/dist/react-tooltip.css";
import { useCart } from "../../../Cart/CartContext";

const Card = ({ product }) => {
  const { addToCart } = useCart();
  const hasDiscount = product.offerPrice && product.discount > 0;
  const price = hasDiscount ? product.offerPrice : product.regularPrice;

  return (
    <Link to={`/product/${product.id}`} className="block group">
      <div className="w-full transition-all duration-300 border rounded-lg shadow hover:border-red-200 hover:shadow-lg">
        <div className="relative h-[302px]">
          <img
            src={product.image}
            className="object-cover w-full h-full p-1"
            alt={product.name}
          />

          {hasDiscount && (
            <div className="absolute px-2 py-1 text-xs font-bold text-white bg-red-600 rounded-md top-3 left-3">
              {product.discount}% OFF
            </div>
          )}

          <div className="absolute block top-3 right-3 md:hidden group-hover:block">
            <button
              data-tooltip-id="wishlist"
              data-tooltip-content="Add To Wishlist"
              data-tooltip-place="top"
              onClick={(e) => e.preventDefault()}
              className="flex items-center justify-center p-3 mb-3 transition-colors border rounded-full !bg-none hover:bg-gray-100"
            >
              <FaRegHeart className="text-xl" />
            </button>
            <Tooltip id="wishlist" className="text-sm text-white bg-red-600" />
          </div>
        </div>

        <div className="p-4">
          <p className="mb-1 text-xs font-semibold text-red-600 uppercase">
            {product.category}
          </p>
          <h4 className="font-semibold text-gray-800 group-hover:text-red-600">
            {product.name}
          </h4>

          <div className="flex items-center justify-between mt-2">
            <div className="flex items-center gap-2">
              <span className="text-lg font-bold text-red-600">
                ${price.toFixed(2)}
              </span>
              {hasDiscount && (
                <span className="text-xs text-gray-400 line-through">
                  ${product.regularPrice.toFixed(2)}
                </span>
              )}
            </div>
            <button
              onClick={(e) => {
                e.preventDefault();
                addToCart(product);
              }}
              data-tooltip-id="cart"
              data-tooltip-content="Add to cart"
              data-tooltip-place="top"
              className="flex items-center justify-center p-3 transition-colors bg-gray-100 border rounded-full group-hover:bg-red-600"
            >
              <RiShoppingBagLine className="text-xl text-gray-600 group-hover:text-white" />
            </button>
            <Tooltip id="cart" className="text-sm text-white bg-red-600" />
          </div>

          <div className="flex items-center gap-1 mt-2">
            {[...Array(5)].map((_, i) => (
              <FaStar
                key={i}
                className={`text-xs ${
                  i < product.rating ? "text-yellow-400" : "text-gray-200"
                }`}
              />
            ))}
          </div>
        </div>
      </div>
    </Link>
  );
};

export default Card;
