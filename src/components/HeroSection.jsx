import { useState, useEffect } from "react";
import building1 from "../assets/building1.png";
import building2 from "../assets/building2.jpg";
import building3 from "../assets/building3.jpg";
import building4 from "../assets/building4.jpg";
import eventIcon from "../assets/NithyaEvents.png";
import ticketIcon from "../assets/NithyaTickets.png";
import foundationIcon from "../assets/KadagamFoundation.png";

export default function HeroSection() {
  const slides = [
    { image: building1, text: "KADAGAM VENTURES" },
    { image: building2, text: "NITHYA TICKETS" },
    { image: building3, text: "NITHYA EVENTS" },
    { image: building4, text: "KADAGAM FOUNDATION" },
  ];

  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % slides.length);
    }, 5000);
    return () => clearInterval(interval);
  }, []);

  return (
    <section className="relative w-full min-h-screen flex flex-col">
      {/* Background Image Section */}
      <div className="relative w-full h-[75vh] md:h-[90vh] lg:h-screen flex justify-center items-center overflow-hidden">
        {slides.map((slide, index) => (
          <img
            key={index}
            src={slide.image}
            alt={`Slide ${index + 1}`}
            className={`absolute w-full h-full object-cover transition-opacity duration-1000 ${
              index === currentIndex ? "opacity-100" : "opacity-0"
            }`}
          />
        ))}
        <div className="absolute inset-0 bg-opacity-50 flex flex-col justify-center items-center text-center px-4 sm:px-6">
          {/* Dynamic Heading */}
          <div className="flex items-center justify-center py-4 sm:py-6">
            <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold text-white transition-opacity duration-1000">
              {slides[currentIndex].text.split(" ").map((word, i) => (
                <span
                  key={i}
                  className={i === 0 ? "text-red-500" : "text-blue-500"}
                >
                  {word}{" "}
                </span>
              ))}
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
          {
            icon: eventIcon,
            title: "Nithya Event",
            description: "Events Made Easy",
            link: "/nithya-events",
          },
          {
            icon: ticketIcon,
            title: "Nithya Tickets",
            description: "Tickets Made Easy",
            link: "https://nithyatickets.com/",
          },
          {
            icon: foundationIcon,
            title: "Kadagam Foundation",
            description: "Trust for People",
            link: "https://kadagamfoundation.org/",
          },
        ].map((item, index) => (
          <a
            key={index}
            href={item.link}
            target="_blank"
            rel="noopener noreferrer"
            className="bg-white shadow-md p-4 rounded-lg flex items-center space-x-3 w-full max-w-[320px] sm:max-w-[280px] hover:shadow-lg transition"
          >
            <img src={item.icon} alt={item.title} className="w-10 h-10 sm:w-12 sm:h-12" />
            <div>
              <h3 className="text-base sm:text-lg font-semibold">{item.title}</h3>
              <p className="text-gray-600 text-xs sm:text-sm">{item.description}</p>
            </div>
          </a>
        ))}
      </div>
    </section>
  );
}
