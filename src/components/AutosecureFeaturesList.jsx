import Wrapper from "./ui/Wrapper";
import { FaCheck } from "react-icons/fa";
import { autosecureVehicle } from "../assets/images";

const AutosecureFeaturesList = ({ benefits }) => {
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
      <figure>
        <img
          src={autosecureVehicle}
          alt="autosecure-vehicle-parking"
          className="w-full h-auto rounded-xl"
        />
      </figure>
    </Wrapper>
  );
};

export default AutosecureFeaturesList;
