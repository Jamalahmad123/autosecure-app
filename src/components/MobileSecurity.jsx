import { lazy, Suspense, useEffect } from "react";
import Spinner from "./ui/Spinner";

// Lazy Imports
const About = lazy(() => import("./About"));
const ProductComponent = lazy(() => import("./ProductComponent"));

const MobileSecurity = () => {
  useEffect(() => {
    window.scrollTo({ top: 0, left: 0, behavior: "auto" });
  }, []);
  return (
    <>
      <Suspense fallback={<Spinner />}>
        <About link="rent" linkTitle="Rent Now" style="gradient-animation" />
        <ProductComponent />
      </Suspense>
    </>
  );
};
export default MobileSecurity;
