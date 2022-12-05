import Features from "../../components/Features";
import Hero from "../../components/Hero";

const Solutions = () => {
  const title = "Solutions. Automated.";
  const desc =
    "autosecure is your specialist for leading technology-based automation solutions for the automotive and mobility industry.";
  const promise = "We lower your costs. And increase your sales. Promised.";

  return (
    <>
      <Hero title={title} desc={desc} promise={promise} isLink />
      <Features />
    </>
  );
};

export default Solutions;
