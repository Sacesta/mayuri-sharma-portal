/* eslint-disable react/jsx-key */
"use client";
import React from "react";
import Image from "next/image";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination } from "swiper";
import profileImage from "../../../Assets/Images/pageImages/transformation_profile_img.png";
import rightArrow from '../../../Assets/Images/pageImages/right_arrow_background.svg'
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
            slidesPerView: 1,
            spaceBetween: 20,
          },
          "@1.00": {
            slidesPerView: 2,
            spaceBetween: 40,
          },
          "@1.50": {
            slidesPerView: 3,
            spaceBetween: 50,
          },
          "@1.75": {
            slidesPerView: 4,
            spaceBetween: 50,
          },
        }}
        modules={[Navigation]}
        className="mySwiper"
      >
        {data.map((x) => (
          <SwiperSlide>
            
              <div className="w-full h-auto border-2 border-[#E1E1E1] rounded-[20px] p-8">
                  <p className="paragraph_two_style">The challenge taught me a lot, I immediately applied this knowledge in my work, and my everyday life. Slide {x.name}</p>
                  <div className="mt-6 flex items-center">
                    <div className="h-12 w-12 rounded-full overflow-hidden mr-4">
                      <Image src={profileImage} className="w-full h-full object-cover" alt="..." />
                    </div>
                    <div className="font-bold text-[#505050] text-sm">
                      <p>Larissa</p>
                      <p>CEO | MediGo</p>
                    </div>
                  </div>
              </div>
            
          </SwiperSlide>
        ))}
      </Swiper>
    </>
  );
};

export default TestimonialCarousel;