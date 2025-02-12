
import SecondPageService from "../components/SecondPageService";
import FounderSection from "../components/FounderSection";
import HappyClients from "../components/HappyClients";
import NewsLetter from "../components/NewsLetter";
import InfoCardSection from "../components/InfoCardSection";

const AboutUs = () => {
  return (
    <div>
   
      <SecondPageService />
      {/* Other Sections */}
      <FounderSection />
      <InfoCardSection />
      <HappyClients />
      <NewsLetter />
    </div>
  );
};

export default AboutUs;