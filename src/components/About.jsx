import { FaChevronRight, FaCheck } from "react-icons/fa";
import Wrapper from "./ui/Wrapper";
import { styles } from "../Styles";
import { autosecureMobile } from "../assets/images";
import TypeWriter from "./ui/TypeWriter";
import ParticlesBackground from "./ui/ParticlesBackground";
import AnimatedTower from "./ui/AnimatedTower";
import LazyImage from "./ui/LazyImage";

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

const About = ({ scrollToView }) => {
  const labels = [
    "Flexibel mieten.",
    "Sofortige Täteransprache.",
    "Maximal konfigurierbar.",
    "Neueste Technologie.",
    "Autonomous operation.",
    "Autarker Betrieb.",
    "24/7 LiveStream.",
    "Unbegrenztes Datenvolumen.",
  ];

  return (
    <>
      <section className="pt-20 gradient-animation relative z-[1]">
        <ParticlesBackground id="about" options={options} />
        <Wrapper className="px-4">
          <TypeWriter width={140} labels={labels} hasStyle />
          <header>
            <h2 className={`${styles.headingSecondary} text-white`}>
              Aktive mobile Videoüberwachung der{" "}
              <span className="text-clrSky">neuesten Generation.</span>
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
                  sicher.
                </p>
                <p className="text-xl text-white lg:text-2xl font-bold">
                  <FaChevronRight className="inline-block text-clrSky" /> 100%
                  flexibel.
                </p>
                <p className="text-xl text-white lg:text-2xl font-bold">
                  <FaChevronRight className="inline-block text-clrSky" /> 100%
                  konfigurierbar.
                </p>
                <button
                  className="btn text-white btn-lg gap-4 md:gap-8 border-none bg-clrSkyDark hover:bg-clrSky"
                  onClick={scrollToView}
                >
                  Jetzt mieten
                  <FaChevronRight />
                </button>
              </div>
            </div>
          </div>
          <div className={`${styles.flexBtw} flex-col lg:flex-row gap-8 mt-12`}>
            <div className="space-y-8 pb-14">
              <div className="flex gap-3">
                <FaCheck className="text-clrSky min-w-[25px]" />
                <p className="text-lg font-medium lg:text-xl text-white flex-shrink">
                  Aktive mobile Videoüberwachung mit Live-Täteransprache zur
                  Reduktion der Zugriffszeit auf ein Minimum für maximale
                  Abschreckung und minimale Schadenaufwendung
                </p>
              </div>

              <div className="flex gap-3">
                <FaCheck className="text-clrSky min-w-[25px]" />
                <p className="text-lg font-medium lg:text-xl text-white flex-shrink">
                  Konfigurierbare Kamerabestückung, variabel und individuell je
                  nach Anforderung
                </p>
              </div>

              <div className="flex gap-3">
                <FaCheck className="text-clrSky min-w-[25px]" />
                <p className="text-lg font-medium lg:text-xl text-white flex-shrink">
                  Präziser Alarm dank künstlicher Intelligenz in den Kameras mit
                  95% Echtalarm-Quote
                </p>
              </div>
            </div>
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
