import { Link } from "react-router-dom";
import { FaCheck, FaChevronRight } from "react-icons/fa";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Pagination, Navigation } from "swiper";

import Wrapper from "../../components/ui/Wrapper";
import TypeWriter from "../../components/ui/TypeWriter";
import AutosecureQoute from "../../components/ui/AutosecureQoute";
import { styles } from "../../Styles";

import {
  autosecure_mobile_app,
  CE,
  CE2,
  grade2,
  wireless_center_unit,
  wireless_desktop_icon,
  wireless_radio,
  wireless_slide_1,
  wireless_slide_2,
  wirlessIcon1,
  wirlessIcon2,
  wirlessIcon3,
  wirlessIcon4,
  wirlessIcon5,
  wirlessIcon6,
  wirless_automation,
  wirless_burglar_alarm,
  wirless_fire_alarm,
  wirless_flood_alarm,
  wirless_vds,
  wirless_vid_survelance,
} from "../../assets/images";
import { features } from "../../data/constantData";
import { wirelessSlidesData } from "../../data/constantData2";
import { autosecure_ajax } from "../../assets/videos";
import { useTitle } from "../../hooks/customHooks";

const WirelessInAndOutdoor = () => {
  useTitle(
    "Security solutions | Wireless In- & Outdoor – autosecure |  Safe.  Scan.  locate."
  );
  const qoute =
    "Certified transmitters in the streamline with the autosecure monitoring center in Münster";
  const labels = [
    "Rent flexibly.",
    "Immediate contact with the perpetrator.",
    "Maximum configurable.",
    "Latest technology.",
    "Autonomous operation.",
    "24/7 live stream.",
    "Unlimited data volume.",
  ];
  return (
    <>
      <header className="py-20 bg-black">
        <Wrapper className="px-2">
          <TypeWriter width={140} labels={labels} hasStyle />
          <h2
            className={`text-2xl md:text-3xl lg:text-4xl font-AllianceBold font-bold text-white mb-16`}
          >
            Professional wireless security system{" "}
            <span className="text-clrSky"> for the ultimate protection</span>
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
              <h1 className={`${styles.headingPrimary} text-white`}>
                Autosecure wireless in- & Outdoor intruder System
              </h1>
              <p className={`${styles.textSecondary} text-white`}>
                Autosecure has chosen AJAX for it’s intruder system
                installations. AJAX is the fastest-growing security product
                globally. It combines the most advanced security components with
                intuitive and user-friendly operation.
              </p>
              <Link
                to="/company/contact"
                className="btn text-white md:text-xl font-AllianceBold font-semibold btn-lg gap-2 border-none bg-clrSky hover:bg-clrSky capitalize"
              >
                Request a Quote
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
        <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-5 gap-8 items-start backdrop-blur-[6px] bg-black/10 py-6 sm:py-12 px-4 relative left-0 bottom-0 h-auto w-full">
          <div className="flex flex-col place-items-center gap-4">
            <img
              src={wirless_vid_survelance}
              alt="wirless flood alarm icon"
              className="max-w-[2rem] md:max-w-[4rem]"
            />
            <h3 className="text-base font-semibold md:text-xl text-white text-center">
              Video surveillance integration
            </h3>
          </div>
          <div className="flex flex-col place-items-center gap-4">
            <img
              src={wirless_burglar_alarm}
              alt="wirless flood alarm icon"
              className="max-w-[2rem] md:max-w-[4rem]"
            />
            <h3 className="text-base font-semibold md:text-xl text-white text-center">
              Burglar Alarm
            </h3>
          </div>
          <div className="flex flex-col place-items-center gap-4">
            <img
              src={wirless_fire_alarm}
              alt="wirless flood alarm icon"
              className="max-w-[2rem] md:max-w-[4rem]"
            />
            <h3 className="text-base font-semibold md:text-xl text-white text-center">
              Fire Protection
            </h3>
          </div>
          <div className="flex flex-col place-items-center gap-4">
            <img
              src={wirless_flood_alarm}
              alt="wirless flood alarm icon"
              className="max-w-[2rem] md:max-w-[4rem]"
            />
            <h3 className="text-base font-semibold md:text-xl text-white text-center">
              Flood Protection
            </h3>
          </div>
          <div className="flex flex-col place-items-center gap-4">
            <img
              src={wirless_automation}
              alt="wirless flood alarm icon"
              className="max-w-[2rem] md:max-w-[4rem]"
            />
            <h3 className="text-base font-semibold md:text-xl text-white text-center">
              Automation Scenarios
            </h3>
          </div>
        </div>
      </section>
      <section className="py-20">
        <Wrapper className="px-2 md:px-14 relative py-8">
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
                    <p className="text-base text-clrPrimary md:text-lg">
                      {item.desc1}
                    </p>
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
        <Wrapper className="px-2">
          <h2 className={`${styles.headingSecondary} text-white mb-16`}>
            Professional safety equipment <br className="hidden md:block" />
            <span className="text-clrSky"> for your company</span>
          </h2>
          <div className="py-14 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-8 md:gap-12">
            <div className="space-y-6">
              <img
                src={wirlessIcon1}
                alt="wireless icon"
                className="md:w-[3.5rem]"
              />
              <h3 className="text-2xl md:text-3xl text-clrSky font-semibold font-AllianceBold">
                Range upto 2000m
              </h3>
              <p className="text-white text-base md:text-lg">
                Sufficient coverage for residential and office areas.
              </p>
            </div>
            <div className="space-y-6">
              <img
                src={wirlessIcon2}
                alt="wireless icon"
                className="md:w-[3.5rem]"
              />
              <h3 className="text-2xl md:text-3xl text-clrSky font-semibold font-AllianceBold">
                Protection of particularly large properties
              </h3>
              <p className="text-white text-base md:text-lg">
                ReX radio repeaters extend the radio signal range up to 25 km².
              </p>
            </div>
            <div className="space-y-6">
              <img
                src={wirlessIcon3}
                alt="wireless icon"
                className="md:w-[2rem]"
              />
              <h3 className="text-2xl md:text-3xl text-clrSky font-semibold font-AllianceBold">
                Effortless maintenance
              </h3>
              <p className="text-white text-base md:text-lg">
                The devices are configured via remote access and have an
                operating time of up to 7 years with the pre-installed
                batteries.
              </p>
            </div>
            <div className="space-y-6">
              <img
                src={wireless_desktop_icon}
                alt="wireless icon"
                className="md:w-[3.5rem]"
              />
              <h3 className="text-2xl md:text-3xl text-clrSky font-semibold font-AllianceBold">
                Connection with monitoring center
              </h3>
              <p className="text-white text-base md:text-lg">
                Ajax can be directly connected to the autosecure monitoring
                center.
              </p>
            </div>
          </div>
          <p className="flex items-start gap-3 text-lg md:text-2xl text-white">
            <FaCheck className="min-w-[25px] text-clrSky" />
            87.5% of Ajax owners would recommend the system to friends and
            business partners.
          </p>
          <p className="flex items-start gap-3 text-lg md:text-2xl text-white my-5">
            <FaCheck className="min-w-[25px] text-clrSky" />
            67% of Ajax owners purchase additional components within the first 6
            months
          </p>
          <p className="flex items-start gap-3 text-lg md:text-2xl text-white">
            <FaCheck className="min-w-[25px] text-clrSky" />
            70% of all customer concerns are solved via remote system
            configuration without sending out technicians
          </p>
        </Wrapper>
      </section>
      <section className="py-20">
        <Wrapper className="px-2 space-y-24">
          <header className="space-y-6">
            <h2 className={`${styles.headingSecondary} text-clrPrimary`}>
              The trusted partner of{" "}
              <span className="text-clrSky">Security Export</span>
            </h2>
            <p className="text-lg md:text-2xl text-clrPrimary">
              Ajax's proprietary hardware and software technologies draw on the
              experience of security experts from around the world and meet the
              most stringent industry standards. After testing in five
              independent laboratories, Ajax devices were confirmed to provide
              the highest level of reliability for wireless security systems.
              Moreover, autosecure could configure, manage and monitor thousands
              of Ajax security systems remotely using intuitive apps at the same
              time.
            </p>
          </header>
          <div className="grid grid-cols-1 lg:grid-cols-3 lg:place-items-center gap-6">
            <div className="flex items-center gap-3">
              <img src={grade2} alt="grade two" className="w-20" />
              <h3 className="text-lg font-semibold lg:text-xl text-clrDarkGray">
                EN 50131 Grade 2 certificate
              </h3>
            </div>
            <div className="flex items-center gap-3">
              <img src={CE} alt="grade two" className="w-20" />
              <h3 className="text-lg font-semibold lg:text-xl text-clrDarkGray">
                EN 14604 Fire protection certification
              </h3>
            </div>
            <div className="flex items-center gap-3">
              <img src={CE2} alt="grade two" className="w-20" />
              <h3 className="text-lg font-semibold lg:text-xl text-clrDarkGray">
                CE <br /> Certification
              </h3>
            </div>
          </div>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20">
            <div className="space-y-14">
              <h2 className={`${styles.headingSecondary} text-clrPrimary`}>
                Loved by <span className="text-clrSky">User</span>
              </h2>
              <p className="text-lg md:text-2xl text-clrPrimary">
                The Ajax Security system combines the reliability of
                professional security device and the friendliness of smart home
                devices. The operation of Ajax can be explained in a few
                minutes, which facilitates the integration process. More than
                900,000 users from over 120 around the world protect their
                property with Ajax. The latest customer satisfaction survey has
                shown that nine out of ten Ajax owners will recommend the system
                to friends, colleagues and family members.
              </p>
              <div className="space-y-8">
                <p className="flex items-start gap-3 text-lg md:text-2xl text-clrPrimary">
                  <FaCheck className="min-w-[25px] text-clrSky" />
                  Alarms via Push-Message, SMS or Voicecall
                </p>
                <p className="flex items-start gap-3 text-lg md:text-2xl text-clrPrimary">
                  <FaCheck className="min-w-[25px] text-clrSky" />
                  Intuitive Apps free of charge
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
        <Wrapper className="px-2 grid grid-cols-1 lg:grid-cols-2 gap-10">
          <img src={wirless_vds} alt="wireless vds" className="mx-auto" />
          <div className="space-y-12">
            <h2 className={`${styles.headingSecondary} text-[#0b3f87]`}>
              EN Standards for transmitters (Vds)
            </h2>
            <p className="text-lg md:text-2xl text-clrPrimary">
              EN Standards are technical voluntary specifications defining
              requirements for products, production processes, services or
              test-methods. EN Standards ensure compatibility and
              interoperability of components, products and services. They bring
              users improved performance, safety and reduced costs, and
              facilitate companies' integration in the value chain and trade.
              evalink devices transmitters are certified EN54- 21.
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
