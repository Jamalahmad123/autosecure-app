import { lazy, Suspense, useEffect } from "react";

import {
  autoLocateVideo,
  autoSecurityVideo,
  autoScanVideo,
} from "../../assets/videos";
import { autosecureLogistic } from "../../assets/images";

import { savingsAndExpertise } from "../../data/constantData";
import Spinner from "../../components/ui/Spinner";

// import PagesHero from "../../components/PagesHero";

// Lazy Imports
const PagesHero = lazy(() => import("../../components/PagesHero"));
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
    title: "Automated entry and exit control.",
    desc: "Automated trailer and dangerous goods detection, freight inspection to reduce manual handling and search effort are often still carried out manually in logistics today, with a high error rate and immense personnel costs. The new autosecure scan solution simplifies, digitizes and automates these routine tasks.",
    btnTitle: "security solutions",
    path: "/solutions/security-solutions",
    videoPath: autoSecurityVideo,
  },
  {
    id: 2,
    title: "Goods and goods with automatic booking process.",
    desc: "Manual and personnel-intensive routine tasks such as the booking of goods and goods are still carried out in many companies with high human resources and a high error rate. The new autosecure Locate solution automates these processes and ensures at least 20% faster process handling.",
    btnTitle: "Scanner solutions",
    path: "/solutions/scanner-solutions",
    videoPath: autoScanVideo,
  },
  {
    id: 3,
    title: "Theft and burglary problems on the company premises.",
    desc: "Machine and goods theft is a big problem for logisticians. Almost every company encounters permanent thefts. autosecure offers sensible and intelligent security solutions and ensures 100% protection for your valuables. By the way, with autosecure you achieve savings of at least 50% compared to personnel-based monitoring.",
    btnTitle: "Locate solutions",
    path: "/solutions/localization-solutions",
    videoPath: autoLocateVideo,
  },
];
const heroContent = {
  title: "Logistics & Goods",
  desc: "Automation solutions for logistics processes and goods tracking.",
  benefit1: "50% less security costs",
  benefit2: "20% faster processes",
  img: autosecureLogistic,
};

const LogisticsAndGoods = () => {
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
        <Features />
        <IndustrySectorSolutions />
      </Suspense>
    </>
  );
};

export default LogisticsAndGoods;
