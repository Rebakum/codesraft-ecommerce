import { Link } from "react-router-dom";
import { FaHeart, FaRegHeart, FaStar } from "react-icons/fa";
import { RiShoppingBagLine } from "react-icons/ri";
import { Tooltip } from "react-tooltip";
import "react-tooltip/dist/react-tooltip.css";
import { useCart } from "../../../Cart/CartContext";
import { useWishlist } from "../../../Wishlist/WishlistContext";

const Card = ({ product }) => {
  const { addToCart } = useCart();
  const { toggleWishlist, isInWishlist } = useWishlist();
  const liked = isInWishlist(product.id);
  const hasDiscount = product.offerPrice && product.discount && product.discount > 0;
  const price = hasDiscount ? product.offerPrice : product.regularPrice;

  return (
    <Link to={`/product/${product.id}`} className="block dark:text-coffee-100">
      <div className="w-full overflow-hidden transition-all duration-300 bg-white dark:bg-[#2b1a0d] border border-coffee-100 dark:border-coffee-800 shadow group rounded-xl hover:border-amber-300 dark:hover:border-amber-700 hover:shadow-lg">
        <div className="relative h-[302px] overflow-hidden">
          <img src={product.image} alt={product.name} className="object-cover w-full h-full p-1 transition-transform duration-500 group-hover:scale-105" />
          {hasDiscount && (
            <div className="absolute px-2 py-1 text-xs font-bold text-white rounded-md top-3 left-3 bg-amber-700">{product.discount}% OFF</div>
          )}
          <div className="absolute transition-all duration-300 opacity-100 top-3 right-3 md:opacity-0 md:group-hover:opacity-100">
            <button
              data-tooltip-id={`wishlist-${product.id}`}
              data-tooltip-content={liked ? "Remove from Wishlist" : "Add To Wishlist"}
              data-tooltip-place="top"
              onClick={(e) => { e.preventDefault(); toggleWishlist(product); }}
              className={`flex items-center justify-center w-10 h-10 rounded-full border bg-white dark:bg-[#2b1a0d] shadow-md transition-all ${
                liked ? "border-amber-600" : "border-coffee-200 dark:border-coffee-700 hover:border-amber-600"
              }`}
            >
              {liked ? <FaHeart className="text-lg text-amber-600" /> : <FaRegHeart className="text-lg text-coffee-600 dark:text-coffee-300" />}
            </button>
            <Tooltip id={`wishlist-${product.id}`} className="text-sm text-white bg-amber-700" />
          </div>
        </div>
        <div className="p-4">
          <p className="mb-1 text-xs font-semibold uppercase text-amber-700">{product.category}</p>
          <h4 className="font-semibold text-coffee-800 dark:text-coffee-200 transition-colors hover:text-amber-700">{product.name}</h4>
          <div className="flex items-center justify-between mt-3">
            <div className="flex items-center gap-2">
              <span className="text-lg font-bold text-amber-700">${Number(price).toFixed(2)}</span>
              {hasDiscount && <span className="text-xs text-coffee-400 dark:text-coffee-500 line-through">${Number(product.regularPrice).toFixed(2)}</span>}
            </div>
            <button
              onClick={(e) => { e.preventDefault(); addToCart(product); }}
              data-tooltip-id={`cart-${product.id}`}
              data-tooltip-content="Add To Cart"
              data-tooltip-place="top"
              className="flex items-center justify-center p-3 transition-all bg-coffee-100 dark:bg-coffee-800 border border-coffee-200 dark:border-coffee-700 rounded-full hover:bg-amber-700 group/cart"
            >
              <RiShoppingBagLine className="text-xl text-coffee-600 dark:text-coffee-300 transition-colors group-hover/cart:text-white" />
            </button>
            <Tooltip id={`cart-${product.id}`} className="text-sm text-white bg-amber-700" />
          </div>
          <div className="flex items-center gap-1 mt-3">
            {[...Array(5)].map((_, i) => (
              <FaStar key={i} className={`text-xs ${i < Math.floor(product.rating) ? "text-amber-400" : "text-coffee-200 dark:text-coffee-700"}`} />
            ))}
          </div>
        </div>
      </div>
    </Link>
  );
};

export default Card;
