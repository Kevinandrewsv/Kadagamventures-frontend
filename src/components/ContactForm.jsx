export default function ContactForm() {
  return (
    <div className="min-h-screen pt-35 flex items-center justify-center px-5 py-10 ">
      <div className="bg-white p-10 rounded-xl shadow-md w-full max-w-md border border-gray-300">
        {/* Title */}
        <h2 className="text-xl font-semibold text-center text-gray-900">Start with your free account today.</h2>

        {/* Form */}
        <form className="space-y-4 mt-4">
          {/* First Name */}
          <div>
            <label className="text-gray-700 font-medium">First Name *</label>
            <input
              type="text"
              placeholder="John"
              className="w-full p-2 border border-gray-300 rounded focus:outline-none focus:ring-1 focus:ring-black"
            />
          </div>
          
          {/* Last Name */}
          <div>
            <label className="text-gray-700 font-medium">Last Name *</label>
            <input
              type="text"
              placeholder="Doe"
              className="w-full p-2 border border-gray-300 rounded focus:outline-none focus:ring-1 focus:ring-black"
            />
          </div>

          {/* Email */}
          <div>
            <label className="text-gray-700 font-medium">Email *</label>
            <input
              type="email"
              placeholder="example@domain.com"
              className="w-full p-2 border border-gray-300 rounded focus:outline-none focus:ring-1 focus:ring-black"
            />
          </div>

          {/* Phone Number */}
          <div>
            <label className="text-gray-700 font-medium">Phone Number *</label>
            <div className="flex items-center border border-gray-300 rounded p-2">
             
              <input
                type="tel"
                placeholder="1234567890"
                className="w-full outline-none pl-2"
              />
            </div>
          </div>

          {/* Message */}
          <div>
            <label className="text-gray-700 font-medium">Message</label>
            <textarea
              rows="3"
              placeholder="Write your message..."
              className="w-full p-2 border border-gray-300 rounded focus:outline-none focus:ring-1 focus:ring-black"
            ></textarea>
          </div>

          {/* Submit Button */}
          <div className="text-center">
            <button
              type="submit"
              className="w-full bg-red-400 text-white font-semibold py-2 rounded cursor-not-allowed"
              disabled
            >
              SEND MESSAGE
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}
