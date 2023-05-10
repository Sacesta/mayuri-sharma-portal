/* eslint-disable react/jsx-key */
"use client";
import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination } from "swiper";

import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

const TestimonialCarousel = () => {
  const data = [
    { name: "test" },
    { name: "test" },
    { name: "test" },
    { name: "test" },
    { name: "test" },
    { name: "test" },
    { name: "test" },
    { name: "test" },
  ];
  return (
    <>
      <Swiper
        slidesPerView={1}
        spaceBetween={10}
        loop={true}
        navigation={true}
        breakpoints={{
          "@0.00": {
            slidesPerView: 1,
            spaceBetween: 10,
          },
          "@0.75": {
            slidesPerView: 2,
            spaceBetween: 20,
          },
          "@1.00": {
            slidesPerView: 3,
            spaceBetween: 40,
          },
          "@1.50": {
            slidesPerView: 4,
            spaceBetween: 50,
          },
        }}
        modules={[Navigation]}
        className="mySwiper"
      >
        {data.map((x) => (
          <SwiperSlide>
            <div className="py-10">Slide {x.name}</div>
          </SwiperSlide>
        ))}
      </Swiper>
    </>
  );
};

export default TestimonialCarousel;