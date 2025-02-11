import Event from "../assets/Event.png";
import NithyaEvents from "../assets/NithyaEvents.png";

// Features Section Component
const FeaturesSection = () => {
  return (
    <div className="w-full bg-blue-50 py-16 px-6 md:px-10">
      <div className="max-w-9xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-8">
        <div className="max-w-sm mx-auto md:mx-0 text-center md:text-left">
          <h4 className="text-blue-600 font-semibold">Feature</h4>
          <h2 className="text-3xl font-bold mt-4">
          Complete Event Solutions <br className="hidden md:block" /> by Nithya Events<span className="text-gray-800">.</span>
          </h2>
          <p className="text-gray-600 mt-4">
          <b></b>

          Planning an event can be overwhelming, but with Nithya Events, you can leave the stress behind. We offer a comprehensive range of event services designed to make your occasion truly special. Whether you need skilled freelancers, talented artists, or Professional photographers, we have the perfect team to bring your vision to life. Our teleprompters ensure smooth speeches, while our flower and stage decorators create a breathtaking ambiance. From delicious catering services to dedicated volunteers, we handle every detail with precision and care. <br /> <br />
          At Nithya Events, we prioritize quality, creativity, and professionalism, ensuring that your event runs seamlessly. Our bouncers provide top-notch security, while our manpower providers guarantee smooth operations. Whether you are hosting a corporate event, wedding, private party, or grand celebration, we tailor our services to meet your specific needs. With our expertise and commitment to excellence, we transform your event into an unforgettable experience. Let’s make your dream event a reality!

          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
          {[
            { icon: "📩", title: "Customize Events", description: "Tailored solutions for weddings, corporate gatherings, and private celebrations, ensuring a unique and flawless experience." },
            { icon: "📊", title: "Manage Eventsts", description: "Nithya Events customizes every detail to match your vision, ensuring a seamless and unforgettable experience!."},
            { icon: "⚡", title: "Instant Events", description: "Nithya Events delivers quick and seamless event planning, handling everything from setup to execution—perfect for last-minute events!" },
            { icon: "💬", title: "Grow your Business", description: "Nithya Events specializes in rapid event execution, managing everything from venue setup to staffing, ensuring a flawless event in no time!." }
          ].map((feature, index) => (
            <div key={index} className="bg-white p-6 rounded-xl shadow-md">
              <div className="bg-blue-500 w-10 h-10 flex items-center justify-center text-white rounded-md mb-4">
                {feature.icon}
              </div>
              <h3 className="font-semibold text-lg">{feature.title}</h3>
              <p className="text-gray-600 mt-2">{feature.description}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

// Management Section Component
const ManagementSection = () => {
  return (
    <div className="w-full flex items-center justify-center py-16 px-6 bg-blue-500">
      <div className="bg-white p-10 rounded-xl shadow-lg w-full max-w-4xl text-center">
        <h1 className="text-3xl md:text-4xl font-bold text-blue-600">
          Manage your Event Is Easy Now
        </h1>
        <p className="mt-4 text-base text-gray-700">
          Offering free education to those in need, and protecting the
          sacred cow, we can contribute to a more harmonious world.
        </p>
        <button className="mt-6 px-6 py-3 bg-blue-600 text-white rounded-md hover:bg-blue-700 transition">
          Learn More
        </button>
      </div>
    </div>
  );
};

// Main Page Component
const NithyaEventPage = () => {
  return (
    <div className="w-full">
      {/* Hero Section */}
      <div className="relative w-full min-h-screen flex items-center justify-center">
        <img
          src={Event}
          alt="Background"
          className="absolute inset-0 w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-opacity-50 flex flex-col items-center justify-center text-white px-6 text-center">
          <h1 className="text-4xl md:text-5xl font-bold">Nithya Events</h1>
          <p className="mt-4 max-w-lg">
          Bringing events to life with unmatched precision and creativity. From corporate gatherings to grand celebrations, we handle everything from planning to execution, ensuring unforgettable experiences.
          </p>
          
        </div>
      </div>

      {/* About Nithya Tickets Section */}
      <div className="w-full min-h-screen flex flex-col md:flex-row items-center justify-between px-6 md:px-8 py-12 max-w-6xl mx-auto">
        <div className="md:w-1/2 text-center md:text-left">
          <h2 className="text-2xl font-bold mb-4">About Nithya Tickets</h2>
          <p className="text-gray-600 mb-4">
          Bringing events to life with unmatched precision and creativity. From corporate gatherings to grand celebrations, we handle everything from planning to execution, ensuring unforgettable experiences.
          </p>
          <p className="text-gray-600 mb-6">
          Excellence in event management, delivering meticulously planned and flawlessly executed events. From corporate conferences to large-scale entertainment productions, Nithya Events specializes in creating experiences that leave a lasting impact
          </p>
          <button className="px-6 py-3 bg-blue-600 text-white rounded-md hover:bg-blue-700 transition">
            Explore Nithya Tickets
          </button>
        </div>

        <div className="md:w-1/2 flex justify-center mt-6 md:mt-0">
          <img src={NithyaEvents} alt="Nithya Events" className="max-w-full h-auto rounded-lg" />
        </div>
      </div>

      {/* Features Section */}
      <FeaturesSection />

      {/* Management Section (Moved Below Features) */}
      <ManagementSection />
    </div>
  );
};

export default NithyaEventPage;
