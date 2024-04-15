"use client";
import Image from "next/image";
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination, Autoplay } from "swiper/modules";

import Img3 from "@/Assets/Images/pageImages/w_m_1.jpg";
import Img4 from "@/Assets/Images/pageImages/r_m_1.jpg";
import Imgg from "@/Assets/Images/pageImages/b_m_1.jpeg";
import homebannerSlider from "@/Assets/Images/pageImages/fun_profile.png";

export default function HeroTestimonial() {
  return (
    <>
      <Swiper
        className="mySwiper h-full w-[full] sm:w-[344px] home_banner_carousel rounded-[20px]"
        pagination={{ clickable: true }}
        modules={[Pagination, Autoplay]}
        spaceBetween={10}
        autoplay={true}
      >
        <SwiperSlide>
          <div className="h-full w-full relative">
            <Image
              src={homebannerSlider}
              className="w-full object-cover h-[92%]"
              alt="..."
            />
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="h-full w-full relative">
            <Image
              src={Img4}
              className="w-full object-cover h-[92%]"
              alt="..."
            />

          </div>
        </SwiperSlide>

        <SwiperSlide>
          <div className="h-full w-full relative">
            <Image
              src={Img3}
              className="w-full object-cover h-[92%]"
              alt="..."
            />

          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="h-full w-full relative">
            <Image
              src={Imgg}
              className="w-full object-cover h-[92%]"
              alt="..."
            />
          </div>
        </SwiperSlide>
      </Swiper>
    </>
  );
}
