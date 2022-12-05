import { FaChevronRight, FaCheck } from "react-icons/fa";
import Wrapper from "./ui/Wrapper";
import { styles } from "../Styles";
import { autosecureMobile, autosecureTower } from "../assets/images";
import { Link } from "react-router-dom";
import TypeWriter from "./ui/TypeWriter";
import ParticlesBackground from "./ui/ParticlesBackground";

const options = {
  fpsLimit: 120,
  fullScreen: {
    enable: false,
    zIndex: -999,
  },
  background: {
    color: "#000",
  },
  interactivity: {
    detectsOn: "canvas",
    events: {
      resize: true,
    },
  },
  particles: {
    color: {
      value: "#0A84FF",
    },
    links: {
      color: "#D1D1D6",
      distance: 250,
      enable: true,
      opacity: 0.4,
      width: 1,
    },
    collisions: {
      enable: true,
    },
    move: {
      directions: "none",
      enable: true,
      outModes: {
        default: "bounce",
      },
      random: false,
      speed: 1,
      straight: false,
    },
    number: {
      density: {
        enable: true,
        area: 800,
      },
      value: 30,
    },
    opacity: {
      value: 0.4,
    },
    shape: {
      type: "circle",
    },
    size: {
      value: { min: 1, max: 2 },
    },
  },
};

const About = () => {
  return (
    <>
      <section className="py-14 relative">
        <ParticlesBackground id="about" options={options} />
        <Wrapper className="px-4 z-50">
          <TypeWriter />
          <header>
            <h2 className={`${styles.headingSecondary} text-white`}>
              Active mobile video surveillance of the{" "}
              <span className="text-clrSky">latest generation.</span>
            </h2>
          </header>
          <div
            className={`${styles.flexCenter} flex-col gap-8 lg:gap-32 lg:flex-row mt-4`}
          >
            <figure>
              <img
                src={autosecureTower}
                alt="autosecure-mobile"
                className="h-[60vh]"
              />
            </figure>
            <div className="space-y-10">
              <h2 className={`${styles.headingSecondary} text-white mt-5`}>
                Mobile <br /> Security <br /> Tower
              </h2>
              <div className="space-y-5">
                <p className="text-xl text-white lg:text-2xl font-bold">
                  <FaChevronRight className="inline-block text-clrSky" /> 100%
                  sure.
                </p>
                <p className="text-xl text-white lg:text-2xl font-bold">
                  <FaChevronRight className="inline-block text-clrSky" /> 100%
                  flexible.
                </p>
                <p className="text-xl text-white lg:text-2xl font-bold">
                  <FaChevronRight className="inline-block text-clrSky" /> 100%
                  configurable.
                </p>
                <Link className="btn text-white btn-lg gap-2 border-none bg-clrSkyDark hover:bg-clrSky">
                  learn more
                  <FaChevronRight />
                </Link>
              </div>
            </div>
          </div>
          <div className={`${styles.flexBtw} flex-col lg:flex-row gap-8 mt-12`}>
            <div className="space-y-8">
              <div className="flex gap-3">
                <FaCheck className="text-clrSky min-w-[25px]" />
                <p className="text-lg font-medium lg:text-xl text-white flex-shrink">
                  Active mobile video surveillance with live perpetrator address
                  to reduce access time to a minimum for maximum deterrence and
                  minimum damage expenditure
                </p>
              </div>

              <div className="flex gap-3">
                <FaCheck className="text-clrSky min-w-[25px]" />
                <p className="text-lg font-medium lg:text-xl text-white flex-shrink">
                  Configurable camera equipment, variable and individual
                  depending on the requirement
                </p>
              </div>

              <div className="flex gap-3">
                <FaCheck className="text-clrSky min-w-[25px]" />
                <p className="text-lg font-medium lg:text-xl text-white flex-shrink">
                  Precise alarm thanks to artificial intelligence in the cameras
                  with a real alarm rate of 95%
                </p>
              </div>
            </div>

            <figure>
              <img src={autosecureMobile} alt="autosecure-mobile" />
            </figure>
          </div>
        </Wrapper>
      </section>
    </>
  );
};

export default About;

/* */
