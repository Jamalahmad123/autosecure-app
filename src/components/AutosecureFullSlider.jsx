import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, EffectCoverflow } from "swiper";

const AutosecureFullSlider = ({ slideImages }) => {
  return (
    <section>
      <Swiper
        navigation={true}
        modules={[Navigation, EffectCoverflow]}
        className="mySwiper"
        effect="coverflow"
        speed={500}
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
