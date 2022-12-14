import { lazy, Suspense, useEffect } from "react";
import { FaCalendarAlt } from "react-icons/fa";
import { Link } from "react-router-dom";
// import Features from "../../components/Features";
// import IndustrySectorSolutions from "../../components/IndustrySectorSolutions";

// lazy imports
const Features = lazy(() => import("../../components/Features"));
const IndustrySectorSolutions = lazy(() =>
  import("../../components/IndustrySectorSolutions")
);

import Wrapper from "../../components/ui/Wrapper";
import { useTitle } from "../../hooks/customHooks";
import { styles } from "../../Styles";

const Vision = () => {
  useTitle("Vision & Mission – autosecure | Secure. Scan. Locate.");

  useEffect(() => {
    window.scrollTo({ top: 0, left: 0, behavior: "auto" });
  }, []);
  return (
    <>
      <header className="pt-24 pb-14">
        <Wrapper className="space-y-24 px-4">
          <div>
            <p className="text-lg text-clrPrimary">Vision.</p>
            <h1
              className={`${styles.headingPrimary} text-clrPrimary mt-4 mb-14`}
            >
              We want to be the leading ecosystem for automation solutions for
              the automotive and mobility industry.
            </h1>
            <Link
              to="/company/contact"
              className="link text-clrPrimary link-neutral text-lg inline-block"
            >
              <FaCalendarAlt className="inline-block mr-4" />
              Arrange a consultation
            </Link>
          </div>
          <div>
            <p className="text-lg text-slate-700">Mission.</p>
            <h1
              className={`${styles.headingPrimary} text-clrPrimary mt-4 mb-14`}
            >
              With our automation solutions, we help our customers to optimize
              their processes and significantly reduce cost structures.
            </h1>
            <Link
              to="/company/contact"
              className="link text-clrPrimary link-neutral text-lg inline-block"
            >
              <FaCalendarAlt className="inline-block mr-4" />
              Arrange a consultation
            </Link>
          </div>
        </Wrapper>
      </header>
      <Suspense fallback={<div className="min-h-screen" />}>
        <Features />
        <IndustrySectorSolutions />
      </Suspense>
    </>
  );
};

/*


Mission.

*/

export default Vision;
