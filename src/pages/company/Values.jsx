import { Link } from "react-router-dom";
import { FaCalendarAlt } from "react-icons/fa";
import Wrapper from "../../components/ui/Wrapper";
import { styles } from "../../Styles";

const Values = () => {
  return (
    <>
      <header className="pt-24 pb-14">
        <Wrapper className="px-4">
          <p className="text-lg text-clrPrimary">Our Values.</p>
          <h1 className={`${styles.headingPrimary} text-clrPrimary`}>
            Trust. Integrity.
          </h1>
          <p className={`${styles.textPrimary} my-8 text-clrPrimary`}>
            With autosecure you not only get leading technology-based automation
            solutions, but also a sincere partner that you can rely on at all
            times.
          </p>
          <Link
            to="/company/contact"
            className="link link-neutral text-lg inline-block text-clrPrimary"
          >
            <FaCalendarAlt className="inline-block mr-4" />
            Arrange a consultation
          </Link>
        </Wrapper>
      </header>
    </>
  );
};

export default Values;
