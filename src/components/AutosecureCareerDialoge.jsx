import { FaChevronRight } from "react-icons/fa";
import { Link } from "react-router-dom";
import { styles } from "../Styles";
import TypeWriter from "./ui/TypeWriter";
import Wrapper from "./ui/Wrapper";
import { jobs } from "../data/constantData";

const AutosecureCareerDialoge = () => {
  const labels = jobs.map((job) => job.title);

  return (
    <section className="py-14 bg-clrVeryLightGray">
      <Wrapper className="px-4">
        <TypeWriter width={140} labels={labels} />
        <h2 className={`${styles.headingSecondary} text-clrPrimary`}>
          Technology and process <br className="hidden lg:block" /> automation
          are in our DNA.
        </h2>
        <p className="text-base md:text-xl xl:text-xl text-clrPrimary md:max-w-2xl my-8">
          Support our team and our clients with leading solutions to achieve
          real added value.
        </p>
        <Link
          to="/company/career"
          className="text-xl border-b p-4 border-clrPrimary text-clrPrimary hover:bg-white"
        >
          start career
          <FaChevronRight className="inline-block ml-2" />
        </Link>
      </Wrapper>
    </section>
  );
};

export default AutosecureCareerDialoge;
