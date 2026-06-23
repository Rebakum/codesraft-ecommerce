import Nav_Banner from "../Shared/Nav_Banner";

const sections = [
  {
    title: "Orders",
    content:
      "By placing an order on our website, you agree to provide accurate and complete information. All orders are subject to availability and confirmation of the order price. We reserve the right to refuse or cancel any order for any reason, including limitations on quantities available, inaccuracies in product or pricing information, or errors identified by our fraud detection system.",
  },
  {
    title: "Payments",
    content:
      "All prices are listed in US dollars and are exclusive of applicable taxes and shipping charges. We accept major credit cards, PayPal, Apple Pay, and Google Pay. Payment must be received in full before we process and ship your order. Your credit card will be charged at the time of order placement.",
  },
  {
    title: "Returns",
    content:
      "We want you to be completely satisfied with your purchase. If you're not happy with your order, you may return unopened products within 7 days of delivery for a full refund. Coffee that has been opened or consumed beyond 20% is eligible for exchange or store credit. To initiate a return, contact our support team with your order number.",
  },
  {
    title: "Liability",
    content:
      "Brew & Bean shall not be liable for any indirect, incidental, or consequential damages arising from the use of our products or services. Our total liability for any claim shall not exceed the amount paid for the product in question. We are not responsible for delays caused by shipping carriers, natural disasters, or circumstances beyond our control.",
  },
];

const Terms = () => {
  return (
    <>
      <Nav_Banner name="Terms & Conditions" path="/terms" />

      <section className="px-4 py-16 mx-auto all-container">
        <div className="max-w-3xl mx-auto">
          <div className="mb-12 text-center">
            <h1 className="mb-4 text-4xl font-bold dark:text-white md:text-5xl" style={{ fontFamily: "Georgia, serif" }}>
              Terms & Conditions
            </h1>
            <p className="text-sm text-coffee-500 dark:text-coffee-400">
              Last updated: January 1, 2026
            </p>
          </div>

          <div className="space-y-8">
            {sections.map((s) => (
              <div key={s.title}>
                <h2 className="mb-3 text-xl font-bold dark:text-white">{s.title}</h2>
                <p className="text-sm leading-relaxed text-coffee-600 dark:text-coffee-400">{s.content}</p>
              </div>
            ))}
          </div>

          <div className="p-6 mt-10 text-center bg-coffee-50 dark:bg-[#2b1a0d] border border-coffee-200 dark:border-coffee-800 rounded-2xl">
            <p className="text-sm text-coffee-500 dark:text-coffee-400">
              Questions? Contact us at{" "}
              <span className="font-semibold text-amber-700">hello@brewbean.com</span>.
            </p>
          </div>
        </div>
      </section>
    </>
  );
};

export default Terms;
