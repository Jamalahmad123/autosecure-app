import { lazy, Suspense, useEffect } from "react";
import { Link } from "react-router-dom";
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination, Navigation } from "swiper";
import {
  FaChevronRight,
  FaCheck,
  FaPhoneVolume,
  FaRegEnvelope,
} from "react-icons/fa";
import Wrapper from "./ui/Wrapper";
import { styles } from "../Styles";
import {
  mobile_security_tower4,
  autosecure_cam2,
  autosecure_cam3,
  autosecure_cam4,
  autosecure_cenima,
  laptop_screen_view,
  autosecure_mobile_transport,
  autosecure_mobile_security_tower1,
  autosecure_mobile_security_tower2,
} from "../assets/images";
import { auto_secure_timelaps } from "../assets/videos";
import {
  aboutTower,
  data,
  mobileSecuritySliderData,
} from "../data/constantData2";
import AnimatedTower from "./ui/AnimatedTower";
import AnimatedRouter from "./ui/AnimatedRouter";
import MultiStepForm from "./ui/MultiStepForm";

const {
  outDoor,
  fencedArea,
  cenimaWeb,
  smartTracking,
  bigThermal,
  licenseCamera,
  monitoringCenter,
} = data;

const ProductComponent = ({ scrollIntoView }) => {
  return (
    <>
      <section className="py-16 bg-theif">
        <Wrapper className="px-4 space-y-24">
          <h2
            className={`${styles.headingSecondary} leading-[2.8rem] text-white lg:leading-[3.8rem]`}
          >
            Visuelle und akustische Warnung.{" "}
            <span className="text-clrSky lg:block">
              Bis zur Vollautomatisierung.
            </span>
          </h2>
          <SplitContainer>
            <FeaturesList data={outDoor} style="text-clrSky" />
            <FeaturesList data={fencedArea} style="text-clrSky" />
          </SplitContainer>
        </Wrapper>
      </section>
      <section className="py-20 bg-black">
        <Wrapper className="px-4">
          <header>
            <h2
              className={`${styles.headingSecondary} leading-[2.8rem] text-white lg:leading-[3.8rem]`}
            >
              Mobile Sicherheit.{" "}
              <span className="text-clrSky lg:block">Neu konzipiert.</span>
            </h2>
          </header>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 py-20">
            <AnimatedRouter />
            <div className="flex-1 space-y-10">
              <p className="text-white text-xl lg:text-2xl">
                Mit unseren mobilen Security-Türmen verschaffen Sie sich
                maximale Sicherheit auch bei nur temporär genutzten
                Grundstückarealen. Mit unserer konfigurierbaren Kamerabestückung
                erhalten Sie eine maßgeschneiderte mobile Sicherheitslösung für
                Ihre individuellen Anforderungen.
              </p>
              <button
                onClick={scrollIntoView}
                className="btn text-base md:text-xl font-semibold text-white border-none bg-clrSky py-4 h-auto justify-center hover:bg-white hover:text-clrPrimary font-AllianceRegular normal-case"
              >
                Angebot anfordern <FaChevronRight size={20} className="ml-4" />
              </button>
            </div>
          </div>
          <div className="py-14">
            <h2
              className={`${styles.headingSecondary} leading-[2.8rem] text-white lg:leading-[3.8rem]`}
            >
              Neueste Technologie.{" "}
              <span className="text-clrSky lg:block">Smarte Intelligenz.</span>
            </h2>
            <p className="text-white text-xl lg:text-2xl mt-8 max-w-xl">
              Mit unseren mobilen Security-Türmen verschaffen Sie sich maximale
              Sicherheit auch bei nur temporär genutzten Grundstückarealen. Mit
              unserer konfigurierbaren Kamerabestückung erhalten Sie eine
              maßgeschneiderte mobile Sicherheitslösung für Ihre individuellen
              Anforderungen.
            </p>
            <SplitContainer style="py-10">
              <div>
                <figure>
                  <img
                    src={autosecure_cenima}
                    alt="autosecure-camera"
                    className="w-full"
                  />
                </figure>
                <FeaturesList data={cenimaWeb} style="text-white" />
              </div>
              <div>
                <figure>
                  <img
                    src={autosecure_cam2}
                    alt="autosecure-camera"
                    className="w-full"
                  />
                </figure>
                <FeaturesList data={smartTracking} style="text-white" />
              </div>
            </SplitContainer>
          </div>

          <SplitContainer style="py-10">
            <div>
              <figure>
                <img
                  src={autosecure_cam3}
                  alt="autosecure-camera"
                  className="w-full"
                />
              </figure>
              <FeaturesList data={bigThermal} style="text-white" />
            </div>
            <div>
              <figure>
                <img
                  src={autosecure_cam4}
                  alt="autosecure-camera"
                  className="w-full"
                />
              </figure>
              <FeaturesList data={licenseCamera} style="text-white" />
            </div>
          </SplitContainer>
          <div className="pt-24 space-y-8">
            <h2
              className={`${styles.headingSecondary} leading-[2.8rem] text-white lg:leading-[3.8rem]`}
            >
              Livestream.<span className="text-clrSky lg:block">24/7.</span>
            </h2>
            <SplitContainer>
              <figure className="flex-1">
                <img
                  src={laptop_screen_view}
                  alt="vidoe streaming"
                  className="w-full"
                />
              </figure>
              <div className="flex-1">
                <p className="text-white text-xl lg:text-2xl mt-8 w-full">
                  Der autosecure Mobile Security Tower verfügt über eine
                  integrierte LTE-Datenkarte mit unbegrenztem Datenvolumen –
                  damit ermöglichen wir Ihnen auch vollen Zugriff auf Ihre
                  Live-Streams und Aufzeichnungen.
                </p>
                <p className="flex-1 text-white text-xl lg:text-2xl mt-8">
                  Bleiben Sie 24/7 auf dem Laufenden.
                </p>
              </div>
            </SplitContainer>
          </div>
        </Wrapper>
      </section>
      <section className="py-20 bg-clrVeryLightGray">
        <Wrapper className="px-4">
          <header className="space-y-4">
            <h2
              className={`${styles.headingSecondary} leading-[2.8rem] text-clrPrimary lg:leading-[3.8rem]`}
            >
              Bundesweit.
              <span className="text-clrSky lg:block">In 48h geliefert.</span>
            </h2>
            <p className="text-xl lg:text-2xl text-clrPrimary">
              Verlassen Sie sich auf schnelle und zuverlässige Lieferung
              <br className="hidden md:block" /> innerhalb Deutschlands.
            </p>
          </header>
          <figure className="p-4">
            <img
              src={autosecure_mobile_transport}
              alt="mobile-delivery"
              className="w-full"
            />
          </figure>
          <div className="flex justify-center flex-col md:flex-row gap-8 md:gap-12 md:p-10">
            <a
              href="tel:+492512373370"
              className="btn font-normal text-clrPrimary lowercase border-none bg-white h-auto hover:bg-clrSky hover:text-white font-AllianceRegular outline outline-clrSky rounded-lg py-6 flex-1 px-4"
            >
              <FaPhoneVolume size={20} className="ml-4" />
              <span className="flex-1 text-lg md:text-xl lg:text-xl">
                Rufen Sie uns direkt an.
              </span>
            </a>
            <a
              href="mailto:info@autosecure.net"
              className="btn font-normal text-clrPrimary lowercase border-none bg-white h-auto hover:bg-clrSky hover:text-white font-AllianceRegular outline outline-clrSky rounded-lg py-6 px-4 flex-1"
            >
              <FaRegEnvelope size={20} className="ml-4" />
              <span className="flex-1 text-lg md:text-xl lg:text-xl">
                Schreiben Sie uns.
              </span>
            </a>
          </div>
        </Wrapper>
      </section>
      <section className="py-24 bg-building">
        <Wrapper className="px-4">
          <h2
            className={`${styles.headingSecondary} leading-[2.8rem] text-white lg:leading-[3.8rem]`}
          >
            Abgesichert.
            <span className="text-clrSky lg:block">Einsatzgebiete.</span>
          </h2>
          <SplitContainer style="py-14">
            <div className="flex-1 space-y-5">
              <h2 className="text-2xl md:text-3xl lg:text-3xl font-AllianceBold font-bold text-clrSky">
                Baustelle
              </h2>
              <p className="text-white text-base md:text-lg">
                100% Sicherheit für Ihre Baustelle durch mobile
                Sicherheitslösungen der neuesten Generation.
              </p>
            </div>
            <div className="flex-1 space-y-5">
              <h2 className="text-2xl md:text-3xl lg:text-3xl font-AllianceBold font-bold text-clrSky">
                Trassen-/ Straßenbau
              </h2>
              <p className="text-white text-base md:text-lg">
                Sicherung der Fahrzeuge, Maschinen, Werkzeuge und eingelieferter
                Materialien gegen Diebstahl und Vandalismus zur Vermeidung
                unnötiger Kosten und Bauverzögerungen. Mit
                Langstrecken-Thermaltechnik auch sehr große Strecken mit nur
                wenigen Überwachungspunkten realisierbar.
              </p>
            </div>
          </SplitContainer>
          <SplitContainer style="py-10">
            <div className="flex-1 space-y-5">
              <h2 className="text-2xl md:text-3xl lg:text-3xl font-AllianceBold font-bold text-clrSky">
                Automobil & Mobilität
              </h2>
              <p className="text-white text-base md:text-lg">
                100% mobile Absicherung von temporär angemieteten
                Ausgleichsflächen oder Liegenschaften ohne entsprechende
                Infrastruktur für eine Permentbewachung. Durch die Live-View
                Funktion auch von überall einsehbar, ohne das zeitaufwendige
                Fahrtzeiten für Fahrzeugkontrollen notwendig werden. Sicherheit
                auf dem Betriebsgelände.
              </p>
            </div>
            <div className="flex-1 space-y-5">
              <h2 className="text-2xl md:text-3xl lg:text-3xl font-AllianceBold font-bold text-clrSky">
                Events
              </h2>
              <p className="text-white text-base md:text-lg">
                100% Absicherung und Überblick der Ereignisse bei Events.
                Kooperation mit Polizei und privaten Sicherheitsdiensten zur
                Verschaffung eines Lagebildes und zur Erkennung von Gefahren zur
                gezielten Einleitung von Interventionsmaßnahmen
              </p>
            </div>
          </SplitContainer>

          <div className="max-w-md space-y-5">
            <h2 className="text-2xl md:text-3xl lg:text-4xl font-AllianceBold font-bold text-clrSky">
              Leerstandssicherung
            </h2>
            <p className="text-white text-base md:text-lg">
              Temporäre Überwachung von leerstehenden Liegenschaften gegen
              Vandalismus und Einbruch/Diebstahl
            </p>
          </div>
        </Wrapper>
      </section>
      <section className="py-20 bg-alarmCenter">
        <Wrapper className="px-4">
          <h2
            className={`${styles.headingSecondary} leading-[2.8rem] text-white lg:leading-[3.8rem]`}
          >
            Hochmodernes hauseigenes
            <span className="text-clrSky lg:block">
              Alarm- & Monitoring Center.
            </span>
          </h2>
          <SplitContainer style="py-14">
            <div className="flex-1 space-y-8">
              <p className="text-xl lg:text-2xl text-white">
                Effektive Einbruch- und Schadenabwendung mit Unterstützung von
                künstlicher Intelligenz und einem individuellen
                360°-Sicherheits-Konzept von autosecure – so erreichen wir 100%
                Schutz für Ihre Werte.
              </p>
              <button
                onClick={scrollIntoView}
                className="btn text-base md:text-xl font-semibold text-white border-none bg-clrSky py-4 h-auto justify-center hover:bg-white hover:text-clrPrimary font-AllianceRegular normal-case"
              >
                Angebot anfordern <FaChevronRight size={20} className="ml-4" />
              </button>
            </div>
            <ul className="flex-1 space-y-4">
              {monitoringCenter.map((item, i) => (
                <li className="flex items-start gap-2" key={i}>
                  <FaCheck className="min-w-[20px] text-clrSky" />
                  <p className="text-white text-base md:text-lg">{item}</p>
                </li>
              ))}
            </ul>
          </SplitContainer>
        </Wrapper>
      </section>
      <section className="gradient-animation">
        <Wrapper className="px-4 flex items-center justify-center gap-6 md:gap-10">
          <figure className="pt-8">
            <img
              src={autosecure_mobile_security_tower1}
              alt="autosecure_mobile_security_tower1"
              className="w-full"
            />
          </figure>
          <figure className="-mt-8">
            <img
              src={autosecure_mobile_security_tower2}
              alt="autosecure_mobile_security_tower1"
              className="w-full"
            />
          </figure>
        </Wrapper>
      </section>
      <section className="py-20 bg-clrLightGray">
        <Wrapper className="px-4">
          <h2
            className={`${styles.headingSecondary} leading-[2.8rem] text-clrPrimary lg:leading-[3.8rem]`}
          >
            Technische Daten.
            <span className="text-clrSky lg:block">Mobile Security Tower.</span>
          </h2>
          <div className="py-24 flex flex-col gap-8 justify-center items-center lg:flex-row">
            <figure className="flex-1">
              <img
                src={mobile_security_tower4}
                alt="autosecure-mobile-tower"
                className="w-full"
              />
            </figure>
            <div className="flex-1 space-y-8">
              <ul className="space-y-4">
                {aboutTower.map((item, i) => (
                  <li className="flex items-start gap-2" key={i}>
                    <FaChevronRight className="min-w-[20px] text-clrSky" />
                    <p className="text-clrPrimary text-base md:text-lg">
                      {item}
                    </p>
                  </li>
                ))}
              </ul>
              <button
                onClick={scrollIntoView}
                className="btn text-base md:text-xl font-semibold text-white border-none bg-clrSky py-4 h-auto justify-center hover:bg-white hover:text-clrPrimary font-AllianceRegular normal-case"
              >
                Angebot anfordern <FaChevronRight size={20} className="ml-4" />
              </button>
            </div>
          </div>
        </Wrapper>
      </section>
      <section className="py-20 bg-clrLightGray">
        <Wrapper className="px-4 relative py-8">
          <Swiper
            spaceBetween={35}
            pagination={{
              clickable: true,
            }}
            modules={[Pagination]}
            className="mySwiper py-8 static"
            breakpoints={{
              768: {
                // width: 576,
                slidesPerView: 1,
              },
              1080: {
                // width: 768,
                slidesPerView: 2,
              },
              // 1280: {
              //   // width: 768,
              //   slidesPerView: 3,
              // },
            }}
            style={{
              "--swiper-pagination-color": "#162529",
              "--swiper-navigation-color": "#162529",
            }}
          >
            {mobileSecuritySliderData.map((item) => (
              <SwiperSlide
                className="mySlide card bg-white shadow-xl items-stretch cursor-grab"
                key={item.id}
              >
                <div className="card-body gap-16 md:justify-between md:gap-8">
                  <div className="space-y-6">
                    <h2 className="capitalize font-bold text-2xl md:text-3xl lg:text-4xl text-clrPrimary">
                      {item.title1} <br className="hidden lg:block" />
                      <span className="text-clrSky lg:block">
                        {item.title2}
                      </span>
                    </h2>
                    <p className="text-lg md:text-xl text-clrPrimary flex-grow-0">
                      {item.titleDesc}
                    </p>
                  </div>
                  <ul className="space-y-3">
                    {item.list.map((benefit, i) => (
                      <li className="flex items-start gap-2" key={i}>
                        <FaCheck className="text-clrSky min-w-[25px]" />
                        <p className="text-clrPrimary">{benefit}</p>
                      </li>
                    ))}
                  </ul>
                </div>
              </SwiperSlide>
            ))}
          </Swiper>
          {/* <SplitContainer>
            <FeaturesList2 data={featureindivisuals}>
              <h2
                className={`${styles.headingSecondary} leading-[2.8rem] text-clrPrimary lg:leading-[3.8rem]`}
              >
                maximum
                <span className="text-clrSky lg:block">Individuality.</span>
              </h2>
            </FeaturesList2>
            <FeaturesList2 data={featureArc}>
              <h2
                className={`${styles.headingSecondary} leading-[2.8rem] text-clrPrimary lg:leading-[3.8rem]`}
              >
                most modern
                <span className="text-clrSky lg:block">
                  system architecture.
                </span>
              </h2>
            </FeaturesList2>
          </SplitContainer>
          <SplitContainer style="pt-24">
            <FeaturesList2 data={featureDeepLearning}>
              <h2
                className={`${styles.headingSecondary} leading-[2.8rem] text-clrPrimary lg:leading-[3.8rem]`}
              >
                Deep
                <span className="text-clrSky lg:block">Learning</span>
              </h2>
            </FeaturesList2>
            <FeaturesList2 data={quality}>
              <h2
                className={`${styles.headingSecondary} leading-[2.8rem] text-clrPrimary lg:leading-[3.8rem]`}
              >
                Brilliant image quality.
                <span className="text-clrSky lg:block">Saturated colors.</span>
              </h2>
            </FeaturesList2>
          </SplitContainer> */}
        </Wrapper>
      </section>
      <section className="py-20 bg-clrLightGray">
        <Wrapper className="px-4">
          <h2
            className={`${styles.headingSecondary} leading-[2.8rem] text-clrSky lg:leading-[3.8rem]`}
          >
            Weitere Anwendungen.
          </h2>
          <SplitContainer style="py-14">
            <video
              preload="none"
              muted
              controls
              className="flex-1 w-full lg:w-1/2 self-start"
            >
              <source src={auto_secure_timelaps} type="video/mp4" />
              Sorry, your browser doesn't support videos.
            </video>
            <div className="flex-1 space-y-16">
              <div>
                <h2 className="text-2xl md:text-3xl lg:text-3xl font-AllianceBold font-bold text-clrPrimary">
                  Beeindruckende Zeitrafferfime und Webcams
                </h2>
                <p className="text-clrPrimary text-xl lg:text-2xl mt-8">
                  Wir erstellen für Ihr Projekt hochwertige Zeitrafferfilme mit
                  beeindruckenden Bildeffekten. Ebenso können Sie unsere
                  Doku-Kameras als Webcam einsetzen und für Ihre
                  Öffentlichkeitsarbeit nutzen.
                </p>
              </div>
              <div>
                <h2 className="text-2xl md:text-3xl lg:text-3xl font-AllianceBold font-bold text-clrPrimary">
                  Digitales Pfortenbuch mit automatischer Kennzeichenerfassung
                </h2>
                <p className="text-clrPrimary text-xl lg:text-2xl mt-8">
                  Mit unserem Ecosystem-Feature „Digitales Pfortenbuch“ erhalten
                  Sie eine lückenlose Dokumentation von Einfahrenden Fahrzeugen
                  und die Möglichkeit, Ihre Pfortenabläufe komplett digital zu
                  steuern und nachzuhalten. So können Sie nachvollziehen, welche
                  Fahrzeuge heute, gestern oder auch vor 3 Monaten auf Ihr
                  Grundstück gefahren sind.
                </p>
              </div>
              <div>
                <h2 className="text-2xl md:text-3xl lg:text-3xl font-AllianceBold font-bold text-clrPrimary">
                  Digitales Wachbuch
                </h2>
                <p className="text-clrPrimary text-xl lg:text-2xl mt-8">
                  Mit unserem digitalen Wachbuch erhalten Sie vollautomatisiert
                  jeden Morgen und über einen cloudbasierten Webzugriff in
                  unserem autosecure Ecosystem die Vorkommnisse der Nacht in
                  übersichtlicher Form zur Einsicht. So behalten Sie die volle
                  Kontrolle über Ihr Projekt.
                </p>
              </div>
            </div>
          </SplitContainer>
        </Wrapper>
      </section>
      <section id="rent" className="py-16 bg-black">
        <Wrapper className="px-4 space-y-20">
          <h2
            className={`${styles.headingSecondary} leading-[2.8rem] text-white lg:leading-[3.8rem]`}
          >
            Mobile Security Tower.
            <span className="text-clrSky lg:block">Jetzt mieten!</span>
          </h2>
          <div className="flex items-center justify-center flex-col gap-10 lg:flex-row">
            <div className="hidden w-[35%] lg:flex items-center justify-center">
              <AnimatedTower />
            </div>
            <div className="w-full lg:w-[65%] space-y-8">
              <p className="text-white text-xl lg:text-2xl mt-8">
                Mieten Sie Ihren individuell konfigurierten autosecure Mobile
                Security Tower. Starten Sie Ihre Anfrage und wir werden uns
                umgehend mit Ihnen in Verbindung setzen und Ihnen unser Angebot
                unterbreiten.
              </p>
              <MultiStepForm />
            </div>
          </div>
        </Wrapper>
      </section>
    </>
  );
};

const SplitContainer = ({ children, style }) => {
  return (
    <div
      className={`flex flex-col justify-center items-stretch gap-10 lg:flex-row lg:justify-between lg:gap-14 ${style}`}
    >
      {children}
    </div>
  );
};

const FeaturesList = ({ data, style }) => {
  return (
    <div className="flex-1 space-y-10">
      <h2
        className={`text-2xl md:text-3xl lg:text-3xl font-AllianceBold font-bold ${style}`}
      >
        {data.title}
      </h2>
      <ul className="space-y-5">
        {data.list.map((item, i) => (
          <li className="flex items-start gap-2" key={i}>
            <FaCheck className="min-w-[20px] text-clrSky" />
            <p className="text-white text-base md:text-lg">{item}</p>
          </li>
        ))}
      </ul>
    </div>
  );
};

const FeaturesList2 = ({ children, data }) => {
  return (
    <div className={`card flex-1`}>
      <div className={`card-body p-0 items-start justify-start`}>
        <div className="flex flex-col items-start justify-start gap-4">
          {children}
          <p className="text-lg md:text-xl text-clrPrimary">{data.titleDesc}</p>
        </div>
        <ul className="space-y-4 mt-10">
          {data.list.map((item, i) => (
            <li className="flex items-start gap-2" key={i}>
              <FaCheck className="text-clrSky min-w-[25px]" />
              <p className="text-clrPrimary">{item}</p>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default ProductComponent;
