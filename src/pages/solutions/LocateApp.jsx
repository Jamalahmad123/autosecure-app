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

const list = [
  "Automated vehicle localization with digital handover and collection processing",
  "Reduction tool life 0",
  "Audit-proof handover of vehicles between internal process participants and customers",
  "Central physical management of vehicles and vehicle locations",
  "Photo documentation of damage and recording of accessories",
];

const LocateApp = () => {
  const labels = ["Trust.", "Integrity."];
  const slideImges = [macSlider1, macSlider2, macSlider3, macSlider4];
  return (
    <>
      <header className="py-20">
        <Wrapper className="px-2 flex flex-col-reverse items-center lg:flex-row gap-12">
          <figure className="flex-1">
            <img src={locateMockup} alt="autosecure locate mockup" />
          </figure>
          <div className="flex-1">
            <TypeWriter labels={labels} width={100} />
            <h1 className={`${styles.headingPrimary} text-clrPrimary`}>
              autosecure locate app
            </h1>
            <p className={`${styles.textSecondary} text-clrPrimary my-8`}>
              Locate and simplify handover and takeover processes in the blink
              of an eye. Simple, fast and secure. Try it out now!
            </p>
            <Link
              to="/company/contact"
              className="btn text-white md:text-xl font-AllianceBold font-semibold py-4 lg:px-8 flex-nowrap border-none bg-clrSky hover:bg-clrPrimary capitalize"
            >
              try locate app
            </Link>
          </div>
        </Wrapper>
      </header>
      <section className="py-20">
        <Wrapper className="px-2 flex flex-col lg:flex-row gap-10 justify-between">
          <p className={`max-w-2xl ${styles.textSecondary} text-clrPrimary`}>
            Experience the future of vehicle management with the "autosecure
            Locate App"! With our user-friendly app and integrated "autosecure
            Tracker" technology, you can effortlessly locate and track every
            vehicle in your inventory while simplifying and accelerating
            handover and takeover processes. Protect your fleet and optimize
            your daily business operations with the "autosecure Locate App"!
          </p>
          <div className="max-w-xl max-h-[30rem] lg:px-10">
            <video
              autoPlay
              preload="meta"
              muted
              playsInline
              className="rounded-xl object-cover mx-auto max-h-[30rem]"
            >
              <source src={locate_app} type="video/mp4" />
              Sorry, your browser doesn't support videos.
            </video>
          </div>
        </Wrapper>
      </section>
      <section className="py-20">
        <Wrapper className="px-2 flex flex-col-reverse lg:flex-row">
          <div className="flex-1 lg:max-w-xl">
            <Swiper
              autoplay={{
                disableOnInteraction: false,
              }}
              modules={[Autoplay]}
              loop={true}
              className="mySwiper"
            >
              {slideImges.map((slide, i) => (
                <SwiperSlide className="mySlide" key={i}>
                  <img src={slide} alt={slide} className="w-full" />
                </SwiperSlide>
              ))}
            </Swiper>
          </div>
          <div className="flex-1 space-y-8">
            <h2 className={`${styles.headingSecondary} text-clrPrimary`}>
              Key Benefits
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
        <Wrapper className="px-2 flex flex-col-reverse items-center lg:flex-row gap-8">
          <div className="flex-1 space-y-6">
            <h2 className="text-clrPrimary text-xl lg:text-[2.2rem] font-bold font-AllianceBold leading-[3rem]">
              Connect the autosecure locate app with autosecure trackers now to
              experience 100% process intelligence combined with innovative
              technology
            </h2>
            <Link
              to="/autosecure-locate-app"
              className="btn text-white md:text-xl gap-2 lg:gap-5 flex-nowrap px-6 py-4 border-none bg-clrSky hover:bg-clrPrimary capitalize"
            >
              Read More
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
