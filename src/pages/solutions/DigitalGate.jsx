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
  "Photo ID control",
  "Visitor authorization control",
  "Issuance of visitor passes",
  "Barrier opening",
  "Parking guidance / control parking guidance system",
  "Receipt & forwarding of messages",
  "Issuing and signing of site regulations, safety instructions",
  "Documentation of all visitors and barrier openings",
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
  const labels = ["Trust.", "Integrity."];

  useEffect(() => {
    window.scrollTo({ top: 0, left: 0, behavior: "auto" });
  }, []);

  return (
    <>
      <header className="pt-20 pb-14 bg-black">
        <Wrapper className="px-4 space-y-14">
          <div className="flex justify-between gap-10 flex-col lg:flex-row">
            <div className="flex-1">
              <TypeWriter width={80} labels={labels} />
              <div className="space-y-8">
                <h1 className={`${styles.headingPrimary} text-white`}>
                  Digital <br className="hidden md:block" />
                  Gatekeeper
                </h1>
                <p
                  className={`text-white ${styles.textSecondary} lg:max-w-2xl`}
                >
                  Gate management rethought - completely digital, audit-proof
                  and designed to meet leading international logistics
                  standards.
                </p>
                <div>
                  <p className="text-xl text-white lg:text-2xl font-bold mb-4">
                    <FaChevronRight className="inline-block text-clrSky" /> 50%
                    Less cost.
                  </p>
                  <p className="text-xl text-white lg:text-2xl font-bold">
                    <FaChevronRight className="inline-block text-clrSky" /> 100%
                    Digital.
                  </p>
                </div>
                <Link
                  to="/company/contact"
                  className="btn text-white md:text-xl font-AllianceBold font-semibold btn-lg gap-2 border-none bg-clrSky hover:bg-clrSky capitalize"
                >
                  Request a consultation
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
            The autosecure Gatekeeper is your digital gatekeeper for achieving
            uniform gate processes and reducing manual process efforts.
            Including a digital vending machine at your entrance area or a
            processing via the autosecure control center, the Digital Gatekeeper
            offers you completely new possibilities to meet the security and
            process standards at your gate.
          </p>
        </Wrapper>
      </header>
      <video autoPlay preload="meta" muted width="100%" height="auto">
        <source src={digital_wellen} type="video/mp4" />
        Sorry, your browser doesn't support videos.
      </video>
      <section className="py-16">
        <Wrapper className="px-2 space-y-10">
          <div className="flex gap-10 flex-col lg:flex-row">
            <h2
              className={`flex-1 text-2xl md:text-3xl lg:text-4xl font-AllianceBold font-bold text-clrPrimary`}
            >
              Overview about the main advantages of the Digital Gatekeeper
            </h2>
            <FeatureList list={featuresList} />
          </div>
          <div className="flex gap-10 flex-col lg:flex-row">
            <h2
              className={`flex-1 text-2xl md:text-3xl lg:text-4xl font-AllianceBold font-bold text-clrPrimary`}
            >
              Detailed information:
            </h2>
            <p className="flex-1 text-clrPrimary text-xl">
              With the autosecure Gatekeeper, you not only achieve a consistent
              digitization of your gate. It also enables significant cost saving
              potentials, as the digital gatekeeper can noticeably relieve gate
              handling or even enable it with reduced personnel expenses. <br />
              With its in-house control center, autosecure also offers the
              location-independent gate service with the digital gatekeeper, so
              that you can also completely dispense with on-site gate personnel.
            </p>
          </div>
        </Wrapper>
      </section>
      <section className="py-20">
        <Wrapper className="px-2 space-y-12">
          <header>
            <h2
              className={`text-2xl md:text-3xl lg:text-4xl font-AllianceBold font-bold text-clrPrimary`}
            >
              The autosecure Gatekeeper includes the following modules <br />
              <span className="text-clrSky">
                (can be booked flexibly depending on the situation):
              </span>
            </h2>
          </header>
          <div className="flex flex-col-reverse lg:flex-row gap-14">
            <div className="flex-1 space-y-10">
              <div className="space-y-6">
                <p className="flex items-start gap-2 text-lg text-clrPrimary lg:text-2xl font-bold">
                  <FaChevronRight className="text-clrSky min-w-[25px]" />{" "}
                  Digital gate unit for a digital self-service check-in.
                </p>
                <p className="flex items-start gap-2 text-lg text-clrPrimary lg:text-2xl font-bold">
                  <FaChevronRight className="text-clrSky min-w-[25px]" />{" "}
                  Registration app in the local gate
                </p>
                <p className="flex items-start gap-2 text-lg text-clrPrimary lg:text-2xl font-bold">
                  <FaChevronRight className="text-clrSky min-w-[25px]" />{" "}
                  Pre-order scheduling portal for pre-registration of pick-up
                  and delivery appointments
                </p>
                <p className="flex items-start gap-2 text-lg text-clrPrimary lg:text-2xl font-bold">
                  <FaChevronRight className="text-clrSky min-w-[25px]" />{" "}
                  Digital visitor badge creation
                </p>
              </div>
              <Link
                to="/company/contact"
                className="btn text-white md:text-xl font-AllianceBold font-semibold btn-lg gap-2 border-none bg-clrSky hover:bg-clrSky capitalize"
              >
                Request a consultation
              </Link>
            </div>
            <div className="max-w-xl">
              <Swiper
                autoplay={{
                  disableOnInteraction: false,
                }}
                loop={true}
                modules={[Autoplay]}
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
