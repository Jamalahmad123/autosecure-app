import Wrapper from "./ui/Wrapper";
import { styles } from "../Styles";

const AutosecureProcess = ({ title, desc, hasSpace }) => {
  return (
    <section
      className={`bg-clrVeryLightGray ${hasSpace ? "pt-14 pb-6" : "py-14"}`}
    >
      <Wrapper className="px-4">
        <h2
          className={`${styles.headingSecondary} text-clrPrimary mb-8 capitalize`}
        >
          {title}
        </h2>
        <p className="text-clrPrimary text-lg md:text-2xl md:max-w-3xl">
          {desc}
        </p>
      </Wrapper>
    </section>
  );
};

export default AutosecureProcess;
