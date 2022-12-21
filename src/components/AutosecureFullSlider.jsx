import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Autoplay } from "swiper";

const AutosecureFullSlider = ({ slideImages }) => {
  return (
    <section className="relative">
      <Swiper
        navigation={true}
        loop
        autoplay={{
          disableOnInteraction: false,
        }}
        modules={[Navigation, Autoplay]}
        className="mySwiper"
        style={{
          "--swiper-navigation-color": "#f2f2f2",
        }}
      >
        {slideImages.map((img, i) => (
          <SwiperSlide
            className="mySlide flex items-center justify-center"
            key={i}
          >
            <figure>
              <img src={img} alt={img} className="w-full h-full" />
            </figure>
          </SwiperSlide>
        ))}
      </Swiper>
    </section>
  );
};

export default AutosecureFullSlider;
