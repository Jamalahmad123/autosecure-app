import { FaChevronRight } from "react-icons/fa";
import Wrapper from "../../components/ui/Wrapper";
import { styles } from "../../Styles";

const Hero = ({ title, desc, list }) => {
  return (
    <header className="py-14">
      <Wrapper className="px-4 space-y-12">
        <div>
          <h1 className={`${styles.headingPrimary} text-clrPrimary`}>
            {title}
          </h1>
          <p className={`${styles.textPrimary} text-clrPrimary`}>{desc}</p>
        </div>
        <div className={`items-start justify-start lg:${styles.flexCenter}`}>
          <ul className={`flex justify-center flex-col gap-6`}>
            {list.map((l, i) => (
              <li className={`${styles.flex} text-clrPrimary `} key={i}>
                <FaChevronRight className="mr-6" />
                {l}
              </li>
            ))}
          </ul>
        </div>
      </Wrapper>
    </header>
  );
};

export default Hero;
