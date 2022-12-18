import { FaChevronRight } from "react-icons/fa";
import { Link } from "react-router-dom";
import { styles } from "../Styles";
import Wrapper from "./ui/Wrapper";

const AutosecureCareerDialoge = () => {
  return (
    <section className="py-14 bg-clrLightGray">
      <Wrapper className="px-4">
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
