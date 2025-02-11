export default function Newsletter() {
  return (
    <section className="flex justify-center items-center min-h-screen bg-[#EAF4FC] w-full">
      <div className="relative bg-white w-[90%] max-w-[900px] rounded-lg shadow-lg p-12 text-center">
        {/* Decorative Elements */}
        <div className="absolute top-6 left-6 text-yellow-400 text-4xl">⭐</div>
        <div className="absolute top-6 right-6 text-purple-500 text-4xl">🔔</div>

        {/* Heading */}
        <h2 className="text-3xl md:text-4xl font-semibold text-gray-900 leading-snug">
          Subscribe to Our Newsletter
          <br className="hidden md:block" /> Stay Updated with Our Latest News
        </h2>

        {/* Description */}
        <p className="text-gray-600 text-lg mt-4 max-w-[80%] mx-auto">
          Get exclusive updates, special offers, and valuable insights directly in your inbox.
          Subscribe now and never miss out!
        </p>

        {/* Form */}
        <div className="mt-8 flex flex-col sm:flex-row gap-4 w-full max-w-[80%] mx-auto">
          <input
            type="email"
            placeholder="Enter your email"
            className="p-4 border border-gray-300 rounded-lg sm:rounded-l-lg w-full focus:outline-none"
          />
          <button className="bg-black text-white px-8 py-4 rounded-lg sm:rounded-r-lg font-medium w-full sm:w-auto">
            SUBSCRIBE
          </button>
        </div>
      </div>
    </section>
  );
}
