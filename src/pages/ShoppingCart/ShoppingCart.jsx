import { Link } from "react-router-dom";
import Nav_Banner from "../Shared/Nav_Banner";
import { RxCross2 } from "react-icons/rx";
import { HiOutlineShoppingBag } from "react-icons/hi2";
import { useCart } from "../../Cart/CartContext";

const ShoppingCart = () => {
  const {
    cart,
    increaseQuantity,
    decreaseQuantity,
    removeFromCart,
    calculateTotal,
  } = useCart();

  const total = calculateTotal();

  return (
    <>
      <Nav_Banner name="Shopping Cart" path="/shopping-cart" />
      <div className="px-4 py-10 mx-auto all-container">
        <h1 className="mb-8 text-3xl font-bold text-center dark:text-white">My Shopping Cart</h1>

        {cart.length === 0 ? (
          <div className="flex flex-col items-center justify-center py-20 gap-6">
            <div className="flex items-center justify-center w-24 h-24 rounded-full bg-amber-50 dark:bg-amber-950/30">
              <HiOutlineShoppingBag className="text-4xl text-amber-300 dark:text-amber-400" />
            </div>
            <div className="text-center">
              <h2 className="text-xl font-bold text-coffee-800 dark:text-white">Your cart is empty</h2>
              <p className="mt-2 text-sm text-coffee-400 dark:text-coffee-500 max-w-xs">
                Looks like you haven&apos;t added anything yet. Explore our collection and find something you love.
              </p>
            </div>
            <Link
              to="/shop"
              className="flex items-center gap-2 px-8 py-3 text-sm font-semibold text-white transition-all rounded-full bg-amber-700 hover:bg-amber-800 active:scale-95"
            >
              Continue Shopping
              <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
              </svg>
            </Link>
          </div>
        ) : (
          <div className="flex flex-col gap-5 lg:p-10 lg:flex-row">
            {/* Left side - Cart Items */}
            <div className="flex-1 overflow-x-auto">
              <table className="w-full table">
                <thead>
                  <tr className="border-b border-coffee-200 dark:border-coffee-700">
                    <th className="p-3 text-left text-sm font-semibold text-coffee-500 dark:text-coffee-400">PRODUCT</th>
                    <th className="p-3"></th>
                    <th className="p-3 text-left text-sm font-semibold text-coffee-500 dark:text-coffee-400">PRICE</th>
                    <th className="p-3 text-center text-sm font-semibold text-coffee-500 dark:text-coffee-400">QUANTITY</th>
                    <th className="p-3 text-left text-sm font-semibold text-coffee-500 dark:text-coffee-400">SUBTOTAL</th>
                    <th className="p-3"></th>
                  </tr>
                </thead>
                <tbody>
                  {cart.map((item) => {
                    const price = item.offerPrice || item.regularPrice;
                    return (
                      <tr key={item.id} className="border-b border-coffee-100 dark:border-coffee-800">
                        <td className="py-4">
                          <div className="flex items-center gap-3">
                            <img
                              src={item.image}
                              alt={item.name}
                              className="w-14 h-14 rounded-xl object-cover"
                            />
                            <div className="font-semibold text-sm dark:text-white">{item.name}</div>
                          </div>
                        </td>
                        <td className="py-4"></td>
                        <td className="py-4 text-sm dark:text-coffee-300">${price.toFixed(2)}</td>
                        <td className="py-4">
                          <div className="flex items-center justify-center gap-2 border rounded-full w-fit mx-auto border-coffee-200 dark:border-coffee-600">
                            <button
                              onClick={() => decreaseQuantity(item.id)}
                              className="flex items-center justify-center w-8 h-8 text-sm rounded-full hover:bg-coffee-100 dark:hover:bg-coffee-800 dark:text-white"
                            >
                              -
                            </button>
                            <span className="w-6 text-sm font-semibold text-center dark:text-white">{item.quantity}</span>
                            <button
                              onClick={() => increaseQuantity(item.id)}
                              className="flex items-center justify-center w-8 h-8 text-sm rounded-full hover:bg-coffee-100 dark:hover:bg-coffee-800 dark:text-white"
                            >
                              +
                            </button>
                          </div>
                        </td>
                        <td className="py-4 text-sm font-semibold dark:text-white">
                          ${(price * item.quantity).toFixed(2)}
                        </td>
                        <td className="py-4">
                          <button
                            onClick={() => removeFromCart(item.id)}
                            className="flex items-center justify-center w-8 h-8 text-white transition-colors rounded-full bg-amber-600 hover:bg-amber-700"
                          >
                            <RxCross2 className="text-xs" />
                          </button>
                        </td>
                      </tr>
                    );
                  })}
                </tbody>
              </table>

              {/* Coupon */}
              <div className="my-8 p-5 border border-coffee-200 dark:border-coffee-700 rounded-2xl">
                <p className="mb-3 text-sm font-bold dark:text-white">Coupon code</p>
                <div className="flex gap-3">
                  <input
                    type="text"
                    placeholder="Enter coupon code"
                    className="flex-1 px-4 py-2.5 text-sm border border-coffee-200 dark:border-coffee-600 dark:bg-coffee-800 dark:text-white rounded-full focus:outline-none focus:border-amber-500"
                  />
                  <button className="px-6 py-2.5 text-sm font-semibold text-white transition-colors rounded-full bg-coffee-800 dark:bg-coffee-700 hover:bg-coffee-900 dark:hover:bg-coffee-600">
                    Apply
                  </button>
                </div>
              </div>
            </div>

            {/* Right side - Order Summary */}
            <div className="w-full lg:w-[350px]">
              <div className="p-6 border border-coffee-200 dark:border-coffee-700 rounded-2xl">
                <h3 className="mb-4 text-lg font-bold dark:text-white">Cart Total</h3>
                <div className="space-y-3">
                  <div className="flex justify-between text-sm">
                    <span className="text-coffee-500 dark:text-coffee-400">Sub Total</span>
                    <span className="font-medium dark:text-white">${total.toFixed(2)}</span>
                  </div>
                  <div className="flex justify-between text-sm">
                    <span className="text-coffee-500 dark:text-coffee-400">Shipping</span>
                    <span className="font-medium text-emerald-600 dark:text-emerald-400">Free</span>
                  </div>
                  <div className="flex justify-between pt-3 border-t border-coffee-200 dark:border-coffee-700">
                    <span className="font-bold dark:text-white">Total</span>
                    <span className="font-bold text-amber-700 dark:text-amber-400">${total.toFixed(2)}</span>
                  </div>
                </div>
                <Link
                  to="/billing-info"
                  className="block w-full py-3 mt-6 text-sm font-bold text-center text-white transition-all rounded-full bg-amber-700 hover:bg-amber-800 active:scale-[0.98]"
                >
                  Proceed to Checkout
                </Link>
              </div>
            </div>
          </div>
        )}
      </div>
    </>
  );
};

export default ShoppingCart;
