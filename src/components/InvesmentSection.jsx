import investment1 from "../assets/investment1.png";
import investment2 from "../assets/investment2.png";
import investment3 from "../assets/investment3.png";
import investment4 from "../assets/investment4.png";

const InvestmentSection = () => {
  return (
    <div className="bg-blue-50 py-16 px-6 md:px-16 lg:px-28 max-w-[1440px] mx-auto">
      <div className="flex flex-col md:flex-row items-center gap-12">
        {/* Left: Image Grid for All Screen Sizes */}
        <div className="flex-1">
          <div className="grid grid-cols-2 gap-4">
            <div className="space-y-4">
              <img src={investment1} alt="Investment 1" className="w-full h-[280px] object-cover rounded-xl shadow-md" />
              <img src={investment3} alt="Investment 3" className="w-full h-[280px] object-cover rounded-xl shadow-md" />
            </div>
            <img src={investment2} alt="Investment 2" className="w-full h-[580px] object-cover rounded-xl shadow-md" />
          </div>
        </div>

        {/* Right: Text Content */}
        <div className="flex-1 text-center md:text-left space-y-8">
          <p className="text-blue-600 text-sm font-semibold uppercase">Do you want</p>
          <h2 className="text-3xl font-extrabold text-gray-900 leading-snug">
            <span className="text-blue-600">Invest</span> in Kadagam Ventures<span className="text-gray-900">.</span>
          </h2>
          <p className="text-gray-700 leading-relaxed">
          Unlock the Future with Kadagam Ventures Pvt Ltd

At Kadagam Ventures Pvt Ltd, we are not just building businesses—we are shaping industries. With a strong foundation in technology, innovation, and customer-centric solutions, we provide unparalleled investment opportunities across our diverse ventures. <br /> <br />
            1. Scalable Business Models – High-growth potential across multiple sectors. <br />
            2. Proven Market Demand – Each venture addresses key industry needs. <br />
            3. Visionary Leadership – A dedicated team driving innovation and impact. <br />
            4. Sustainable & Profitable Growth – Focused on long-term success and returns. <br />
          </p>
        </div>
      </div>
    </div>
  );
};

export default InvestmentSection;
