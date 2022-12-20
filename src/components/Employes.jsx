import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper";
import Wrapper from "./ui/Wrapper";

const Employes = () => {
  return (
    <section className="py-14 bg-clrVeryLightGray">
      <Wrapper className="container max-w-[900px] mx-auto px-14 relative">
        <Swiper
          navigation={true}
          modules={[Navigation]}
          className="mySwiper py-8 static"
          style={{
            "--swiper-pagination-color": "#162529",
            "--swiper-navigation-color": "#162529",
          }}
        >
          <SwiperSlide className="mySlide flex items-center justify-center flex-col">
            <p className="text-center text-base md:text-lg text-clrPrimary mb-10">
              This innovative and forward-looking concept really impressed and
              convinced us and we are pleased to have found a partner in
              autosecure GmbH, who brings our locations to a uniform security
              standard and helps us to automate many of our processes through
              technology.
            </p>
            <h3 className="text-xl text-clrPrimary font-bold text-center">
              Jorn Sander
            </h3>
            <span className="text-sm text-clrPrimary text-center">
              CFO at Nord l Ostsee Automobile
            </span>
          </SwiperSlide>
          <SwiperSlide className="mySlide flex items-center justify-center flex-col">
            <p className="text-center text-base md:text-lg text-clrPrimary mb-10">
              In autosecure we have found a security partner with whom we can
              bring our properties to a forward-looking and automated security
              standard.
            </p>
            <h3 className="text-xl text-clrPrimary font-bold text-center">
              Dirk Tomczak
            </h3>
            <span className="text-sm text-clrPrimary text-center">
              CFO at Süverkrüp
            </span>
          </SwiperSlide>
        </Swiper>
      </Wrapper>
    </section>
  );
};

export default Employes;
