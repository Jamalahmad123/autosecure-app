import { Link } from "react-router-dom";
import { logo_sm } from "../assets/images";

import { styles } from "../Styles";
import Wrapper from "./ui/Wrapper";

const SecuritySolutionCard = ({
  title,
  desc,
  btnTitle,
  path,
  videoPath,
  id,
  subPages,
}) => {
  return (
    <section className="py-12 bg-clrVeryLightGray">
      <Wrapper className="px-4">
        <div className="lg:max-w-4xl space-y-8">
          <div>
            <video
              autoPlay
              muted
              preload="metadata"
              className="lg:max-w-4xl border-none"
              width="100%"
              height="100%"
            >
              <source src={videoPath} type="video/mp4" />
              Sorry, your browser doesn't support videos.
            </video>
            <p className="text-clrSky text-lg font-bold font-AllianceBold mt-4">
              Lösung {id}
            </p>
          </div>
          <h2 className={`${styles.headingSecondary} text-clrPrimary`}>
            {title}
          </h2>
          <p className="text-base text-clrPrimary">{desc}</p>
          <div className="mt-4 dropdown z-[999]">
            <button
              className="btn font-normal capitalize text-white bg-clrPrimary hover:bg-clrSky border-none gap-6 focus:bg-clrSky focus:rounded-b-none"
              tabIndex={id}
            >
              <img
                src={logo_sm}
                alt="logo"
                className="w-4 pointer-events-none"
              />
              <span className="pointer-events-none">{btnTitle}</span>
            </button>
            <ul
              tabIndex={id}
              className="dropdown-content menu shadow z-[999] bg-clrPrimary flex-row right-0 rounded-b-md"
            >
              {subPages.map((item) => (
                <li key={item.id} className="hover:bg-white capitalize w-full">
                  <Link
                    to={item.link}
                    className="text-sm text-white hover:text-clrPrimary smooth hover:bg-white relative z-[999]"
                  >
                    {item.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </Wrapper>
    </section>
  );
};

export default SecuritySolutionCard;
