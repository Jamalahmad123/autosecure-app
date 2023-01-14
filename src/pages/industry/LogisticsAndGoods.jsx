import { lazy, Suspense, useEffect } from "react";
import { Link } from "react-router-dom";
import { FaCalendarCheck, FaCheck } from "react-icons/fa";

import {
  autoLocateVideo,
  autoSecurityVideo,
  autoScanVideo,
} from "../../assets/videos";
import { autosecureLogistic } from "../../assets/images";

import { savingsAndExpertise } from "../../data/constantData";
import Spinner from "../../components/ui/Spinner";
import Wrapper from "../../components/ui/Wrapper";
import { styles } from "../../Styles";
import { useTitle } from "../../hooks/customHooks";
import { solutionsLogistics } from "../../data/constantData";

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
  title: "Logistik & Waren",
  desc: "Automations-Lösungen für Logistik-Prozesse und Waren-Tracking.",
  benefit1: "50% weniger Security-Kosten",
  benefit2: "20% schnellere Prozesse",
  img: autosecureLogistic,
};
const animatedHeroContent = {
  title: "360° Automatisierung für die Logistik",
  desc: "Maßgeschneidert für Ihre Anforderungen im Logistik-Prozess: Entdecken Sie das autosecure 360° Automations-Konzept für Logistik und Waren.",
};

const LogisticsAndGoods = () => {
  useTitle("Logistics & Goods – autosecure |  Safe.  Scan.  locate.");
  useEffect(() => {
    window.scrollTo({ top: 0, left: 0, behavior: "auto" });
  }, []);

  return (
    <>
      <Suspense fallback={<Spinner />}>
        <PagesHero {...heroContent} />
        {solutionsLogistics.map((item) => (
          <SecuritySolutionCard {...item} key={item.id} />
        ))}
        <AutosecureEcosystem {...savingsAndExpertise} hasLogo />
        <FeaturesList />
        <Hero
          title={animatedHeroContent.title}
          desc={animatedHeroContent.desc}
        />
        <AnimatedCircle />
        <Features />
        <IndustrySectorSolutions />
      </Suspense>
    </>
  );
};

export default LogisticsAndGoods;

const featursArr = [
  "Alle Informationen an der Rampe",
  "Vollautomatisierter Digitaler Pförtner",
  "Reduzierte Wartezeiten für Logistik Dienstleister und Abholkunden",
  "Prozessvisualisierung entlang der Lieferkette",
  "Gezieltes, intelligentes und effektives Warenannahme- und Schranken-Management",
  "Freigegebener Fahrauftrag mit den richtigen Verkehrswegen zur Rampe, die perfekt vorbereitet ist",
  "Bereits integrierte Lösungen wie SAP S/4HANA werden angereichert mit Bildern für eine Driver-Transport-Order, Gefahrgut-Klassifizierung, Fahrer und Fahrzeug-(Zustand)",
  "Scannerfreies Lager automatisierte Waren-Erkennung. Welche Waren befinden sich auf welchem Förderfahrzeug? Wohin müssen die Waren? Kein manuelles scannen. Keine Prozessunterbrechung.",
  "Nahtlose Materialversogung durch einen kontinuierlichen Verbesserungsprozess in der Fertigung (Kanban)",
  "100% Prozesssicherung",
];

const FeaturesList = () => {
  return (
    <section className="py-20">
      <Wrapper className="px-4">
        <h1 className={`${styles.headingPrimary} text-clrPrimary`}>
          Hocheffizientes und intelligentes Yard Management System
        </h1>
        <p className="text-lg font-normal md:text-[22px] md:leading-[3rem] lg:text-[35px] mt-8 mb-12 font-AllianceRegular text-clrPrimary">
          Stellen Sie sich vor, Sie bewegen 200 LKW und koordinieren 5.000
          Warenbewegungen am Tag. Selbst mit 3 Staplerfahrern ist dieses Volumen
          nur schwerlich zu bewältigen.
        </p>
        <p className="text-lg font-normal md:text-[22px] md:leading-[3rem] lg:text-[35px] font-AllianceRegular text-clrPrimary">
          Was wäre, wenn die Automatisierung Sie dahin führt, dass nur noch 2
          oder 1 Staplerfahrer das gleiche Pensum entspannt bewältigen können,
          weil durch gezielte und intelligente Automation die Arbeit
          unterbrechungsfrei und deutlich effizienter gestaltet werden könnte?
          Sprechen Sie mit uns.
        </p>

        <ul className="space-y-8 mt-12">
          {featursArr.map((f, i) => (
            <li className="flex items-start gap-2" key={i}>
              <FaCheck className="text-clrSky min-w-[35px]" size={25} />
              <p className="text-lg lg:text-2xl text-clrPrimary">{f}</p>
            </li>
          ))}
        </ul>

        <Link
          to="/company/contact"
          className="btn text-white capitalize font-normal text-base border-none bg-clrSky py-4 h-auto justify-center md:text-lg hover:bg-clrPrimary font-AllianceRegular mt-14"
        >
          Termin vereinbaren <FaCalendarCheck size={20} className="ml-5" />
        </Link>
      </Wrapper>
    </section>
  );
};
