import company1 from "../assets/company1.png";
import company2 from "../assets/company2.png";
import company3 from "../assets/company3.png";
import company4 from "../assets/company4.png";

const CompanyLogo = () => {
    return (
      <div className="mt-8 text-center">
        <h3 className="text-lg font-semibold pt-5">You will be in good Company</h3>
        <div className="flex justify-around mt-4">
          <img src={company1} alt="Beneoshop" className="h-20" />
          <img src={company2} alt="Caspio" className="h-20" />
          <img src={company3} alt="Hyperbru" className="h-20" />
          <img src={company4} alt="Leo Trippi" className="h-20" />
        </div>
      </div>
      
    );
  };

export default CompanyLogo;
  