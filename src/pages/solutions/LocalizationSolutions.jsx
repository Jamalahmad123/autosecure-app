import Hero from "./Hero";
import {
  features,
  ecosystemAndParkingSystem,
  vehicleAndPlateRecognition,
} from "../../data/constantData";
import { lazy, Suspense } from "react";
import AutosecureFeaturesList from "../../components/AutosecureFeaturesList";
import { autosecureVehicle } from "../../assets/images";

// Lazy import
const AutosecureEcosystem = lazy(() =>
  import("../../components/AutosecureEcosystem")
);

const benefits = [
  "Precise real-time indoor and outdoor localization of goods and goods for profitable business applications with innovative analyses.",
  `Examples of use cases are "Find My Car Terminals", vehicle tagging, digital vehicle files/order folders.`,
  "Automated vehicle localization and transfer of the respective location to within a few meters with and without license plates.",
  "Transfer of the information to the customer's own ERP systems via the innovative and open-interface autosecure middleware for real process intelligence and automated downtime recording and control.",
  "Significant reduction of search and assignment costs.",
];

const LocalizationSolutions = () => {
  const [locate] = features.filter((item) => item.title === "locate");
  return (
    <>
      <Hero {...locate} />

      <Suspense fallback={<div />}>
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
