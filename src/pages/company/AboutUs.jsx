import { lazy, Suspense, useEffect } from "react";
import { Link } from "react-router-dom";
import { FaCalendarAlt } from "react-icons/fa";
import Wrapper from "../../components/ui/Wrapper";
// import AutosecureEcosystem from "../../components/AutosecureEcosystem";
// import Features from "../../components/Features";
// import IndustrySectorSolutions from "../../components/IndustrySectorSolutions";
// import Achievements from "../../components/Achievements";
// import AutoSecureNewsDialoge from "../../components/AutoSecureNewsDialoge";
// import AutosecureCareerDialoge from "../../components/AutosecureCareerDialoge";

// Lazy components
const AutosecureEcosystem = lazy(() =>
  import("../../components/AutosecureEcosystem")
);
const Features = lazy(() => import("../../components/Features"));
const IndustrySectorSolutions = lazy(() =>
  import("../../components/IndustrySectorSolutions")
);
const Achievements = lazy(() => import("../../components/Achievements"));
const AutoSecureNewsDialoge = lazy(() =>
  import("../../components/AutoSecureNewsDialoge")
);
const AutosecureCareerDialoge = lazy(() =>
  import("../../components/AutosecureCareerDialoge")
);

import { ecosystemAndExpertise } from "../../data/constantData";
import { styles } from "../../Styles";
import Spinner from "../../components/ui/Spinner";
import { useTitle } from "../../hooks/customHooks";

const AboutUs = () => {
  useTitle("About us – autosecure | Secure. Scan. Locate.");
  useEffect(() => {
    window.scrollTo({ top: 0, left: 0, behavior: "auto" });
  }, []);
  return (
    <>
      <header className="pt-24 pb-14">
        <Wrapper className="px-4">
          <p className="text-clrPrimary text-lg mb-2">Über uns.</p>
          <h1 className={`text-clrPrimary ${styles.headingPrimary}`}>
            Wir lieben Technologie und <br className="hidden md:block" /> smarte
            Automation.
          </h1>
          <div className="space-y-6 mt-12">
            <p className={`${styles.textPrimary} text-clrPrimary`}>
              autosecure ist Ihr Spezialist für führende technologiebasierte
              Automations-Lösungen für die Automobil- und Mobilitätsindustrie.
            </p>
            <p className="text-base text-clrPrimary md:max-w-2xl leading-6 md:text-lg">
              Wir helfen Auto-Häusern, Auto-Parks, Fahrzeug-Vermietern und
              Logistikern mit unseren zukunftsweisenden{" "}
              <Link to="/" className="font-bold text-xl hover:opacity-90">
                Automations-Lösungen
              </Link>{" "}
              Prozesse auf dem Betriebsgelände zu optimieren und
              Kostenstrukturen erheblich zu reduzieren.
            </p>
            {/*      */}
            <p className="text-base text-clrPrimary md:max-w-2xl leading-6 md:text-lg">
              Mit unserem{" "}
              <Link
                to="/solutions/security-solutions/active-video-surveillance/active-video-surveillance"
                className="font-bold text-xl hover:opacity-90"
              >
                autosecure SAVE-Prinzip
              </Link>{" "}
              und unserer innovativen Technologie stellen wir sicher, dass kein
              Schaden an Ihren Werten entsteht. So brauchen Sie sich um die
              Sicherheit Ihres Unternehmens keine Sorgen machen und sparen dabei
              noch Kosten ein. autosecure übernimmt für seine Kunden die
              Verantwortung für die{" "}
              <Link
                to="/solutions/security-solutions/active-video-surveillance"
                className="font-bold text-xl hover:opacity-90"
              >
                Sicherheit
              </Link>{" "}
              auf dem Betriebsgelände und bietet{" "}
              <Link
                to="/solutions/security-solutions/active-video-surveillance"
                className="font-bold text-xl hover:opacity-90"
              >
                100% Schutz für die Werte seiner Kunden.
              </Link>
            </p>
            <p className="text-base text-clrPrimary md:max-w-2xl leading-6 md:text-lg">
              Neben{" "}
              <Link
                to="/solutions/security-solutions/active-video-surveillance"
                className="font-bold text-xl hover:opacity-90"
              >
                technologiebasierten Sicherheitslösungen
              </Link>{" "}
              bietet autosecure zudem smarte Lösungen im Bereich der{" "}
              <Link
                to="/solutions/scanner-solutions/scan"
                className="font-bold text-xl hover:opacity-90"
              >
                Scan–
              </Link>{" "}
              und{" "}
              <Link to="" className="font-bold text-xl hover:opacity-90">
                Lokalisations-Technologien.
              </Link>
            </p>
            <p className="font-bold text-lg md:text-xl text-clrPrimary">
              Wir senken Ihre Kosten. Und steigern Ihren Umsatz. Versprochen.
            </p>
            <Link
              to="/company/contact"
              className="link link-neutral text-lg inline-block text-clrPrimary"
            >
              <FaCalendarAlt className="inline-block mr-4" />
              Beratungs-Gespräch vereinbaren
            </Link>
          </div>
        </Wrapper>
      </header>
      <Suspense fallback={<Spinner />}>
        <AutosecureEcosystem {...ecosystemAndExpertise} hasLogo />
        <Features />
        <IndustrySectorSolutions />
        <AutoSecureNewsDialoge />
        <Achievements />
        <AutosecureCareerDialoge />
      </Suspense>
    </>
  );
};

export default AboutUs;
