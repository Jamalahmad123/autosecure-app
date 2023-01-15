import { useEffect } from "react";
import { Link } from "react-router-dom";
import { FaChevronRight, FaCheck } from "react-icons/fa";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay } from "swiper";
import Wrapper from "../../components/ui/Wrapper";
import {
  locateMockup,
  macSlider1,
  macSlider2,
  macSlider3,
  macSlider4,
  tracker,
} from "../../assets/images";
import { styles } from "../../Styles";
import TypeWriter from "../../components/ui/TypeWriter";
import { locate_app } from "../../assets/videos";
import { useTitle } from "../../hooks/customHooks";

const list = [
  "Automatisierte Fahrzeugortung mit digitaler Übergabe- und Sammelverarbeitung",
  "Reduktion von Werkzeuglebensdauer 0",
  "Revisionssichere Übergabe von Fahrzeugen zwischen internen Prozessbeteiligten und Kunden",
  "Zentrale physische Verwaltung von Fahrzeugen und Fahrzeugstandorten",
  "Fotodokumentation von Schäden und Aufzeichnung von Zubehör",
];

const slideImges = [macSlider1, macSlider2, macSlider3, macSlider4];

const LocateApp = () => {
  useTitle(
    "Localization Solutions | Locate App – autosecure |  Safe.  Scan.  locate."
  );
  const labels = ["Vertrauen.", "Integrität."];

  useEffect(() => {
    window.scrollTo({ top: 0, left: 0, behavior: "auto" });
  }, []);

  return (
    <>
      <header className="py-20">
        <Wrapper className="px-4 flex flex-col items-center lg:flex-row gap-12">
          <figure className="flex-1">
            <img src={locateMockup} alt="autosecure locate mockup" />
          </figure>
          <div className="flex-1">
            <TypeWriter labels={labels} width={100} />
            <h1 className={`${styles.headingPrimary} text-clrPrimary`}>
              autosecure Locate App
            </h1>
            <p className={`${styles.textSecondary} text-clrPrimary my-8`}>
              Orten und vereinfachen Sie Übergabe- und Übernahmeprozesse im
              Handumdrehen. Einfach, schnell und sicher.
            </p>
            <Link className="btn text-white md:text-xl font-AllianceBold font-semibold py-4 lg:px-8 flex-nowrap border-none bg-clrSky hover:bg-clrPrimary capitalize">
              Probieren Sie es jetzt
            </Link>
          </div>
        </Wrapper>
      </header>
      <section className="py-20">
        <Wrapper className="px-4 flex items-center justify-center flex-col lg:flex-row gap-10 lg:gap-20">
          <p
            className={`max-w-[38rem] ${styles.textSecondary} text-clrPrimary`}
          >
            Erleben Sie die Zukunft des Fahrzeugmanagements mit der "autosecure
            Locate App"! Mit unserer benutzerfreundlichen App und der
            integrierten "autosecure Tracker" - Technologie können Sie mühelos
            jedes Fahrzeug in Ihrem Bestand orten und verfolgen, während Sie
            Übergabe- und Übernahmeprozesse vereinfachen und beschleunigen.
            Schützen Sie Ihre Flotte und optimieren Sie Ihre täglichen
            Geschäftsabläufe mit der "autosecure Locate App"!
          </p>
          <div className="max-w-xl max-h-[35rem] lg:px-10">
            <video
              autoPlay
              preload="meta"
              muted
              loop
              playsInline
              className="rounded-xl shadow-xl object-cover mx-auto max-h-[35rem]"
            >
              <source src={locate_app} type="video/mp4" />
              Sorry, your browser doesn't support videos.
            </video>
          </div>
        </Wrapper>
      </section>
      <section className="py-20">
        <Wrapper className="px-4 flex flex-col-reverse lg:flex-row gap-10">
          <div className="lg:max-w-[32rem]">
            <Swiper
              modules={[Autoplay]}
              autoplay={{
                disableOnInteraction: false,
                reverseDirection: true,
              }}
              loop={true}
              observer={true}
              observeParents={true}
              className="mySwiper"
            >
              {slideImges.map((slide, i) => (
                <SwiperSlide className="mySlide" key={i}>
                  <figure>
                    <img src={slide} alt={slide} />
                  </figure>
                </SwiperSlide>
              ))}
            </Swiper>
          </div>
          <div className="flex-1 space-y-8">
            <h2 className={`${styles.headingSecondary} text-clrPrimary`}>
              Schlüsselvorteile
            </h2>
            <ul className="space-y-4">
              {list.map((item, i) => (
                <li
                  className="text-lg lg:text-2xl flex items-start gap-2"
                  key={i}
                >
                  <FaCheck size={20} className="text-clrSky min-w-[20px]" />
                  {item}
                </li>
              ))}
            </ul>
          </div>
        </Wrapper>
      </section>
      <section className="py-20">
        <Wrapper className="px-4 flex flex-col-reverse items-center lg:flex-row gap-8">
          <div className="flex-1 space-y-6">
            <h2 className="text-clrPrimary text-[1.5rem] lg:text-[2rem] font-bold font-AllianceBold leading-[2.3rem] lg:leading-[3rem]">
              Verbinden Sie die autosecure Locate App jetzt mit autosecure
              Trackern, um 100% Prozessintelligenz in Kombination mit
              innovativer Technologie zu erleben.
            </h2>
            <Link
              to="/solutions/localization-solutions/gps-tracker"
              className="btn text-white md:text-xl gap-2 lg:gap-5 flex-nowrap px-6 py-4 border-none bg-clrSky hover:bg-clrPrimary capitalize"
            >
              Lies meh
              <FaChevronRight />
            </Link>
          </div>
          <figure className="flex-1">
            <img src={tracker} alt="autosecure locate mockup" />
          </figure>
        </Wrapper>
      </section>
    </>
  );
};

export default LocateApp;

/*


*/
