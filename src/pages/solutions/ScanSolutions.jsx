import { lazy, Suspense, useEffect } from "react";
import { Link } from "react-router-dom";
import { FaCalendarCheck } from "react-icons/fa";

// import Hero from "./Hero";
// import AutosecureFeaturesList from "../../components/AutosecureFeaturesList";
// import AutosecureSystemApplication from "../../components/ui/AutosecureSystemApplication";
// import AutosecureFullSlider from "../../components/AutosecureFullSlider";
import Wrapper from "../../components/ui/Wrapper";
import Spinner from "../../components/ui/Spinner";

// Lazy Imports
const Hero = lazy(() => import("./Hero"));
const AutosecureFeaturesList = lazy(() =>
  import("../../components/AutosecureFeaturesList")
);
const AutosecureSystemApplication = lazy(() =>
  import("../../components/ui/AutosecureSystemApplication")
);
const AutosecureFullSlider = lazy(() =>
  import("../../components/AutosecureFullSlider")
);

import {
  autosecure_gallery_01,
  autosecure_gallery_02,
  autosecure_gallery_03,
  autosecure_gallery_04,
  autosecure_gallery_05,
  zukunftswerkstatt_logo,
} from "../../assets/images";
import { autosecure_scan_01, autosecure_scan_02 } from "../../assets/videos";
import { styles } from "../../Styles";
import { useTitle } from "../../hooks/customHooks";

const checkPionts = [
  "Digital and complete vehicle status check at property access, direct acceptance or at a freely selectable location on the premises.",
  "Useful further use of the recordings, for example for internal process transparency or as support for the required assessment process by the testing service provider.",
  "Digital vehicle assessment in real time for visual condition assessments and impairment reports.",
  "Automatic assignment of the vehicle through license plate recognition or digital location in combination with autosecure-Locate.",
  "Reduction of manual assessment costs.",
  "Increase in throughput speed.",
  "Seamless integration of the autosecure solutions into in-house IT infrastructure (ERP modeling).",
];

const checkPionts01 = {
  id: 1,
  title: "autosecure ecosystem.",
  features: [
    "High-end web platform for integrating all autosecure services",
    "Software for the maximum simplification of business processes",
    "Cloud-based user account",
    "Considerable reduction in e-mail correspondence, telephone calls or search effort",
    "Centralized provision of information and vehicle documentation",
    "Maximum transparency and simplification of vehicle search processes",
  ],
};
const checkPionts02 = {
  id: 1,
  title: "machine vision.",
  features: [
    "Undistorted detailed recordings of vehicles using high-end machine vision cameras",
    "Use of common industry standards for automated further processing in image processing programs or directly in the autosecure ecosystem.",
    "Indoors including professional surface control lights for detailed damage identification or outdoors in the entrance area",
  ],
};

const checkPionts03 = {
  id: 1,
  title: "Status documentation.",
  features: [
    "Automatic documentation of vehicles as they pass through the scanner",
    "Transparency through neutral evidence for customers and companies",
    "Immediate digital availability of vehicle archive images (issue / acceptance comparison)",
    "Digital marking of vehicle damage via autosecure Eco-System Interface",
    "Generation of a digital status report (PDF)",
  ],
};
const checkPionts04 = {
  id: 1,
  title: "Automatic license plate recognition.",
  features: [
    "Automatic notification of your employees and assignment of the customer file when a customer visits for a personal greeting",
    "TBlacklist alert and VIP notification",
  ],
};

const slideImages = [
  autosecure_gallery_01,
  autosecure_gallery_02,
  autosecure_gallery_03,
  autosecure_gallery_04,
  autosecure_gallery_05,
];

const heroContent = {
  title: "scan",
  desc: "Digital condition control, damage detection and documentation in real time.",
  benefit1: "50% less security costs",
  benefit2: "20% faster processes",
  videoPath: autosecure_scan_01,
};

const ScanSolutions = () => {
  useTitle("Scanner Solutions | Scanner – autosecure |  Safe.  Scan.  locate.");
  useEffect(() => {
    window.scrollTo({ top: 0, left: 0, behavior: "auto" });
  }, []);

  return (
    <>
      <Suspense fallback={<Spinner />}>
        <Hero {...heroContent} isAssist />
        <AutosecureFeaturesList benefits={checkPionts} />
        <video autoPlay preload="meta" muted width="100%" height="100%">
          <source src={autosecure_scan_02} type="video/mp4" />
          Sorry, your browser doesn't support videos.
        </video>
        <AutosecureSystemApplication application={checkPionts01} />
        <AutosecureSystemApplication application={checkPionts02} />
        <AutosecureSystemApplication application={checkPionts03} />
        <AutosecureSystemApplication application={checkPionts04} />
        <AutosecureFullSlider slideImages={slideImages} />
        <section className="py-14 bg-clrVeryLightGray">
          <Wrapper className="px- flex items-center justify-center flex-col gap-12">
            <figure>
              <img
                src={zukunftswerkstatt_logo}
                alt="zukunftswerkstatt_logo"
                className="w-full md:w-1/2 mx-auto"
              />
            </figure>
            <h2
              className={`${styles.headingSecondary} text-clrPrimary text-center`}
            >
              Digital condition control, damage detection and documentation in
              real time. Experience the autosecure car scanner live in the
              workshop of the future 4.0.
            </h2>
            <Link
              to="/company/contact"
              className="btn btn-xl text-white lowercase font-normal text-base border-none bg-clrSky py-4 h-auto justify-center md:text-lg hover:bg-clrPrimary font-AllianceRegular"
            >
              make an appointment <FaCalendarCheck size={20} className="ml-5" />
            </Link>
          </Wrapper>
        </section>
      </Suspense>
    </>
  );
};

export default ScanSolutions;
