import { useCart } from "../../../Cart/CartContext";

const OrderSummary = () => {
  const { cart, calculateTotal } = useCart();
  const total = calculateTotal();

  return (
    <div className="p-6 border border-coffee-200 dark:border-coffee-700 rounded-2xl bg-coffee-50/50 dark:bg-[#2b1a0d]/50">
      <h2 className="mb-4 text-lg font-bold dark:text-white">Order Summary</h2>

      {cart.length === 0 ? (
        <p className="py-4 text-sm text-center text-coffee-400 dark:text-coffee-500">No items in cart</p>
      ) : (
        <>
          <div className="space-y-3 max-h-60 overflow-y-auto">
            {cart.map((item) => {
              const price = item.offerPrice || item.regularPrice;
              return (
                <div key={item.id} className="flex items-center gap-3">
                  <img
                    src={item.image}
                    alt={item.name}
                    className="w-12 h-12 rounded-lg object-cover"
                  />
                  <div className="flex-1 min-w-0">
                    <p className="text-sm font-medium truncate dark:text-white">{item.name}</p>
                    <p className="text-xs text-coffee-400 dark:text-coffee-500">Qty: {item.quantity}</p>
                  </div>
                  <span className="text-sm font-semibold dark:text-white">
                    ${(price * item.quantity).toFixed(2)}
                  </span>
                </div>
              );
            })}
          </div>

          <div className="mt-4 pt-4 space-y-2 border-t border-coffee-200 dark:border-coffee-700">
            <div className="flex justify-between text-sm">
              <span className="text-coffee-500 dark:text-coffee-400">Subtotal</span>
              <span className="font-medium dark:text-white">${total.toFixed(2)}</span>
            </div>
            <div className="flex justify-between text-sm">
              <span className="text-coffee-500 dark:text-coffee-400">Shipping</span>
              <span className="font-medium text-emerald-600 dark:text-emerald-400">Free</span>
            </div>
            <div className="flex justify-between pt-2 border-t border-coffee-200 dark:border-coffee-700">
              <span className="font-bold dark:text-white">Total</span>
              <span className="font-bold text-amber-700 dark:text-amber-400">${total.toFixed(2)}</span>
            </div>
          </div>
        </>
      )}
    </div>
  );
};

export default OrderSummary;
