import { useState } from "react";
import Nav_Banner from "../Shared/Nav_Banner";
import { useCart } from "../../Cart/CartContext";
import OrderSummary from "./components/OrderSummary";
import PaymentMethod from "./components/PaymentMethod";

const inputClass =
  "w-full px-4 py-2.5 text-sm border border-coffee-200 dark:border-coffee-600 dark:bg-coffee-800 dark:text-white rounded-xl focus:outline-none focus:border-amber-500 focus:ring-1 focus:ring-amber-500";

const BillingInfo = () => {
  const [paymentMethod, setPaymentMethod] = useState("credit-card");
  const { cart } = useCart();

  return (
    <>
      <Nav_Banner name={"Billing Info"} path="/billing-info" />

      <section className="px-4 py-10 mx-auto all-container">
        <div className="flex flex-col gap-8 lg:flex-row">
          <div className="flex-1">
            <form onSubmit={(e) => e.preventDefault()} className="space-y-6">
              <fieldset className="p-6 space-y-4 border border-coffee-200 dark:border-coffee-700 rounded-2xl">
                <h2 className="text-xl font-bold dark:text-white">Billing Information</h2>
                <div className="grid grid-cols-1 gap-4 md:grid-cols-2 lg:grid-cols-3">
                  <div>
                    <label htmlFor="firstname" className="block mb-1 text-sm font-medium dark:text-coffee-300">First name</label>
                    <input id="firstname" type="text" placeholder="First name" className={inputClass} />
                  </div>
                  <div>
                    <label htmlFor="lastname" className="block mb-1 text-sm font-medium dark:text-coffee-300">Last name</label>
                    <input id="lastname" type="text" placeholder="Last name" className={inputClass} />
                  </div>
                  <div>
                    <label htmlFor="company" className="block mb-1 text-sm font-medium dark:text-coffee-300">Company Name <span className="text-coffee-400">(Optional)</span></label>
                    <input id="company" type="text" placeholder="Company name" className={inputClass} />
                  </div>
                  <div className="md:col-span-2 lg:col-span-3">
                    <label htmlFor="address" className="block mb-1 text-sm font-medium dark:text-coffee-300">Street Address</label>
                    <input id="address" type="text" placeholder="Street Address" className={inputClass} />
                  </div>
                  <div>
                    <label htmlFor="country" className="block mb-1 text-sm font-medium dark:text-coffee-300">Country / Region</label>
                    <select id="country" className={inputClass}>
                      <option value="">Select</option>
                      <option value="Bangladesh">Bangladesh</option>
                      <option value="India">India</option>
                      <option value="United States">United States</option>
                      <option value="United Kingdom">United Kingdom</option>
                    </select>
                  </div>
                  <div>
                    <label htmlFor="state" className="block mb-1 text-sm font-medium dark:text-coffee-300">State / Province</label>
                    <select id="state" className={inputClass}>
                      <option value="">Select</option>
                      <option value="Dhaka">Dhaka</option>
                      <option value="Chattogram">Chattogram</option>
                      <option value="California">California</option>
                      <option value="New York">New York</option>
                    </select>
                  </div>
                  <div>
                    <label htmlFor="zip" className="block mb-1 text-sm font-medium dark:text-coffee-300">ZIP / Postal</label>
                    <input id="zip" type="text" placeholder="ZIP / Postal" className={inputClass} />
                  </div>
                  <div>
                    <label htmlFor="email" className="block mb-1 text-sm font-medium dark:text-coffee-300">Email</label>
                    <input id="email" type="email" placeholder="Email" className={inputClass} />
                  </div>
                  <div>
                    <label htmlFor="phone" className="block mb-1 text-sm font-medium dark:text-coffee-300">Phone Number</label>
                    <input id="phone" type="tel" placeholder="Phone Number" className={inputClass} />
                  </div>
                </div>
              </fieldset>

              <label className="flex items-center gap-3 cursor-pointer">
                <input type="checkbox" className="w-4 h-4 rounded border-coffee-300 text-amber-600 focus:ring-amber-500" />
                <span className="text-sm dark:text-coffee-300">Ship to different address</span>
              </label>

              <fieldset className="space-y-3">
                <h3 className="text-lg font-bold dark:text-white">Additional Info</h3>
                <label htmlFor="order-notes" className="text-sm text-coffee-500 dark:text-coffee-400">Order Notes (Optional)</label>
                <textarea
                  id="order-notes"
                  rows={4}
                  placeholder="Notes about your order, e.g. special notes for delivery."
                  className="w-full px-4 py-2.5 text-sm border border-coffee-200 dark:border-coffee-600 dark:bg-coffee-800 dark:text-white rounded-xl focus:outline-none focus:border-amber-500 focus:ring-1 focus:ring-amber-500"
                />
              </fieldset>
            </form>
          </div>

          <div className="w-full lg:w-[400px]">
            <OrderSummary cart={cart} />
          </div>
        </div>

        <div className="mt-10">
          <PaymentMethod selected={paymentMethod} onSelect={setPaymentMethod} />
        </div>
      </section>
    </>
  );
};

export default BillingInfo;
