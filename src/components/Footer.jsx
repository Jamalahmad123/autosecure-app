import { lazy, Suspense } from "react";
import { Link } from "react-router-dom";
import { FaCaretDown } from "react-icons/fa";
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
        <div className="footer place-content-center md:place-content-between pb-14">
          <div className="space-y-8">
            <Link
              to={`${solutionsDropdownLinks.link}`}
              className="text-lg font-semibold text-clrPrimary md:text-xl"
            >
              {solutionsDropdownLinks.name}
            </Link>
            <div className="flex flex-col gap-5">
              {solutionsDropdownLinks.pages.map((item) => (
                <div className="dropdown" key={item.id}>
                  <label
                    className={`text-clrPrimary font-semibold smooth flex gap-4 items-center justify-between cursor-pointer outline-none`}
                    tabIndex={item.id}
                  >
                    {item.name}
                    <FaCaretDown />
                  </label>
                  <ul
                    tabIndex={item.id}
                    className="dropdown-content menu shadow z-[999] bg-white rounded-lg flex-row right-0"
                  >
                    {item.subPages.map((item) => (
                      <li
                        key={item.id}
                        className="hover:bg-clrSky capitalize w-full"
                      >
                        <Link
                          to={item.link}
                          className="text-sm text-clrPrimary hover:bg-transparent hover:bg-clrSky smooth hover:text-white relative z-[999]"
                        >
                          {item.name}
                        </Link>
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
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
                className="text-lg font-semibold text-clrPrimary md:text-xl"
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
