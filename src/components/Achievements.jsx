import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination, Navigation } from "swiper";
import { Link, useNavigate } from "react-router-dom";

import { acheivements } from "../data/constantData";
import Wrapper from "./ui/Wrapper";

const Achievements = () => {
  const navigate = useNavigate();
  return (
    <section className="py-14 bg-clrLightGray">
      <Wrapper className="px-14 relative">
        <Swiper
          spaceBetween={35}
          pagination={{
            clickable: true,
          }}
          navigation={true}
          modules={[Pagination, Navigation]}
          className="mySwiper py-8 static"
          breakpoints={{
            668: {
              // width: 576,
              slidesPerView: 1,
            },
            920: {
              // width: 768,
              slidesPerView: 2,
            },
            1280: {
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
                <figure>
                  <img src={item.image} alt={item.title} loading="lazy" />
                </figure>
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
