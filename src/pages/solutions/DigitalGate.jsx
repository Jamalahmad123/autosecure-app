import { useEffect } from "react";
import { Link } from "react-router-dom";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay } from "swiper";
import { FaCheck, FaChevronRight } from "react-icons/fa";
import Wrapper from "../../components/ui/Wrapper";
import TypeWriter from "../../components/ui/TypeWriter";
import AutosecureFullSlider from "../../components/AutosecureFullSlider";
import {
  gateHero,
  gkScreen1,
  gkScreen2,
  gkScreen3,
  gkScreen4,
  gkSliderImg1,
  gkSliderImg2,
  gkSliderImg3,
  gkSliderImg4,
} from "../../assets/images";
import { digital_wellen } from "../../assets/videos";
import { styles } from "../../Styles";
import { useTitle } from "../../hooks/customHooks";

// Content
const featuresList = [
  "Fotopasskontrolle",
  "Kontrolle der Besucherberechtigung",
  "Ausgabe von Besucherausweisen",
  "Barriereöffnung",
  "Parkleitfaden / Kontrolle des Parksystems",
  "Empfang und Weiterleitung von Nachrichten",
  "Ausgabe und Unterzeichnung von Geländeordnungen, Sicherheitsanweisungen",
  "Dokumentation aller Besucher und Barriereöffnungen",
];

const fullSliderImges = [
  gkSliderImg1,
  gkSliderImg2,
  gkSliderImg3,
  gkSliderImg4,
];

const screenSlideImges = [gkScreen1, gkScreen2, gkScreen3, gkScreen4];

const DigitalGate = () => {
  useTitle(
    "Scanner Solutions | Digital gate keeper – autosecure |  Safe.  Scan.  locate."
  );
  const labels = ["Vertrauen.", "Integrität."];

  useEffect(() => {
    window.scrollTo({ top: 0, left: 0, behavior: "auto" });
  }, []);

  return (
    <>
      <header className="pt-20 pb-14 bg-black">
        <Wrapper className="px-4 space-y-14">
          <div className="flex justify-between gap-10 flex-col lg:flex-row">
            <div className="flex-1">
              <TypeWriter
                width={120}
                labels={labels}
                hasStyle="text-clrLightGray"
              />
              <div className="space-y-8">
                <h1 className={`${styles.headingPrimary} text-white`}>
                  Digital <br className="hidden md:block" />
                  Gatekeeper
                </h1>
                <p
                  className={`text-white ${styles.textSecondary} lg:max-w-2xl`}
                >
                  Torverwaltung neu gedacht - vollständig digital,
                  revisionssicher und entwickelt, um führende internationale
                  Logistikstandards zu erfüllen.
                </p>
                <div>
                  <p className="text-xl text-white lg:text-2xl font-bold mb-4">
                    <FaChevronRight className="inline-block text-clrSky" /> 50%
                    weniger Kosten.
                  </p>
                  <p className="text-xl text-white lg:text-2xl font-bold">
                    <FaChevronRight className="inline-block text-clrSky" /> 100%
                    digital.
                  </p>
                </div>
                <Link
                  to="/company/contact"
                  className="btn text-white md:text-xl font-AllianceBold font-semibold btn-lg gap-2 border-none bg-clrSky hover:bg-clrSky normal-case"
                >
                  Termin vereinbaren
                  <FaChevronRight />
                </Link>
              </div>
            </div>
            <img
              src={gateHero}
              alt="digital gate keeper"
              className="max-w-xs object-cover align-middle"
            />
          </div>
          <p className={`${styles.textSecondary} text-clrLightGray`}>
            Der autosecure Gatekeeper ist Ihr digitaler Pförtner für die
            Erreichung einheitlicher Torgänge und die Reduzierung manueller
            Prozessaufwände. Einschließlich eines digitalen Verkaufsautomaten in
            Ihrem Eingangsbereich oder einer Verarbeitung über das
            autosecure-Steuerzentrum bietet Ihnen der Digital Gatekeeper völlig
            neue Möglichkeiten, die Sicherheits- und Prozessstandards an Ihrem
            Tor zu erfüllen.
          </p>
        </Wrapper>
      </header>
      <video autoPlay loop preload="meta" muted width="100%" height="auto">
        <source src={digital_wellen} type="video/mp4" />
        Sorry, your browser doesn't support videos.
      </video>
      <section className="py-16">
        <Wrapper className="px-4 space-y-10">
          <div className="flex gap-10 flex-col lg:flex-row">
            <h2
              className={`flex-1 text-2xl md:text-3xl lg:text-4xl font-AllianceBold font-bold text-clrPrimary`}
            >
              Überblick über die wichtigsten Vorteile des Digital Gatekeeper
            </h2>
            <FeatureList list={featuresList} />
          </div>
          <div className="flex gap-10 flex-col lg:flex-row">
            <h2
              className={`flex-1 text-2xl md:text-3xl lg:text-4xl font-AllianceBold font-bold text-clrPrimary`}
            >
              Detaillierte Informationen:
            </h2>
            <p className="flex-1 text-clrPrimary text-xl">
              Mit dem autosecure Gatekeeper erreichen Sie nicht nur eine
              konsistente Digitalisierung Ihres Tors. Es ermöglicht auch
              erhebliche Einsparpotentiale, da der digitale Türsteher die
              Torabwicklung erheblich entlasten oder sogar mit reduzierten
              Personalkosten ermöglichen kann. <br /> Mit seinem hauseigenen
              Steuerzentrum bietet autosecure auch den standortunabhängigen
              Torservice mit dem digitalen Türsteher an, sodass Sie auch
              vollständig auf vor Ort tätiges Torpersonal verzichten können.
            </p>
          </div>
        </Wrapper>
      </section>
      <section className="py-20">
        <Wrapper className="px-4 space-y-12">
          <header>
            <h2
              className={`text-2xl md:text-3xl lg:text-4xl font-AllianceBold font-bold text-clrPrimary`}
            >
              Der autosecure Gatekeeper beinhaltet die folgenden Module
              <br />
              <span className="text-clrSky">
                (je nach Situation flexibel buchbar):
              </span>
            </h2>
          </header>
          <div className="flex flex-col-reverse lg:flex-row gap-14">
            <div className="flex-1 space-y-10">
              <div className="space-y-6">
                <p className="flex items-start gap-2 text-lg text-clrPrimary lg:text-2xl font-bold">
                  <FaChevronRight className="text-clrSky min-w-[25px]" />{" "}
                  Digitales Torgerät für einen digitalen
                  Selbstbedienungscheck-in.
                </p>
                <p className="flex items-start gap-2 text-lg text-clrPrimary lg:text-2xl font-bold">
                  <FaChevronRight className="text-clrSky min-w-[25px]" />{" "}
                  Registrierungs-App am lokalen Tor
                </p>
                <p className="flex items-start gap-2 text-lg text-clrPrimary lg:text-2xl font-bold">
                  <FaChevronRight className="text-clrSky min-w-[25px]" />{" "}
                  Vorbestellungs-Scheduling-Portal für die Voranmeldung von
                  Abhol- und Lieferterminen
                </p>
                <p className="flex items-start gap-2 text-lg text-clrPrimary lg:text-2xl font-bold">
                  <FaChevronRight className="text-clrSky min-w-[25px]" />{" "}
                  Erstellung von digitalen Besucherausweisen
                </p>
              </div>
              <Link
                to="/company/contact"
                className="btn text-white md:text-xl font-AllianceBold font-semibold btn-lg gap-2 border-none bg-clrSky hover:bg-clrSky normal-case"
              >
                Termin vereinbaren
              </Link>
            </div>
            <div className="max-w-xl">
              <Swiper
                modules={[Autoplay]}
                autoplay={{
                  disableOnInteraction: false,
                }}
                loop={true}
                observer={true}
                observeParents={true}
                className="mySwiper"
              >
                {screenSlideImges.map((slide, i) => (
                  <SwiperSlide className="mySlide" key={i}>
                    <figure>
                      <img src={slide} alt={slide} />
                    </figure>
                  </SwiperSlide>
                ))}
              </Swiper>
            </div>
          </div>
        </Wrapper>
      </section>
      <AutosecureFullSlider slideImages={fullSliderImges} />
    </>
  );
};

export default DigitalGate;

const FeatureList = ({ list }) => {
  return (
    <ul className="flex-1 space-y-4">
      {list.map((item, i) => (
        <li className="text-base lg:text-xl flex items-start gap-2" key={i}>
          <FaCheck className="text-clrSky min-w-[15px]" />
          {item}
        </li>
      ))}
    </ul>
  );
};
