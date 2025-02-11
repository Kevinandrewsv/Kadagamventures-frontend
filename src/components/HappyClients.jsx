import BellAngle from "../assets/BellAngle.png";

export default function StatsSection() {
  return (
    <div className="bg-sky-600 text-white py-12 relative">
      
      {/* Decorative Elements */}
      <div className="absolute top-2 right-2 md:top-0 md:right-0 transform md:-translate-y-4 md:translate-x-4">
        <img src={BellAngle} alt="Lamp Decoration" className="w-10 sm:w-12 md:w-16" />
      </div>

      {/* Stats Container */}
      <div className="container mx-auto px-6">
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-8 sm:gap-12 text-center">
          
          {/* Happy Clients */}
          <div>
            <h2 className="text-3xl sm:text-4xl font-bold">6</h2>
            <p className="text-base sm:text-lg">Happy Clients</p>
          </div>

          {/* Completed Projects */}
          <div>
            <h2 className="text-3xl sm:text-4xl font-bold">11</h2>
            <p className="text-base sm:text-lg">Completed Projects</p>
          </div>

          {/* Transactions */}
          <div>
            <h2 className="text-3xl sm:text-4xl font-bold">7M</h2>
            <p className="text-base sm:text-lg">Transactions</p>
          </div>

          {/* Customers */}
          <div>
            <h2 className="text-3xl sm:text-4xl font-bold">6000+</h2>
            <p className="text-base sm:text-lg">Customers</p>
          </div>

        </div>
      </div>
    </div>
  );
}
