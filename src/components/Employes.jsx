import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination } from "swiper";
import Wrapper from "./ui/Wrapper";

const Employes = () => {
  return (
    <section className="py-14 bg-clrVeryLightGray">
      <Wrapper className="container max-w-[900px] mx-auto px-4 md:px-14 relative py-8">
        <Swiper
          pagination={{
            clickable: true,
          }}
          autoplay={{
            disableOnInteraction: false,
          }}
          loop={true}
          navigation={true}
          modules={[Navigation, Pagination]}
          className="mySwiper py-8 static"
          style={{
            "--swiper-pagination-color": "#162529",
            "--swiper-navigation-color": "#162529",
          }}
        >
          <SwiperSlide className="mySlide flex items-center justify-center flex-col">
            <p className="text-center text-base md:text-lg text-clrPrimary mb-10">
              Dieses innovative und zukunftsweisende Konzept hat uns wirklich
              begeistert und überzeugt und wir freuen uns, mit der autosecure
              GmbH einen Partner gefunden zu haben, der unsere Standorte auf
              einen einheitlichen Sicherheits-Standard bringt und uns hilft,
              viele unserer Prozesse durch Technologie zu automatisieren.
            </p>
            <h3 className="text-xl text-clrPrimary font-bold text-center">
              Jörn Sander
            </h3>
            <span className="text-sm text-clrPrimary text-center">
              CFO bei Nord l Ostsee Automobile
            </span>
          </SwiperSlide>
          <SwiperSlide className="mySlide flex items-center justify-center flex-col">
            <p className="text-center text-base md:text-lg text-clrPrimary mb-10">
              Wir haben mit autosecure einen Security-Partner gefunden, mit dem
              wir unsere Liegenschaften auf einen zukunftsweisenden und
              automatisierten Sicherheitsstandard bringen.
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
