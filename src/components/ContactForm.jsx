export default function ContactForm() {
    return (
      <div className="min-h-screen flex items-center justify-center bg-blue-100 px-4 pt-15 pb-15">
        <div className="bg-white p-8 rounded-lg shadow-lg w-full max-w-2xl">
          {/* Title */}
          <h2 className="text-2xl font-semibold text-center text-gray-900">
            Say hello
          </h2>
          <p className="text-gray-600 text-center mb-6">
            Lorem Ipsum is simply dummy text of the printing.
          </p>
  
          {/* Form */}
          <form className="space-y-4">
            {/* Name Fields */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div>
                <label className="text-gray-700">First Name</label>
                <input
                  type="text"
                  placeholder="First Name"
                  className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                />
              </div>
              <div>
                <label className="text-gray-700">Last Name</label>
                <input
                  type="text"
                  placeholder="Last Name"
                  className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                />
              </div>
            </div>
  
            {/* Email Field */}
            <div>
              <label className="text-gray-700">Email Address</label>
              <input
                type="email"
                placeholder="Email Address"
                className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
            </div>
  
            {/* Phone Number Field */}
            <div>
              <label className="text-gray-700">Phone Number</label>
              <input
                type="tel"
                placeholder="Phone Number"
                className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
            </div>
  
            {/* Message Field */}
            <div>
              <label className="text-gray-700">Message</label>
              <textarea
                rows="4"
                placeholder="Write your message..."
                className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
              ></textarea>
            </div>
  
            {/* Submit Button */}
            <div className="text-center">
              <button
                type="submit"
                className="bg-blue-600 hover:bg-blue-700 text-white px-6 py-3 rounded-lg font-semibold"
              >
                Get in touch
              </button>
            </div>
          </form>
        </div>
      </div>
    );
  }
