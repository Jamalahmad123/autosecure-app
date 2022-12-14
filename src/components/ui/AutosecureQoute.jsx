import { FaQuoteLeft, FaQuoteRight } from "react-icons/fa";
import { styles } from "../../Styles";
const AutosecureQoute = ({ qoute }) => {
  return (
    <section className="pt-8 bg-qoute flex justify-end items-end">
      <div className="flex items-start px-4 py-6 md:p-10 bg-black/50 backdrop-blur-lg">
        <FaQuoteLeft className="min-w-[1.5rem] md:min-w-[2rem] text-4xl text-white" />
        <h2
          className={`text-[20px] leading-[1.2em] md:text-[2rem] lg:text-[42px] text-white italic font-[200] font-AllianceRegular text-center px-6`}
        >
          {qoute}
        </h2>
        <FaQuoteRight className="min-w-[1.5rem] md:min-w-[2rem] text-4xl text-white" />
      </div>
    </section>
  );
};

export default AutosecureQoute;
