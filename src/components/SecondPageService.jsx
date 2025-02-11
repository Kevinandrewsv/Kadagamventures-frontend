import CoverServicePage from "../assets/CoverServicePage.png";

export default function ServiceHeroSection() {
  return (
    <div
      className="relative w-full h-[80vh] md:h-screen bg-cover bg-center flex items-center justify-center px-4"
      style={{ backgroundImage: `url(${CoverServicePage})` }}
    >
      {/* Dark Overlay for Better Readability */}
      <div className="absolute inset-0 bg-opacity-50"></div>

      {/* Content */}
      <div className="relative text-center text-white px-6">
        <h1 className="text-3xl sm:text-4xl md:text-6xl font-bold leading-tight">
        Kadagam Ventures: More Than Just a Name
        </h1>
        <p className="mt-4 text-base sm:text-lg md:text-xl max-w-2xl mx-auto">
          Offering free education to those in need, and protecting the sacred cow, 
          we can contribute to a more harmonious world.
        </p>
        <button className="mt-6 px-5 py-3 bg-blue-600 hover:bg-blue-700 text-white text-base sm:text-lg font-semibold rounded-lg shadow-lg transition duration-300">
          Learn More
        </button>
      </div>
    </div>
  );
}
