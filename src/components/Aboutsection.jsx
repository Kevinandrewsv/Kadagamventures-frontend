
import aboutHand from "../assets/abouthand.png";

const AboutSection = () => {
  return (
    <div className="relative z-10 px-6 py-12 md:px-20 lg:px-32 flex flex-col md:flex-row items-center bg-white mt-12">
      <div className="md:w-1/2 space-y-4">
        <p className="text-blue-600 font-semibold">About</p>
        <h2 className="text-2xl font-bold text-gray-900">
          Kadagam Ventures Private Limited
        </h2>
        <p className="text-gray-600">
          At Kadagam Foundation, the generosity of our donors makes all our efforts possible.
          Here’s what some of our supporters have to say about their experience.
        </p>
        <button className="bg-blue-600 text-white px-4 py-2 rounded-md shadow-md hover:bg-blue-700 transition duration-300">
          Learn More
        </button>
      </div>
      <div className="md:w-1/2 mt-8 md:mt-0 flex justify-center">
        <img
          src={aboutHand}
          alt="Helping hands illustration representing support and generosity"
          className="w-full max-w-md"
        />
      </div>
    </div>
  );
};

const AboutPage = () => {
  return (
    <div className="container mx-auto px-4">
      <AboutSection />
    </div>
  );
};

export default AboutPage;
