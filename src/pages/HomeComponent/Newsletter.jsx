import { FaEnvelope } from "react-icons/fa";

const Newsletter = () => {
  return (
    <div className="p-8 border bg-red-50 rounded-2xl py-10border-red-100">
      <div className="max-w-2xl mx-auto text-center">
        <FaEnvelope className="mx-auto mb-4 text-4xl text-red-700" />
        <h2 className="mb-3 text-2xl font-bold text-gray-800 md:text-3xl" style={{ fontFamily: "Georgia, serif" }}>
          Join the Brew &amp; Bean Club
        </h2>
        <p className="mb-6 text-sm text-gray-500">
          Subscribe for exclusive deals, new roast announcements, and brewing
          tips from our master roasters.
        </p>
        <form
          onSubmit={(e) => e.preventDefault()}
          className="flex flex-col max-w-md gap-3 mx-auto sm:flex-row"
        >
          <input
            type="email"
            placeholder="Enter your email address"
            aria-label="Email address"
            className="flex-1 px-5 py-3 text-sm bg-white border rounded-full border-red-200 focus:outline-none focus:border-red-500"
          />
          <button
            type="submit"
            className="px-8 py-3 text-sm font-semibold text-white transition-colors rounded-full bg-red-700 hover:bg-red-800 whitespace-nowrap"
          >
            Subscribe
          </button>
        </form>
      </div>
    </div>
  );
};

export default Newsletter;
