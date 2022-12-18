import { FaChevronRight, FaCalendarCheck } from "react-icons/fa";
import { Link } from "react-router-dom";

import { styles } from "../Styles";
import Wrapper from "./ui/Wrapper";

const PagesHero = ({ title, desc, benefit1, benefit2, img }) => {
  return (
    <header className="py-10">
      <Wrapper className="px-4">
        <div className="card lg:items-stretch lg:flex-row bg-transparent gap-6">
          <figure>
            <img
              src={img}
              alt="autosecure-mobile"
              className="w-full lg:w-[45rem] h-auto rounded-lg object-cover"
            />
          </figure>
          <div className="card-body justify-start items-start space-y-6">
            <h1 className={`${styles.headingPrimary} text-clrPrimary`}>
              {title}
            </h1>
            <p className={`${styles.textPrimary} text-clrPrimary`}>{desc}</p>
            <p className="text-xl text-clrPrimary lg:text-2xl font-bold">
              <FaChevronRight className="inline-block text-clrSky" /> {benefit1}
            </p>
            <p className="text-xl text-clrPrimary lg:text-2xl font-bold">
              <FaChevronRight className="inline-block text-clrSky" /> {benefit2}
            </p>
            <Link
              to="/company/contact"
              className="btn text-white lowercase font-normal text-base border-none bg-clrSky py-4 h-auto justify-center md:text-lg hover:bg-clrPrimary font-AllianceRegular"
            >
              make an appointment <FaCalendarCheck size={20} className="ml-5" />
            </Link>
          </div>
        </div>
      </Wrapper>
    </header>
  );
};

export default PagesHero;
