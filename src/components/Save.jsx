import { FaCheck } from "react-icons/fa";
import { styles } from "../Styles";
import Wrapper from "./ui/Wrapper";
import MeetingVideo from "./ui/MeetingVideo";

const saveDetails = [
  {
    id: 1,
    title: "S",
    desc: "Software and camera setup",
    benefits: [
      "Analysis of the existing security concept",
      "Individual recommendations for optimization",
      "choice of technique",
      "Professional installation of the security system",
      "software setup",
    ],
  },
  {
    id: 2,
    title: "A",
    desc: "Software and camera setup",
    benefits: [
      "Analysis of the existing security concept",
      "Individual recommendations for optimization",
      "choice of technique",
      "Professional installation of the security system",
      "software setup",
    ],
  },
  {
    id: 3,
    title: "V",
    desc: "Software and camera setup",
    benefits: [
      "Analysis of the existing security concept",
      "Individual recommendations for optimization",
      "choice of technique",
      "Professional installation of the security system",
      "software setup",
    ],
  },
  {
    id: 4,
    title: "E",
    desc: "Software and camera setup",
    benefits: [
      "Analysis of the existing security concept",
      "Individual recommendations for optimization",
      "choice of technique",
      "Professional installation of the security system",
      "software setup",
    ],
  },
];

const Save = () => {
  return (
    <section className="py-14 bg-clrVeryLightGray">
      <Wrapper className="px-4 space-y-12">
        <header className="space-y-8">
          <h2 className={`${styles.headingPrimary} text-clrPrimary`}>
            Alarm & Monitoring Center.
          </h2>
          <p className="text-clrPrimary text-lg md:text-2xl md:max-w-3xl">
            With the support of artificial intelligence and machine learning
            algorithms and an individual 360° security concept from autosecure -
            we achieve 100% protection for your valuables.
          </p>
        </header>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-4 gap-1 place-items-center">
          {saveDetails.map((item) => (
            <div className="p-8 bg-white space-y-6" key={item.id}>
              <h1
                className={`text-clrPrimary text-[200px] font-bold font-AllianceBold text-center`}
              >
                {item.title}
              </h1>
              <p className="text-lg text-clrPrimary text-center">{item.desc}</p>
              <ul className="space-y-4">
                {item.benefits.map((benefit, i) => (
                  <li
                    className="flex items-start gap-2 text-clrPrimary"
                    key={i}
                  >
                    <FaCheck className="min-w-[20px]" />
                    {benefit}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </Wrapper>
    </section>
  );
};

export default Save;
