import { lazy, Suspense, useEffect } from "react";
import { FaFileAlt } from "react-icons/fa";
import { Link } from "react-router-dom";
import Spinner from "../../components/ui/Spinner";
import Wrapper from "../../components/ui/Wrapper";
import { useTitle } from "../../hooks/customHooks";
import { styles } from "../../Styles";

// import JobsList from "./JobsList";
// Lazy Component
const JobsList = lazy(() => import("./JobsList"));

const Career = () => {
  useTitle("Careers – autosecure | Secure. Scan. Locate.");

  useEffect(() => {
    window.scrollTo({ top: 0, left: 0, behavior: "auto" });
  }, []);
  return (
    <>
      <header className="pt-24 pb-14">
        <Wrapper className="px-4 space-y-8">
          <div>
            <p className="text-lg text-clrPrimary">Karriere.</p>
            <h1 className={`${styles.headingPrimary} text-clrPrimary`}>
              Jetzt durchstarten bei autosecure.
            </h1>
          </div>
          <p className="text-lg font-normal md:text-[22px] md:leading-[3rem] lg:text-[35px] md:max-w-3xl font-AllianceRegular text-clrPrimary">
            autosecure ist der Spezialist für führende technologiebasierte
            Automations-Lösungen für die Automobil- und Mobilitätsindustrie.
          </p>
          <h2 className="text-clrPrimary text-lg lg:text-2xl font-AllianceBold font-bold lg:max-w-4xl">
            Unterstützen Sie unser Team in Münster und unsere bundesweiten
            Klienten mit führenden Lösungen echte Mehrwerte zu erzielen.
          </h2>
          <Link
            to="/company/career/job/apply-now"
            className="link link-neutral text-lg inline-block text-clrPrimary"
          >
            <FaFileAlt className="inline-block mr-4" />
            Zum Bewerbungsformluar
          </Link>
        </Wrapper>
      </header>
      <Suspense fallback={<div className="min-h-screen" />}>
        <JobsList />
      </Suspense>
    </>
  );
};

export default Career;
