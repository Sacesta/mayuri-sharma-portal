"use client";
import { Swiper, SwiperSlide } from "swiper/react";
import Image from "next/image";
import homebannerSlider from "../../../Assets/Images/pageImages/fun_profile.png";
import "swiper/css";
import "swiper/css/pagination";
import { Pagination } from "swiper";

export default function HeroTestimonial() {
  return (
    <>
      <Swiper
        className="mySwiper h-full w-[344px] home_banner_carousel rounded-[20px]"
        spaceBetween={10}
        pagination={{
          clickable: true,
        }}
        loop={true}
        modules={[Pagination]}
        speed={1500}
        effect="fade"
        slidesPerView={1}
      >
        {/* <SwiperSlide>
          <div className="h-full w-full">
            <Image
              src={homebannerSlider}
              className="h-full w-full object-cover"
              alt="..."
            />
          </div>
        </SwiperSlide> */}

        <SwiperSlide>
          <div className="h-full w-full">
            <Image
              src={homebannerSlider}
              className="w-full object-cover"
              alt="..."
            />
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="h-full w-full">
            <Image
              src={homebannerSlider}
              className="w-full object-cover"
              alt="..."
            />
          </div>
        </SwiperSlide>

        <SwiperSlide>
          <div className="h-full w-full">
            <Image
              src={homebannerSlider}
              className="w-full object-cover"
              alt="..."
            />
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="h-full w-full">
            <Image
              src={homebannerSlider}
              className="w-full object-cover"
              alt="..."
            />
          </div>
        </SwiperSlide>
        <div className="h-16 w-16 bg-[#FF682C] absolute bottom-20 right-6 z-[3] rounded-full flex items-center justify-center">
          <svg
            width="17"
            height="25"
            viewBox="0 0 17 25"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <rect y="0.614258" width="6" height="24" rx="2" fill="white" />
            <rect
              x="11"
              y="0.614258"
              width="6"
              height="24"
              rx="2"
              fill="white"
            />
          </svg>
        </div>
      </Swiper>
    </>
  );
}
