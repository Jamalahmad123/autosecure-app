import { lazy, Suspense, useEffect } from "react";
import { savingsAndExpertise } from "../../data/constantData";
import { autosecureFarming } from "../../assets/images";
import {
  autoSecurityVideo,
  autoScanVideo,
  autoLocateVideo,
} from "../../assets/videos";
import Spinner from "../../components/ui/Spinner";
import { useTitle } from "../../hooks/customHooks";
import { solutionsAgriculture } from "../../data/constantData";
// import PagesHero from "../../components/PagesHero";

// import IndustrySectorSolutions from "../../components/IndustrySectorSolutions";
// import SecuritySolutionCard from "../../components/SecuritySolutionCard";
// import AutosecureEcosystem from "../../components/AutosecureEcosystem";
// import Features from "../../components/Features";

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

const heroContent = {
  title: "Agrar- & Landwirtschaft",
  desc: "Technologiebasierte Lösungen für den Landwirt von morgen.",
  benefit1: "Digitale Ein- und Ausfahrtkontrolle",
  benefit2: "Digitale Freigabe von Ein- und Ausfahrtberechtigungen",
  img: autosecureFarming,
};

const AgriculturAndForming = () => {
  useTitle("Agriculture & Farming – autosecure |  Safe.  Scan.  locate.");
  useEffect(() => {
    window.scrollTo({ top: 0, left: 0, behavior: "auto" });
  }, []);
  return (
    <>
      <Suspense fallback={<Spinner />}>
        <PagesHero {...heroContent} />
        {solutionsAgriculture.map((item) => (
          <SecuritySolutionCard {...item} key={item.id} />
        ))}
        <AutosecureEcosystem {...savingsAndExpertise} hasLogo />
        <Features />
        <IndustrySectorSolutions />
      </Suspense>
    </>
  );
};

export default AgriculturAndForming;
