import { useEffect } from "react";
import { Link } from "react-router-dom";
import { FaChevronRight, FaCheck } from "react-icons/fa";
import Wrapper from "../../components/ui/Wrapper";
import TypeWriter from "../../components/ui/TypeWriter";
import {
  canBus,
  certifiedImg,
  europMap,
  failure,
  locateMockup,
  odbMeter,
  plug,
  tracker,
  warrentyIcon,
  warrentyImg,
} from "../../assets/images";
import { styles } from "../../Styles";
import { useTitle } from "../../hooks/customHooks";

const list = {
  triger: [
    "Motion detectionUnauthorized driving (with beacon)",
    "Geofencing (car leaves a certain)",
    "High speed, low battery level, low fuel level",
    "Unplug Detection",
  ],
  tracker: [
    "Current location and trip history",
    "Battery level, odometer, fuel level, RPM, VIN no., speed, etc.",
  ],
};

const GpsTracker = () => {
  useTitle(
    "Localization Solutions | GPS Tracker – autosecure |  Safe.  Scan.  locate."
  );

  useEffect(() => {
    window.scrollTo({ top: 0, left: 0, behavior: "auto" });
  }, []);

  const labels = ["Trust.", "Integrity."];
  return (
    <>
      <header className="py-10">
        <Wrapper className="px-4">
          <div className="card flex-col lg:items-stretch lg:flex-row bg-transparent gap-6">
            <figure className="flex-1">
              <img
                src={tracker}
                alt="autosecure-mobile"
                className="w-full lg:w-[45rem] h-auto rounded-lg object-cover"
              />
            </figure>
            <div className="flex-1 card-body justify-start items-start p-0">
              <TypeWriter width={100} labels={labels} />
              <div className="space-y-10">
                <h1 className={`${styles.headingPrimary} text-clrPrimary`}>
                  autosecure gps tracker
                </h1>
                <p className={`${styles.textSecondary} text-clrPrimary`}>
                  Autosecure has chosen world leading GPS Tracker Technology to
                  integrate the Key Features of Car Locating Technology for its
                  Users. In combination with the Autosecure Locate App an
                  outstanding solution to protect and maintain your fleet.
                </p>
                <div className="space-y-8">
                  <div className="flex items-start flex-col gap-3 md:flex-row md:items-center">
                    <img
                      src={odbMeter}
                      alt="can bus"
                      className="max-w-[3rem] object-cover"
                    />
                    <p className="text-clrPrimary md:text-lg font-semibold font-AllianceBold">
                      OEM OBD DATA – real odometer & real fuel level data
                    </p>
                  </div>
                  <div className="flex items-start flex-col gap-3 md:flex-row md:items-center">
                    <img
                      src={canBus}
                      alt="can bus"
                      className="max-w-[3rem] object-cover"
                    />
                    <p className="text-clrPrimary md:text-lg font-semibold font-AllianceBold">
                      CAN bus data
                    </p>
                  </div>
                  <div className="flex items-start flex-col gap-3 md:flex-row md:items-center">
                    <img
                      src={plug}
                      alt="can bus"
                      className="max-w-[3rem] object-cover"
                    />
                    <p className="text-clrPrimary md:text-lg font-semibold font-AllianceBold">
                      Effortless plug & play installation
                    </p>
                  </div>
                </div>
                <Link
                  to="/company/contact"
                  className="btn text-white md:text-xl font-AllianceBold font-semibold md:btn-lg gap-2 border-none bg-clrSky hover:bg-clrPrimary capitalize"
                >
                  Request a consultation
                  <FaChevronRight />
                </Link>
              </div>
            </div>
          </div>
        </Wrapper>
      </header>
      <section className="py-16">
        <Wrapper className="px-4 space-y-10">
          <div className="flex gap-10 flex-col lg:flex-row">
            <h2
              className={`flex-1 text-2xl md:text-3xl lg:text-4xl font-AllianceBold font-bold text-clrPrimary`}
            >
              Trigger event:
            </h2>
            <FeatureList list={list.triger} />
          </div>
          <div className="flex gap-10 flex-col lg:flex-row">
            <h2
              className={`flex-1 text-2xl md:text-3xl lg:text-4xl font-AllianceBold font-bold text-clrPrimary`}
            >
              Tracks:
            </h2>
            <FeatureList list={list.tracker} />
          </div>
        </Wrapper>
      </section>
      <section className="py-20">
        <Wrapper className="px-4 space-y-10">
          <h2 className={`${styles.headingSecondary} text-clrPrimary`}>
            Quality
          </h2>
          <div className="flex flex-col items-center lg:flex-row gap-10 lg:gap-20">
            <div className="flex-1 grid grid-cols-1 gap-4 lg:grid-cols-2">
              <figure className="bg-white shadow-lg px-6 py-10 rounded-lg flex items-center justify-center gap-3 flex-col">
                <img
                  src={europMap}
                  alt="euope map"
                  className="max-w-[4.2rem]"
                />
                <figcaption className="text-clrPrimary font-AllianceBold font-semibold">
                  MADE IN EUROPE
                </figcaption>
              </figure>
              <figure className="bg-white shadow-lg px-6 py-10 rounded-lg flex items-center justify-center gap-3 flex-col">
                <img
                  src={failure}
                  alt="failure icon"
                  className="max-w-[4.2rem]"
                />
                <figcaption className="text-clrPrimary font-AllianceBold font-semibold">
                  {`<0.1% failure rate`}
                </figcaption>
              </figure>
              <figure className="bg-white shadow-lg px-6 py-10 rounded-lg flex items-center justify-center gap-3 flex-col">
                <img
                  src={certifiedImg}
                  alt="certified"
                  className="max-w-[4.2rem]"
                />
                <figcaption className="text-clrPrimary font-AllianceBold font-semibold">
                  ISO 9001 certified
                </figcaption>
              </figure>
              <figure className="bg-white shadow-lg px-6 py-10 rounded-lg flex items-center justify-center gap-3 flex-col">
                <img
                  src={warrentyIcon}
                  alt="warrenty icon"
                  className="max-w-[4.2rem]"
                />
                <figcaption className="text-clrPrimary font-AllianceBold font-semibold">
                  2 YEAR WARRANTY
                </figcaption>
              </figure>
            </div>
            <div>
              <figure>
                <img
                  src={warrentyImg}
                  alt="5 years of warrenty"
                  className="w-full sm:max-w-sm rounded-lg shadow-lg"
                />
              </figure>
            </div>
          </div>
        </Wrapper>
      </section>
      <section className="py-20">
        <Wrapper className="px-4 flex flex-col-reverse items-center lg:flex-row gap-8">
          <figure className="flex-1">
            <img src={locateMockup} alt="autosecure locate mockup" />
          </figure>
          <div className="flex-1 space-y-6">
            <h2 className="text-clrPrimary text-[1.5rem] lg:text-[2rem] font-bold font-AllianceBold leading-[2.3rem] lg:leading-[3rem]">
              Connect the autosecure locate app with autosecure trackers now to
              experience 100% process intelligence combined with innovative
              technology
            </h2>
            <Link
              to="/solutions/localization-solutions/locate-app"
              className="btn text-white md:text-xl gap-2 border-none bg-clrSky hover:bg-clrPrimary capitalize"
            >
              Read More
              <FaChevronRight />
            </Link>
          </div>
        </Wrapper>
      </section>
    </>
  );
};

export default GpsTracker;

const FeatureList = ({ list }) => {
  return (
    <ul className="flex-1 space-y-4">
      {list.map((item, i) => (
        <li className="text-lg lg:text-2xl flex items-start gap-2" key={i}>
          <FaCheck className="text-clrSky min-w-[20px]" />
          {item}
        </li>
      ))}
    </ul>
  );
};
