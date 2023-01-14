import { lazy, Suspense, useEffect, useState } from "react";
// import Hero from "../components/Hero";

// import About from "../components/About";
// import IndustrySectorSolutions from "../components/IndustrySectorSolutions";
// import AutosecureEcosystem from "../components/AutosecureEcosystem";
// import AutosecureValues from "../components/AutosecureValues";
// import Achievements from "../components/Achievements";
// import Features from "../components/Features";
// import AutosecureCareerDialoge from "../components/AutosecureCareerDialoge";
// import AutoSecureNewsDialoge from "../components/AutoSecureNewsDialoge";
// import MeetingVideo from "../components/ui/MeetingVideo";

// Lazy Components
const Hero = lazy(() => import("../components/Hero"));
const About = lazy(() => import("../components/About"));
const IndustrySectorSolutions = lazy(() =>
  import("../components/IndustrySectorSolutions")
);
const AutosecureEcosystem = lazy(() =>
  import("../components/AutosecureEcosystem")
);
const AutosecureValues = lazy(() => import("../components/AutosecureValues"));
const Achievements = lazy(() => import("../components/Achievements"));
const Features = lazy(() => import("../components/Features"));
const AutosecureCareerDialoge = lazy(() =>
  import("../components/AutosecureCareerDialoge")
);
const AutoSecureNewsDialoge = lazy(() =>
  import("../components/AutoSecureNewsDialoge")
);
const MeetingVideo = lazy(() => import("../components/ui/MeetingVideo"));
const ParticlesBackground = lazy(() =>
  import("../components/ui/ParticlesBackground")
);

// Assets
import { poster } from "../assets/images";
import { auto_secure_meeting } from "../assets/videos";
import Spinner from "../components/ui/Spinner";

import { ecosystemAndExpertise } from "../data/constantData";
const title = "Vertrauen. Integrität.";
const desc =
  "autosecure ist Ihr Spezialist für führende technologiebasierte Automations-Lösungen für die Automobil- und Mobilitätsindustrie.";
const promise =
  "Wir senken Ihre Kosten. Und steigern Ihren Umsatz. Versprochen.";

const Home = () => {
  useEffect(() => {
    window.scrollTo({ top: 0, left: 0, behavior: "auto" });
  }, []);

  return (
    <Suspense fallback={<Spinner />}>
      <Hero title={title} desc={desc} promise={promise} />
      <Features />
      {/* <About link="/solutions/mobile-security" style="bg-black" /> */}
      <IndustrySectorSolutions />
      {/* <AutosecureEcosystem {...ecosystemAndExpertise} isStyled hasLogo /> */}
      <MeetingVideo videoPath={auto_secure_meeting} poster={poster} />
      <AutosecureValues />
      {/* <AutosecureCareerDialoge /> */}
      <AutoSecureNewsDialoge />
      <Achievements />
    </Suspense>
  );
};

export default Home;
