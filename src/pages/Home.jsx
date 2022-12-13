import { lazy, Suspense } from "react";
import Hero from "../components/Hero";

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
import { poster } from "../assets/images";
import { auto_secure_meeting } from "../assets/videos";

import { ecosystemAndExpertise } from "../data/constantData";

const Home = () => {
  const title = "Trust. Integrity.";
  const desc =
    "autosecure is your specialist for leading technology-based automation solutions for the automotive and mobility industry.";
  const promise = "We lower your costs. And increase your sales. Promised.";

  return (
    <>
      <Hero title={title} desc={desc} promise={promise} />
      <Suspense fallback={<div />}>
        <Features />
        <About />
        <IndustrySectorSolutions />
        <AutosecureEcosystem {...ecosystemAndExpertise} isStyled hasLogo />
        <MeetingVideo videoPath={auto_secure_meeting} poster={poster} />
        <AutosecureValues />
        <AutosecureCareerDialoge />
        <AutoSecureNewsDialoge />
        <Achievements />
      </Suspense>
    </>
  );
};

export default Home;
