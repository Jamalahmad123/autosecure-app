import Wrapper from "./ui/Wrapper";
import { styles } from "../Styles";

const AutosecureProcess = () => {
  return (
    <section className="py-14">
      <Wrapper className="px-4">
        <h2
          className={`${styles.headingSecondary} text-clrPrimary mb-8 capitalize`}
        >
          our process
        </h2>
        <p className="text-clrPrimary text-lg md:text-2xl md:max-w-3xl">
          We advise you holistically for your security concept. Our technicians
          come to you on site - nationwide - and install the system. Our
          certified control center monitors your property. And in the event of
          an alarm, our operators intervene directly in the situation with an
          audio message and dispatch the local security forces.
        </p>
      </Wrapper>
    </section>
  );
};

export default AutosecureProcess;
