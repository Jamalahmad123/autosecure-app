import { FaCheck } from "react-icons/fa";
import Wrapper from "./ui/Wrapper";
import { logo } from "../assets/images";
import { styles } from "../Styles";

const AutosecureEcosystem = () => {
  const ecosystem = [
    "High-end web platform for integrating all autosecure services",
    "Software for the maximum simplification of business processes",
    "Cloud-based user account",
    "Considerable reduction of e-mail correspondence, telephone calls or search effort",
    "Centralized provision of information and vehicle documentation",
    "Maximum transparency and simplification of vehicle search processes",
  ];

  const experties = [
    "10+ years of know-how",
    "Leading in the development of software and future-oriented technologies",
    "Highly qualified staff",
    "Regular training and further education",
    "24/7 monitoring & service control center",
    "State-of-the-art video technology & IoT",
    "Interfaces for customer-specific ERP systems",
    "Specialized in leasing and financing models as well as insurance protection",
    "Data protection security",
    "Certified HIKVISION Platinum Partner",
    "Approval as a security company according to § 34a GewO",
  ];

  return (
    <section className="py-14 bg-clrLightGray">
      <Wrapper
        className={`${styles.flexBtw} gap-6 flex-col lg:flex-row items-stretch px-4`}
      >
        <div className="card bg-white">
          <div className="card-body items-start justify-start">
            <div className="flex flex-col items-start justify-start gap-4">
              <img src={logo} alt="logo" className="w-36" />
              <h2 className={`${styles.headingSecondary} text-clrPrimary`}>
                Eco system
              </h2>
            </div>
            <div className="mt-10">
              {ecosystem.map((text, i) => (
                <li
                  className="flex items-start border-b text-clrPrimary border-gray-200 p-3 gap-2 last:border-0"
                  key={i}
                >
                  <FaCheck className="min-w-[25px]" />
                  <p>{text}</p>
                </li>
              ))}
            </div>
          </div>
        </div>
        <div className="card bg-white">
          <div className="card-body items-start justify-start">
            <div className="flex flex-col items-start justify-start gap-4">
              <img src={logo} alt="logo" className="w-36" />
              <h2 className={`${styles.headingSecondary} text-clrPrimary`}>
                expertise
              </h2>
            </div>
            <div className="mt-10">
              {experties.map((text, i) => (
                <li
                  className="flex items-start justify-start text-clrPrimary border-b border-gray-100 p-3 gap-2 last:border-0"
                  key={i}
                >
                  <FaCheck className="text-clrPrimary min-w-[25px]" />
                  <p>{text}</p>
                </li>
              ))}
            </div>
          </div>
        </div>
      </Wrapper>
    </section>
  );
};

export default AutosecureEcosystem;
