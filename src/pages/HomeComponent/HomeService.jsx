import { FaTruck, FaHeadset, FaShieldAlt, FaUndoAlt } from "react-icons/fa";

const services = [
  {
    icon: FaTruck,
    title: "Free Shipping",
    desc: "Free shipping on orders over $40",
  },
  {
    icon: FaHeadset,
    title: "Brew Support 24/7",
    desc: "Expert barista advice anytime",
  },
  {
    icon: FaShieldAlt,
    title: "Secure Checkout",
    desc: "100% secure payment processing",
  },
  {
    icon: FaUndoAlt,
    title: "Freshness Guarantee",
    desc: "Roasted within 48 hours of shipping",
  },
];

const HomeServices = () => {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 p-6 bg-white shadow-md rounded-2xl border border-amber-100">
      {services.map((s) => {
        const Icon = s.icon;
        return (
          <div key={s.title} className="flex items-center gap-3">
            <div className="shrink-0 w-12 h-12 bg-amber-50 rounded-xl flex items-center justify-center">
              <Icon className="text-amber-700 text-lg" />
            </div>
            <div className="space-y-0.5">
              <h3 className="text-gray-900 font-semibold text-sm">{s.title}</h3>
              <p className="text-gray-400 text-xs">{s.desc}</p>
            </div>
          </div>
        );
      })}
    </div>
  );
};

export default HomeServices;
