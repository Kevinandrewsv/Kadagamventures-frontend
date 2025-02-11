import PropTypes from "prop-types";

const Card = ({ title, description, buttonText, bgColor, textColor, isHighlighted }) => {
  return (
    <div className={`p-8 rounded-2xl shadow-lg relative ${bgColor} h-[400px] flex flex-col justify-between`}>
      {/* Title */}
      <div className="text-center">
        <h2 className={`text-xl font-bold ${textColor} leading-snug`}>{title}</h2>
        <p className={`mt-4 text-sm ${textColor} leading-relaxed text-center`}>{description}</p>
      </div>

      {/* Button */}
      <div className="flex justify-center">
        <button className="mt-4 px-6 py-3 bg-white text-black rounded-lg shadow-md text-sm font-semibold">
          {buttonText}
        </button>
      </div>

      {/* Bell Icon */}
      {isHighlighted && (
        <span className="absolute -top-4 -right-4 text-red-500 text-4xl">
          🔔
        </span>
      )}
    </div>
  );
};

// ✅ Prop Types
Card.propTypes = {
  title: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
  buttonText: PropTypes.string.isRequired,
  bgColor: PropTypes.string.isRequired,
  textColor: PropTypes.string.isRequired,
  isHighlighted: PropTypes.bool,
};

// ✅ Default Props
Card.defaultProps = {
  isHighlighted: false,
};

const App = () => {
  return (
    <div className="min-h-screen flex items-center justify-center p-6 md:p-12 bg-gray-50">
      <div className="max-w-[1280px] mx-auto w-full">
        {/* Section 1 */}
        <section className="py-6">
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-12">
            <Card
              title="Our Vision."
              description="We aim to be a global leader in technological innovation.
Our focus is on driving sustainable economic and social growth.
We empower businesses through cutting-edge digital solutions.
Our vision includes thriving communities and digital excellence.
We support education, agriculture, and social welfare initiatives.
Through innovation, we create lasting social and economic impact.
Our goal is a smarter, more sustainable future for all.."
              buttonText="View More"
              bgColor="bg-gray-100"
              textColor="text-black"
            />
            <Card
              title="Our Mission."
              description="We revolutionize IT solutions with state-of-the-art web, mobile, and enterprise applications.
Our expertise includes building robust websites, web apps, and e-commerce platforms.
We help businesses expand their digital presence and optimize online transactions.
Beyond technology, we empower communities through education and charity.
We support sustainable agriculture to enhance productivity and food security.
Our initiatives drive social impact, uplifting communities and fostering growth.
Together, we shape a smarter, more sustainable digital future.."
              buttonText="View More"
              bgColor="bg-blue-600"
              textColor="text-white"
              isHighlighted
            />
          </div>
        </section>
      </div>
    </div>
  );
};

export default App;
