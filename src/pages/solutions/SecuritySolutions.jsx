import { lazy, Suspense, useEffect } from "react";
import { FaCheck } from "react-icons/fa";
import Wrapper from "../../components/ui/Wrapper";
import Spinner from "../../components/ui/Spinner";
// import Hero from "./Hero";
// import AutosecureFeaturesList from "../../components/AutosecureFeaturesList";
// import AutosecureEcosystem from "../../components/AutosecureEcosystem";
import {
  deepLearningAndQualityImgs,
  features,
  savingsAndExpertise,
  systemTakeoverAndSystemArc,
} from "../../data/constantData";

// import MeetingVideo from "../../components/ui/MeetingVideo";
// import Save from "../../components/Save";
// import AutosecureSlider from "../../components/AutosecureSlider";
// import AutosecureProcess from "../../components/AutosecureProcess";
// import About from "../../components/About";
// import AutosecureSystemArc from "../../components/AutosecureSystemArc";
// import AutosecureFullSlider from "../../components/AutosecureFullSlider";
// import AutosecureQoute from "../../components/ui/AutosecureQoute";
// import AutosecureApplications from "../../components/AutosecureApplications";
// import Hero from "./Hero";
// import AutosecureFeaturesList from "../../components/AutosecureFeaturesList";
// import AutosecureEcosystem from "../../components/AutosecureEcosystem";

// Lazy Imports
const Hero = lazy(() => import("./Hero"));
const AutosecureFeaturesList = lazy(() =>
  import("../../components/AutosecureFeaturesList")
);
const Save = lazy(() => import("../../components/Save"));
const AutosecureEcosystem = lazy(() =>
  import("../../components/AutosecureEcosystem")
);
const AutosecureApplications = lazy(() =>
  import("../../components/AutosecureApplications")
);
const AutosecureSystemArc = lazy(() =>
  import("../../components/AutosecureSystemArc")
);
const AutosecureFullSlider = lazy(() =>
  import("../../components/AutosecureFullSlider")
);
const AutosecureSlider = lazy(() =>
  import("../../components/AutosecureSlider")
);
const AutosecureProcess = lazy(() =>
  import("../../components/AutosecureProcess")
);
const About = lazy(() => import("../../components/About"));
const MeetingVideo = lazy(() => import("../../components/ui/MeetingVideo"));

import {
  poster,
  prinzipVideoPoster,
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
import TypeWriter from "../../components/ui/TypeWriter";
import { useTitle } from "../../hooks/customHooks";

const benefits = [
  "Aktive Videoüberwachung mit Live-Täteransprache zur Reduktion der Zugriffszeit auf ein Minimum für maximale Abschreckung und minimale Schadenaufwendungen",
  `Als Festinstallation mit intelligenten Kauf-, Finanzierungs- oder Leasingmodellen`,
  "Hauseigenes Alarmcenter zur Echtzeit-Bewertung und Live-Täteransprache",
  "Oder als Mobile Lösung kurzfristig und zeitbefristet einsetzbar auf Mietbasis",
  "Standortindividuelle 24/7 Security und nahtlose Integration in die individuellen Geschäftsabläufe",
  "Nahtlose Integration der autosecure Lösungen in hauseigene IT-Infrastruktur (ERP modeling)",
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
  title: "Unsere Technologie.",
  desc: "Mit unserer modernen Technologie aus der künstlichen Intelligenz sind wir in der Lage, mit der geringsten Fehleralarm-Quote am Markt zu arbeiten. Zusätzlich bietet unsere Hardware schon bei schlechten Lichtverhältnissen optimale Ergebnisse. Damit erzielen wir für Sie höchste Dienstleistungs-Qualität.",
};

const SecuritySolutions = () => {
  useTitle("Security Solutions – autosecure |  Safe.  Scan.  locate.");
  useEffect(() => {
    window.scrollTo({ top: 0, left: 0, behavior: "auto" });
  }, []);

  const [safe] = features.filter((item) => item.title === "secure");
  const labelsProcess = [
    "Holistic advice.",
    "Nationwide installations.",
    "Certified surveillance.",
  ];
  const labelsTech = [
    "Geringste Fehleralarm Quote am Markt.",
    "Modernste Hard- und Software.",
  ];

  return (
    <>
      <Suspense fallback={<Spinner />}>
        <Hero {...safe} />
        <AutosecureFeaturesList benefits={benefits}>
          {/* <div className="flex items-stretch gap-6">
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
          </div> */}
        </AutosecureFeaturesList>
        {/* <Save /> */}
        <MeetingVideo
          videoPath={autosecure_save_scan}
          poster={autosecure_save_scan_poster}
        />
        <AutosecureSlider />
        {/* <AutosecureProcess {...processContent}>
          <TypeWriter width={160} labels={labelsProcess} />
        </AutosecureProcess> */}
        <AutosecureProcess {...technologyContent} hasSpace>
          <TypeWriter width={140} labels={labelsTech} />
        </AutosecureProcess>
        <MeetingVideo
          videoPath={autosecure_2021_Technologie}
          poster={autosecure_slide_repair_3}
        />
        <AutosecureSystemArc {...systemTakeoverAndSystemArc} />
        <AutosecureSystemArc {...deepLearningAndQualityImgs} isFeature />
        <VisualWarnings />
        <AutosecureFullSlider slideImages={slideImages} />
        {/* <About link="/solutions/mobile-security" style="bg-black" /> */}
        <AutosecureApplications />
        <AutosecureEcosystem {...savingsAndExpertise} hasLogo />
      </Suspense>
    </>
  );
};

const visualWarningsContent = {
  id: 1,
  mainTitle: "Visuelle und akustische Warnung bis zur Vollautomatisierung.",
  subTitle1: "Freigelände",
  features1: [
    "Nach Alarmierung erfolgt durch den Operator in der Alarmzentrale eine Qualifizierung und Bewertung der Situation.",
    `Mit visuellen und akustischen Warnungen signalisieren wir den Verdächtigen vor Ort „Wir sind da!“. Um eine weitere Schutzebene hinzuzufügen, ermöglicht die optionale Zwei-Wege-Audio-Funktion ebenfalls, Geräusche vor Ort wahrzunehmen.`,
  ],
  subTitle2: "Umzäunte Gelände/Innenbereich",
  features2: [
    "Automatisierte Audio-Warnung im abgesperrten Bereich.",
    "Durch die hohe Fehlalarmsicherheit ermöglicht unsere Technologie, in abgesperrten Bereichen sogar vollständig auf manuelles Eingreifen zu verzichten. Die Kameras erkennen Gefahrenmomente und sofort wird eine benutzerdefinierte Audio-Nachricht eingespielt. Damit verlieren wir keine Zeit in der manuellen Bearbeitung von glasklaren Tatbestandssituationen. (Dieses Feature ist optional und enthält aufpreispflichtige Systemkomponenten).",
  ],
};

const VisualWarnings = () => {
  const { mainTitle, subTitle1, subTitle2, features1, features2 } =
    visualWarningsContent;
  return (
    <>
      <section className="py-14 bg-clrVeryLightGray">
        <Wrapper className="px-4">
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
                <li
                  className={`flex items-start text-clrPrimary gap-2`}
                  key={i}
                >
                  <FaCheck className="min-w-[25px]" />
                  <p>{text}</p>
                </li>
              ))}
            </ul>
            <p className="text-lg md:text-xl text-clrPrimary my-6">
              {subTitle2}
            </p>
            <ul className="space-y-4">
              {features2.map((text, i) => (
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
        </Wrapper>
      </section>
    </>
  );
};

export default SecuritySolutions;
