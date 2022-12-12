import Hero from "./Hero";
import AutosecureFeaturesList from "../../components/AutosecureFeaturesList";
import AutosecureEcosystem from "../../components/AutosecureEcosystem";
import {
  deepLearningAndQualityImgs,
  features,
  savingsAndExpertise,
  systemTakeoverAndSystemArc,
} from "../../data/constantData";
import { poster, prinzipVideoPoster } from "../../assets/images";
import Save from "../../components/Save";
import AutosecureSlider from "../../components/AutosecureSlider";
import AutosecureProcess from "../../components/AutosecureProcess";
import About from "../../components/About";
import MeetingVideo from "../../components/ui/MeetingVideo";
import { styles } from "../../Styles";
import AutosecureSystemArc from "../../components/AutosecureSystemArc";
import AutosecureFullSlider from "../../components/AutosecureFullSlider";
import AutosecureQoute from "../../components/ui/AutosecureQoute";
import AutosecureApplications from "../../components/AutosecureApplications";

import {
  autosecure_slide_theif_1,
  autosecure_slide_theif_2,
  autosecure_slide_theif_3,
  autosecure_slide_repair_1,
  autosecure_slide_repair_2,
  autosecure_slide_repair_3,
} from "../../assets/images";

const benefits = [
  "Precise real-time indoor and outdoor localization of goods and goods for profitable business applications with innovative analyses.",
  `Examples of use cases are "Find My Car Terminals", vehicle tagging, digital vehicle files/order folders.`,
  "Automated vehicle localization and transfer of the respective location to within a few meters with and without license plates.",
  "Transfer of the information to the customer's own ERP systems via the innovative and open-interface autosecure middleware for real process intelligence and automated downtime recording and control.",
  "Significant reduction of search and assignment costs.",
];

const slideImages = [
  autosecure_slide_theif_1,
  autosecure_slide_theif_2,
  autosecure_slide_repair_1,
  autosecure_slide_repair_2,
  autosecure_slide_theif_3,
  autosecure_slide_repair_3,
];

const SecuritySolutions = () => {
  const [safe] = features.filter((item) => item.title === "safe");

  return (
    <>
      <Hero {...safe} />
      <AutosecureFeaturesList benefits={benefits}>
        <div className="flex items-stretch gap-6">
          <div className="group card w-80 shadow-xl overflow-hidden cursor-pointer">
            <figure>
              <img
                src={prinzipVideoPoster}
                alt="prinzip-video-poster"
                className="w-full h-full group-hover:scale-110 smooth"
              />
            </figure>
            <div className="card-body bg-white">
              <h3 className={`text-2xl font-light text-clrPrimary`}>
                Get to know our SAVE principle.
              </h3>
            </div>
          </div>
          <div className="group card w-80 shadow-xl overflow-hidden cursor-pointer">
            <figure>
              <img
                src={poster}
                alt="prinzip-video-poster"
                className="w-full h-full group-hover:scale-110 smooth"
              />
            </figure>
            <div className="card-body bg-white">
              <h3 className={`text-2xl font-light text-clrPrimary`}>
                Get to know our SAVE principle.
              </h3>
            </div>
          </div>
        </div>
      </AutosecureFeaturesList>
      <AutosecureEcosystem {...savingsAndExpertise} hasLogo />
      <Save />
      <AutosecureSlider />
      <AutosecureProcess />
      <MeetingVideo>
        <header>
          <h2
            className={`${styles.headingSecondary} text-clrPrimary mb-8 capitalize`}
          >
            Our technology.
          </h2>
          <p className="text-clrPrimary text-lg md:text-2xl md:max-w-3xl mb-8">
            With our modern artificial intelligence technology, we are able to
            work with the lowest error alarm rate on the market. In addition,
            our hardware offers optimal results even in poor lighting
            conditions. This enables us to achieve the highest service quality
            for you.
          </p>
        </header>
      </MeetingVideo>
      <AutosecureSystemArc {...systemTakeoverAndSystemArc} />
      <AutosecureSystemArc {...deepLearningAndQualityImgs} isFeature />
      <AutosecureFullSlider slideImages={slideImages} />
      <About />
      <AutosecureApplications />
      {/* <AutosecureQoute /> */}
    </>
  );
};

export default SecuritySolutions;
