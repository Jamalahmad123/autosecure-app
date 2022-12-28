import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination, Navigation } from "swiper";
import { FaCheck } from "react-icons/fa";
import { packages } from "../data/constantData";
import Wrapper from "./ui/Wrapper";
import { styles } from "../Styles";
import TypeWriter from "./ui/TypeWriter";

const AutosecureSlider = () => {
  const labels = ["Security by design", "Tailor-made for your requirements"];
  return (
    <section className="py-14 bg-clrVeryLightGray">
      <Wrapper className="px-4">
        <header className="space-y-6">
          <TypeWriter width={140} labels={labels} />
          <h2 className={`${styles.headingSecondary} text-clrPrimary`}>
            Enjoy our 360° security package.
          </h2>
          <p className="text-clrPrimary text-lg md:text-2xl md:max-w-3xl">
            With our security services, we offer a service package tailored to
            your company and take your security requirements to a new level.
          </p>
        </header>
        <div className="px-14 relative py-8">
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
            {packages.map((item) => (
              <SwiperSlide
                className="mySlide card bg-white shadow-xl items-stretch cursor-grab"
                key={item.id}
              >
                <div className="card-body gap-4">
                  <h2 className="card-title capitalize font-medium text-2xl">
                    {item.title}
                  </h2>
                  <ul className="space-y-3">
                    {item.benefits.map((benefit, i) => (
                      <li
                        className="flex items-start gap-2 text-clrPrimary"
                        key={i}
                      >
                        <FaCheck className="min-w-[15px]" />
                        {benefit}
                      </li>
                    ))}
                  </ul>
                </div>
              </SwiperSlide>
            ))}
          </Swiper>
        </div>
      </Wrapper>
    </section>
  );
};

// const AutosecureSlider = () => {
//   return <div>AutosecureSlider</div>;
// };

export default AutosecureSlider;
