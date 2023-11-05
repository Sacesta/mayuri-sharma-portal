"use client";
import { Swiper, SwiperSlide } from "swiper/react";
import Image from "next/image";
import homebannerSlider from "@/Assets/Images/pageImages/fun_profile.png";
import "swiper/css";
import "swiper/css/pagination";
import { Pagination, Autoplay } from "swiper/modules";

import Img3 from "@/Assets/Images/pageImages/w_m_1.jpg";
import Img4 from "@/Assets/Images/pageImages/r_m_1.jpg";
import Imgg from "@/Assets/Images/pageImages/w_m_2.jpg";

export default function HeroTestimonial() {
  return (
    <>
      <Swiper
        className="mySwiper h-full w-[full] sm:w-[344px] home_banner_carousel rounded-[20px]"
        pagination={{ clickable: true }}
        modules={[Pagination, Autoplay]}
        spaceBetween={10}
        // loop={true}
        // speed={1500}
        // slidesPerView={1}
        // autoHeight={true}
        autoplay={true}
      >
        <SwiperSlide>
          <div className="h-full w-full relative">
            <Image
              src={homebannerSlider}
              className="w-full object-cover h-[92%]"
              alt="..."
            />
            <div className="h-16 w-16 bg-[#EB334A] absolute bottom-20 right-6 z-[3] rounded-full flex items-center justify-center">
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
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="h-full w-full relative">
            <Image
              src={Img4}
              className="w-full object-cover h-[92%]"
              alt="..."
            />
            <div className="h-16 w-16 bg-[#EB334A] absolute bottom-20 right-6 z-[3] rounded-full flex items-center justify-center">
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
          </div>
        </SwiperSlide>

        <SwiperSlide>
          <div className="h-full w-full relative">
            <Image
              src={Img3}
              className="w-full object-cover h-[92%]"
              alt="..."
            />
            <div className="h-16 w-16 bg-[#EB334A] absolute bottom-20 right-6 z-[3] rounded-full flex items-center justify-center">
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
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="h-full w-full relative">
            <Image
              src={Imgg}
              className="w-full object-cover h-[92%]"
              alt="..."
            />
            <div className="h-16 w-16 bg-[#EB334A] absolute bottom-20 right-6 z-[3] rounded-full flex items-center justify-center">
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
          </div>
        </SwiperSlide>
      </Swiper>
    </>
  );
}
