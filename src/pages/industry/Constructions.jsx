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
import { solutionsConstructions } from "../../data/constantData";

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

const heroContent = {
  title: "Bau & Baufahrzeuge",
  desc: "Automations-Lösungen für die Baustelle der Zukunft.",
  benefit1: "50% weniger Security-Kosten",
  benefit2: "20% schnellere Prozesse",
  img: autosecureConstruction,
};
const animatedHeroContent = {
  title: "360° Automatisierung am Bau.",
  desc: "Maßgeschneidert für Ihre Anforderungen am Bau: Entdecken Sie das autosecure 360° Automations-Konzept für Bau und Baufahrzeuge.",
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
        {solutionsConstructions.map((item) => (
          <SecuritySolutionCard {...item} key={item.id} />
        ))}
        <AutosecureEcosystem {...savingsAndExpertise} hasLogo />
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

`








`;

const EmergencyService = () => {
  const data = [
    "Mit einer Masthöhe von bis zu sechs Metern und einem schmalen Standbereich von 1 x 1 m, bieten wir modernste Überwachungstechnik auf kleinstem Raum für den Überblick von oben.",
    "Zielgerichtete Überwachung mit zwei hochfunktionellen PTZ-Kameras",
    "Intelligente Analyse-Software (KI)",
    "Masthöhe 6 m",
    "Überwachungsradius bis zu 200 m (je nach Modell)",
    "Standort kann einfach verändert werden",
    "Präventive Umfeldbeleuchtung",

    "Kundenseitige Stromversorgung 230 V",
    "Batteriespeicher liefert bei Stromausfall weiter Energie bis 80 Std. (je nach Modell)",
    "FullService: Lieferung, Abholung, Verbringung – solange Sie möchten",
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
            Mobile Einsatzkräfte.
          </h2>
          <p className="text-clrPrimary text-lg lg:text-2xl">
            Mit unseren mobilen Security-Türmen verschaffen Sie sich Sicherheit
            auch bei nur temporär genutzten Grundstücksarealen.
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
            <h3 className="text-clrPrimary text-lg lg:text-2xl">Optional:</h3>
            <li className="text-clrPrimary flex items-start gap-2">
              <FaCheck className="min-w-[20px]" />
              Kundenkamera
            </li>
            <li className="text-clrPrimary flex items-start gap-2">
              <FaCheck className="min-w-[20px]" />
              Wärmebildkamera
            </li>
            <li className="text-clrPrimary flex items-start gap-2">
              <FaCheck className="min-w-[20px]" />
              Zeitrafferkamera
            </li>
          </ul>
        </div>
      </Wrapper>
    </section>
  );
};
