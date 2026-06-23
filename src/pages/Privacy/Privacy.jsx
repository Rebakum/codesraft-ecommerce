import Nav_Banner from "../Shared/Nav_Banner";

const sections = [
  {
    title: "Information Collection",
    content:
      "We collect personal information you provide directly, such as your name, email address, shipping address, and payment details when you place an order or create an account. We also automatically collect certain information about your device and browsing behavior, including IP address, browser type, pages visited, and time spent on our site.",
  },
  {
    title: "Cookies",
    content:
      "We use cookies and similar tracking technologies to enhance your browsing experience. Essential cookies are necessary for the site to function. Analytics cookies help us understand how visitors interact with our site. Marketing cookies are used to deliver personalized advertisements. You can manage your cookie preferences through your browser settings.",
  },
  {
    title: "Data Security",
    content:
      "We implement industry-standard security measures to protect your personal information. All payment transactions are encrypted using 256-bit SSL technology. We regularly audit our systems and never store your full credit card number on our servers. However, no method of transmission over the Internet is 100% secure.",
  },
  {
    title: "Third Party Services",
    content:
      "We may share your information with trusted third-party service providers who assist us in operating our business, including payment processors (Stripe, PayPal), shipping carriers (USPS, UPS, FedEx), and analytics providers (Google Analytics). These providers are contractually obligated to keep your information confidential and use it only for the services we've requested.",
  },
];

const Privacy = () => {
  return (
    <>
      <Nav_Banner name="Privacy Policy" path="/privacy-policy" />

      <section className="px-4 py-16 mx-auto all-container">
        <div className="max-w-3xl mx-auto">
          <div className="mb-12 text-center">
            <h1 className="mb-4 text-4xl font-bold dark:text-white md:text-5xl" style={{ fontFamily: "Georgia, serif" }}>
              Privacy Policy
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
              If you have questions about this policy, contact us at{" "}
              <span className="font-semibold text-amber-700">hello@brewbean.com</span>.
            </p>
          </div>
        </div>
      </section>
    </>
  );
};

export default Privacy;
