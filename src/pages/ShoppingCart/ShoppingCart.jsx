import { Link } from "react-router-dom";
import Nav_Banner from "../../Shared/Nav-Banner/Nav_Banner";
import { RxCross2 } from "react-icons/rx";
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
        <h1 className="mb-8 text-3xl font-bold text-center">My Shopping Cart</h1>

        {cart.length === 0 ? (
          <div className="flex flex-col items-center gap-4 py-20">
            <p className="text-gray-500">Your cart is empty</p>
            <Link
              to="/shop"
              className="px-6 py-2 text-white bg-red-600 rounded-full hover:bg-red-700"
            >
              Continue Shopping
            </Link>
          </div>
        ) : (
          <div className="flex flex-col gap-5 lg:p-10 lg:flex-row">
            {/* Left side - Cart Items */}
            <div className="flex-1 overflow-x-auto">
              <table className="w-full table">
                <thead>
                  <tr className="border border-gray-300">
                    <th className="p-3 text-left">PRODUCT</th>
                    <th className="p-3"></th>
                    <th className="p-3 text-left">PRICE</th>
                    <th className="p-3 text-center">QUANTITY</th>
                    <th className="p-3 text-left">SUBTOTAL</th>
                    <th className="p-3"></th>
                  </tr>
                </thead>
                <tbody>
                  {cart.map((item) => {
                    const price = item.offerPrice || item.regularPrice;
                    return (
                      <tr key={item.id} className="border border-gray-300">
                        <td className="p-3">
                          <div className="flex items-center gap-3">
                            <img
                              src={item.image}
                              alt={item.name}
                              className="w-12 h-12 rounded object-cover"
                            />
                            <div className="font-bold">{item.name}</div>
                          </div>
                        </td>
                        <td className="p-3"></td>
                        <td className="p-3">${price.toFixed(2)}</td>
                        <td className="p-3">
                          <div className="flex items-center justify-center gap-3 p-2 border-2 rounded-full w-fit mx-auto">
                            <button
                              onClick={() => decreaseQuantity(item.id)}
                              className="flex items-center justify-center w-6 h-6 text-sm font-bold rounded-full hover:bg-gray-100"
                            >
                              -
                            </button>
                            <h3 className="font-semibold">{item.quantity}</h3>
                            <button
                              onClick={() => increaseQuantity(item.id)}
                              className="flex items-center justify-center w-6 h-6 text-sm font-bold rounded-full hover:bg-gray-100"
                            >
                              +
                            </button>
                          </div>
                        </td>
                        <td className="p-3 font-semibold">
                          ${(price * item.quantity).toFixed(2)}
                        </td>
                        <td className="p-3">
                          <button
                            onClick={() => removeFromCart(item.id)}
                            className="flex items-center justify-center w-8 h-8 text-white bg-red-500 rounded-full hover:bg-red-600"
                          >
                            <RxCross2 />
                          </button>
                        </td>
                      </tr>
                    );
                  })}
                </tbody>
              </table>

              {/* Coupon */}
              <div className="my-10 border rounded-lg">
                <div className="flex items-center justify-between p-5">
                  <p className="text-xl font-bold">Coupon code</p>
                  <label className="flex items-center w-3/4 gap-2 pr-0 rounded-full input input-bordered">
                    <input
                      type="text"
                      className="grow"
                      placeholder="Enter coupon"
                    />
                    <button className="px-4 py-2 text-white bg-black rounded-full hover:bg-gray-800">
                      Apply Coupon
                    </button>
                  </label>
                </div>
              </div>
            </div>

            {/* Right side - Order Summary */}
            <div className="w-full lg:w-[350px]">
              <table className="w-full border border-gray-300">
                <thead>
                  <tr className="border border-gray-300">
                    <th className="p-3 text-left">Cart Total</th>
                    <th className="p-3"></th>
                  </tr>
                </thead>
                <tbody>
                  <tr className="border border-gray-300">
                    <td className="p-3">Sub Total</td>
                    <td className="p-3">${total.toFixed(2)}</td>
                  </tr>
                  <tr className="border border-gray-300">
                    <td className="p-3">Shipping</td>
                    <td className="p-3">Free</td>
                  </tr>
                  <tr className="border border-gray-300">
                    <td className="p-3 font-bold">Total</td>
                    <td className="p-3 font-bold">${total.toFixed(2)}</td>
                  </tr>
                </tbody>
              </table>
              <div className="flex items-center justify-center border border-gray-300">
                <div className="my-5">
                  <Link
                    to="/billing-info"
                    className="px-10 py-2 text-white bg-red-500 rounded-full hover:bg-red-600"
                  >
                    Proceed to Checkout
                  </Link>
                </div>
              </div>
            </div>
          </div>
        )}
      </div>
    </>
  );
};

export default ShoppingCart;
