import FounderImage from "../assets/FounderImage.png";

export default function FounderSection() {
  return (
    <div className="container mx-auto px-6 md:px-12 py-12 md:py-16 flex flex-col md:flex-row items-center justify-center gap-12 md:gap-20 min-h-screen">
      
      {/* Left Side - Text Content */}
      <div className="flex-1 flex flex-col justify-center space-y-4 md:space-y-6 text-center md:text-left">
        <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-gray-900 leading-snug">
          <span className="text-blue-600">Naveen Kumar </span>, the Founder of  Kadagam Ventures.
        </h2>
        <p className="text-gray-600 text-base sm:text-lg leading-relaxed">
        <b>Mr. Naveen Kumar – A Visionary Leader</b> <br />
The Director of Kadagam Ventures Pvt. Ltd., is a trailblazer in the event management industry, driven by a passion for innovation and excellence. Under his leadership, Kadagam Ventures has introduced NithyaEvent and NithyaTickets, two revolutionary platforms that simplify event planning, rentals, and ticket booking. <br /> <br />

Beyond business, Mr. Naveen Kumar is the founder of Kadagam Foundation, a non-profit organization committed to community welfare and sustainable development. His dedication to education, social empowerment, and cultural preservation reflects his deep-rooted vision for a better society. <br /> <br />

His latest venture, NithyaEvent, is a cutting-edge all-in-one event rental platform, making it effortless for organizers to book essentials like sound systems, lighting, video production, photography, and mood boards.By combining technology with convenience, he continues to redefine how events are planned and executed. <br /> <br />

With a relentless drive for innovation and impact, Mr. Naveen Kumar is not just leading a company—he is shaping the future of event management and community service.
        </p>
        
      </div>

      {/* Right Side - Image */}
      <div className="flex-1 flex justify-center">
        <img
          src={FounderImage}
          alt="Founder"
          className="w-[280px] sm:w-[350px] md:w-[450px] h-auto object-cover rounded-lg shadow-lg"
        />
      </div>
      
    </div>
  );
}
