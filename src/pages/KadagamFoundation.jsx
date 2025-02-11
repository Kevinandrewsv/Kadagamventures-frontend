import ProductTickets  from "../assets/farmerFoundation.jpg"
import Kadagam from "../assets/kadagam.png";

// Features Section Component
const FeaturesSection = () => {
  return (
    <div className="w-full bg-blue-50 py-16 px-6 md:px-10">
      <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-8">
        <div className="max-w-sm mx-auto md:mx-0 text-center md:text-left">
          <h4 className="text-blue-600 font-semibold">Feature</h4>
          <h2 className="text-3xl font-bold mt-4">
          Kadagam Foundation – Transforming <br className="hidden md:block" /> Lives with Care<span className="text-gray-800">.</span>
          </h2>
          <p className="text-gray-600 mt-4">
          At Kadagam Foundation, we are committed to transforming lives through education, food assistance, and community development. We provide education and essential learning resources to orphaned and underprivileged students, ensuring they have a brighter future. In addition, we support struggling families by offering nutritious meals, helping them overcome financial hardships. Our mission is to create a society where no child is deprived of education and no family goes hungry. <br /> <br />
          Beyond education and food assistance, Kadagam Foundation takes pride in building temples, preserving cultural heritage, and promoting spiritual well-being. We also empower farmers by offering free training on modern and sustainable farming techniques, helping them improve productivity and secure a stable livelihood. Through our initiatives, we strive to uplift communities, foster self-sufficiency, and create a positive impact on society.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
          {[
            { icon: "📩", title: " Educating Underprivileged Children", description: "Providing free education and essential support to orphaned children, shaping a better future.." },
            { icon: "📊", title: "Feeding the Hungry", description: "Distributing nutritious meals to struggling families, ensuring no one goes to bed hungry." },
            { icon: "⚡", title: "Building Temples", description: "Constructing sacred temples to preserve traditions and create spaces for devotion.." },
            { icon: "💬", title: "Empowering Farmers", description: "Supporting farmers with modern techniques and resources for a sustainable future.." }
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
          Manage your Foundation
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
const KadagamFoundationPage = () => {
  return (
    <div className="w-full">
      {/* Hero Section */}
      <div className="relative w-full min-h-screen flex items-center justify-center">
        <img
          src={ProductTickets}
          alt="Background"
          className="absolute inset-0 w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-opacity-50 flex flex-col items-center justify-center text-white px-6 text-center">
          <h1 className="text-4xl md:text-5xl font-bold">Kadagam Foundation</h1>
          <p className="mt-4 max-w-lg">
          Our commitment to social responsibility. Kadagam Foundation works towards community development, education, and empowerment initiatives, creating meaningful change and a brighter future for all
          </p>
          
        </div>
      </div>

      {/* About Kadagam Foundation Section */}
      <div className="w-full min-h-screen flex flex-col md:flex-row items-center justify-between px-6 md:px-8 py-12 max-w-6xl mx-auto">
        <div className="md:w-1/2 text-center md:text-left">
          <h2 className="text-2xl font-bold mb-4">About Kadagam Foundation</h2>
          <p className="text-gray-600 mb-4">
          Our commitment to social responsibility. Kadagam Foundation works towards community development, education, and empowerment initiatives, creating meaningful change and a brighter future for all
          </p>
          <p className="text-gray-600 mb-6">
          The social responsibility arm of Kadagam Ventures, committed to education, community welfare, and sustainable development. Through strategic initiatives and philanthropic efforts, Kadagam Foundation drives meaningful change, empowering communities and fostering a better future.
          </p>
          <button className="px-6 py-3 bg-blue-600 text-white rounded-md hover:bg-blue-700 transition">
            Explore Kadagam Foundation
          </button>
        </div>

        <div className="md:w-1/2 flex justify-center mt-6 md:mt-0">
          <img src={Kadagam} alt="Kadagam Foundation" className="max-w-full h-auto rounded-lg" />
        </div>
      </div>

      {/* Features Section */}
      <FeaturesSection />

      {/* Management Section (Moved Below Features) */}
      <ManagementSection />
    </div>
  );
};

export default KadagamFoundationPage;
