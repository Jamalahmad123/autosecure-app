import { useEffect } from "react";
import { Link } from "react-router-dom";
import { FaCheck, FaChevronRight } from "react-icons/fa";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Pagination, Navigation } from "swiper";

import Wrapper from "../../components/ui/Wrapper";
import TypeWriter from "../../components/ui/TypeWriter";
import ParticlesBackground from "../../components/ui/ParticlesBackground";
import AutosecureQoute from "../../components/ui/AutosecureQoute";
import { styles } from "../../Styles";

import {
  autosecure_mobile_app,
  CE,
  CE2,
  grade2,
  wireless_desktop_icon,
  wireless_slide_1,
  wireless_slide_2,
  wirlessIcon1,
  wirlessIcon2,
  wirlessIcon3,
  wirless_automation,
  wirless_burglar_alarm,
  wirless_fire_alarm,
  wirless_flood_alarm,
  wirless_vds,
  wirless_vid_survelance,
} from "../../assets/images";
import { wirelessSlidesData } from "../../data/constantData2";
import { autosecure_ajax } from "../../assets/videos";
import { useTitle } from "../../hooks/customHooks";

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

const WirelessInAndOutdoor = () => {
  useTitle(
    "Security solutions | Wireless In- & Outdoor – autosecure |  Safe.  Scan.  locate."
  );
  const qoute =
    "Zertifizierte Sender im Einklang mit dem autosecure-Überwachungszentrum in Münster";
  const labels = [
    "Rent flexibly.",
    "Immediate contact with the perpetrator.",
    "Maximum configurable.",
    "Latest technology.",
    "Autonomous operation.",
    "24/7 live stream.",
    "Unlimited data volume.",
  ];

  useEffect(() => {
    window.scrollTo({ top: 0, left: 0, behavior: "auto" });
  }, []);

  return (
    <>
      <header className="py-20 bg-black relative z-[1]">
        <ParticlesBackground id="about" options={options} />
        <Wrapper className="px-4">
          <TypeWriter width={140} labels={labels} hasStyle="text-clrSky" />
          <h2
            className={`text-2xl md:text-3xl lg:text-4xl font-AllianceBold font-bold text-white mb-16`}
          >
            Professionelles drahtloses Sicherheitssystem{" "}
            <span className="text-clrSky"> für ultimativen Schutz</span>
          </h2>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-14">
            <div className="max-w-xl">
              <Swiper
                autoplay={{
                  disableOnInteraction: false,
                  reverseDirection: true,
                }}
                loop={true}
                modules={[Autoplay]}
                className="mySwiper"
              >
                <SwiperSlide className="mySlide p-8">
                  <figure>
                    <img src={wireless_slide_1} alt="wireless ajax" />
                  </figure>
                </SwiperSlide>
                <SwiperSlide className="mySlide p-8">
                  <figure>
                    <img src={wireless_slide_2} alt="wireless ajax" />
                  </figure>
                </SwiperSlide>
              </Swiper>
            </div>
            <div className="space-y-8">
              <h1 className={`${styles.headingSecondary} text-white`}>
                autosecure Drahtloses In- und Außen-Eindringlingssystem
              </h1>
              <p className={`${styles.textSecondary} text-white`}>
                autosecure hat sich für die AJAX-Systeme für
                Einbruchmeldeanlagen entschieden. AJAX ist das am schnellsten
                wachsende Sicherheitsprodukt weltweit. Es verbindet die
                fortschrittlichsten Sicherheitskomponenten mit intuitiver und
                benutzerfreundlicher Bedienung.
              </p>
              <Link
                to="/company/contact"
                className="btn text-white md:text-xl font-AllianceBold font-semibold btn-lg gap-2 border-none bg-clrSky hover:bg-clrSky capitalize"
              >
                Angebot anfordern
                <FaChevronRight />
              </Link>
            </div>
          </div>
        </Wrapper>
      </header>
      <section className="w-screen h-screen overflow-hidden relative flex items-end justify-end">
        <video
          autoPlay
          preload="meta"
          muted
          loop
          playsInline
          className="absolute top-0 left-0 w-full h-full object-cover"
        >
          <source src={autosecure_ajax} type="video/mp4" />
          Sorry, your browser doesn't support videos.
        </video>
        <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-5 gap-6 items-start backdrop-blur-[6px] bg-black/10 py-6 sm:py-12 px-2 relative left-0 bottom-0 h-auto w-full">
          <div className="flex flex-col place-items-center gap-4">
            <img
              src={wirless_vid_survelance}
              alt="wirless flood alarm icon"
              className="max-w-[2rem] md:max-w-[4rem]"
            />
            <h3 className="text-base font-semibold md:text-xl text-white text-center">
              Integration von Videoüberwachung
            </h3>
          </div>
          <div className="flex flex-col place-items-center gap-4">
            <img
              src={wirless_burglar_alarm}
              alt="wirless flood alarm icon"
              className="max-w-[2rem] md:max-w-[4rem]"
            />
            <h3 className="text-base font-semibold md:text-xl text-white text-center">
              Einbruchmeldeanlage
            </h3>
          </div>
          <div className="flex flex-col place-items-center gap-4">
            <img
              src={wirless_fire_alarm}
              alt="wirless flood alarm icon"
              className="max-w-[2rem] md:max-w-[4rem]"
            />
            <h3 className="text-base font-semibold md:text-xl text-white text-center">
              Feuerschutz
            </h3>
          </div>
          <div className="flex flex-col place-items-center gap-4">
            <img
              src={wirless_flood_alarm}
              alt="wirless flood alarm icon"
              className="max-w-[2rem] md:max-w-[4rem]"
            />
            <h3 className="text-base font-semibold md:text-xl text-white text-center">
              Fluterkennung
            </h3>
          </div>
          <div className="flex flex-col place-items-center gap-4">
            <img
              src={wirless_automation}
              alt="wirless flood alarm icon"
              className="max-w-[2rem] md:max-w-[4rem]"
            />
            <h3 className="text-base font-semibold md:text-xl text-white text-center">
              Automatisierung Szenarien
            </h3>
          </div>
        </div>
      </section>
      <section className="py-20">
        <Wrapper className="px-4 md:px-14 relative py-8">
          <Swiper
            spaceBetween={40}
            slidesPerView={1}
            pagination={{
              clickable: true,
            }}
            navigation={true}
            modules={[Pagination, Navigation]}
            className="mySwiper"
            breakpoints={{
              900: {
                slidesPerView: 2,
              },
            }}
            style={{
              "--swiper-pagination-color": "#162529",
              "--swiper-navigation-color": "#162529",
            }}
          >
            {wirelessSlidesData.map((item) => (
              <SwiperSlide
                className="mySlide p-8 rounded-xl shadow-xl cursor-grab bg-white space-y-12"
                key={item.id}
              >
                <div className="grid grid-cols-2 place-items-center gap-4 md:gap-8">
                  <div>
                    <img
                      src={item.img1}
                      alt="wireless_center_unit"
                      className="w-full"
                    />
                  </div>
                  <div className="space-y-4">
                    <h2 className="text-xl fotn-semibold font-AllianceBold md:text-2xl capitalize">
                      <span className="text-clrPrimary">
                        {item.titleOneRight}
                      </span>{" "}
                      <span className="text-clrSky">{item.titleTwoRight}</span>
                    </h2>
                    <p className="text-base text-clrPrimary">{item.desc1}</p>
                  </div>
                </div>
                <div className="grid grid-cols-2 place-items-center gap-4 md:gap-8">
                  <div className="space-y-4">
                    <h2 className="text-xl fotn-semibold font-AllianceBold md:text-2xl capitalize">
                      <span className="text-clrPrimary">
                        {item.titleOneLeft}
                      </span>{" "}
                      <span className="text-clrSky">{item.titleTwoLeft}</span>
                    </h2>
                    <p className="text-base text-clrPrimary md:text-lg">
                      {item.desc2}
                    </p>
                  </div>
                  <img src={item.img2} alt="wireless_center_unit" />
                </div>
                {item.title1Op && (
                  <div className="grid grid-cols-2 place-items-center gap-4 md:gap-8">
                    <img src={item.imgOp} alt="wireless_center_unit" />
                    <div className="space-y-4">
                      <h2 className="text-xl fotn-semibold font-AllianceBold md:text-2xl capitalize">
                        <span className="text-clrPrimary">{item.title1Op}</span>{" "}
                        <span className="text-clrSky">{item.title2Op}</span>
                      </h2>
                      <p className="text-base text-clrPrimary md:text-lg">
                        {item.descOp}
                      </p>
                    </div>
                  </div>
                )}
              </SwiperSlide>
            ))}
          </Swiper>
        </Wrapper>
      </section>
      <section className="py-20 bg-black">
        <Wrapper className="px-4">
          <h2 className={`${styles.headingSecondary} text-white mb-16`}>
            Professionelle Sicherheitsausrüstung{" "}
            <br className="hidden md:block" />
            <span className="text-clrSky"> für Ihr Unternehmen</span>
          </h2>
          <div className="py-14 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-8 md:gap-12">
            <div className="space-y-6">
              <img
                src={wirlessIcon1}
                alt="wireless icon"
                className="md:w-[3.5rem]"
              />
              <h3 className="text-2xl md:text-3xl text-clrSky font-semibold font-AllianceBold">
                Reichweite bis zu 2000m
              </h3>
              <p className="text-white text-base md:text-lg">
                ausreichende Abdeckung für Wohn- und Bürogebiete.
              </p>
            </div>
            <div className="space-y-6">
              <img
                src={wirlessIcon2}
                alt="wireless icon"
                className="md:w-[3.5rem]"
              />
              <h3 className="text-2xl md:text-3xl text-clrSky font-semibold font-AllianceBold">
                Schutz von besonders großen Anwesen
              </h3>
              <p className="text-white text-base md:text-lg">
                ReX-Funkverstärker erweitern die Funkreichweite bis zu 25 km².
              </p>
            </div>
            <div className="space-y-6">
              <img
                src={wirlessIcon3}
                alt="wireless icon"
                className="md:w-[2rem]"
              />
              <h3 className="text-2xl md:text-3xl text-clrSky font-semibold font-AllianceBold">
                Mühelose Wartung
              </h3>
              <p className="text-white text-base md:text-lg">
                Die Geräte werden über Fernzugriff konfiguriert und haben eine
                Betriebszeit von bis zu 7 Jahren mit den vorinstallierten
                Batterien.
              </p>
            </div>
            <div className="space-y-6">
              <img
                src={wireless_desktop_icon}
                alt="wireless icon"
                className="md:w-[3.5rem]"
              />
              <h3 className="text-2xl md:text-3xl text-clrSky font-semibold font-AllianceBold">
                Verbindung mit dem Überwachungszentrum
              </h3>
              <p className="text-white text-base md:text-lg">
                Ajax kann direkt mit dem autosecure-Überwachungszentrum
                verbunden werden.
              </p>
            </div>
          </div>
          <p className="flex items-start gap-3 text-lg md:text-2xl text-white">
            <FaCheck className="min-w-[25px] text-clrSky" />
            87,5% der Ajax-Besitzer würden das System Freunden und
            Geschäftspartnern empfehlen
          </p>
          <p className="flex items-start gap-3 text-lg md:text-2xl text-white my-5">
            <FaCheck className="min-w-[25px] text-clrSky" />
            67% der Ajax-Besitzer kaufen innerhalb der ersten 6 Monate
            zusätzliche Komponenten
          </p>
          <p className="flex items-start gap-3 text-lg md:text-2xl text-white">
            <FaCheck className="min-w-[25px] text-clrSky" />
            70% aller Kundenanliegen werden durch Fernkonfiguration des Systems
            gelöst, ohne dass Techniker geschickt werden.
          </p>
        </Wrapper>
      </section>
      <section className="py-20">
        <Wrapper className="px-4 space-y-24">
          <header className="space-y-6">
            <h2 className={`${styles.headingSecondary} text-clrPrimary`}>
              der vertraute Partner von{" "}
              <span className="text-clrSky">Sicherheitsexperten</span>
            </h2>
            <p className="text-lg md:text-2xl text-clrPrimary">
              Die proprietäre Hardware und Software-Technologie von Ajax nutzt
              die Erfahrung von Sicherheitsexperten aus der ganzen Welt und
              erfüllt die anspruchsvollsten Branchenstandards. Nach Tests in
              fünf unabhängigen Labors wurden die Ajax-Geräte bestätigt, dass
              sie die höchste Zuverlässigkeit für drahtlose Sicherheitssysteme
              bieten. Außerdem kann autosecure Tausende von
              Ajax-Sicherheitssystemen intuitiv über Apps gleichzeitig
              ferngesteuert konfigurieren, verwalten und überwachen.
            </p>
          </header>
          <div className="grid grid-cols-1 lg:grid-cols-3 lg:place-items-center gap-6">
            <div className="flex items-center gap-3">
              <img src={grade2} alt="grade two" className="w-20" />
              <h3 className="text-lg font-semibold lg:text-xl text-clrDarkGray">
                Zertifikat EN 50131 Grad 2
              </h3>
            </div>
            <div className="flex items-center gap-3">
              <img src={CE} alt="grade two" className="w-20" />
              <h3 className="text-lg font-semibold lg:text-xl text-clrDarkGray">
                Zertifikat EN 14604 Feuerschutz
              </h3>
            </div>
            <div className="flex items-center gap-3">
              <img src={CE2} alt="grade two" className="w-20" />
              <h3 className="text-lg font-semibold lg:text-xl text-clrDarkGray">
                CE-Zertifizierung
              </h3>
            </div>
          </div>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20">
            <div className="space-y-14">
              <h2 className={`${styles.headingSecondary} text-clrPrimary`}>
                Beliebt bei <span className="text-clrSky">Benutzern</span>
              </h2>
              <p className="text-lg md:text-2xl text-clrPrimary">
                Das Ajax-Sicherheitssystem vereint die Zuverlässigkeit von
                professionellen Sicherheitsgeräten und die Freundlichkeit von
                Smart-Home-Geräten. Die Bedienung von Ajax kann in wenigen
                Minuten erklärt werden, was den Integrationsprozess erleichtert.
                Mehr als 900.000 Benutzer aus über 120 Ländern schützen ihr
                Eigentum mit Ajax. Die jüngste Kundenzufriedenheitsumfrage hat
                gezeigt, dass neun von zehn Ajax-Besitzern das System Freunden,
                Kollegen und Familienmitgliedern empfehlen werden.
              </p>
              <div className="space-y-8">
                <p className="flex items-start gap-3 text-lg md:text-2xl text-clrPrimary">
                  <FaCheck className="min-w-[25px] text-clrSky" />
                  Alarme per Push-Nachricht, SMS oder Sprachanruf
                </p>
                <p className="flex items-start gap-3 text-lg md:text-2xl text-clrPrimary">
                  <FaCheck className="min-w-[25px] text-clrSky" />
                  Intuitive Apps kostenlos
                </p>
              </div>
            </div>
            <div>
              <img
                src={autosecure_mobile_app}
                alt="autosecure mobile app"
                className="w-full"
              />
            </div>
          </div>
        </Wrapper>
      </section>
      <AutosecureQoute qoute={qoute} />
      <section className="py-20">
        <Wrapper className="px-4 grid grid-cols-1 lg:grid-cols-2 gap-10">
          <img src={wirless_vds} alt="wireless vds" className="mx-auto" />
          <div className="space-y-12">
            <h2 className={`${styles.headingSecondary} text-[#0b3f87]`}>
              EN-Standards für Sender (Vds)
            </h2>
            <p className="text-lg md:text-2xl text-clrPrimary">
              EN-Standards sind technische freiwillige Spezifikationen, die
              Anforderungen an Produkte, Produktionsprozesse, Dienstleistungen
              oder Prüfverfahren festlegen. EN-Standards sichern die
              Kompatibilität und Interoperabilität von Komponenten, Produkten
              und Dienstleistungen. Sie bringen den Benutzern verbesserte
              Leistung, Sicherheit und reduzierte Kosten und erleichtern
              Unternehmen die Integration in die Wertschöpfungskette und den
              Handel. Evalink-Geräte-Sender sind nach EN54-21 zertifiziert.
            </p>
          </div>
        </Wrapper>
      </section>
    </>
  );
};

export default WirelessInAndOutdoor;

//
//
//
