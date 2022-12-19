import { lazy, Suspense, useEffect } from "react";
import { Link } from "react-router-dom";
// import About from "./About";
// Lazy Imports
const About = lazy(() => import("./About"));
import {
  FaChevronRight,
  FaCheck,
  FaPhoneVolume,
  FaRegEnvelope,
} from "react-icons/fa";
import Wrapper from "./ui/Wrapper";
import { styles } from "../Styles";
import {
  autosecureMobile,
  autosecureTower,
  mobile_security_tower4,
  autosecure_cam2,
  autosecure_cam3,
  autosecure_cam4,
  autosecure_cenima,
  laptop_screen_view,
  autosecure_mobile_transport,
  autosecure_mobile_security_tower1,
  autosecure_mobile_security_tower2,
  autosecure_slide_theif_1,
} from "../assets/images";
import { auto_secure_timelaps } from "../assets/videos";
import {
  aboutTower,
  data,
  featureArc,
  featureDeepLearning,
  featureindivisuals,
  quality,
} from "../data/constantData2";
import AnimatedTower from "./ui/AnimatedTower";
import AnimatedRouter from "./ui/AnimatedRouter";
import Spinner from "./ui/Spinner";

const { outDoor, fencedArea, cenimaWeb, smartTracking, monitoringCenter } =
  data;

const MobileSecurity = () => {
  useEffect(() => {
    window.scrollTo({ top: 0, left: 0, behavior: "auto" });
  }, []);
  return (
    <>
      <Suspense fallback={<div className="min-h-screen" />}>
        <About link="" isAnimated />
        <section className="py-16 bg-theif">
          <Wrapper className="px-4 space-y-24">
            <h2
              className={`${styles.headingSecondary} leading-[2.8rem] text-white lg:leading-[3.8rem]`}
            >
              Visual and audible warning.{" "}
              <span className="text-clrSky lg:block">
                Up to full automation.
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
                Mobile security.{" "}
                <span className="text-clrSky lg:block">Reimagined.</span>
              </h2>
            </header>
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 py-20">
              <AnimatedRouter />
              <div className="flex-1 space-y-10">
                <p className="text-white text-xl lg:text-2xl">
                  With our mobile security towers, you get maximum security,
                  even for property areas that are only used temporarily. With
                  our configurable camera equipment, you receive a tailor-made
                  mobile security solution for your individual requirements.
                </p>
                <Link className="btn text-base md:text-xl font-semibold text-white lowercase border-none bg-clrSky py-4 h-auto justify-center hover:bg-white hover:text-clrPrimary font-AllianceRegular">
                  request a quote <FaChevronRight size={20} className="ml-4" />
                </Link>
              </div>
            </div>
            <div className="py-14">
              <h2
                className={`${styles.headingSecondary} leading-[2.8rem] text-white lg:leading-[3.8rem]`}
              >
                Latest technology.{" "}
                <span className="text-clrSky lg:block">
                  smart intelligence.
                </span>
              </h2>
              <p className="text-white text-xl lg:text-2xl mt-8 max-w-xl">
                With our mobile security towers, you get maximum security, even
                for property areas that are only used temporarily. With our
                configurable camera equipment, you receive a tailor-made mobile
                security solution for your individual requirements.
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
                <FeaturesList data={cenimaWeb} style="text-white" />
              </div>
              <div>
                <figure>
                  <img
                    src={autosecure_cam4}
                    alt="autosecure-camera"
                    className="w-full"
                  />
                </figure>
                <FeaturesList data={smartTracking} style="text-white" />
              </div>
            </SplitContainer>
            <div className="pt-24 space-y-8">
              <h2
                className={`${styles.headingSecondary} leading-[2.8rem] text-white lg:leading-[3.8rem]`}
              >
                live stream. <span className="text-clrSky lg:block">24/7</span>
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
                    With our mobile security towers, you get maximum security,
                    even for property areas that are only used temporarily. With
                    our configurable camera equipment, you receive a tailor-made
                    mobile security solution for your individual requirements.
                  </p>
                  <p className="flex-1 text-white text-xl lg:text-2xl mt-8">
                    Stay up to date 24/7.
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
                nationwide.
                <span className="text-clrSky lg:block">
                  Delivered in 48 hours.
                </span>
              </h2>
              <p className="text-xl lg:text-2xl text-clrPrimary">
                Rely on fast and reliable delivery{" "}
                <br className="hidden md:block" /> within Germany.
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
                  call us directly.
                </span>
              </a>
              <a
                href="mailto:info@autosecure.net"
                className="btn font-normal text-clrPrimary lowercase border-none bg-white h-auto hover:bg-clrSky hover:text-white font-AllianceRegular outline outline-clrSky rounded-lg py-6 px-4 flex-1"
              >
                <FaRegEnvelope size={20} className="ml-4" />
                <span className="flex-1 text-lg md:text-xl lg:text-xl">
                  Write us.
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
              secured.
              <span className="text-clrSky lg:block">
                areas of application.
              </span>
            </h2>
            <SplitContainer style="py-14">
              <div className="flex-1 space-y-5">
                <h2 className="text-2xl md:text-3xl lg:text-3xl font-AllianceBold font-bold text-clrSky">
                  construction site
                </h2>
                <p className="text-white text-base md:text-lg">
                  100% safety for your construction site thanks to the latest
                  generation of mobile safety solutions.
                </p>
              </div>
              <div className="flex-1 space-y-5">
                <h2 className="text-2xl md:text-3xl lg:text-3xl font-AllianceBold font-bold text-clrSky">
                  Line/road construction
                </h2>
                <p className="text-white text-base md:text-lg">
                  Securing vehicles, machines, tools and delivered materials
                  against theft and vandalism to avoid unnecessary costs and
                  construction delays. With long-distance thermal technology,
                  even very long distances can be covered with just a few
                  monitoring points.
                </p>
              </div>
            </SplitContainer>
            <SplitContainer style="py-10">
              <div className="flex-1 space-y-5">
                <h2 className="text-2xl md:text-3xl lg:text-3xl font-AllianceBold font-bold text-clrSky">
                  Automobile & Mobility
                </h2>
                <p className="text-white text-base md:text-lg">
                  100% mobile protection of temporarily rented compensation
                  areas or properties without the appropriate infrastructure for
                  permanent surveillance. Thanks to the live view function, it
                  can also be viewed from anywhere without the need for
                  time-consuming travel times for vehicle checks. Security on
                  the premises.
                </p>
              </div>
              <div className="flex-1 space-y-5">
                <h2 className="text-2xl md:text-3xl lg:text-3xl font-AllianceBold font-bold text-clrSky">
                  Events
                </h2>
                <p className="text-white text-base md:text-lg">
                  100% protection and overview of events at events. Cooperation
                  with the police and private security services to provide a
                  picture of the situation and to identify dangers for the
                  targeted introduction of intervention measures
                </p>
              </div>
            </SplitContainer>

            <div className="max-w-md space-y-5">
              <h2 className="text-2xl md:text-3xl lg:text-4xl font-AllianceBold font-bold text-clrSky">
                vacancy protection
              </h2>
              <p className="text-white text-base md:text-lg">
                Temporary surveillance of vacant properties against vandalism
                and burglary/theft.
              </p>
            </div>
          </Wrapper>
        </section>
        <section className="py-20 bg-alarmCenter">
          <Wrapper className="px-4">
            <h2
              className={`${styles.headingSecondary} leading-[2.8rem] text-white lg:leading-[3.8rem]`}
            >
              State-of-the-art in-house
              <span className="text-clrSky lg:block">
                Alarm & Monitoring Center.
              </span>
            </h2>
            <SplitContainer style="py-14">
              <div className="flex-1 space-y-8">
                <p className="text-xl lg:text-2xl text-white">
                  Effective burglary and damage prevention with the support of
                  artificial intelligence and an individual 360° security
                  concept from autosecure - this is how we achieve 100%
                  protection for your valuables.
                </p>
                <Link className="btn text-base md:text-xl font-semibold text-white lowercase border-none bg-clrSky py-4 h-auto justify-center hover:bg-white hover:text-clrPrimary font-AllianceRegular">
                  request a quote <FaChevronRight size={20} className="ml-4" />
                </Link>
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
              Technical specifications.
              <span className="text-clrSky lg:block">
                Mobile Security Tower.
              </span>
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
                <Link className="btn text-base md:text-xl font-semibold text-white lowercase border-none bg-clrSky py-4 h-auto justify-center hover:bg-white hover:text-clrPrimary font-AllianceRegular">
                  request a quote <FaChevronRight size={20} className="ml-4" />
                </Link>
              </div>
            </div>
          </Wrapper>
        </section>
        <section className="py-20 bg-clrLightGray">
          <Wrapper className="px-4">
            <SplitContainer>
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
                  <span className="text-clrSky lg:block">
                    Saturated colors.
                  </span>
                </h2>
              </FeaturesList2>
            </SplitContainer>
          </Wrapper>
        </section>
        <section className="py-20 bg-clrLightGray">
          <Wrapper className="px-4">
            <h2
              className={`${styles.headingSecondary} leading-[2.8rem] text-clrSky lg:leading-[3.8rem]`}
            >
              More Applications.
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
                    Impressive time-lapse movies and webcams
                  </h2>
                  <p className="text-clrPrimary text-xl lg:text-2xl mt-8">
                    We create high-quality time-lapse films with impressive
                    image effects for your project. You can also use our
                    documentary cameras as webcams for your public relations
                    work.
                  </p>
                </div>
                <div>
                  <h2 className="text-2xl md:text-3xl lg:text-3xl font-AllianceBold font-bold text-clrPrimary">
                    Digital gate book with automatic license plate recognition
                  </h2>
                  <p className="text-clrPrimary text-xl lg:text-2xl mt-8">
                    With our ecosystem feature "digital gate book" you receive a
                    complete documentation of entering vehicles and the
                    possibility to control and track your gate processes
                    completely digitally. This way you can see which vehicles
                    drove onto your property today, yesterday or 3 months ago.
                  </p>
                </div>
                <div>
                  <h2 className="text-2xl md:text-3xl lg:text-3xl font-AllianceBold font-bold text-clrPrimary">
                    Digital guard book
                  </h2>
                  <p className="text-clrPrimary text-xl lg:text-2xl mt-8">
                    With our digital watch log, you receive the events of the
                    night in a clear form every morning and via cloud-based web
                    access in our autosecure ecosystem. This way you keep full
                    control over your project.
                  </p>
                </div>
              </div>
            </SplitContainer>
          </Wrapper>
        </section>
        <section className="py-16 bg-black">
          <Wrapper className="px-4 space-y-20">
            <h2
              className={`${styles.headingSecondary} leading-[2.8rem] text-white lg:leading-[3.8rem]`}
            >
              Mobile Security Tower.
              <span className="text-clrSky lg:block">Rent now!</span>
            </h2>
            <div className="flex items-center justify-center flex-col gap-10 lg:flex-row">
              <div className="hidden w-[35%] lg:flex items-center justify-center">
                <AnimatedTower />
              </div>
              <div className="w-[65%] space-y-8">
                <p className="text-white text-xl lg:text-2xl mt-8">
                  Rent your individually configured autosecure Mobile Security
                  Tower. Start your inquiry and we will contact you immediately
                  and make you our offer.
                </p>
                <div className="space-y-6">
                  <div className="w-full bg-clrPrimary overflow-hidden">
                    <div className="w-1/4 h-full bg-clrSky text-white text-right pr-4 text-sm">
                      20%
                    </div>
                  </div>
                  <input
                    type="text"
                    placeholder="Company *"
                    className="bg-white text-clrPrimary input w-full text-lg lg:text-2xl py-2 min-h-[60px]"
                  />
                  <div className="flex items-center flex-col gap-5 lg:flex-row">
                    <input
                      type="text"
                      placeholder="first name"
                      className="bg-white text-clrPrimary input w-full text-lg lg:text-2xl py-2 min-h-[60px]"
                    />
                    <input
                      type="text"
                      placeholder="Surname *"
                      className="bg-white text-clrPrimary input w-full text-lg lg:text-2xl py-2 min-h-[60px]"
                    />
                  </div>
                  <button className="btn p-8 text-xl text-white border-none bg-clrSky w-full mt-8 lg:text-2xl font-bold flex-nowrap capitalize hover:opacity-80 hover:bg-clrSky">
                    Continue
                  </button>
                  <span className="text-sm text-[#3a3a3c] inline-block">
                    * Please fill out fields marked with *.
                  </span>
                </div>
              </div>
            </div>
          </Wrapper>
        </section>
      </Suspense>
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
    <>
      <div className={`card flex-1`}>
        <div className={`card-body p-0 items-start justify-start`}>
          <div className="flex flex-col items-start justify-start gap-4">
            {children}
            <p className="text-lg md:text-xl text-clrPrimary">
              {data.titleDesc}
            </p>
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
    </>
  );
};

export default MobileSecurity;
