import WorldMap from "../assets/WorldMap.png";

export default function ContactSection() {
  return (
    <div className="relative container mx-auto px-6 py-16 mt-20 bg-white">
      {/* Left Side - Text and Socials */}
      <div className="flex flex-col md:flex-row items-center px-7">
        <div className="md:w-1/2 space-y-6 relative z-10">
          {/* Profile Image */}
          <div className="w-14 h-14 rounded-full bg-gray-200 flex items-center justify-center">
            <img
              src="https://i.pravatar.cc/50"
              alt="Profile"
              className="rounded-full"
            />
          </div>

          <h2 className="text-3xl font-bold text-gray-900">Let’s Collaborate</h2>
          <p className="text-gray-600 text-lg">
            Lorem Ipsum is simply dummy text of the <br /> printing.
          </p>

          {/* Social Icons */}
          <div className="flex space-x-4">
            <div className="w-10 h-10 flex items-center justify-center rounded-full bg-gray-100 hover:bg-gray-200 cursor-pointer">
              F
            </div>
            <div className="w-10 h-10 flex items-center justify-center rounded-full bg-gray-100 hover:bg-gray-200 cursor-pointer">
              I
            </div>
            <div className="w-10 h-10 flex items-center justify-center rounded-full bg-gray-100 hover:bg-gray-200 cursor-pointer">
              T
            </div>
            <div className="w-10 h-10 flex items-center justify-center rounded-full bg-gray-100 hover:bg-gray-200 cursor-pointer">
              L
            </div>
          </div>
        </div>

        {/* Right Side - Map and Contact */}
        <div className="md:w-1/2 flex flex-col items-center mt-10 md:mt-0 relative z-10">
          <img src={WorldMap} alt="World Map" className="w-80" />

          {/* Contact Details */}
          <div className="mt-6 flex flex-col md:flex-row items-center space-y-4 md:space-y-0 md:space-x-8">
            {/* Phone */}
            <div className="flex items-center space-x-3">
              <div className="w-8 h-8 flex items-center justify-center rounded-full bg-gray-200">
                📞
              </div>
              <p className="text-gray-700 text-lg">+918887999997</p>
            </div>

            {/* Address */}
            <div className="flex items-center space-x-3 mt-10">
              <div className="w-8 h-8 flex items-center justify-center rounded-full bg-gray-200">
                📍
              </div>
              <p className="text-gray-700 text-lg text-center md:text-left">
                NO. 34 1st Floor, Venkatappa Road, Tasker Town, Off Queens Road, Bengaluru - 560051
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
