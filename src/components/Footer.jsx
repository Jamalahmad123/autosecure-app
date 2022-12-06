import { Link } from "react-router-dom";
import {
  autosecure_hipe_award,
  hikvision_logo,
  logo,
  premium_leaders_club_logo,
  zukunftswerkstatt_logo,
} from "../assets/images";
import { styles } from "../Styles";
import { navLinks } from "../data/constantData";

import Wrapper from "./ui/Wrapper";

const Footer = () => {
  const awards = [
    hikvision_logo,
    zukunftswerkstatt_logo,
    autosecure_hipe_award,
    premium_leaders_club_logo,
  ];

  const legals = ["imprint", "privacy", "conditions"];

  return (
    <footer className="py-14">
      <Wrapper className="space-y-20 px-4">
        <div className={`${styles.flexCenter} flex-col gap-8`}>
          <figure>
            <img
              src={logo}
              alt="logo"
              className="w-36 mx-auto md:max-w-xs md:w-auto mb-8"
            />
            <h2 className={`${styles.headingSecondary} text-clrPrimary`}>
              Trust. Integrity.
            </h2>
          </figure>
          <p className="text-base md:text-xl font-medium text-clrPrimary text-center lg:max-w-xl">
            autosecure is your specialist for leading technology-based
            automation solutions for the automotive and mobility industry.
          </p>
        </div>
        <div className="grid grid-cols-2 gap-6 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-4 place-items-center md:gap-16">
          {awards.map((award, i) => (
            <figure key={i}>
              <img
                src={award}
                alt={awards}
                className="w-64 md:max-w-[200px]"
                loading="lazy"
              />
            </figure>
          ))}
        </div>
        <div className="footer">
          {navLinks.map((item) => (
            <div key={item.id}>
              <h3 className="text-lg font-semibold text-clrPrimary text-center">
                {item.name}
              </h3>
              {item.subPages.map((item) => (
                <Link
                  to={`/${item.link}`}
                  className="text-clrPrimary text-center"
                  key={item.id}
                >
                  {item.name}
                </Link>
              ))}
            </div>
          ))}
          <div>
            <h3 className="text-lg font-semibold text-clrPrimary text-center">
              legal
            </h3>
            {legals.map((legal, i) => (
              <Link className="text-clrPrimary text-center" key={i}>
                {legal}
              </Link>
            ))}
          </div>
        </div>
      </Wrapper>
    </footer>
  );
};

export default Footer;
