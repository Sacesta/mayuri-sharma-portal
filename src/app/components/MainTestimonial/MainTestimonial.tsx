"use client";
import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination } from "swiper";

import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

export default function MainTestimonial() {
  return (
    <>
      <Swiper
        pagination={{
          clickable: true,
        }}
        modules={[Pagination]}
        className="mySwiper"
      >
        <SwiperSlide className="p-9 ">Slide 1</SwiperSlide>
        <SwiperSlide className="p-9 ">Slide 2</SwiperSlide>
        <SwiperSlide className="p-9 ">Slide 3</SwiperSlide>
        <SwiperSlide className="p-9 ">Slide 4</SwiperSlide>
        <SwiperSlide className="p-9 ">Slide 5</SwiperSlide>
        <SwiperSlide className="p-9 ">Slide 6</SwiperSlide>
      </Swiper>
    </>
  );
}
