import { lazy, Suspense } from "react";
import PagesHero from "../../components/PagesHero";
import { savingsAndExpertise } from "../../data/constantData";
import { autosecureVehicle } from "../../assets/images";

import {
  autoSecurityVideo,
  autoLocateVideo,
  autoScanVideo,
} from "../../assets/videos";

// import AutosecureEcosystem from "../../components/AutosecureEcosystem";
// import Features from "../../components/Features";
// import IndustrySectorSolutions from "../../components/IndustrySectorSolutions";

// import SecuritySolutionCard from "../../components/SecuritySolutionCard";

// Lazy Imports
const AutosecureEcosystem = lazy(() =>
  import("../../components/AutosecureEcosystem")
);
const Features = lazy(() => import("../../components/Features"));
const IndustrySectorSolutions = lazy(() =>
  import("../../components/IndustrySectorSolutions")
);
const SecuritySolutionCard = lazy(() =>
  import("../../components/SecuritySolutionCard")
);

const solutions = [
  {
    id: 1,
    title: "Theft and burglary problems on the company premises.",
    desc: "Vehicle theft is a big problem for car dealerships, car parks and vehicle rental companies. Almost every company encounters permanent partial and total thefts. autosecure offers sensible and intelligent security solutions and ensures 100% protection for your valuables.",
    btnTitle: "security solutions",
    path: "#",
    videoPath: autoSecurityVideo,
  },
  {
    id: 2,
    title: "Automated condition documentation of vehicles on the site.",
    desc: "Discussion with customers about the condition of the vehicle at what time or the quick detection of damage to the vehicle during the condition assessment. The new autosecure scanner solves these problems and automatically records every vehicle on the company premises.",
    btnTitle: "Scanner solutions",
    path: "#",
    videoPath: autoScanVideo,
  },
  {
    id: 3,
    title: "Long search times for finding vehicles on the premises.",
    desc: "It not only costs time and nerves - but at the end of the day also hard cash. Long search times for finding vehicles on the company premises are a time-consuming problem for many car dealerships, car parks and vehicle rental companies. With the new autosecure locate solution, your vehicles can be located to within a few meters.",
    btnTitle: "Locate solutions",
    path: "#",
    videoPath: autoLocateVideo,
  },
];
const heroContent = {
  title: "Automobile & Mobility",
  desc: "Automation solutions for car dealerships, car parks and vehicle rental companies.",
  benefit1: "50% less security costs",
  benefit2: "20% faster processes",
  img: autosecureVehicle,
};

const AutomobileAndMobility = () => {
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

export default AutomobileAndMobility;
