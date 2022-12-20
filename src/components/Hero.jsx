import { lazy, Suspense } from "react";
import { Link } from "react-router-dom";
import { FaCalendarCheck, FaCalendarAlt } from "react-icons/fa";
import Wrapper from "./ui/Wrapper";
import { styles } from "../Styles";

const ParticlesBackground = lazy(() => import("./ui/ParticlesBackground"));
// import ParticlesBackground from "./ui/ParticlesBackground";

const Hero = ({ title, desc, promise, isLink }) => {
  return (
    <>
      <header className="pt-28 pb-14 relative bg-clrVeryLightGray z-[1]">
        <Suspense fallback={<div />}>
          <ParticlesBackground id="particles-container" />
        </Suspense>
        <Wrapper className="space-y-10 md:space-y-12 px-4">
          <h1
            className={`${styles.headingPrimary} text-clrPrimary font-AllianceBold`}
          >
            {title}
          </h1>
          <p className={`${styles.textPrimary} text-clrPrimary`}>{desc}</p>
          {promise && (
            <p className="font-bold text-lg md:text-xl text-clrPrimary font-AllianceRegular">
              {promise}
            </p>
          )}
          {isLink ? (
            <Link
              to="/company/contact"
              className="link link-neutral text-lg items-center inline-flex text-clrPrimary"
            >
              <FaCalendarAlt className="inline-block mr-4  font-AllianceRegular" />
              Arrange a consultation
            </Link>
          ) : (
            <Link
              to="/company/contact"
              className="btn text-white lowercase font-normal text-base border-none bg-clrSky py-4 h-auto justify-center md:text-lg hover:bg-clrPrimary font-AllianceRegular"
            >
              make an appointment <FaCalendarCheck size={20} className="ml-5" />
            </Link>
          )}
        </Wrapper>
      </header>
    </>
  );
};

export default Hero;
