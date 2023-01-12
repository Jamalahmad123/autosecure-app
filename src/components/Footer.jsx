import { lazy, Suspense } from "react";
import { Link } from "react-router-dom";
import {
  autosecure_hipe_award,
  hikvision_logo,
  logo,
  premium_leaders_club_logo,
  zukunftswerkstatt_logo,
} from "../assets/images";
import { styles } from "../Styles";
import { navLinks, solutionsDropdownLinks } from "../data/constantData";

import Wrapper from "./ui/Wrapper";
import LazyImage from "./ui/LazyImage";

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
        <div className="footer place-content-center md:place-content-between">
          <div>
            <Link
              to={solutionsDropdownLinks.link}
              className="text-lg font-semibold text-clrPrimary md:text-xl"
            >
              {solutionsDropdownLinks.name}
            </Link>
            {solutionsDropdownLinks.pages.map((item) => (
              <ul key={item.id} className="mt-8">
                <li>
                  {item?.link ? (
                    <Link
                      to={item.link}
                      className="text-base md:text-lg font-semibold text-clrPrimary"
                    >
                      {item.name}
                    </Link>
                  ) : (
                    <h3 className="text-lg font-semibold text-clrPrimary">
                      {item.name}
                    </h3>
                  )}
                </li>
                <ul className="pl-3 space-y-4 mt-6">
                  {item.subPages.map((item) => (
                    <li key={item.id}>
                      <Link to={item.link} className="text-clrPrimary">
                        {item.name}
                      </Link>
                    </li>
                  ))}
                </ul>
              </ul>
            ))}
          </div>
          {navLinks.map((item) => (
            <div key={item.id}>
              <Link
                to={item.link}
                className="text-lg font-semibold text-clrPrimary md:text-xl"
              >
                {item.name}
              </Link>
              <ul className="mt-8 space-y-4">
                {item.subPages.map((item) => (
                  <li key={item.id}>
                    <Link to={item.link} className="text-clrPrimary">
                      {item.name}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
          <div className="">
            <div className="flex flex-col gap-4">
              <Link
                to="/legal"
                className="text-lg font-semibold text-clrPrimary text-center md:text-xl"
              >
                legal
              </Link>
              {legals.map((legal, i) => (
                <Link to={`legal/${legal}`} className="text-clrPrimary" key={i}>
                  {legal}
                </Link>
              ))}
            </div>
          </div>
        </div>
      </Wrapper>
    </footer>
  );
};

export default Footer;
