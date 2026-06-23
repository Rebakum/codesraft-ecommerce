import { Link } from "react-router-dom";
import { FaHeart, FaTrash } from "react-icons/fa";
import { HiOutlineShoppingBag } from "react-icons/hi2";
import Nav_Banner from "../Shared/Nav_Banner";
import { useWishlist } from "../../Wishlist/WishlistContext";
import { useCart } from "../../Cart/CartContext";

const WishList = () => {
  const { wishlist, removeFromWishlist } = useWishlist();
  const { addToCart } = useCart();

  const handleAddToCart = (item) => {
    addToCart(item);
    removeFromWishlist(item.id);
  };

  return (
    <>
      <Nav_Banner name="Wishlist" path="/wishList" />

      <div className="px-4 py-10 mx-auto all-container">
        <h1 className="mb-8 text-3xl font-bold text-center dark:text-white">
          My Wishlist
        </h1>

        {wishlist.length === 0 ? (
          <div className="flex flex-col items-center justify-center py-20">
            <div className="flex items-center justify-center w-24 h-24 mb-6 rounded-full bg-amber-50 dark:bg-amber-950/30">
              <FaHeart className="text-4xl text-amber-400" />
            </div>

            <h2 className="text-2xl font-bold text-coffee-800 dark:text-white">
              Your Wishlist Is Empty
            </h2>

            <p className="max-w-md mt-3 text-center text-coffee-500 dark:text-coffee-400">
              Save your favorite coffee products here and easily access them
              later whenever you want.
            </p>

            <Link
              to="/shop"
              className="flex items-center gap-2 px-8 py-3 mt-8 text-sm font-semibold text-white transition-all rounded-full bg-amber-700 hover:bg-amber-800"
            >
              Explore Products
              <svg
                className="w-4 h-4"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M14 5l7 7m0 0l-7 7m7-7H3"
                />
              </svg>
            </Link>
          </div>
        ) : (
          <div className="overflow-x-auto border border-coffee-200 rounded-2xl dark:border-coffee-700">
            <table className="w-full min-w-[700px]">
              <thead>
                <tr className="border-b border-coffee-200 dark:border-coffee-700">
                  <th className="p-4 text-sm font-semibold text-left text-coffee-500 dark:text-coffee-400">
                    PRODUCT
                  </th>
                  <th className="p-4 text-sm font-semibold text-left text-coffee-500 dark:text-coffee-400">
                    PRICE
                  </th>
                  <th className="p-4 text-sm font-semibold text-center text-coffee-500 dark:text-coffee-400">
                    ACTION
                  </th>
                  <th className="p-4"></th>
                </tr>
              </thead>

              <tbody>
                {wishlist.map((item) => {
                  const price = Number(
                    item.offerPrice ?? item.regularPrice ?? 0
                  );
                  const regularPrice = Number(
                    item.regularPrice ?? 0
                  );

                  return (
                    <tr
                      key={item.id}
                      className="border-b border-coffee-100 dark:border-coffee-800"
                    >
                      <td className="p-4">
                        <Link
                          to={`/product/${item.id}`}
                          className="flex items-center gap-4"
                        >
                          <img
                            src={item.image}
                            alt={item.name}
                            className="object-cover w-16 h-16 rounded-xl"
                          />
                          <div>
                            <h3 className="font-semibold text-coffee-800 transition-colors dark:text-white hover:text-amber-700">
                              {item.name}
                            </h3>
                            <p className="text-xs text-coffee-500 dark:text-coffee-400">
                              {item.category}
                            </p>
                          </div>
                        </Link>
                      </td>

                      <td className="p-4">
                        <div className="flex items-center gap-2">
                          <span className="font-semibold text-coffee-800 dark:text-white">
                            ${price.toFixed(2)}
                          </span>
                          {item.offerPrice && (
                            <span className="text-sm text-coffee-400 line-through">
                              ${regularPrice.toFixed(2)}
                            </span>
                          )}
                        </div>
                      </td>

                      <td className="p-4 text-center">
                        <button
                          onClick={() => handleAddToCart(item)}
                          className="inline-flex items-center gap-2 px-5 py-2 text-sm font-medium text-white transition rounded-full bg-amber-700 hover:bg-amber-800"
                        >
                          <HiOutlineShoppingBag />
                          Add To Cart
                        </button>
                      </td>

                      <td className="p-4 text-center">
                        <button
                          onClick={() => removeFromWishlist(item.id)}
                          className="flex items-center justify-center w-10 h-10 mx-auto transition rounded-full text-amber-700 hover:bg-amber-50 dark:hover:bg-amber-950/30"
                        >
                          <FaTrash />
                        </button>
                      </td>
                    </tr>
                  );
                })}
              </tbody>
            </table>
          </div>
        )}
      </div>
    </>
  );
};

export default WishList;
