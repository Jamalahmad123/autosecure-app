import { Link } from "react-router-dom";
import { FaChevronRight, FaCalendarCheck } from "react-icons/fa";
import { autosecureMeetingGirl } from "../../assets/images";
import Wrapper from "../../components/ui/Wrapper";
import { styles } from "../../Styles";

import TypeWriter from "../../components/ui/TypeWriter";

const Hero = ({ title, desc, benefit1, benefit2, videoPath, isAssist }) => {
  const labels = ["Vertrauen.", "Integrität."];
  return (
    <header className="py-10">
      <Wrapper className="px-4">
        <div className="card lg:items-stretch lg:flex-row bg-transparent gap-6 flex-1">
          <video autoPlay muted className="max-w-lg bg-transparent smooth">
            <source src={videoPath} type="video/mp4" />
            Sorry, your browser doesn't support videos.
          </video>
          <div className="card-body justify-start items-start flex-1">
            <TypeWriter width={120} labels={labels} />
            <h1 className={`${styles.headingPrimary} text-clrPrimary mt-0`}>
              {title}
            </h1>
            <p
              className={`text-xl lg:text-2xl text-clrPrimary font-normal font-AllianceRegular max-w-md`}
            >
              {desc}
            </p>
            <p className="text-xl text-clrPrimary lg:text-2xl font-bold my-6">
              <FaChevronRight className="inline-block text-clrSky" /> {benefit1}
            </p>
            <p className="text-xl text-clrPrimary lg:text-2xl font-bold">
              <FaChevronRight className="inline-block text-clrSky" /> {benefit2}
            </p>
            {isAssist ? (
              <div className="flex items-stretch gap-4 mt-6">
                <img
                  src={autosecureMeetingGirl}
                  alt="girl assistant"
                  className="hidden lg:block w-40 lg:w-28 h-auto object-cover"
                />
                <div className="lg:space-y-10">
                  <p className="hidden lg:block text-lg lg:text-xl font-AllianceBold font-bold">
                    Vereinbaren Sie jetzt Ihren Online-Termin mit Marina Eiling.
                  </p>
                  <Link
                    to="/company/contact"
                    className="btn btn-xl text-white lowercase font-normal text-base border-none bg-clrSky py-4 h-auto justify-center md:text-lg hover:bg-clrPrimary font-AllianceRegular"
                  >
                    Termin vereinbaren{" "}
                    <FaCalendarCheck size={20} className="ml-5" />
                  </Link>
                </div>
              </div>
            ) : (
              <Link
                to="/company/contact"
                className="btn btn-xl text-white lowercase font-normal text-base border-none bg-clrSky py-4 h-auto justify-center md:text-lg hover:bg-clrPrimary font-AllianceRegular mt-6"
              >
                Termin vereinbaren{" "}
                <FaCalendarCheck size={20} className="ml-5" />
              </Link>
            )}
          </div>
        </div>
      </Wrapper>
    </header>
  );
};

/** */

export default Hero;
