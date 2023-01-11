import { lazy, Suspense, useEffect } from "react";
import {
  features,
  ecosystemAndParkingSystem,
  vehicleAndPlateRecognition,
} from "../../data/constantData";
import { autosecureVehicle } from "../../assets/images";
import Spinner from "../../components/ui/Spinner";
import { useTitle } from "../../hooks/customHooks";
// import Hero from "./Hero";
// import AutosecureFeaturesList from "../../components/AutosecureFeaturesList";

// Lazy import
const Hero = lazy(() => import("./Hero"));
const AutosecureEcosystem = lazy(() =>
  import("../../components/AutosecureEcosystem")
);
const AutosecureFeaturesList = lazy(() =>
  import("../../components/AutosecureFeaturesList")
);

const benefits = [
  "Precise real-time indoor and outdoor localization of goods and goods for profitable business applications with innovative analyses.",
  `Examples of use cases are "Find My Car Terminals", vehicle tagging, digital vehicle files/order folders.`,
  "Automated vehicle localization and transfer of the respective location to within a few meters with and without license plates.",
  "Transfer of the information to the customer's own ERP systems via the innovative and open-interface autosecure middleware for real process intelligence and automated downtime recording and control.",
  "Significant reduction of search and assignment costs.",
];

const LocalizationSolutions = () => {
  useTitle(
    "Localization Solutions | Localization – autosecure |  Safe.  Scan.  locate."
  );
  useEffect(() => {
    window.scrollTo({ top: 0, left: 0, behavior: "auto" });
  }, []);

  const [locate] = features.filter((item) => item.title === "locate");

  return (
    <>
      <Suspense fallback={<Spinner />}>
        <Hero {...locate} />
        <AutosecureFeaturesList benefits={benefits}>
          <figure>
            <img
              src={autosecureVehicle}
              alt="autosecure-vehicle-parking"
              className="w-full h-auto rounded-xl"
            />
          </figure>
        </AutosecureFeaturesList>
        <AutosecureEcosystem {...ecosystemAndParkingSystem} />
        <AutosecureEcosystem {...vehicleAndPlateRecognition} />
      </Suspense>
    </>
  );
};

export default LocalizationSolutions;
