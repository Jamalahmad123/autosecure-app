import { FaCheck, FaCalendarAlt } from "react-icons/fa";
import { Link } from "react-router-dom";
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination, Navigation } from "swiper";

import { logo_sm } from "../assets/images";
import { industrySector } from "../data/constantData";
import Wrapper from "./ui/Wrapper";
import LazyImage from "./ui/LazyImage";
import { styles } from "../Styles";
import { lazy, Suspense } from "react";

const IndustrySectorSolutions = () => {
  return (
    <>
      <section className="py-10">
        <header className="pt-28 pb-14">
          <Wrapper className="space-y-10 md:space-y-12 px-4">
            <h1
              className={`${styles.headingPrimary} text-clrPrimary font-AllianceBold`}
            >
              Branchen. Lösungen.
            </h1>
            <p className={`${styles.textPrimary} text-clrPrimary`}>
              Zugeschnitten auf Ihre Branche. Erfahren Sie, welche Lösungen und
              Mehrwerte Ihnen das neue autosecure Eco-System zu bieten hat.
            </p>

            <Link
              to="/company/contact"
              className="link link-neutral text-lg items-center inline-flex text-clrPrimary"
            >
              <FaCalendarAlt className="inline-block mr-4  font-AllianceRegular" />
              Beratungs-Gespräch vereinbaren
            </Link>
          </Wrapper>
        </header>
        <Wrapper className="px-2 md:px-14 relative py-8">
          <Swiper
            spaceBetween={25}
            pagination={{
              clickable: true,
            }}
            navigation={true}
            modules={[Pagination, Navigation]}
            className="mySwiper static"
            breakpoints={{
              480: {
                // width: 576,
                slidesPerView: 1,
              },
              768: {
                // width: 576,
                slidesPerView: 2,
              },
              980: {
                // width: 768,
                slidesPerView: 2,
              },
              1200: {
                // width: 768,
                slidesPerView: 3,
              },
            }}
            style={{
              "--swiper-pagination-color": "#162529",
              "--swiper-navigation-color": "#162529",
            }}
          >
            {industrySector.map((item) => (
              <SwiperSlide
                className="mySlide card bg-white shadow-xl items-stretch cursor-grab"
                key={item.id}
              >
                <figure>
                  {/* <img src={item.image} alt={item.name} loading="lazy" /> */}
                  <LazyImage
                    image={{
                      src: item.image,
                      alt: item.name,
                      style: "object-cover w-[480px] h-[250px]",
                    }}
                  />
                </figure>
                <div className="card-body items-start">
                  <h2 className="card-title text-lg font-semibold lg:text-xl text-clrPrimary">
                    {item.name}
                  </h2>
                  <p className="text-black mb-4">{item.desc}</p>
                  <div className="flex items-center gap-2">
                    <FaCheck className="text-clrSky min-w-[15px]" />
                    <p className="text-base text-clrPrimary">{item.benefit1}</p>
                  </div>
                  <div className="flex gap-2">
                    <FaCheck className="text-clrSky min-w-[15px]" />
                    <p className="text-base text-clrPrimary">{item.benefit2}</p>
                  </div>
                  <div className="mt-4">
                    <Link
                      to={item.link}
                      className="btn text-white font-normal capitalize bg-clrPrimary hover:bg-clrSky border-none gap-2"
                    >
                      <img src={logo_sm} alt="logo" className="w-4" />
                      <span className="capitalize text-base">
                        Mehr erfahren
                      </span>
                    </Link>
                  </div>
                </div>
              </SwiperSlide>
            ))}
          </Swiper>
        </Wrapper>
      </section>
    </>
  );
};

export default IndustrySectorSolutions;
