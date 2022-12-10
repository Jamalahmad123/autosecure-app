import Wrapper from "./ui/Wrapper";
import { FaCheck } from "react-icons/fa";

const AutosecureFeaturesList = ({ children, benefits }) => {
  return (
    <Wrapper className="px-4 py-10 space-y-12">
      <ul className="grid grid-cols-1 lg:grid-cols-2 gap-4">
        {benefits.map((benefit, i) => (
          <li className="flex items-start p-3 gap-4" key={i}>
            <FaCheck className="min-w-[25px] text-2xl text-clrSky" />
            <p className="text-lg md:text-xl lg:text-2xl text-clrPrimary">
              {benefit}
            </p>
          </li>
        ))}
      </ul>
      {children}
    </Wrapper>
  );
};

export default AutosecureFeaturesList;
