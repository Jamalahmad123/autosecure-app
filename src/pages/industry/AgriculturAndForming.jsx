import { savingsAndExpertise } from "../../data/constantData";
import { autosecureFarming } from "../../assets/images";
import {
  autoSecurityVideo,
  autoScanVideo,
  autoLocateVideo,
} from "../../assets/videos";
import { lazy, Suspense } from "react";

// import IndustrySectorSolutions from "../../components/IndustrySectorSolutions";
import PagesHero from "../../components/PagesHero";
import SecuritySolutionCard from "../../components/SecuritySolutionCard";
// import AutosecureEcosystem from "../../components/AutosecureEcosystem";
// import Features from "../../components/Features";
const IndustrySectorSolutions = lazy(() =>
  import("../../components/IndustrySectorSolutions")
);
const AutosecureEcosystem = lazy(() =>
  import("../../components/AutosecureEcosystem")
);
const Features = lazy(() => import("../../components/Features"));

const solutions = [
  {
    id: 1,
    title: "Theft and burglary problems on the company premises.",
    desc: "Machinery and goods theft in agriculture is a big problem. Almost every agricultural business encounters permanent theft. autosecure offers sensible and intelligent security solutions and ensures 100% protection for your valuables. By the way, with autosecure you achieve savings of at least 50% compared to personnel-based monitoring.",
    btnTitle: "security solutions",
    path: "#",
    videoPath: autoSecurityVideo,
  },
  {
    id: 2,
    title: "Automated entry and exit control.",
    desc: "Automated harvest and fruit inspection (shape, color, size) is still a dream of the future in many agricultural businesses. A large number of employees are often entrusted with these tasks. The new autosecure scan solution and the latest machine vision technology ensure that your harvest inspection runs automatically and securely.",
    btnTitle: "Scanner solutions",
    path: "#",
    videoPath: autoScanVideo,
  },
  {
    id: 3,
    title:
      "Goods and goods leave the property unnoticed or simply cannot be found again.",
    desc: "It not only costs time and nerves - but at the end of the day also hard cash. Long search times for finding goods and goods that have left the property unnoticed or unintentionally or simply can no longer be found. With the new autosecure Locate solution, goods and goods can be located to within a few meters and also perfectly protected against theft.",
    btnTitle: "Locate solutions",
    path: "#",
    videoPath: autoLocateVideo,
  },
];

const heroContent = {
  title: "Agriculture & Farming",
  desc: "Technology-based solutions for the farmer of tomorrow.",
  benefit1: "Digital entry and exit control",
  benefit2: "Digital release of entry and exit authorizations",
  img: autosecureFarming,
};

const AgriculturAndForming = () => {
  return (
    <>
      <PagesHero {...heroContent} />
      <Suspense fallback={<div />}>
        <AutosecureEcosystem {...savingsAndExpertise} />
        {solutions.map((item) => (
          <SecuritySolutionCard {...item} />
        ))}
        <Features />
        <IndustrySectorSolutions />
      </Suspense>
    </>
  );
};

export default AgriculturAndForming;
