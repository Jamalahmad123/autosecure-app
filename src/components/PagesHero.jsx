import { FaChevronRight, FaCalendarCheck } from "react-icons/fa";
import { Link } from "react-router-dom";

import { styles } from "../Styles";
import Wrapper from "./ui/Wrapper";

const PagesHero = ({ title, desc, benefit1, benefit2, img }) => {
  return (
    <header className="py-10">
      <Wrapper className="px-4">
        <div className="card lg:items-stretch lg:flex-row bg-transparent gap-6">
          <figure className="">
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
            <Link className="btn text-white lowercase font-normal text-base border-none bg-clrSky py-4 h-auto justify-center md:text-lg hover:bg-clrPrimary font-AllianceRegular">
              make an appointment <FaCalendarCheck size={20} className="ml-5" />
            </Link>
          </div>
        </div>
      </Wrapper>
    </header>
  );
};

export default PagesHero;

/*
<div className="card lg:card-side bg-white shadow-xl">
          <figure className="p-2">
            <img
              src={booking}
              alt="book an appointment"
              className="rounded-xl"
              loading="lazy"
            />
          </figure>
          <div className="card-body justiy-start items-start">
            <h2 className={`text-xl lg:text-3xl font-bold text-clrPrimary`}>
              Let's talk.
            </h2>
            <p className="text-clrPrimary text-base lg:text-lg">
              Real added value through process automation from autosecure.
              Arrange your free consultation appointment now.
            </p>
            <div className="card-actions mt-6 lg:mt-0">
              <Link className="btn lowercase bg-clrSky text-white border-none hover:bg-clrPrimary lg:text-lg font-normal">
                make an appointment{" "}
                <FaCalendarCheck size={20} className="ml-5" />
              </Link>
            </div>
          </div>
        </div>
*/
