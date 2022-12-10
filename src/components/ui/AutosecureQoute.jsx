import { FaQuoteLeft, FaQuoteRight } from "react-icons/fa";
import { styles } from "../../Styles";
const AutosecureQoute = () => {
  return (
    <section className="pt-8 bg-qoute flex justify-end items-end">
      <div className="flex items-start p-10 bg-black/50 backdrop-blur-lg">
        <FaQuoteLeft className="text-4xl text-white" />
        <h1
          className={`${styles.headingSecondary} text-white italic font-bold font-AllianceBold px-6`}
        >
          Leave the premises immediately - the police have already been alerted!
        </h1>
        <FaQuoteRight className="text-4xl text-white" />
      </div>
    </section>
  );
};

export default AutosecureQoute;
