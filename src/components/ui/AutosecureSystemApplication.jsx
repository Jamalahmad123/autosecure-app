import { FaCheck } from "react-icons/fa";
import Wrapper from "./Wrapper";
const AutosecureSystemApplication = ({ application }) => {
  return (
    <section className="py-14 bg-clrVeryLightGray">
      <Wrapper className="px-4">
        <div className="flex justify-start items-start gap-8 flex-col lg:flex-row lg:justify-between lg:items-start">
          <h2 className="text-xl lg:text-3xl font-bold font-AllianceBold flex-1">
            {application.title}
          </h2>
          <div className="space-y-4 flex-1">
            {application.features.map((item, i) => (
              <p
                className="flex items-start gap-4 text-clrPrimary flex-1"
                key={i}
              >
                <FaCheck className="min-w-[20px]" />
                {item}
              </p>
            ))}
          </div>
        </div>
      </Wrapper>
    </section>
  );
};

export default AutosecureSystemApplication;
