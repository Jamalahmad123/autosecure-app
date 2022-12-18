import { lazy, Suspense } from "react";

import {
  autoLocateVideo,
  autoSecurityVideo,
  autoScanVideo,
} from "../../assets/videos";
import { autosecureConstruction } from "../../assets/images";

import { savingsAndExpertise } from "../../data/constantData";

import PagesHero from "../../components/PagesHero";

// Lazy Imports
const SecuritySolutionCard = lazy(() =>
  import("../../components/SecuritySolutionCard")
);
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

const Constructions = () => {
  return (
    <>
      <PagesHero {...heroContent} />
      <Suspense fallback={<div />}>
        <AutosecureEcosystem {...savingsAndExpertise} hasLogo />
        {solutions.map((item) => (
          <SecuritySolutionCard {...item} key={item.id} />
        ))}
        <Features />
        <IndustrySectorSolutions />
      </Suspense>
    </>
  );
};

export default Constructions;
