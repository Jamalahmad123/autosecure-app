import { FaChevronRight, FaCheck } from "react-icons/fa";
import Wrapper from "./ui/Wrapper";
import { styles } from "../Styles";
import { autosecureMobile } from "../assets/images";
import { Link } from "react-router-dom";
import TypeWriter from "./ui/TypeWriter";
import ParticlesBackground from "./ui/ParticlesBackground";
import { lazy, Suspense } from "react";
import AnimatedTower from "./ui/AnimatedTower";
import LazyImage from "./ui/LazyImage";

// const ParticlesBackground = lazy(() => import("./ui/ParticlesBackground"));

const options = {
  fpsLimit: 60,
  fullScreen: {
    enable: false,
    zIndex: -999,
  },
  background: {
    color: "transparent",
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
      color: "#dadada",
      distance: 250,
      enable: true,
      opacity: 0.3,
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
      value: 0.3,
    },
    shape: {
      type: "circle",
    },
    size: {
      value: { min: 1, max: 1 },
    },
  },
  retina_detect: true,
};

const About = ({ link, linkTitle = "Learn More", style }) => {
  return (
    <>
      <section className={`pt-20 ${style} relative z-[1]`}>
        <Suspense fallback={<div />}>
          <ParticlesBackground id="about" options={options} />
        </Suspense>
        <Wrapper className="px-4">
          <header>
            <h2 className={`${styles.headingSecondary} text-white`}>
              Active mobile video surveillance of the{" "}
              <span className="text-clrSky">latest generation.</span>
            </h2>
          </header>
          <div className="flex justify-center items-center flex-col gap-10 lg:flex-row lg:justify-evenly mt-10">
            <AnimatedTower />
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
                <Link
                  to={link}
                  className="btn text-white btn-lg gap-2 border-none bg-clrSkyDark hover:bg-clrSky"
                >
                  {linkTitle}
                  <FaChevronRight />
                </Link>
              </div>
            </div>
          </div>
          <div className={`${styles.flexBtw} flex-col lg:flex-row gap-8 mt-12`}>
            <div className="space-y-8 pb-14">
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

            {/* <figure className="flex self-end">
              <img
                src={}
                alt="autosecure-mobile"
                loading="lazy"
              />
            </figure> */}
            <figure className="flex self-end">
              <LazyImage
                image={{
                  src: autosecureMobile,
                  alt: "autosecure-mobile",
                  style: "w-full h-full object-cover",
                }}
              />
            </figure>
          </div>
        </Wrapper>
      </section>
    </>
  );
};

export default About;

/* */
