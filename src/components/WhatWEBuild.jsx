import mobile from "../assets/mobile.png";
import tab from "../assets/tab.png";
import kadagam from "../assets/kadagam.png";
import eventIcon from "../assets/eventIcon.png";
import ticketsIcon from "../assets/ticketsIcon.png";
import kadagamIcon from "../assets/kadagamIcon.png";  

import PropTypes from "prop-types";

const FeatureCard = ({ icon, title, subtitle, description, highlight, imgSrc, reverse = false, imgSize = "w-full max-w-md" }) => {
  return (
    <div className={`flex flex-col md:flex-row ${reverse ? "md:flex-row-reverse" : ""} items-center gap-6`}>
      {/* Text Content */}
      <div className="md:w-1/2 space-y-4">
        <p className="text-blue-500 font-semibold">{highlight}</p>
        <div className="flex items-center gap-3">
          <div className="bg-blue-500 text-white w-12 h-12 flex items-center justify-center rounded-full text-xl">
            {icon}
          </div>
          <div>
            <p className="text-gray-900 font-semibold">{title}</p>
            <p className="text-gray-500 text-sm">{subtitle}</p>
          </div>
        </div>
        <h3 className="text-2xl font-bold text-gray-900">{description.title}</h3>
        <p className="text-gray-600 text-lg leading-relaxed">{description.text}</p>
      </div>

      {/* Image Content */}
      <div className="md:w-1/2 flex justify-center">
        <img src={imgSrc} alt={title} className={`${imgSize}`} />
      </div>
    </div>
  );
};

FeatureCard.propTypes = {
  icon: PropTypes.node.isRequired,
  title: PropTypes.string.isRequired,
  subtitle: PropTypes.string.isRequired,
  description: PropTypes.shape({
    title: PropTypes.string.isRequired,
    text: PropTypes.string.isRequired,
  }).isRequired,
  highlight: PropTypes.string.isRequired,
  imgSrc: PropTypes.string.isRequired,
  reverse: PropTypes.bool,
  imgSize: PropTypes.string,
};

const WhatWeBuild = () => {
  return (
    <div className="container mx-auto px-6 md:px-20 lg:px-32 text-left mt-12">
      {/* Title */}
      <div className="text-center">
        <h2 className="text-4xl font-bold text-gray-900">What We Build</h2>
      </div>

      {/* Event Section */}
      <section className="py-16">
        <FeatureCard
          icon={<img src={eventIcon} alt="Event Icon" className="w-6 h-6" />}
          title="Event Made Simple Now"
          subtitle="Make your event easy"
          highlight="Nithya Event"
          description={{
            title: "Make your Event Easy & Affordable.",
            text: "Excellence in event management, delivering meticulously planned and flawlessly executed events. From corporate conferences to large-scale entertainment productions, Nithya Events specializes in creating experiences that leave a lasting impact.",
          }}
          imgSrc={mobile}
        />
      </section>

      {/* Ticketing Section */}
      <section className="py-16">
        <FeatureCard
          icon={<img src={ticketsIcon} alt="Tickets Icon" className="w-6 h-6" />}
          title="Handle Ticketing Easily"
          subtitle="Nithya Ticket makes booking simple"
          highlight="Nithya Tickets"
          description={{
            title: "Seamless Ticketing Experience.",
            text: "A seamless and intuitive ticketing platform designed for efficiency, reliability, and convenience. Whether for entertainment, corporate events, or large-scale gatherings, Nithya Tickets ensures a hassle-free booking experience with secure transactions and unparalleled customer support.",
          }}
          imgSrc={tab}
          reverse
        />
      </section>

      {/* Kadagam Foundation Section */}
      <section className="py-16">
        <FeatureCard
          icon={<img src={kadagamIcon} alt="Kadagam Icon" className="w-5 h-5" />}
          title="We’re a Non-Profit & Charity Organization"
          subtitle="Kadagam Foundation supports communities"
          highlight="Kadagam Foundation"
          description={{
            title: "Bringing Hope & Positivity.",
            text: "The social responsibility arm of Kadagam Ventures, committed to education, community welfare, and sustainable development. Through strategic initiatives and philanthropic efforts, Kadagam Foundation drives meaningful change, empowering communities and fostering a better future.",
          }}
          imgSrc={kadagam}
        />
      </section>
    </div>
  );
};

export default WhatWeBuild;
