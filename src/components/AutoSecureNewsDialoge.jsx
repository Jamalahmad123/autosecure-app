import { FaChevronRight } from "react-icons/fa";
import { Link } from "react-router-dom";
import { styles } from "../Styles";
import Wrapper from "./ui/Wrapper";

const AutoSecureNewsDialoge = () => {
  return (
    <section className="py-14 bg-clrLightGray">
      <Wrapper className="px-4">
        <h2 className={`${styles.headingSecondary} text-clrPrimary mb-8`}>
          News about our projects and <br className="hidden lg:block" /> our
          company.
        </h2>
        <Link className="text-xl border-b p-4 border-clrPrimary text-clrPrimary hover:bg-white">
          show all news
          <FaChevronRight className="inline-block text-clrPrimary ml-2" />
        </Link>
      </Wrapper>
    </section>
  );
};

export default AutoSecureNewsDialoge;
