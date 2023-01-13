import { lazy, Suspense, useEffect } from "react";
import { useTitle } from "../hooks/customHooks";
import Spinner from "./ui/Spinner";

// Lazy Imports
const About = lazy(() => import("./About"));
const ProductComponent = lazy(() => import("./ProductComponent"));

const MobileSecurity = () => {
  useTitle(
    "Security Solutions | Mobile Security Tower – autosecure |  Safe.  Scan.  locate."
  );
  useEffect(() => {
    window.scrollTo({ top: 0, left: 0, behavior: "auto" });
  }, []);

  const scrollToView = () => {
    const element = document.getElementById("rent");
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <>
      <Suspense fallback={<Spinner />}>
        <About scrollToView={scrollToView} />
        <ProductComponent scrollIntoView={scrollToView} />
      </Suspense>
    </>
  );
};
export default MobileSecurity;
