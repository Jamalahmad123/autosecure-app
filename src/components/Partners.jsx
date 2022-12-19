import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Pagination } from "swiper";
import LazyImage from "./ui/LazyImage";

import {
  autosecure_customer1,
  autosecure_customer2,
  autosecure_customer3,
  autosecure_customer4,
  autosecure_customer5,
  autosecure_customer6,
  autosecure_customer7,
  autosecure_customer8,
  autosecure_customer9,
  autosecure_customer10,
  autosecure_customer13,
  autosecure_customer14,
  autosecure_customer15,
  autosecure_customer16,
} from "../assets/images";
import Wrapper from "./ui/Wrapper";

const Partners = () => {
  const partners = [
    autosecure_customer1,
    autosecure_customer2,
    autosecure_customer3,
    autosecure_customer4,
    autosecure_customer5,
    autosecure_customer6,
    autosecure_customer7,
    autosecure_customer8,
    autosecure_customer9,
    autosecure_customer10,
    autosecure_customer13,
    autosecure_customer14,
    autosecure_customer15,
    autosecure_customer16,
  ];

  return (
    <section className="py-14 bg-clrLightGray z-50">
      <Wrapper className="px-4">
        <Swiper
          spaceBetween={35}
          pagination={{
            clickable: true,
            dynamicBullets: true,
          }}
          autoplay={{
            disableOnInteraction: false,
          }}
          loop={true}
          modules={[Pagination, Autoplay]}
          className="mySwiper py-8"
          breakpoints={{
            440: {
              // width: 576,
              slidesPerView: 2,
            },
            668: {
              // width: 576,
              slidesPerView: 3,
            },
            920: {
              // width: 768,
              slidesPerView: 4,
            },
            1280: {
              // width: 768,
              slidesPerView: 5,
            },
            1380: {
              // width: 768,
              slidesPerView: 6,
            },
            1500: {
              // width: 768,
              slidesPerView: 7,
            },
          }}
          style={{
            "--swiper-pagination-color": "#162529",
            "--swiper-navigation-color": "#162529",
          }}
        >
          {partners.map((partner, i) => (
            <SwiperSlide key={i} className="flex items-center justify-center">
              {/* <img src={partner} alt={`partner-${i}`} loading="lazy" /> */}
              <LazyImage
                image={{
                  src: partner,
                  alt: "autosecure partner",
                  style: "w-[250px] h-[126px] object-cover",
                }}
              />
            </SwiperSlide>
          ))}
        </Swiper>
      </Wrapper>
    </section>
  );
};

export default Partners;
