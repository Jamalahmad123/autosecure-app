import { FaChevronRight } from "react-icons/fa";
import Wrapper from "../../components/ui/Wrapper";
import { styles } from "../../Styles";

const Hero = ({ title, desc }) => {
  return (
    <header className="py-16">
      <Wrapper className="px-4 space-y-12">
        <div>
          <h1 className={`${styles.headingPrimary} text-clrPrimary`}>
            {title}
          </h1>
          <p className={`${styles.textPrimary} text-clrPrimary`}>{desc}</p>
        </div>
      </Wrapper>
    </header>
  );
};

export default Hero;
