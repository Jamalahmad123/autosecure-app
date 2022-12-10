import {
  FaVideo,
  FaClock,
  FaEuroSign,
  FaCloud,
  FaCog,
  FaShieldVirus,
} from "react-icons/fa";
import Wrapper from "../../components/ui/Wrapper";

const Orbit = () => {
  return (
    <section className="py-24 grid place-items-center">
      <Wrapper className="px-4">
        <div className="p-12 bg-red-500 border-2 border-yellow-400 aspect-square rounded-full w-[500px] h-[500px]">
          <div className="w-48 -translate-x-8 -translate-y-8">
            <h1>Hello World</h1>
          </div>
          <ul className="relative">
            <li className="p-6 bg-white text-black text-xl rounded-full">
              <FaClock />
            </li>
            <li className="p-6 bg-white text-black text-xl rounded-full">
              <FaVideo />
            </li>
            <li className="p-6 bg-white text-black text-xl rounded-full">
              <FaCloud />
            </li>
            <li className="p-6 bg-white text-black text-xl rounded-full">
              <FaEuroSign />
            </li>
            <li className="p-6 bg-white text-black text-xl rounded-full">
              <FaCog />
            </li>
            <li className="p-6 bg-white text-black text-xl rounded-full">
              <FaShieldVirus />
            </li>
          </ul>
        </div>
      </Wrapper>
    </section>
  );
};

export default Orbit;
