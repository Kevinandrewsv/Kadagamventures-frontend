import { useState, useEffect } from "react";
import building from "../assets/building.png";

export default function HeroSection() {
  const images = [building];
  const [currentIndex, setCurrentIndex] = useState(0);

  // Auto-slide every 5 seconds
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
    }, 5000);
    return () => clearInterval(interval);
  }, [images.length]);

  return (
    <section className="relative w-full min-h-screen flex flex-col">
      {/* Background Image Section */}
      <div className="relative w-full h-[75vh] md:h-[90vh] lg:h-screen flex justify-center items-center">
        <img
          src={images[currentIndex]}
          alt="Hero Background"
          className="w-full h-full object-cover md:object-contain"
        />
        <div className="absolute inset-0  bg-opacity-50 flex flex-col justify-center items-center text-center px-4 sm:px-6">
          {/* Kadagam Ventures Heading */}
          <div className="flex items-center justify-center py-4 sm:py-6">
            <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold text-white">
              <span className="text-red-500">Kadagam</span>{" "}
              <span className="text-blue-600">Ventures</span>
            </h1>
          </div>

          {/* Description */}
          <p className="text-gray-200 mt-3 sm:mt-4 max-w-lg sm:max-w-2xl text-sm sm:text-base">
            Offering free education to those in need and protecting the sacred cow, 
            we contribute to a more harmonious society.
          </p>

          {/* Button */}
          <button className="mt-4 sm:mt-6 bg-blue-500 hover:bg-blue-600 text-white font-semibold py-2 px-6 rounded-lg text-sm sm:text-base">
            Learn More
          </button>
        </div>
      </div>

      {/* Info Cards Section */}
      <div className="w-full bg-gray-100 py-6 px-4 flex flex-wrap justify-center gap-4 sm:gap-6">
        {[
          { icon: "📅", title: "Nithya Event", description: "Events Made Easy" },
          { icon: "🎟️", title: "Nithya Tickets", description: "Tickets Made Easy" },
          { icon: "🏛️", title: "Kadagam Foundation", description: "Trust for People" }
        ].map((item, index) => (
          <div key={index} className="bg-white shadow-md p-4 rounded-lg flex items-center space-x-3 w-full max-w-[320px] sm:max-w-[280px]">
            <div className="text-2xl sm:text-3xl">{item.icon}</div>
            <div>
              <h3 className="text-base sm:text-lg font-semibold">{item.title}</h3>
              <p className="text-gray-600 text-xs sm:text-sm">{item.description}</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
