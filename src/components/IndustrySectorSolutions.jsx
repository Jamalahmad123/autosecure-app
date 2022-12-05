import { FaCheck } from "react-icons/fa";
import { Link } from "react-router-dom";
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination, Navigation } from "swiper";

import { logo_sm } from "../assets/images";
import { industrySector } from "../data/constantData";
import Wrapper from "./ui/Wrapper";
import Hero from "./Hero";

const IndustrySectorSolutions = () => {
  const title = "Industry sectors. Solutions.";
  const desc =
    "Tailored to your industry. Find out what solutions and added value the new autosecure ecosystem has to offer you.";
  return (
    <>
      <Hero title={title} desc={desc} isLink />
      <div className="py-10">
        <Wrapper className="px-14 relative">
          <Swiper
            spaceBetween={25}
            pagination={{
              clickable: true,
            }}
            navigation={true}
            modules={[Pagination, Navigation]}
            className="mySwiper py-8 static"
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
                  <img src={item.image} alt={item.name} />
                </figure>
                <div className="card-body items-start">
                  <h2 className="card-title text-lg font-semibold lg:text-xl text-clrPrimary">
                    {item.name}
                  </h2>
                  <p className="text-black mb-4">{item.desc}</p>
                  <div className="flex items-center gap-2">
                    <FaCheck className="text-clrSky min-w-[20px]" />
                    <p className="text-base text-clrPrimary">{item.benefit1}</p>
                  </div>
                  <div className="flex gap-2">
                    <FaCheck className="text-clrSky min-w-[20px]" />
                    <p className="text-base text-clrPrimary">{item.benefit2}</p>
                  </div>
                  <div className="mt-4">
                    <Link
                      to={item.link}
                      className="btn text-white font-normal capitalize bg-clrPrimary hover:bg-clrSky border-none gap-2"
                    >
                      <img src={logo_sm} alt="logo" className="w-4" />
                      <span className="capitalize text-base">learn more</span>
                    </Link>
                  </div>
                </div>
              </SwiperSlide>
            ))}
          </Swiper>
        </Wrapper>
      </div>
    </>
  );
};

export default IndustrySectorSolutions;
