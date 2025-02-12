import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion"; // Import Framer Motion
import building1 from "../assets/building1.png";
import eventIcon from "../assets/NithyaEvents.png";
import ticketIcon from "../assets/NithyaTickets.png";
import foundationIcon from "../assets/KadagamFoundation.png";

export default function HeroSection() {
  const slides = [
    { 
      image: building1, 
      text: <><span className="text-red-500">KADAGAM</span> <span className="text-blue-500">VENTURES</span></>,
      description: "Innovating business solutions for a better tomorrow." 
    }
  ];

  const [currentIndex, setCurrentIndex] = useState(0);
  const [activeCard, setActiveCard] = useState(0);

  useEffect(() => {
    const slideInterval = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % slides.length);
    }, 5000);
    return () => clearInterval(slideInterval);
  }, []);

  // Info Cards Data
  const cards = [
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
  ];

  // Automatically change active card every 3 seconds
  useEffect(() => {
    const cardInterval = setInterval(() => {
      setActiveCard((prev) => (prev + 1) % cards.length);
    }, 3000); // 3 seconds per card
    return () => clearInterval(cardInterval);
  }, []);

  return (
    <section className="relative w-full min-h-screen flex flex-col">
      {/* Background Image Section */}
      <div className="relative w-full h-[75vh] md:h-[90vh] lg:h-screen flex justify-center items-center overflow-hidden">
        {slides.map((slide, index) => (
          <img
            key={index}
            src={slide.image}
            alt="Kadagam Ventures"
            className={`absolute w-full h-full object-cover transition-opacity duration-1000 ${
              index === currentIndex ? "opacity-100 scale-105" : "opacity-0"
            }`}
          />
        ))}

        {/* Overlay Gradient */}
        <div className="absolute inset-0 bg-gradient-to-b from-black/50 via-black/30 to-black/10 flex flex-col justify-center items-center text-center px-4 sm:px-6">
          {/* Slide Title */}
          <h1 className="text-2xl sm:text-5xl md:text-6xl font-extrabold text-white transition-all duration-1000">
            {slides[currentIndex].text}
          </h1>

          {/* Slide Description */}
          <p className="text-gray-100 mt-4 max-w-xl text-lg sm:text-xl transition-opacity duration-1000">
            {slides[currentIndex].description}
          </p>
        </div>
      </div>

      {/* Auto-Focusing Info Cards */}
      <div className="w-full bg-gray-100 py-6 px-4 flex justify-center">
        <div className="flex space-x-6">
          {cards.map((item, index) => (
            <motion.a
              key={index}
              href={item.link}
              target="_blank"
              rel="noopener noreferrer"
              initial={{ scale: 1, opacity: 0.6 }}
              animate={{
                scale: activeCard === index ? 1.2 : 1, // Zoom effect on active card
                opacity: activeCard === index ? 1 : 0.6,
              }}
              transition={{ duration: 0.5 }}
              className="bg-white shadow-md p-6 rounded-lg flex flex-col items-center space-y-4 w-[300px] sm:w-[280px] hover:shadow-xl"
            >
              <img src={item.icon} alt={item.title} className="w-16 h-16" />
              <div className="text-center">
                <h3 className="text-lg font-semibold">{item.title}</h3>
                <p className="text-gray-600 text-sm">{item.description}</p>
              </div>
            </motion.a>
          ))}
        </div>
      </div>
    </section>
  );
}
