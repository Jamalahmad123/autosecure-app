import { lazy, Suspense, useEffect } from "react";

import {
  autoLocateVideo,
  autoSecurityVideo,
  autoScanVideo,
} from "../../assets/videos";
import {
  autosecureConstruction,
  autosecure_mobile_emergency,
} from "../../assets/images";

import { savingsAndExpertise } from "../../data/constantData";
import Spinner from "../../components/ui/Spinner";
import Wrapper from "../../components/ui/Wrapper";
import { styles } from "../../Styles";
import { FaCheck } from "react-icons/fa";
import { useTitle } from "../../hooks/customHooks";

// import PagesHero from "../../components/PagesHero";

// Lazy Imports
const PagesHero = lazy(() => import("../../components/PagesHero"));
const Hero = lazy(() => import("../../components/Hero"));
const SecuritySolutionCard = lazy(() =>
  import("../../components/SecuritySolutionCard")
);
const IndustrySectorSolutions = lazy(() =>
  import("../../components/IndustrySectorSolutions")
);
const AutosecureEcosystem = lazy(() =>
  import("../../components/AutosecureEcosystem")
);
const AnimatedCircle = lazy(() => import("../../components/ui/AnimatedCircle"));
const Features = lazy(() => import("../../components/Features"));

const solutions = [
  {
    id: 1,
    title: "Theft and burglary problems on the construction site.",
    desc: "Theft of machinery or recyclable materials on construction sites is a major problem for construction companies. Not only the associated loss of value, but also the resulting downtimes lead to considerable economic difficulties. autosecure offers sensible and intelligent security solutions and ensures 100% protection for your valuables.",
    btnTitle: "security solutions",
    path: "/solutions/security-solutions",
    videoPath: autoSecurityVideo,
  },
  {
    id: 2,
    title:
      "Automated documentation of delivery and removal processes on the construction site.",
    desc: "Which authorized or unauthorized persons enter the construction site and when? On many construction sites, this topic leads to numerous discussions, insurance problems, attendance and time recording problems and much more. The autosecure scan solution offers ideal options for automated access control.",
    btnTitle: "Scanner solutions",
    path: "/solutions/scanner-solutions",
    videoPath: autoScanVideo,
  },
  {
    id: 3,
    title:
      "Goods and building materials leave the construction site unnoticed or simply cannot be found again.",
    desc: "It not only costs time and nerves - but at the end of the day also hard cash. Long search times for finding goods and building materials that have left the construction site unnoticed or unintentionally or simply can no longer be found. With the new autosecure-Locate solution, goods and building materials can be located to within a few meters and, incidentally, perfectly protected against theft.",
    btnTitle: "Locate solutions",
    path: "/solutions/localization-solutions",
    videoPath: autoLocateVideo,
  },
];
const heroContent = {
  title: "Construction & construction vehicles",
  desc: "Automation solutions for the construction site of the future",
  benefit1: "50% less security costs",
  benefit2: "20% faster processes",
  img: autosecureConstruction,
};
const animatedHeroContent = {
  title: "360° automation in construction.",
  desc: "Tailored to your construction requirements: Discover the autosecure 360° automation concept for construction and construction vehicles.",
};

const Constructions = () => {
  useTitle(
    "Construction & construction vehicles – autosecure |  Safe.  Scan.  locate."
  );
  useEffect(() => {
    window.scrollTo({ top: 0, left: 0, behavior: "auto" });
  }, []);
  return (
    <>
      <Suspense fallback={<Spinner />}>
        <PagesHero {...heroContent} />
        <AutosecureEcosystem {...savingsAndExpertise} hasLogo />
        {solutions.map((item) => (
          <SecuritySolutionCard {...item} key={item.id} />
        ))}
        <Hero
          title={animatedHeroContent.title}
          desc={animatedHeroContent.desc}
          isLink
        />
        <AnimatedCircle />
        <EmergencyService />
        <Features />
        <IndustrySectorSolutions />
      </Suspense>
    </>
  );
};

export default Constructions;

const EmergencyService = () => {
  const data = [
    "With a mast height of up to six meters and a narrow stand area of ​​1 x 1 m, we offer the latest surveillance technology in the smallest of spaces for an overview from above.",
    "Targeted surveillance with two highly functional PTZ cameras",
    "Intelligent analysis software (AI)",
    "Pole height 6 m",
    "Surveillance radius up to 200 m (depending on model)",
    "Location can be easily changed",
    "Preventive ambient lighting",
    "Customer power supply 230 V",
    "Battery storage continues to provide energy for up to 80 hours in the event of a power failure (depending on the model)",
    "Full service: delivery, collection, transfer - as long as you want",
  ];
  return (
    <section className="py-20">
      <Wrapper className="px-4 flex flex-col items-center justify-center gap-6 lg:gap-14 lg:flex-row lg:items-start">
        <figure className="flex-1 flex items-center justify-center bg-white py-8 rounded-md">
          <img
            src={autosecure_mobile_emergency}
            alt="autosecure_emergency_tower"
          />
        </figure>
        <div className="flex-1 space-y-6">
          <h2 className={`${styles.headingSecondary} text-clrPrimary`}>
            Mobile emergency services.
          </h2>
          <p className="text-clrPrimary text-lg lg:text-2xl">
            With our mobile security towers, you can also provide security for
            property areas that are only used temporarily.
          </p>
          <ul className="space-y-4">
            {data.map((item, i) => (
              <li className="text-clrPrimary flex items-start gap-2" key={i}>
                <FaCheck className="min-w-[20px]" />
                {item}
              </li>
            ))}
          </ul>
          <ul className="space-y-4">
            <h3 className="text-clrPrimary text-lg lg:text-2xl">Options:</h3>
            <li className="text-clrPrimary flex items-start gap-2">
              <FaCheck className="min-w-[20px]" />
              customer camera
            </li>
            <li className="text-clrPrimary flex items-start gap-2">
              <FaCheck className="min-w-[20px]" />
              Thermal camera
            </li>
            <li className="text-clrPrimary flex items-start gap-2">
              <FaCheck className="min-w-[20px]" />
              time lapse camera
            </li>
          </ul>
        </div>
      </Wrapper>
    </section>
  );
};
