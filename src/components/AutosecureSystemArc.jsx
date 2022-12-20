import { FaCheck } from "react-icons/fa";
import Wrapper from "./ui/Wrapper";
import { styles } from "../Styles";

const AutosecureSystemArc = ({
  title1,
  titleOneDesc,
  title2,
  titleTwoDesc,
  desc1,
  desc2,
  feature1,
  feature2,
  isFeature,
}) => {
  return (
    <section className="py-14 bg-clrVeryLightGray">
      <Wrapper
        className={`${styles.flexBtw} gap-12 flex-col lg:flex-row items-stretch px-4`}
      >
        <div className={`card flex-1`}>
          <div className={`card-body p-0 items-start justify-start`}>
            <div className="flex flex-col items-start justify-start gap-4">
              <h2
                className={`text-2xl md:text-3xl lg:text-4xl text-clrPrimary font-AllianceBold font-bold`}
              >
                {title1}
              </h2>
              <p className="text-lg md:text-xl text-clrPrimary">
                {titleOneDesc}
              </p>
              {isFeature && (
                <p className="text-lg md:text-xl text-clrPrimary font-bold">
                  {feature1}
                </p>
              )}
            </div>
            <ul className="space-y-4 mt-10">
              {desc1.map((text, i) => (
                <li
                  className={`flex items-start text-clrPrimary gap-2`}
                  key={i}
                >
                  <FaCheck className="min-w-[25px]" />
                  <p>{text}</p>
                </li>
              ))}
            </ul>
          </div>
        </div>
        <div className={`card flex-1`}>
          <div className={`card-body p-0 items-start justify-start`}>
            <div className="flex flex-col items-start justify-start gap-4">
              <h2
                className={`text-2xl md:text-3xl lg:text-4xl text-clrPrimary font-AllianceBold font-bold`}
              >
                {title2}
              </h2>
              <p className="text-lg md:text-xl text-clrPrimary">
                {titleTwoDesc}
              </p>
              {isFeature && (
                <p className="text-lg md:text-xl text-clrPrimary font-bold">
                  {feature2}
                </p>
              )}
            </div>
            <ul className="space-y-4 mt-10">
              {desc2.map((text, i) => (
                <li
                  className={`flex items-start text-clrPrimary gap-2`}
                  key={i}
                >
                  <FaCheck className="text-clrPrimary min-w-[25px]" />
                  <p>{text}</p>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </Wrapper>
    </section>
  );
};

export default AutosecureSystemArc;
