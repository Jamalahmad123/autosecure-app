import { lazy, Suspense, useEffect } from "react";
import { savingsAndExpertise } from "../../data/constantData";
import { autosecureVehicle } from "../../assets/images";

import {
  autoSecurityVideo,
  autoLocateVideo,
  autoScanVideo,
} from "../../assets/videos";

import Spinner from "../../components/ui/Spinner";
import { useTitle } from "../../hooks/customHooks";
import { solutionsAutoMobile } from "../../data/constantData";
// import PagesHero from "../../components/PagesHero";
// import AutosecureEcosystem from "../../components/AutosecureEcosystem";
// import Features from "../../components/Features";
// import IndustrySectorSolutions from "../../components/IndustrySectorSolutions";

// import SecuritySolutionCard from "../../components/SecuritySolutionCard";

// Lazy Imports
const PagesHero = lazy(() => import("../../components/PagesHero"));
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

const heroContent = {
  title: "Automobil & Mobilität",
  desc: "Automations-Lösungen für Autohäuser, Autoparks und Fahrzeug-Vermieter.",
  benefit1: "50% weniger Security-Kosten",
  benefit2: "20% schnellere Prozesse",
  img: autosecureVehicle,
};

const AutomobileAndMobility = () => {
  useTitle("Automobile & Mobility – autosecure |  Safe.  Scan.  locate.");
  useEffect(() => {
    window.scrollTo({ top: 0, left: 0, behavior: "auto" });
  }, []);
  return (
    <>
      <Suspense fallback={<Spinner />}>
        <PagesHero {...heroContent} />
        {solutionsAutoMobile.map((item) => (
          <SecuritySolutionCard {...item} key={item.id} />
        ))}
        <AutosecureEcosystem {...savingsAndExpertise} hasLogo />
        <Features />
        <IndustrySectorSolutions />
      </Suspense>
    </>
  );
};

export default AutomobileAndMobility;
