import { lazy, Suspense, useEffect } from "react";
import Spinner from "../../components/ui/Spinner";
// import Achievements from "../../components/Achievements";
import Wrapper from "../../components/ui/Wrapper";
import { styles } from "../../Styles";

const Achievements = lazy(() => import("../../components/Achievements"));

const News = () => {
  useEffect(() => {
    window.scrollTo({ top: 0, left: 0, behavior: "auto" });
  }, []);
  return (
    <>
      <header className="pt-24 pb-14 bg-clrVeryLightGray">
        <Wrapper className="px-4">
          <h1 className={`${styles.headingPrimary} text-slate-800`}>
            News about our projects <br className="hidden md:block" /> and our
            company.
          </h1>
        </Wrapper>
      </header>
      <Suspense fallback={<Spinner />}>
        <Achievements />
      </Suspense>
    </>
  );
};

export default News;
