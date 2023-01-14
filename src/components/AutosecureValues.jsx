import { FaChevronRight } from "react-icons/fa";
import { Link } from "react-router-dom";
import { styles } from "../Styles";
import Wrapper from "./ui/Wrapper";

const AutosecureValues = () => {
  return (
    <section className="py-14 bg-clrVeryLightGray">
      <Wrapper className="space-y-24 px-4">
        <div>
          <h2 className={`${styles.headingSecondary} text-clrPrimary`}>
            Vertrauen. Integrität.
          </h2>
          <p className="text-base md:text-xl xl:text-xl text-clrPrimary md:max-w-2xl my-8">
            Mit autosecure erhalten Sie nicht nur führende technologiebasierte
            Automations-Lösungen, sondern einen aufrichtigen Partner, auf den
            Sie sich jederzeit verlassen können.
          </p>
          <Link
            to="/company/values"
            className="text-xl border-b p-4 border-clrPrimary text-clrPrimary hover:bg-white font-light"
          >
            Unsere Werte
            <FaChevronRight className="inline-block ml-2" />
          </Link>
        </div>
      </Wrapper>
    </section>
  );
};

export default AutosecureValues;
