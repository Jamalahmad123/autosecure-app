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

  const title = "Solutions. Automated.";
  const desc =
    "autosecure is your specialist for leading technology-based automation solutions for the automotive and mobility industry.";
  const promise = "We lower your costs. And increase your sales. Promised.";

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
