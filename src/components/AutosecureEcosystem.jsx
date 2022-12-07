import { FaCheck } from "react-icons/fa";
import Wrapper from "./ui/Wrapper";
import { logo } from "../assets/images";
import { styles } from "../Styles";

const AutosecureEcosystem = ({
  title1,
  title2,
  desc1,
  desc2,
  isStyled,
  hasLogo,
}) => {
  return (
    <section className="py-14 bg-clrLightGray">
      <Wrapper
        className={`${styles.flexBtw} gap-6 flex-col lg:flex-row items-stretch px-4`}
      >
        <div className={`card ${isStyled && "bg-white"}`}>
          <div
            className={`card-body items-start justify-start ${
              !isStyled && "p-0"
            }`}
          >
            <div className="flex flex-col items-start justify-start gap-4">
              {hasLogo && (
                <img src={logo} alt="logo" className="w-36" loading="lazy" />
              )}
              <h2 className={`${styles.headingSecondary} text-clrPrimary`}>
                {title1}
              </h2>
            </div>
            <div className="mt-10">
              {desc1.map((text, i) => (
                <li
                  className={`flex items-start text-clrPrimary p-3 gap-2 ${
                    isStyled && "border-gray-200 border-b last:border-0"
                  }`}
                  key={i}
                >
                  <FaCheck className="min-w-[25px]" />
                  <p>{text}</p>
                </li>
              ))}
            </div>
          </div>
        </div>
        <div className={`card ${isStyled && "bg-white"}`}>
          <div
            className={`card-body items-start justify-start ${
              !isStyled && "p-0"
            }`}
          >
            <div className="flex flex-col items-start justify-start gap-4">
              {hasLogo && (
                <img src={logo} alt="logo" className="w-36" loading="lazy" />
              )}
              <h2 className={`${styles.headingSecondary} text-clrPrimary`}>
                {title2}
              </h2>
            </div>
            <div className="mt-10">
              {desc2.map((text, i) => (
                <li
                  className={`flex items-start text-clrPrimary p-3 gap-2 ${
                    isStyled && "border-gray-200 border-b last:border-0"
                  }`}
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
