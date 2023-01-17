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
  "Digitale und lückenlose Fahrzeugzustandskontrolle bei Grundstückszufahrt, Direktannahme oder an einem frei wählbaren Ort auf dem Gelände.",
  "Sinnvolle Weiterverwendung der Aufnahmen für z.B. interne Prozesstransparenz oder als Unterstützung für den erforderlichen Begutachtungsprozess durch Prüfdienstleister.",
  "Digitale Fahrzeugbegutachtung in Echtzeit für optische Zustandsbewertungen und Wertminderungsgutachten.",
  "Automatische Zuordnung des Fahrzeuges durch Kennzeichenerfassung oder digitale Verortung in Kombination mit autosecure-Locate.",
  "Reduktion von manuellen Begutachtungskosten.",
  "Erhöhung der Durchlaufgeschwindigkeit.",
  "Nahtlose Integration der autosecure Lösungen in hauseigene IT-Infrastruktur (ERP modeling).",
];

const checkPionts01 = {
  id: 1,
  title: "autosecure Eco-System.",
  features: [
    "Highend Web-Plattform zur Integration aller autosecure Services",
    "Software für die maximale Vereinfachung von Geschäftsabläufen",
    "Cloudbasierter User-Account",
    "Erhebliche Reduktion von E-Mail Korrespondenz, Telefonaten oder Suchaufwand",
    "Zentralisierte Bereitstellung von Informationen und Fahrzeug-Dokumentationen",
    "Maximale Transparenz und Vereinfachung von Fahrzeug-Suchprozessen",
  ],
};

const checkPionts02 = {
  id: 1,
  title: "Machine Vision.",
  features: [
    "Unverfälschte Detailaufnahmen von Fahrzeugen durch Highend Maschine-Vision Kameras",
    "Verwendung von gängigen Industriestandards für die automatisierte Weiterverarbeitung in Bildverarbeitungsprogrammen oder direkt im autosecure Eco-System.",
    "Indoor inkl. professioneller Oberflächenkontrollleuchten zur detaillierten Schadenidentifikation oder Outdoor im Gelände-Einfahrtsbereich",
  ],
};

const checkPionts03 = {
  id: 1,
  title: "Zustands-Dokumentation.",
  features: [
    "Automatische Dokumentation von Fahrzeugen bei der Scanner-Durchfahrt",
    "Transparenz durch neutrale Beweisführung für Kunde und Unternehmen",
    "Sofortige digitale Verfügbarkeit von Fahrzeug-Archivbildern (Herausgabe- / Hereinnahme-Vergleich)",
    "Digitale Markierung von Fahrzeug-Schäden über autosecure Eco-System Interface",
    "Generierung eines digitalen Zustandsberichtes (PDF)",
  ],
};

const checkPionts04 = {
  id: 1,
  title: "Automatische Kennzeichenerfassung.",
  features: [
    "Automatische Benachrichtigung Ihrer Mitarbeiter und Zuordnung der Kunden-Akte bei Kundenbesuch für eine persönliche Begrüßung",
    "Blacklist-Alarm und VIP-Benachrichtigung",
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
  desc: "Digitale Zustandskontrolle, Schadenerkennung und Dokumentation in Echtzeit.",
  benefit1: "100% Dokumentation und Zustandserfassung aller Fahrzeuge",
  benefit2: "Keine Diskussionen mit Kunden",
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
          <Wrapper className="px-4 flex items-center justify-center flex-col gap-12">
            <figure>
              <img
                src={zukunftswerkstatt_logo}
                alt="zukunftswerkstatt_logo"
                className="w-full md:w-1/2 mx-auto"
              />
            </figure>
            <h2 className="text-clrPrimary text-[1.5rem] lg:text-[2rem] font-bold font-AllianceBold leading-[2.3rem] lg:leading-[3rem] text-center">
              Digitale Zustandskontrolle, Schadenserkennung und Dokumentation in
              Echtzeit. Erleben Sie den autosecure Auto-Scanner live in der
              Zukunftswerkstatt 4.0.
            </h2>
            <Link
              to="/company/contact"
              className="btn btn-xl text-white normal-case font-normal text-base border-none bg-clrSky py-4 h-auto justify-center md:text-lg hover:bg-clrPrimary font-AllianceRegular"
            >
              Termin vereinbaren <FaCalendarCheck size={20} className="ml-5" />
            </Link>
          </Wrapper>
        </section>
      </Suspense>
    </>
  );
};

export default ScanSolutions;
