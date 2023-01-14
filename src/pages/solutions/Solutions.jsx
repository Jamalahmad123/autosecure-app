import { lazy, Suspense, useEffect } from "react";

import Spinner from "../../components/ui/Spinner";
import { useTitle } from "../../hooks/customHooks";
// import Features from "../../components/Features";
// import Hero from "../../components/Hero";

// Lazy Import
const Features = lazy(() => import("../../components/Features"));
const Hero = lazy(() => import("../../components/Hero"));

const Solutions = () => {
  // page title
  useTitle("Solutions – autosecure | Secure. Scan. Locate.");

  const title = "Lösungen. Automatisiert.";
  const desc =
    "autosecure ist Ihr Spezialist für führende technologiebasierte Automatisations-Lösungen für die Automobil- und Mobilitätsindustrie.";
  const promise =
    "Wir senken Ihre Kosten. Und steigern Ihren Umsatz. Versprochen.";

  useEffect(() => {
    window.scrollTo({ top: 0, left: 0, behavior: "auto" });
  }, []);

  return (
    <>
      <Suspense fallback={<div className="min-h-screen" />}>
        <Hero title={title} desc={desc} promise={promise} isLink />
        <Features />
      </Suspense>
    </>
  );
};

export default Solutions;
