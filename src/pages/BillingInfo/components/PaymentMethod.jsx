import { FaCreditCard, FaPaypal, FaTruck } from "react-icons/fa";

const methods = [
  {
    id: "credit-card",
    label: "Credit Card",
    icon: FaCreditCard,
    desc: "Pay securely with your card",
  },
  {
    id: "paypal",
    label: "PayPal",
    icon: FaPaypal,
    desc: "Pay with your PayPal account",
  },
  {
    id: "cod",
    label: "Cash on Delivery",
    icon: FaTruck,
    desc: "Pay when you receive your order",
  },
];

const PaymentMethod = ({ selected, onSelect }) => {
  return (
    <div className="space-y-3">
      <h3 className="text-lg font-bold dark:text-white">Payment Method</h3>
      {methods.map((method) => {
        const Icon = method.icon;
        const isSelected = selected === method.id;
        return (
          <label
            key={method.id}
            className={`flex items-center gap-4 p-4 border-2 rounded-xl cursor-pointer transition-all ${
              isSelected
                ? "border-amber-600 bg-amber-50 dark:bg-amber-950/30"
                : "border-coffee-200 dark:border-coffee-700 hover:border-coffee-300 dark:hover:border-coffee-600 bg-white dark:bg-[#2b1a0d]"
            }`}
          >
            <input
              type="radio"
              name="payment"
              value={method.id}
              checked={isSelected}
              onChange={() => onSelect(method.id)}
              className="sr-only"
            />
            <div
              className={`flex items-center justify-center w-10 h-10 rounded-full ${
                isSelected ? "bg-amber-700 text-white" : "bg-coffee-100 dark:bg-coffee-800 text-coffee-400 dark:text-coffee-500"
              }`}
            >
              <Icon className="text-lg" />
            </div>
            <div className="flex-1">
              <p className="text-sm font-semibold dark:text-white">{method.label}</p>
              <p className="text-xs text-coffee-400 dark:text-coffee-500">{method.desc}</p>
            </div>
            <div
              className={`w-5 h-5 rounded-full border-2 flex items-center justify-center ${
                isSelected ? "border-amber-600" : "border-coffee-300 dark:border-coffee-600"
              }`}
            >
              {isSelected && <div className="w-2.5 h-2.5 rounded-full bg-amber-600" />}
            </div>
          </label>
        );
      })}
    </div>
  );
};

export default PaymentMethod;
