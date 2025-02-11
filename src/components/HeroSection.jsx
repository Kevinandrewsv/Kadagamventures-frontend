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
    { 
      image: building1, 
      text: <><span className="text-red-500">KADAGAM</span> <span className="text-blue-500">VENTURES</span></>,
      description: "Innovating business solutions for a better tomorrow." 
    },
    { 
      image: building2, 
      text: "NITHYA TICKETS", 
      description: "Your one-stop destination for seamless ticket bookings." 
    },
    { 
      image: building3, 
      text: "NITHYA EVENTS", 
      description: "Creating memorable experiences through world-class events." 
    },
    { 
      image: building4, 
      text: "KADAGAM FOUNDATION", 
      description: "Empowering communities through education and social initiatives." 
    },
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
              index === currentIndex ? "opacity-100 scale-105" : "opacity-0"
            }`}
          />
        ))}
        
        {/* Overlay Gradient */}
        <div className="absolute inset-0 bg-gradient-to-b from-black/50 via-black/30 to-black/10 flex flex-col justify-center items-center text-center px-4 sm:px-6">
          
          {/* Slide Title */}
          <h1 className="text-4xl sm:text-5xl md:text-6xl font-extrabold text-white transition-all duration-1000">
            {slides[currentIndex].text}
          </h1>

          {/* Slide Description */}
          <p className="text-gray-300 mt-4 max-w-xl text-lg sm:text-xl transition-opacity duration-1000">
            {slides[currentIndex].description}
          </p>

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
            className="bg-white shadow-md p-6 rounded-lg flex items-center space-x-4 w-full max-w-[320px] sm:max-w-[280px] hover:shadow-xl transition-transform transform hover:scale-105"
          >
            <img src={item.icon} alt={item.title} className="w-12 h-12" />
            <div>
              <h3 className="text-lg font-semibold">{item.title}</h3>
              <p className="text-gray-600 text-sm">{item.description}</p>
            </div>
          </a>
        ))}
      </div>
    </section>
  );
}
