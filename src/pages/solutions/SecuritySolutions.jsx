import { FaCheck } from "react-icons/fa";
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
  autosecure_save_scan_poster,
} from "../../assets/images";
import {
  autosecure_save_scan,
  autosecure_2021_Technologie,
} from "../../assets/videos";
import Wrapper from "../../components/ui/Wrapper";

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

const processContent = {
  id: 1,
  title: "Our Process",
  desc: "We advise you holistically for your security concept. Our technicians come to you on site - nationwide - and install the system. Our certified control center monitors your property. And in the event of an alarm, our operators intervene directly in the situation with an audio message and dispatch the local security forces.",
};

const technologyContent = {
  id: 1,
  title: "Our technology.",
  desc: "With our modern artificial intelligence technology, we are able to work with the lowest error alarm rate on the market. In addition, our hardware offers optimal results even in poor lighting conditions. This enables us to achieve the highest service quality for you.",
};

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
            <div className="card-body p-2 lg:p-8 bg-white">
              <h3
                className={`text-base md:text-2xl font-light text-clrPrimary`}
              >
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
            <div className="card-body p-2 lg:p-8 bg-white">
              <h3
                className={`text-base md:text-2xl font-light text-clrPrimary`}
              >
                Get to know our SAVE principle.
              </h3>
            </div>
          </div>
        </div>
      </AutosecureFeaturesList>
      <AutosecureEcosystem {...savingsAndExpertise} hasLogo />
      <Save />
      <MeetingVideo
        videoPath={autosecure_save_scan}
        poster={autosecure_save_scan_poster}
      />
      <AutosecureSlider />
      <AutosecureProcess {...processContent} />
      <AutosecureProcess {...technologyContent} hasSpace />
      <MeetingVideo
        videoPath={autosecure_2021_Technologie}
        poster={autosecure_slide_repair_3}
      />
      <AutosecureSystemArc {...systemTakeoverAndSystemArc} />
      <AutosecureSystemArc {...deepLearningAndQualityImgs} isFeature />
      <VisualWarnings />
      <AutosecureFullSlider slideImages={slideImages} />
      <About />
      <AutosecureApplications />
      {/* <AutosecureQoute /> */}
    </>
  );
};

const visualWarningsContent = {
  id: 1,
  mainTitle: "Visual and acoustic warning up to full automation.",
  subTitle1: "outdoor area",
  features1: [
    "After the alarm has been raised, the operator in the alarm center qualifies and assesses the situation.",
    `With visual and acoustic warnings, we signal the suspects on site "We're here!". To add another layer of protection, the optional two-way audio feature also allows on-site sounds to be heard.`,
  ],
  subTitle2: "Fenced area/indoor area",
  features2: [
    "Automated audio warning in restricted area.",
    "Thanks to the high protection against false alarms, our technology makes it possible to completely dispense with manual intervention in closed-off areas. The cameras detect moments of danger and a user-defined audio message is played immediately. In this way, we do not lose any time in the manual processing of crystal-clear factual situations. (This feature is optional and contains system components that are subject to a surcharge).",
  ],
};

const VisualWarnings = () => {
  const { mainTitle, subTitle1, subTitle2, features1, features2 } =
    visualWarningsContent;
  return (
    <>
      <Wrapper className="py-14 px-4">
        <div className="max-w-xl">
          <div className="flex flex-col items-start justify-start gap-4">
            <h2
              className={`text-2xl md:text-3xl lg:text-4xl text-clrPrimary font-AllianceBold font-bold`}
            >
              {mainTitle}
            </h2>
            <p className="text-lg md:text-xl text-clrPrimary">{subTitle1}</p>
          </div>
          <ul className="space-y-4 mt-10">
            {features1.map((text, i) => (
              <li className={`flex items-start text-clrPrimary gap-2`} key={i}>
                <FaCheck className="min-w-[25px]" />
                <p>{text}</p>
              </li>
            ))}
          </ul>
          <p className="text-lg md:text-xl text-clrPrimary my-6">{subTitle2}</p>
          <ul className="space-y-4">
            {features2.map((text, i) => (
              <li className={`flex items-start text-clrPrimary gap-2`} key={i}>
                <FaCheck className="min-w-[25px]" />
                <p>{text}</p>
              </li>
            ))}
          </ul>
        </div>
      </Wrapper>
    </>
  );
};

export default SecuritySolutions;