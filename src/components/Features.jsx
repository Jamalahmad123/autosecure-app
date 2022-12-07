import { FaCheck } from "react-icons/fa";
import video from "../assets/videos/autosecure_secure_web_white_mobile_neu.mp4";
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
      <Wrapper className="px-4">
        <Swiper
          spaceBetween={30}
          pagination={{
            clickable: true,
          }}
          modules={[Pagination]}
          className="mySwiper py-8"
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
              className="mySlide card shadow-xl items-stretch cursor-grab bg-white"
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
                <div className="mt-4">
                  <Link
                    to={item.link}
                    className="btn font-normal capitalize text-white bg-clrPrimary hover:bg-clrSky border-none gap-2"
                  >
                    <img src={logo_sm} alt="logo" className="w-4" />
                    <span>{item.btnTitle}</span>
                  </Link>
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
