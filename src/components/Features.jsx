import { lazy, Suspense, useState, useEffect } from "react";
import { FaCheck } from "react-icons/fa";
import { Link } from "react-router-dom";
import Wrapper from "./ui/Wrapper";
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination } from "swiper";
import { features } from "../data/constantData";
import { styles } from "../Styles";
import { logo_sm } from "../assets/images";

const Features = () => {
  return (
    <section className="py-14">
      <Wrapper className="px-4 relative py-8">
        <Swiper
          spaceBetween={30}
          pagination={{
            clickable: true,
          }}
          modules={[Pagination]}
          className="mySwiper"
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
            1100: {
              // width: 768,
              slidesPerView: 3,
            },
          }}
          style={{
            "--swiper-pagination-color": "#162529",
            "--swiper-navigation-color": "#162529",
          }}
        >
          {features.map((item) => (
            <SwiperSlide
              className="mySlide card shadow-xl cursor-grab bg-white"
              key={item.id}
            >
              <video autoPlay muted preload="metadata">
                <source src={item.videoPath} type="video/mp4" />
                Sorry, your browser doesn't support videos.
              </video>
              <div className="card-body items-start">
                <h2
                  className={`${styles.headingSecondary} text-clrPrimary capitalize`}
                >
                  {item.title}
                </h2>
                <p className="text-black">{item.desc}</p>
                <div className="mt-4 space-y-3">
                  <div className="flex gap-2">
                    <FaCheck className="text-clrSky min-w-[20px]" />
                    <p className="text-base text-clrPrimary">{item.benefit1}</p>
                  </div>
                  <div className="flex gap-2">
                    <FaCheck className="text-clrSky min-w-[20px]" />
                    <p className="text-base text-clrPrimary">{item.benefit2}</p>
                  </div>
                </div>
                <div className="mt-4 dropdown dropdown-top">
                  <button
                    className="btn font-normal capitalize text-white bg-clrPrimary hover:bg-clrSky border-none gap-6 focus:bg-clrSky focus:rounded-t-none"
                    tabIndex={item.id}
                  >
                    <img
                      src={logo_sm}
                      alt="logo"
                      className="w-4 pointer-events-none"
                    />
                    <span className="pointer-events-none">{item.btnTitle}</span>
                  </button>
                  <ul
                    tabIndex={item.id}
                    className="dropdown-content menu shadow z-[999] bg-clrPrimary flex-row right-0 rounded-t-md"
                  >
                    {item.subPages.map((item) => (
                      <li
                        key={item.id}
                        className="hover:bg-clrSky capitalize w-full"
                      >
                        <Link
                          to={item.link}
                          className="text-sm text-white hover:bg-transparent hover:bg-clrSky smooth hover:text-white relative z-[999]"
                        >
                          {item.name}
                        </Link>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </Wrapper>
    </section>
  );
};

export default Features;
