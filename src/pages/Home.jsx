import HeroSection from "../components/HeroSection";
import AboutSection from "../components/Aboutsection";
import WhatWEBuild from "../components/WhatWEBuild";
import InvestmentSection from "../components/InvesmentSection";
import NewsLetter from "../components/NewsLetter";


export default function Home() {
  return (
    <div>
     
      
        <HeroSection />
 

      {/* Other Sections */}
      <AboutSection />
      <WhatWEBuild />
      <InvestmentSection />
      <NewsLetter />
    </div>
  );
}