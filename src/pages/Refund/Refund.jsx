import Nav_Banner from "../Shared/Nav_Banner";

const Refund = () => {
  return (
    <>
      <Nav_Banner name="Return & Refund Policy" path="/refund-policy" />

      <section className="px-4 py-16 mx-auto all-container">
        <div className="max-w-3xl mx-auto">
          <div className="mb-12 text-center">
            <h1 className="mb-4 text-4xl font-bold dark:text-white md:text-5xl" style={{ fontFamily: "Georgia, serif" }}>
              Return & Refund Policy
            </h1>
            <p className="text-sm text-coffee-500 dark:text-coffee-400">
              Last updated: January 1, 2026
            </p>
          </div>

          <div className="space-y-8">
            {/* 7 Day Return Policy */}
            <div>
              <h2 className="mb-3 text-xl font-bold dark:text-white">7 Day Return Policy</h2>
              <p className="mb-3 text-sm leading-relaxed text-coffee-600 dark:text-coffee-400">
                We offer a 7-day return policy from the date of delivery. To be eligible for a return, your item must be:
              </p>
              <ul className="space-y-2 text-sm text-coffee-600 dark:text-coffee-400">
                <li className="flex items-start gap-2">
                  <span className="mt-1.5 w-1.5 h-1.5 bg-amber-700 rounded-full shrink-0" />
                  In the same condition you received it (unopened or less than 20% consumed)
                </li>
                <li className="flex items-start gap-2">
                  <span className="mt-1.5 w-1.5 h-1.5 bg-amber-700 rounded-full shrink-0" />
                  In its original packaging with all labels intact
                </li>
                <li className="flex items-start gap-2">
                  <span className="mt-1.5 w-1.5 h-1.5 bg-amber-700 rounded-full shrink-0" />
                  Accompanied by the original receipt or proof of purchase
                </li>
              </ul>
            </div>

            {/* Refund Process */}
            <div>
              <h2 className="mb-3 text-xl font-bold dark:text-white">Refund Process</h2>
              <p className="mb-3 text-sm leading-relaxed text-coffee-600 dark:text-coffee-400">
                Once we receive and inspect your return, we will send you an email to notify you of the approval or rejection of your refund. If approved, your refund will be processed within 5-7 business days, and a credit will automatically be applied to your original method of payment.
              </p>
              <p className="text-sm leading-relaxed text-coffee-600 dark:text-coffee-400">
                Late or missing refunds: If you haven't received a refund after 10 business days, first check your bank account again, then contact your credit card company or bank. If you still haven't received your refund, contact us at hello@brewbean.com.
              </p>
            </div>

            {/* Exchange Policy */}
            <div>
              <h2 className="mb-3 text-xl font-bold dark:text-white">Exchange Policy</h2>
              <p className="mb-3 text-sm leading-relaxed text-coffee-600 dark:text-coffee-400">
                We only replace items if they are defective or damaged. If you need to exchange a product for the same item, send us an email at hello@brewbean.com with your order number and a photo of the damaged item.
              </p>
              <p className="text-sm leading-relaxed text-coffee-600 dark:text-coffee-400">
                For preference-based exchanges (e.g., switching roast type), we offer store credit equal to the original purchase price. Contact our support team to arrange an exchange.
              </p>
            </div>
          </div>

          <div className="p-6 mt-10 text-center bg-amber-50 dark:bg-amber-950/20 border border-amber-200 dark:border-amber-900 rounded-2xl">
            <h3 className="mb-2 text-lg font-bold dark:text-white">Need to Start a Return?</h3>
            <p className="text-sm text-coffee-600 dark:text-coffee-400">
              Email us at <span className="font-semibold text-amber-700">hello@brewbean.com</span> with your order number and reason for return. We'll guide you through the process.
            </p>
          </div>
        </div>
      </section>
    </>
  );
};

export default Refund;
