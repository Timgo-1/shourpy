import React from "react";
import SwiperCore, { EffectCoverflow, Pagination, Navigation, Autoplay } from "swiper";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/swiper-bundle.min.css";
import "swiper/swiper.min.css";
import "./styles.css";
import carrot from "../../assets/1.jpg";
import redpepper from "../../assets/2.jpg";
import avocadopear from "../../assets/3.jpg";
import pineapple from "../../assets/4.jpg";
import hazelnut from "../../assets/5.jpg";
import pistachio from "../../assets/6.jpg";
import greenpeas from "../../assets/7.jpg";
import redbeans from "../../assets/8.jpg";

SwiperCore.use([EffectCoverflow, Pagination, Navigation, Autoplay]);
// if you want to use array
const slide_img = [
  carrot,
  redpepper,
  avocadopear,
  pineapple,
  hazelnut,
  pistachio,
  greenpeas,
  redbeans,
];

const Slider = () => {
  return (
    <div>
      <Swiper
        effect={"coverflow"}
        grabCursor={true}
        centeredSlides={true}
        slidesPerView={"auto"}
        coverflowEffect={{
          rotate: 50,
          stretch: 0,
          depth: 100,
          modifier: 1,
          slideShadows: false,
        }}
        pagination={{
          clickable: true,
        }}
        navigation={true}
        loop={true}
        autoplay={{
          delay: 3000, 
          diableonInteraction: false,
        }}
        className="mySwiper"
      >
        {/* Using array */}
        {slide_img.map((img, i) => {
          return (
            <SwiperSlide key={i}>
              <img src={img} alt="" />
            </SwiperSlide>
          );
        })}
      </Swiper>
    </div>
  );
};

export default Slider;