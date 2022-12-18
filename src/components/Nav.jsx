import { NavLink, Link, useLocation } from "react-router-dom";
import {
  FaAt,
  FaPhoneVolume,
  FaCaretDown,
  FaGripLines,
  FaUserLock,
  FaTimes,
} from "react-icons/fa";
import Wrapper from "./ui/Wrapper";
import { logo } from "../assets/images";
import { navLinks } from "../data/constantData";
import { styles } from "../Styles";
import { useEffect, useRef, useState } from "react";

const Nav = () => {
  const [toggle, setToggle] = useState(false);
  const location = useLocation();
  const navRef = useRef();

  function handleToggle() {
    setToggle((prev) => !prev);
  }

  useEffect(() => {
    setToggle(false);
  }, [location]);

  const legals = ["imprint", "privacy", "conditions"];

  return (
    <nav className="bg-white z-[999]">
      <Wrapper className="navbar justify-between px-4">
        <div>
          <Link to="/">
            <img
              src={logo}
              alt="logo"
              className="w-36 md:w-48 max-w-[200px] object-cover"
            />
          </Link>
        </div>
        <div className="navbar-center hidden lg:flex">
          <ul className="menu menu-horizontal p-0 z-[999]">
            {navLinks.map((item) => (
              <li
                tabIndex={item.id}
                key={item.id}
                className="group nav-link z-[999]"
              >
                <NavLink
                  to={`/${item.link}`}
                  className="text-clrPrimary font-semibold relative hover:bg-transparent smooth group-hover:text-clrSky capitalize"
                >
                  {item.name}
                  <FaCaretDown />
                </NavLink>
                <ul className="bg-white">
                  {item.subPages.map((item) => (
                    <li key={item.id} className="hover:bg-clrSky">
                      <NavLink
                        to={`/${item.link}`}
                        className="text-clrPrimary hover:bg-transparent hover:bg-clrSky smooth hover:text-white z-[999]"
                      >
                        {item.name}
                      </NavLink>
                    </li>
                  ))}
                </ul>
              </li>
            ))}
          </ul>
        </div>
        <div className={`${styles.flex} gap-4 sm:gap-8`}>
          <Link
            onClick={(e) => {
              e.preventDefault();
              window.location.href = "mailto:info@autosecure.net";
              // location.pathname = "mailto:info@autosecure.net";
            }}
            className="text-clrDarkGray hover:text-clrSky text-base sm:text-lg md:text-2xl z-[999]"
          >
            <FaAt />
          </Link>
          <NavLink
            onClick={(e) => {
              e.preventDefault();
              window.location.href = "tel:+492512373370";
            }}
            className="text-clrDarkGray block hover:text-clrSky text-base sm:text-lg md:text-2xl"
          >
            <FaPhoneVolume />
          </NavLink>
          <NavLink className="text-clrDarkGray hover:text-clrSky text-base sm:text-lg md:text-2xl lg:hidden">
            <FaUserLock />
          </NavLink>
          <button className="hidden lg:btn btn-sm lg:text-white bg-clrPrimary md:text-base text-sm">
            login
          </button>
          <button
            className="lg:hidden flex items-center justify-center gap-1 text-white bg-clrPrimary text-sm font-light p-2 sm:text-lg sm:font-normal md:text-xl rounded-md hover:bg-clrSky"
            onClick={() => setToggle((prev) => !prev)}
          >
            <FaGripLines />
            menu
          </button>
        </div>
        <div
          className={`fixed top-0 left-0 bg-white w-full h-[0%] ${
            toggle ? "h-[100%] z-[999] example" : "h-[0%] -z-50"
          } smooth overflow-auto flex items-start`}
        >
          <div className="grid grid-cols-1 sm:grid-cols-2 px-10 relative w-full items-stretch py-20 gap-6">
            {navLinks.map((item) => (
              <div key={item.id} className="text-center">
                <NavLink
                  to={`/${item.link}`}
                  className="text-lg font-semibold text-clrPrimary text-center inline-block mb-4"
                  ref={navRef}
                >
                  {item.name}
                </NavLink>
                <div className="flex flex-col gap-2">
                  {item.subPages.map((item) => (
                    <NavLink
                      to={`/${item.link}`}
                      className="text-clrPrimary text-center bg-gray-50 p-2 hover:bg-white smooth"
                      key={item.id}
                      ref={navRef}
                    >
                      {item.name}
                    </NavLink>
                  ))}
                </div>
              </div>
            ))}
            <div>
              <h3 className="text-lg font-semibold text-clrPrimary text-center mb-4">
                legal
              </h3>
              <div className="flex flex-col gap-2">
                {legals.map((legal, i) => (
                  <NavLink
                    className="text-clrPrimary text-center bg-gray-50 p-2 hover:bg-white smooth"
                    key={i}
                  >
                    {legal}
                  </NavLink>
                ))}
              </div>
            </div>
          </div>
          <button
            className="absolute top-6 right-6 font-normal"
            onClick={handleToggle}
          >
            <FaTimes size={30} />
          </button>
        </div>
      </Wrapper>
    </nav>
  );
};

export default Nav;
