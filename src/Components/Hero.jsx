import React, { useRef, useState } from "react";

import { Swiper, SwiperSlide } from "swiper/react";

import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";

import "../styles.css";

import { Autoplay, Pagination, Navigation } from "swiper/modules";

const Hero = () => {
  const progressCircle = useRef(null);
  const progressContent = useRef(null);
  const onAutoplayTimeLeft = (s, time, progress) => {
    progressCircle.current.style.setProperty("--progress", 1 - progress);
    progressContent.current.textContent = `${Math.ceil(time / 1000)}s`;
  };
  return (
    <>
      <div className="h-[70vh] my-24 mx-32 hide pagination-container">
        <Swiper
          spaceBetween={30}
          centeredSlides={true}
          autoplay={{
            delay: 2500,
            disableOnInteraction: false,
          }}
          pagination={{
            clickable: true,
          }}
          navigation={true}
          modules={[Autoplay, Pagination, Navigation]}
          onAutoplayTimeLeft={onAutoplayTimeLeft}
          className="mySwiper"
        >
          <SwiperSlide>
            <img src="/Images/hero1.png" alt="hero" />
          </SwiperSlide>
          <SwiperSlide>
            <img src="/Images/hero2.png" alt="hero" />
          </SwiperSlide>
          <SwiperSlide>
            <img src="/Images/hero3.png" alt="hero" />
          </SwiperSlide>
          <SwiperSlide>
            <img src="/Images/hero4.png" alt="hero" />
          </SwiperSlide>
          <SwiperSlide>
            <img src="/Images/hero5.png" alt="hero" />
          </SwiperSlide>
          <div className="autoplay-progress" slot="container-end">
            <svg viewBox="0 0 48 48" ref={progressCircle}>
              <circle cx="24" cy="24" r="20"></circle>
            </svg>
            <span ref={progressContent}></span>
          </div>
        </Swiper>
      </div>
      <div className="show mt-[3rem] mx-8">
        <img src="/Images/hero1.png" alt="hero" />
      </div>
    </>
  );
};

export default Hero;
