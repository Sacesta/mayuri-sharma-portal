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
        className="mySwiper h-[95%] w-[344px] home_banner_carousel rounded-[20px]"
        spaceBetween={50}
        pagination={{
          clickable: true,
        }}
        modules={[Pagination]}
      >
        <SwiperSlide>
          <div className="h-full w-full">
            <Image src={homebannerSlider} className="h-full w-full object-cover" alt="..." />
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <Swiper
            className="mySwiper2 swiper-v"
            direction={"vertical"}
            spaceBetween={50}
            pagination={{
              clickable: true,
            }}
            modules={[Pagination]}
          >
            <SwiperSlide>
              <div className="h-full w-full">
                <Image src={homebannerSlider} className="h-full w-full object-cover" alt="..." />
              </div>
            </SwiperSlide>
            <SwiperSlide>
              <div className="h-full w-full">
                <Image src={homebannerSlider} className="h-full w-full object-cover" alt="..." />
              </div>
            </SwiperSlide>
            <SwiperSlide>
              <div className="h-full w-full">
                <Image src={homebannerSlider} className="h-full w-full object-cover" alt="..." />
              </div>
            </SwiperSlide>
            <SwiperSlide>
              <div className="h-full w-full">
                <Image src={homebannerSlider} className="h-full w-full object-cover" alt="..." />
              </div>
            </SwiperSlide>
            <SwiperSlide>
              <div className="h-full w-full">
                <Image src={homebannerSlider} className="h-full w-full object-cover " alt="..." />
              </div>
            </SwiperSlide>
          </Swiper>
        </SwiperSlide>
        <SwiperSlide>Horizontal Slide 3</SwiperSlide>
        <SwiperSlide>Horizontal Slide 4</SwiperSlide>
      </Swiper>
    </>
  );
}
