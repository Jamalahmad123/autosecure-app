import { Link } from "react-router-dom";
import About from "./About";
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

const { outDoor, fencedArea, cenimaWeb, smartTracking, monitoringCenter } =
  data;

const MobileSecurity = () => {
  return (
    <>
      <About link="" isAnimated />
      <section className="py-16 bg-theif">
        <Wrapper className="px-4 space-y-24">
          <h2
            className={`${styles.headingSecondary} leading-[2.8rem] text-white lg:leading-[3.8rem]`}
          >
            Visual and audible warning.{" "}
            <span className="text-clrSky lg:block">Up to full automation.</span>
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
                With our mobile security towers, you get maximum security, even
                for property areas that are only used temporarily. With our
                configurable camera equipment, you receive a tailor-made mobile
                security solution for your individual requirements.
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
              <span className="text-clrSky lg:block">smart intelligence.</span>
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
            <span className="text-clrSky lg:block">areas of application.</span>
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
                construction delays. With long-distance thermal technology, even
                very long distances can be covered with just a few monitoring
                points.
              </p>
            </div>
          </SplitContainer>
          <SplitContainer style="py-10">
            <div className="flex-1 space-y-5">
              <h2 className="text-2xl md:text-3xl lg:text-3xl font-AllianceBold font-bold text-clrSky">
                Automobile & Mobility
              </h2>
              <p className="text-white text-base md:text-lg">
                100% mobile protection of temporarily rented compensation areas
                or properties without the appropriate infrastructure for
                permanent surveillance. Thanks to the live view function, it can
                also be viewed from anywhere without the need for time-consuming
                travel times for vehicle checks. Security on the premises.
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
              Temporary surveillance of vacant properties against vandalism and
              burglary/theft.
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
                artificial intelligence and an individual 360° security concept
                from autosecure - this is how we achieve 100% protection for
                your valuables.
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
                <span className="text-clrSky lg:block">Saturated colors.</span>
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
                  We create high-quality time-lapse films with impressive image
                  effects for your project. You can also use our documentary
                  cameras as webcams for your public relations work.
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

/*
<div className="">
</div>
*/

/*
<div className={` flex-col w-full h-auto bg-slate-800  py-10  `}>
        <div className="mx-60">
          <div className="w-full text-center ">
            <h1 className="text-6xl text-white font-bold 	">
              Visual and audible warning.
            </h1>
            <h2 className="text-6xl text-blue-600 font-bold my-4">
              Up to full automation.
            </h2>
          </div>
          <div className="flex  justify-around my-20 flex-wrap">
            <div className="flex-col">
              <h1 className="text-blue-600 font-bold text-4xl mx-5 ">
                outdoor area
              </h1>
              <div className="flex gap-5 py-8">
                <FaCheck className="text-clrSky min-w-[25px]" />
                <p className="text-lg font-medium lg:text-xl text-white flex-shrink ">
                  After the alarm has been <br />
                  raised, the operator in the <br />
                  alarm center qualifies <br />
                  and assesses the situation
                </p>
              </div>
              <div className="flex gap-5 py-8">
                <FaCheck className="text-clrSky min-w-[25px]" />
                <p className="text-lg font-medium lg:text-xl text-white flex-shrink ">
                  With visual and <br />
                  acoustic warnings, we signal <br /> the suspects on site
                  "We're here!". <br /> To add another layer of <br />
                  protection, the optional two-way <br /> audio feature also{" "}
                  <br />
                  allows on-site sounds to be heard
                </p>
              </div>
            </div>
            <div>
              <h1 className="text-blue-600 font-bold text-4xl mx-5 ">
                Fenced area / indoor area
              </h1>
              <div className="flex gap-5 py-8">
                <FaCheck className="text-clrSky min-w-[25px]" />
                <p className="text-lg font-medium lg:text-xl text-white flex-shrink ">
                  Immediate automated audio <br /> warning and live <br />
                  perpetrator speech <br /> in the cordoned off area.
                </p>
              </div>
              <div className="flex gap-5 py-8">
                <FaCheck className="text-clrSky min-w-[25px]" />
                <p className="text-medium font-medium lg:text-xl text-white flex-shrink ">
                  Thanks to the high protection against <br /> false alarms, our
                  technology makes it <br /> possible to completely dispense
                  with manual
                  <br /> intervention in closed-off areas. The cameras detect{" "}
                  <br /> moments of danger and a user-defined audio message is{" "}
                  <br /> played immediately. In this way, we do not lose <br />
                  any time in the manual processing of crystal-clear <br />{" "}
                  factual situations. (This feature is optional and <br />{" "}
                  contains system components that are subject to <br /> a
                  surcharge).
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
      <section>
        <div className="w-full h-auto flex-col  bg-black">
          <div className=" flex flex-col  justify-around py-10 mx-60 ">
            <div className="">
              <h1 className="text-white font-bold text-5xl">
                Mobile security.
              </h1>
              <h1 className="font-extrabold text-5xl text-blue-600">
                Reimagined.
              </h1>
            </div>
            <div className=" flex flex-row justify-self-auto  flex-wrap py-10">
              <img
                className="w-[50%] "
                src={autosecureMobile}
                alt="autosecure-mobile"
                loading="lazy"
              />

              <div className="flex-col justify-start f flex-wrap mx-10">
                <p className="text-lg font-medium lg:text-xl text-white py-10 ">
                  With our mobile security towers, you get <br /> maximum
                  security, even for property <br /> areas that are only used
                  temporarily. With <br /> our configurable camera equipment,
                  you <br /> receive a tailor-made mobile security <br />{" "}
                  solution for your individual requirements.
                </p>
                <Link className="btn text-white btn-lg gap-2 border-none bg-clrSkyDark hover:bg-clrSky lowercase ">
                  request a quote
                  <FaChevronRight />
                </Link>
              </div>
            </div>
            <div>
              <div className="flex flex-col mt-40">
                <h1 className="text-white font-bold text-5xl">
                  Latest technology.
                </h1>
                <h1 className="font-extrabold text-5xl text-blue-600">
                  smart intelligence.
                </h1>
                <p className="text-lg font-medium lg:text-xl text-white py-10">
                  With our mobile security towers, you get maximum <br />{" "}
                  security, even for property areas that are only used <br />{" "}
                  temporarily. With our configurable camera <br /> equipment,
                  you receive a tailor-made mobile <br /> security solution for
                  your individual requirements.
                </p>
              </div>
            </div>
            <div className="flex flex-wrap justify-center ">
              <img className="w-[40%] h-[50%]" src={autosecure_cinema} alt="" />
              <img className="w-[40%] h-[50%]" src={autosecure_cam2} alt="" />
            </div>
            <div className="flex  flex-row flex-wrap justify-around mx-10 py-10 ml-10">
              <div>
                {" "}
                <h1 className="text-white font-bold text-3xl">
                  Cinema documentary webcam
                </h1>
                <div className="flex flex-row items-center mt-8">
                  <FaCheck className="text-clrSky min-w-[25px]" />
                  <p className="text-md font-medium lg:text-lg text-white ">
                    8K cinema look{" "}
                  </p>
                </div>
                <div className="flex flex-row items-center mt-2">
                  <FaCheck className="text-clrSky min-w-[25px]" />
                  <p className="text-md font-medium lg:text-lg text-white ">
                    Impressive time-lapse recordings
                  </p>
                </div>
                <div className="flex flex-row items-center mt-2">
                  <FaCheck className="text-clrSky min-w-[25px]" />
                  <p className="text-md font-medium lg:text-lg text-white ">
                    Ideal for documentation
                  </p>
                </div>
                <div className="flex flex-row items-center mt-2">
                  <FaCheck className="text-clrSky min-w-[25px]" />
                  <p className="text-md font-medium lg:text-lg text-white ">
                    Up to 12mm varifocal lens with AF
                  </p>
                </div>
                <div className="flex flex-row items-center mt-2">
                  <FaCheck className="text-clrSky min-w-[25px]" />
                  <p className="text-md font-medium lg:text-lg text-white ">
                    180° opening angle
                  </p>
                </div>
              </div>
              <div>
                {" "}
                <h1 className="text-white font-bold text-3xl">
                  360° smart tracking
                </h1>
                <div className="flex flex-row items-center mt-8">
                  <FaCheck className="text-clrSky min-w-[25px]" />
                  <p className="text-md font-medium lg:text-lg text-white ">
                    Detection up to 200m
                  </p>
                </div>
                <div className="flex flex-row items-center mt-2">
                  <FaCheck className="text-clrSky min-w-[25px]" />
                  <p className="text-md font-medium lg:text-lg text-white ">
                    Automatic perpetrator tracking (Smart Tracking)
                  </p>
                </div>
                <div className="flex flex-row items-center mt-2">
                  <FaCheck className="text-clrSky min-w-[25px]" />
                  <p className="text-md font-medium lg:text-lg text-white ">
                    360° rotatable
                  </p>
                </div>
                <div className="flex flex-row items-center mt-2">
                  <FaCheck className="text-clrSky min-w-[25px]" />
                  <p className="text-md font-medium lg:text-lg text-white ">
                    42x optical zoom with AF
                  </p>
                </div>
                <div className="flex flex-row items-center mt-2">
                  <FaCheck className="text-clrSky min-w-[25px]" />
                  <p className="text-md font-medium lg:text-lg text-white ">
                    4K & infrared heater integrated
                  </p>
                </div>
              </div>
            </div>
            <div className="flex flex-wrap justify-center py-5 ">
              <img className="w-[40%] h-[80%]" src={autosecure_cam3} alt="" />
              <img className="w-[40%] h-80%]" src={autosecure_cam4} alt="" />
            </div>
            <div className="flex  flex-row flex-wrap justify-around mx-10 py-10 ml-10">
              <div>
                {" "}
                <h1 className="text-white font-bold text-3xl">
                  Big Mama 4.0 (Thermal)
                </h1>
                <div className="flex flex-row items-center mt-8">
                  <FaCheck className="text-clrSky min-w-[25px]" />
                  <p className="text-md font-medium lg:text-lg text-white ">
                    Detection up to 400m in complete darkness{" "}
                  </p>
                </div>
                <div className="flex flex-row items-center mt-2">
                  <FaCheck className="text-clrSky min-w-[25px]" />
                  <p className="text-md font-medium lg:text-lg text-white ">
                    2 image sensors in one camera (optical + thermal)
                  </p>
                </div>
                <div className="flex flex-row items-center mt-2">
                  <FaCheck className="text-clrSky min-w-[25px]" />
                  <p className="text-md font-medium lg:text-lg text-white ">
                    Brilliant detection in any weather
                  </p>
                </div>
                <div className="flex flex-row items-center mt-2">
                  <FaCheck className="text-clrSky min-w-[25px]" />
                  <p className="text-md font-medium lg:text-lg text-white ">
                    Optical image sensor with 2K resolution
                  </p>
                </div>
                <div className="flex flex-row items-center mt-2">
                  <FaCheck className="text-clrSky min-w-[25px]" />
                  <p className="text-md font-medium lg:text-lg text-white ">
                    12mm focal length with 90° opening angle
                  </p>
                </div>
              </div>
              <div>
                {" "}
                <h1 className="text-white font-bold text-3xl">
                  license plate camera
                </h1>
                <div className="flex flex-row items-center mt-8">
                  <FaCheck className="text-clrSky min-w-[25px]" />
                  <p className="text-md font-medium lg:text-lg text-white ">
                    Automatic license plate recognition
                  </p>
                </div>
                <div className="flex flex-row items-center mt-2">
                  <FaCheck className="text-clrSky min-w-[25px]" />
                  <p className="text-md font-medium lg:text-lg text-white ">
                    Integration into the autosecure gate book
                  </p>
                </div>
                <div className="flex flex-row items-center mt-2">
                  <FaCheck className="text-clrSky min-w-[25px]" />
                  <p className="text-md font-medium lg:text-lg text-white ">
                    License plate search function up to 12 months
                  </p>
                </div>
                <div className="flex flex-row items-center mt-2">
                  <FaCheck className="text-clrSky min-w-[25px]" />
                  <p className="text-md font-medium lg:text-lg text-white ">
                    Cloud-based user access
                  </p>
                </div>
                <div className="flex flex-row items-center mt-2">
                  <FaCheck className="text-clrSky min-w-[25px]" />
                  <p className="text-md font-medium lg:text-lg text-white ">
                    Customizable gate book entries
                  </p>
                </div>
              </div>
            </div>
            <div className="mt-40">
              <h1 className="text-white font-bold text-5xl">live stream.</h1>
              <h1 className="font-extrabold text-5xl text-blue-600">24/7</h1>
            </div>
            <div className=" flex flex-row justify-self-auto flex-wrap py-10">
              <img
                className="w-[50%] "
                src={laptop_screen_view}
                alt="autosecure-mobile"
                loading="lazy"
              />

              <div className="flex-col justify-start f flex-wrap mx-10">
                <p className="text-lg font-medium lg:text-xl text-white py-10 ">
                  The autosecure Mobile Security Tower <br /> has an integrated
                  LTE data card with <br /> unlimited data volume - this also
                  gives <br /> you full access to your live streams and <br />{" "}
                  recordings.
                  <br />
                  Stay up to date 24/7.
                </p>
              </div>
            </div>
          </div>
        </div>
        <div className="w-full h-auto bg-slate-200">
          <div className="mx-60 mt-20 ">
            <div className="flex flex-row flex-wrap justify-around ">
              <div className="">
                <h1 className="text-black font-extrabold text-5xl">
                  nationwide.
                </h1>
                <h1 className="font-extrabold text-5xl text-blue-600">
                  Delivered in 48 <br /> hours.
                </h1>
              </div>
              <div className="flex items-center">
                {" "}
                <p className="text-lg lg:text-3xl">
                  Rely on fast and reliable delivery within <br /> Germany.
                </p>
              </div>
            </div>
            <img
              className="h-[80%] w-[80%]"
              src={autosecure_mobile_transport}
              alt=""
            />
            <div className="flex flex-row justify-around py-20">
              <Link className="btn text-white btn-lg gap-2 border-none bg-clrSkyDark hover:bg-clrSky w-[30%] ">
                Call us directly
              </Link>
              <Link className="btn text-white btn-lg gap-2 border-none bg-clrSkyDark hover:bg-clrSky w-[30%]  ">
                Write us
              </Link>
            </div>
          </div>
        </div>
      </section>
      <section>
        <div className="w-full h-auto flex bg-slate-800">
          <div className="w-full h-auto  mx-80">
            <div className="py-8">
              <h1 className="text-white font-bold text-5xl">secured.</h1>
              <h1 className="font-extrabold text-5xl text-blue-600">
                areas of application.
              </h1>
            </div>
            <div className="flex flex-wrap  justify-between ">
              <div>
                <div className="py-8">
                  <h1 className=" text-left font-extrabold text-2xl text-blue-600">
                    construction site
                  </h1>
                  <p className="text-white py-5">
                    100% safety for your construction site thanks to the <br />{" "}
                    latest generation of mobile safety solutions.
                  </p>
                </div>
                <div className="py-8">
                  <h1 className=" text-left font-extrabold text-2xl text-blue-600">
                    Automobile & Mobility
                  </h1>
                  <p className="text-white py-5">
                    100% mobile protection of temporarily rented <br />{" "}
                    compensation areas or properties without the <br />{" "}
                    appropriate infrastructure for permanent surveillance.{" "}
                    <br /> Thanks to the live view function, it can also be
                    viewed <br /> from anywhere without the need for
                    time-consuming <br />
                    travel times for vehicle checks. Security on the premises.
                  </p>
                </div>
                <div className="py-8">
                  <h1 className=" text-left font-extrabold text-2xl text-blue-600">
                    vacancy protection
                  </h1>
                  <p className="text-white py-5">
                    Temporary surveillance of vacant properties against <br />{" "}
                    vandalism and burglary/theft.
                  </p>
                </div>
              </div>
              <div>
                <div>
                  <div className="py-8">
                    <h1 className=" text-left font-extrabold text-2xl text-blue-600">
                      Line/road construction
                    </h1>
                    <p className="text-white py-5">
                      Securing vehicles, machines, tools and delivered <br />{" "}
                      materials against theft and vandalism to avoid <br />{" "}
                      unnecessary costs and construction delays. With <br />{" "}
                      long-distance thermal technology, <br /> even very long
                      distances <br /> can be covered with just a few monitoring
                      points.
                    </p>
                  </div>
                  <div className="py-8">
                    <h1 className=" text-left font-extrabold text-2xl text-blue-600">
                      Events
                    </h1>
                    <p className="text-white py-5 break-words">
                      100% protection and overview of events at events. <br />{" "}
                      Cooperation with the <br /> police and private security
                      services <br /> to provide a picture of the situation and
                      to identify <br /> dangers for the targeted introduction{" "}
                      <br /> of intervention measures
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section>
        <div className="w-full h-auto bg-slate-900">
          <div className="mx-60 flex flex-col items-center py-40">
            <div className="">
              <h1 className="text-white font-bold text-5xl">
                State-of-the-art in-house
              </h1>
              <h1 className="text-blue-600 font-bold text-5xl my-5">
                Alarm & Monitoring Center.
              </h1>
            </div>
            <div className="flex justify-around py-10 ">
              <div className="py-5 px-5">
                <p className="text-white text-md">
                  Effective burglary and damage prevention <br /> with the
                  support of artificial intelligence and <br /> an individual
                  360° security concept from <br /> autosecure - this is how we
                  achieve 100% <br /> protection for your valuables.
                </p>
                <Link className="btn text-white btn-lg gap-2 border-none bg-clrSkyDark hover:bg-clrSky lowercase mt-10">
                  request a quote
                  <FaChevronRight />
                </Link>
              </div>
              <div className="py-5 px-5">
                <div className="flex flex-row ">
                  <FaCheck className="text-clrSky min-w-[25px] mt-2 mr-2" />
                  <p className="text-md font-medium lg:text-lg text-white ">
                    Real-time monitoring by our state-of-the-art 24/7 <br />{" "}
                    security center
                  </p>
                </div>
                <div className="flex flex-row ">
                  <FaCheck className="text-clrSky min-w-[25px] mt-2 mr-2" />
                  <p className="text-md font-medium lg:text-lg text-white ">
                    Notification of emergency services
                  </p>
                </div>
                <div className="flex flex-row ">
                  <FaCheck className="text-clrSky min-w-[25px] mt-2 mr-2" />
                  <p className="text-md font-medium lg:text-lg text-white ">
                    Management of our digital guard book and logging of <br />{" "}
                    detected events
                  </p>
                </div>
                <div className="flex flex-row ">
                  <FaCheck className="text-clrSky min-w-[25px] mt-2 mr-2" />
                  <p className="text-md font-medium lg:text-lg text-white ">
                    Active troubleshooting
                  </p>
                </div>
                <div className="flex flex-row ">
                  <FaCheck className="text-clrSky min-w-[25px] mt-2 mr-2" />
                  <p className="text-md font-medium lg:text-lg text-white ">
                    Permanent monitoring and constant improvement of our <br />{" "}
                    employees through in-house quality assurance
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section>
        <div className="w-full h-auto bg-clrSky">
          <div className="flex flex-wrap ">
            <img
              className="w-[50%] h-[50%] mt-5"
              src={autosecure_mobile_security_tower1}
              alt=""
            />
            <img
              className="w-[45%] h-[50%]"
              src={autosecure_mobile_security_tower2}
              alt=""
            />
          </div>
        </div>
      </section>
      <section>
        <div className="w-full h-auto bg-slate-200">
          <div className="mx-60">
            <div className="pt-20 ml-20 items-center  ">
              <h1 className="text-black font-extrabold text-5xl">
                Technical specifications.
              </h1>
              <h1 className="font-extrabold text-5xl text-blue-600">
                Mobile Security Tower.
              </h1>
            </div>
            <div className="grid gap-0 grid-cols-2  content-center h-auto grid-flow-col   py-20">
              <div className="">
                <img
                  className="w-[80%] h-[80%] float-right mr-10 "
                  src={mobile_security_tower4}
                  alt=""
                />
              </div>
              <div className="flex flex-col ">
                <div className="flex flex-row  mt-1  ">
                  <FaChevronRight className="text-clrSky text-sm mt-1 mr-1" />
                  <p className=" font-medium lg:text-sm text-slate-500 ">
                    With a mast height of up to 9 meters and a narrow stand{" "}
                    <br /> area of ​​1.20 x 1.20 m, we offer the latest
                    surveillance <br /> technology in the smallest of spaces for
                    an overview from <br /> above.
                  </p>
                </div>
                <div className="flex flex-row mt-1   ">
                  <FaChevronRight className="text-clrSky text-sm mt-1 mr-1" />
                  <p className=" font-medium lg:text-sm text-slate-500 ">
                    Mast height max. height 9 m
                  </p>
                </div>
                <div className="flex flex-row mt-1  ">
                  <FaChevronRight className="text-clrSky text-sm mt-1 mr-1" />
                  <p className=" font-medium lg:text-sm text-slate-500 ">
                    Certified wind stability up to 110 km/h
                  </p>
                </div>
                <div className="flex flex-row mt-1  ">
                  <FaChevronRight className="text-clrSky text-sm mt-1 mr-1" />
                  <p className=" font-medium lg:text-sm text-slate-500 ">
                    Galvanized telescopic mast (manual)
                  </p>
                </div>
                <div className="flex flex-row mt-1  ">
                  <FaChevronRight className="text-clrSky text-sm mt-1 mr-1" />
                  <p className=" font-medium lg:text-sm text-slate-500 ">
                    Dimensions transport mode: L 1100 x W 1100 x H 2500 mm
                  </p>
                </div>
                <div className="flex flex-row mt-1  ">
                  <FaChevronRight className="text-clrSky text-sm mt-1 mr-1" />
                  <p className=" font-medium lg:text-sm text-slate-500 ">
                    Weight. about 600kg
                  </p>
                </div>
                <div className="flex flex-row mt-1  ">
                  <FaChevronRight className="text-clrSky text-sm mt-1 mr-1" />
                  <p className=" font-medium lg:text-sm text-slate-500 ">
                    Feed socket: 230V
                  </p>
                </div>
                <div className="flex flex-row mt-1  ">
                  <FaChevronRight className="text-clrSky text-sm mt-1 mr-1" />
                  <p className=" font-medium lg:text-sm text-slate-500 ">
                    Intelligent analysis software (AI)
                  </p>
                </div>
                <div className="flex flex-row mt-1  ">
                  <FaChevronRight className="text-clrSky text-sm mt-1 mr-1" />
                  <p className=" font-medium lg:text-sm text-slate-500 ">
                    Surveillance radius up to 400 m (depending on model)
                  </p>
                </div>
                <div className="flex flex-row mt-1  ">
                  <FaChevronRight className="text-clrSky text-sm mt-1 mr-1" />
                  <p className=" font-medium lg:text-sm text-slate-500 ">
                    Location can be easily changed
                  </p>
                </div>
                <div className="flex flex-row mt-1  ">
                  <FaChevronRight className="text-clrSky text-sm mt-1 mr-1" />
                  <p className=" font-medium lg:text-sm text-slate-500 ">
                    Battery storage continues to provide energy for up to 80{" "}
                    <br /> hours in the event of a power failure (depending on
                    the <br /> model)
                  </p>
                </div>
                <div className="flex flex-row mt-1  ">
                  <FaChevronRight className="text-clrSky text-sm mt-1 mr-1" />
                  <p className=" font-medium lg:text-sm text-slate-500 ">
                    Full service: delivery, collection, transfer - as long as
                    you <br /> want
                  </p>
                </div>
                <Link className="btn mt-5 w-40 text-white btn-sm gap-2 border-none bg-clrSkyDark hover:bg-clrSky lowercase ">
                  request a quote
                  <FaChevronRight />
                </Link>
              </div>
              <div></div>
            </div>
            <div className="w-full h-auto flex flex-wrap justify-around">
              <div>
                <div className="py-5">
                  <h1 className="text-black font-extrabold text-3xl">
                    maximum
                  </h1>
                  <h1 className="font-extrabold text-3xl text-blue-600">
                    Individuality.
                  </h1>
                </div>
                <h1 className="text-slate-800 text-xl py-5">
                  Our security towers can be equipped <br /> individually based
                  on your requirements.
                </h1>
                <div>
                  <div className="flex gap-2 py-1 ">
                    <FaCheck className="text-clrSky min-w-[10px]" />
                    <p className="text-sm font-medium lg:text-sm text-slate-800 flex-shrink ">
                      Pivoting PTZ with intelligent SmartTracking function to{" "}
                      <br /> automatically track intruders
                    </p>
                  </div>
                  <div className="flex gap-2 py-1">
                    <FaCheck className="text-clrSky min-w-[10px]" />
                    <p className="text-sm font-medium lg:text-sm text-slate-800 flex-shrink ">
                      High-performance thermal cameras with a detection <br />{" "}
                      range of up to 400m
                    </p>
                  </div>
                  <div className="flex gap-2 py-1 ">
                    <FaCheck className="text-clrSky min-w-[10px]" />
                    <p className="text-sm font-medium lg:text-sm text-slate-800 flex-shrink ">
                      180 degree panoramic view camera
                    </p>
                  </div>
                  <div className="flex gap-2 py-1">
                    <FaCheck className="text-clrSky min-w-[10px]" />
                    <p className="text-sm font-medium lg:text-sm text-slate-800 flex-shrink ">
                      Baudoku cameras / webcams for public relations and <br />{" "}
                      impressive time-lapse film recordings
                    </p>
                  </div>
                  <div className="flex gap-2 py-1 ">
                    <FaCheck className="text-clrSky min-w-[10px]" />
                    <p className="text-sm font-medium lg:text-sm text-slate-800 flex-shrink ">
                      Pressure chamber speakers with 101DB per tower for an{" "}
                      <br /> individual audio response for emergency response
                    </p>
                  </div>
                </div>
              </div>
              <div>
                <div className="py-5">
                  <h1 className="text-black font-extrabold text-3xl">
                    most modern
                  </h1>
                  <h1 className="font-extrabold text-3xl text-blue-600">
                    system architecture.
                  </h1>
                </div>
                <h1 className="text-slate-800 text-xl py-5">
                  Rely on safety "made in Germany".
                </h1>
                <div className="flex gap-2 py-1 ">
                  <FaCheck className="text-clrSky min-w-[10px]" />
                  <p className="text-sm font-medium lg:text-sm text-slate-800 flex-shrink ">
                    Cloud hosting and German data centers - also with geo-{" "}
                    <br /> redundancy on request
                  </p>
                </div>
                <div className="flex gap-2 py-1 ">
                  <FaCheck className="text-clrSky min-w-[10px]" />
                  <p className="text-sm font-medium lg:text-sm text-slate-800 flex-shrink ">
                    LiveView flat rate without data volume limitation
                  </p>
                </div>
                <div className="flex gap-2 py-1 ">
                  <FaCheck className="text-clrSky min-w-[10px]" />
                  <p className="text-sm font-medium lg:text-sm text-slate-800 flex-shrink ">
                    On-site NVR (Network Video Recorder) as local storage <br />{" "}
                    medium with completely variable storage duration (30 /{" "}
                    <br /> 60 / 90 days depending on customer requirements)
                  </p>
                </div>
                <div className="flex gap-2 py-1 ">
                  <FaCheck className="text-clrSky min-w-[10px]" />
                  <p className="text-sm font-medium lg:text-sm text-slate-800 flex-shrink ">
                    Unlimited data upload and download via LTE for live view{" "}
                    <br /> and use of the recording functions
                  </p>
                </div>
              </div>
            </div>
            <div className="w-full h-auto flex flex-wrap justify-around ">
              <div>
                <div className="py-5">
                  <h1 className="text-black font-extrabold text-3xl">Deep</h1>
                  <h1 className="font-extrabold text-3xl text-blue-600">
                    learning
                  </h1>
                </div>
                <h1 className="text-slate-800 text-xl py-5">
                  Intelligence in the cameras and smart <br /> algorithms with
                  95% real alarm rate.
                </h1>
                <div>
                  <div className="flex gap-2 py-1 ">
                    <FaCheck className="text-clrSky min-w-[10px]" />
                    <p className="text-sm font-medium lg:text-sm text-slate-800 flex-shrink ">
                      Innovative deep learning algorithm for alarm generation
                    </p>
                  </div>
                  <div className="flex gap-2 py-1">
                    <FaCheck className="text-clrSky min-w-[10px]" />
                    <p className="text-sm font-medium lg:text-sm text-slate-800 flex-shrink ">
                      The magic behind it all: important events are put in the{" "}
                      <br /> spotlight
                    </p>
                  </div>
                  <div className="flex gap-2 py-1 ">
                    <FaCheck className="text-clrSky min-w-[10px]" />
                    <p className="text-sm font-medium lg:text-sm text-slate-800 flex-shrink ">
                      Lowest rate of false alarms on the market - maximum <br />{" "}
                      reduction of effort in the alarm center and basis for{" "}
                      <br /> security services of the highest quality
                    </p>
                  </div>
                  <div className="flex gap-2 py-1">
                    <FaCheck className="text-clrSky min-w-[10px]" />
                    <p className="text-sm font-medium lg:text-sm text-slate-800 flex-shrink ">
                      Accurate alert: Thanks to deep learning algorithms, the{" "}
                      <br /> technology distinguishes people and vehicles from
                      other <br /> moving targets
                    </p>
                  </div>
                  <div className="flex gap-2 py-1 ">
                    <FaCheck className="text-clrSky min-w-[10px]" />
                    <p className="text-sm font-medium lg:text-sm text-slate-800 flex-shrink ">
                      False alarms caused by light reflections, small animals,{" "}
                      <br /> dogs, cats, brands, etc. are a thing of the past in
                      95% of <br /> cases.
                    </p>
                  </div>
                </div>
              </div>
              <div>
                <div className="py-5">
                  <h1 className="text-black font-extrabold text-3xl">
                    Brilliant image quality.
                  </h1>
                  <h1 className="font-extrabold text-3xl text-blue-600">
                    Saturated colors.
                  </h1>
                </div>
                <h1 className="text-slate-800 text-xl py-5">
                  Even in complete darkness. Real <br /> color rendering from as
                  little as 0.01 lux.
                </h1>
                <div className="flex gap-2 py-1 ">
                  <p className="text-sm font-medium lg:text-sm text-slate-800 flex-shrink ">
                    What's the challenge?
                  </p>
                </div>
                <div className="flex gap-2 py-1 ">
                  <p className="text-sm font-medium lg:text-sm text-slate-800 flex-shrink ">
                    The darkness provides protection for theft, trespassing and{" "}
                    <br /> other crimes.
                  </p>
                </div>
                <div className="flex gap-2 py-1 ">
                  <p className="text-sm font-medium lg:text-sm text-slate-800 flex-shrink ">
                    When a traditional camera with infrared illumination is used{" "}
                    <br /> for night surveillance, people, vehicles or other
                    important <br /> objects are blurred and fade into the
                    background, making it <br /> difficult to see details.{" "}
                  </p>
                </div>
                <div className="flex gap-2 py-1 ">
                  <p className="text-sm font-medium lg:text-sm text-slate-800 flex-shrink ">
                    Color-related information is crucial for many scenarios and{" "}
                    <br /> represents a great enrichment for data and analysis.{" "}
                    <br /> However, conventional cameras often lose important
                    details <br /> when only displaying black and white images.
                    Our <br /> technology is our solution to this common
                    challenge faced <br /> by many security system users.
                  </p>
                </div>
              </div>
            </div>
            <div className="w-full h-auto flex flex-wrap justify-around mt-20 py-10">
              <div>
                <div className="py-10">
                  <h1 className="font-extrabold text-3xl text-blue-600">
                    More applications.
                  </h1>
                </div>
                <video type="video/mp4" width="320" height="240" controls>
                  {" "}
                  <source src={auto_secure_timelaps} type="video/mp4" />
                </video>
                <div></div>
              </div>
              <div>
                <div className="py-10">
                  <h1 className="text-black font-extrabold text-3xl">
                    Impressive time-lapse <br /> movies and webcams
                  </h1>
                </div>

                <div className="flex gap-2 py-1 ">
                  <p className="text-md font-medium lg:text-md text-slate-800 flex-shrink ">
                    We create high-quality time-lapse films with <br />{" "}
                    impressive image effects for your project. You <br /> can
                    also use our documentary cameras as <br /> webcams for your
                    public relations work.
                  </p>
                </div>
                <div className="py-10">
                  <h1 className="text-black font-extrabold text-3xl">
                    Digital gate book with <br /> automatic license plate <br />{" "}
                    recognition
                  </h1>
                </div>

                <div className="flex gap-2 py-1 ">
                  <p className="text-md font-medium lg:text-md text-slate-800 flex-shrink ">
                    With our ecosystem feature "digital gate <br /> book" you
                    receive a complete documentation <br />
                    of entering vehicles and the possibility to <br /> control
                    and track your gate processes <br />
                    completely digitally. This way you can see <br /> which
                    vehicles drove onto your property <br />
                    today, yesterday or 3 months ago.
                  </p>
                </div>
                <div className="py-10">
                  <h1 className="text-black font-extrabold text-3xl">
                    Digital guard book
                  </h1>
                </div>

                <div className="flex gap-2 py-1 ">
                  <p className="text-md font-medium lg:text-md text-slate-800 flex-shrink ">
                    With our digital watch log, you receive the <br /> events of
                    the night in a clear form every <br />
                    morning and via cloud-based web access in <br /> our
                    autosecure ecosystem. This way you <br /> keep full control
                    over your project.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section>
        <div className="w-full h-auto bg-black">
          <div className="mx-60">
            <div className="pt-20 ml-20 items-center  ">
              <h1 className="text-white font-extrabold text-5xl">
                Mobile Security Tower.
              </h1>
              <h1 className="font-extrabold text-5xl text-blue-600">
                Rent now!
              </h1>
            </div>
            <div className="grid gap-0 grid-cols-2  content-center  h-auto grid-flow-col">
              <div className="flex items-center justify-center">
                {" "}
                <figure>
                  <img
                    src={autosecureTower}
                    alt="autosecure-mobile"
                    className="h-[60vh]"
                    loading="lazy"
                  />
                </figure>
              </div>
              <div className="flex flex-col py-10 ">
                <div className="flex flex-row  mt-1  ">
                  <p className=" font-medium lg:text-md text-white ">
                    Rent your individually configured autosecure Mobile <br />{" "}
                    Security Tower. Start your inquiry and we will contact you{" "}
                    <br /> immediately and make you our offer.
                  </p>
                </div>
                <div className="w-80% h-4 bg-slate-900 mt-10">
                  <div className="w-20 h-full bg-clrSky">
                    {" "}
                    <p className="text-xs text-white float-right mx-1">20%</p>
                  </div>
                </div>
                <div className="py-3">
                  <input
                    type="text"
                    placeholder="Company*"
                    className="block w-full p-4
                text-xs  text-black border border-gray-300 rounded-lg bg-gray-50 sm:text-md
                 focus:ring-blue-500 focus:border-blue-500 dark:bg-white dark:border-gray-600
                  dark:placeholder-gray-400  dark:text-black dark:focus:ring-blue-500 dark:focus:border-blue-500"
                  />
                </div>
                <div className="grid grid-cols-2 gap-5">
                  <input
                    type="text"
                    placeholder="First name"
                    className="block w-full p-4
                text-xs   text-black border border-gray-300 rounded-lg bg-gray-50 sm:text-md
                 focus:ring-blue-500 focus:border-blue-500 dark:bg-white dark:border-gray-600
                  dark:placeholder-gray-400 dark:text-black dark:focus:ring-blue-500 dark:focus:border-blue-500"
                  />
                  <input
                    type="text"
                    placeholder="Surname*"
                    className="block w-full p-4
                text-xs   text-black border border-gray-300 rounded-lg bg-gray-50 sm:text-md
                 focus:ring-blue-500 focus:border-blue-500 dark:bg-white dark:border-gray-600
                  dark:placeholder-gray-400 dark:text-black dark:focus:ring-blue-500 dark:focus:border-blue-500"
                  />
                </div>

                <Link className="btn mt-5  text-white btn-lg normal-case gap-2 border-none bg-clrSky hover:bg-clrSky  ">
                  Continue
                </Link>
              </div>
              <div></div>
            </div>
          </div>
        </div>
*/
