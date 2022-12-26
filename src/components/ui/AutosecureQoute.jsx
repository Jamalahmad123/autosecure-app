import { FaQuoteLeft, FaQuoteRight } from "react-icons/fa";
import { styles } from "../../Styles";
const AutosecureQoute = () => {
  return (
    <section className="pt-8 bg-qoute flex justify-end items-end">
      <div className="flex items-start p-10 bg-black/50 backdrop-blur-lg">
        <FaQuoteLeft className=" min-w-[30px] text-4xl text-white" />
        <h2
          className={`text-[20px] leading-[1.2em] lg:text-[42px] text-white italic font-[200] font-AllianceRegular text-center px-6`}
        >
          Leave the premises immediately - the police have already been alerted!
        </h2>
        <FaQuoteRight className=" min-w-[30px] text-4xl text-white" />
      </div>
    </section>
  );
};

export default AutosecureQoute;
