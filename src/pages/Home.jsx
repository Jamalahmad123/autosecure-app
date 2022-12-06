import Hero from "../components/Hero";
import About from "../components/About";
import IndustrySectorSolutions from "../components/IndustrySectorSolutions";
import AutosecureEcosystem from "../components/AutosecureEcosystem";
import AutosecureValues from "../components/AutosecureValues";
import Achievements from "../components/Achievements";
import Features from "../components/Features";
import AutosecureCareerDialoge from "../components/AutosecureCareerDialoge";
import AutoSecureNewsDialoge from "../components/AutoSecureNewsDialoge";
import MeetingVideo from "../components/ui/MeetingVideo";
import { ecosystemAndExpertise } from "../data/constantData";

const Home = () => {
  const title = "Trust. Integrity.";
  const desc =
    "autosecure is your specialist for leading technology-based automation solutions for the automotive and mobility industry.";
  const promise = "We lower your costs. And increase your sales. Promised.";

  return (
    <>
      <Hero title={title} desc={desc} promise={promise} />
      <Features />
      <About />
      <IndustrySectorSolutions />
      <AutosecureEcosystem {...ecosystemAndExpertise} isStyled />
      <MeetingVideo />
      <AutosecureValues />
      <AutosecureCareerDialoge />
      <AutoSecureNewsDialoge />
      <Achievements />
    </>
  );
};

export default Home;
