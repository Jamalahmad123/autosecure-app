import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination, Navigation } from "swiper";
import { Link, useNavigate } from "react-router-dom";

import { acheivements } from "../data/constantData";
import Wrapper from "./ui/Wrapper";
import LazyImage from "./ui/LazyImage";

const Achievements = () => {
  const navigate = useNavigate();
  return (
    <section className="py-14 bg-clrVeryLightGray">
      <Wrapper className="px-14 relative py-8">
        <Swiper
          spaceBetween={35}
          pagination={{
            clickable: true,
          }}
          navigation={true}
          modules={[Pagination, Navigation]}
          className="mySwiper static"
          // breakpoints={{
          //   668: {
          //     // width: 576,
          //     slidesPerView: 1,
          //   },
          //   920: {
          //     // width: 768,
          //     slidesPerView: 2,
          //   },
          //   1280: {
          //     // width: 768,
          //     slidesPerView: 3,
          //   },
          // }}
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
          {acheivements.map((item) => (
            <SwiperSlide
              className="mySlide card bg-white shadow-xl items-stretch cursor-pointer"
              key={item.id}
            >
              <Link to={`/news/${item.id}`}>
                <LazyImage
                  image={{
                    src: item.image,
                    alt: item.title,
                    style: "w-full h-[300px] object-cover",
                  }}
                />
                <div className="card-body items-start">
                  <h2 className="card-title text-base font-bold lg:text-xl text-clrPrimary">
                    {item.title}
                  </h2>
                </div>
              </Link>
            </SwiperSlide>
          ))}
        </Swiper>
      </Wrapper>
    </section>
  );
};

export default Achievements;
