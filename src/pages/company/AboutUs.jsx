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

const AboutUs = () => {
  useEffect(() => {
    window.scrollTo({ top: 0, left: 0, behavior: "auto" });
  }, []);
  return (
    <>
      <header className="pt-24 pb-14 bg-clrVeryLightGray">
        <Wrapper className="px-4">
          <p className="text-clrPrimary text-lg mb-2">About us.</p>
          <h1 className={`text-clrPrimary ${styles.headingPrimary}`}>
            We love technology and smart <br className="hidden md:block" />{" "}
            automation.
          </h1>
          <div className="space-y-6 mt-12">
            <p className={`${styles.textPrimary} text-clrPrimary`}>
              autosecure is your specialist for leading technology-based
              automation solutions for the automotive and mobility industry.
            </p>
            <p className="text-base text-clrPrimary md:max-w-2xl leading-6 md:text-lg">
              We help car dealerships, car parks, vehicle rental companies and
              logistics companies to optimize processes on the company premises
              and significantly reduce cost structures with our future-oriented{" "}
              <Link to="/" className="font-bold text-xl hover:opacity-90">
                automation solutions.
              </Link>
            </p>
            <p className="text-base text-clrPrimary md:max-w-2xl leading-6 md:text-lg">
              With our{" "}
              <Link
                to="/solutions/security-solutions"
                className="font-bold text-xl hover:opacity-90"
              >
                autosecure SAVE principle
              </Link>{" "}
              and our innovative technology, we ensure that your valuables are
              not damaged. So you do not have to worry about the security of
              your company and save costs at the same time. autosecure assumes
              responsibility for{" "}
              <Link
                to="/solutions/security-solutions"
                className="font-bold text-xl hover:opacity-90"
              >
                security
              </Link>{" "}
              on company premises for its customers and offers{" "}
              <Link
                to="/solutions/security-solutions"
                className="font-bold text-xl hover:opacity-90"
              >
                100% protection for its customers' assets.
              </Link>
            </p>
            <p className="text-base text-clrPrimary md:max-w-2xl leading-6 md:text-lg">
              In addition to{" "}
              <Link
                to="/solutions/security-solutions"
                className="font-bold text-xl hover:opacity-90"
              >
                technology-based security
              </Link>{" "}
              solutions, autosecure also offers smart solutions in the area of{" "}
              <Link
                to="/solutions/scanner-solutions"
                className="font-bold text-xl hover:opacity-90"
              >
                ​​scan
              </Link>{" "}
              and{" "}
              <Link
                to="/solutions/localization-solutions"
                className="font-bold text-xl hover:opacity-90"
              >
                localization technologies.
              </Link>
            </p>
            <p className="font-bold text-lg md:text-xl text-clrPrimary">
              We lower your costs. And increase your sales. Promised.
            </p>
            <Link
              to="/company-contact"
              className="link link-neutral text-lg inline-block text-clrPrimary"
            >
              <FaCalendarAlt className="inline-block mr-4" />
              Arrange a consultation
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
