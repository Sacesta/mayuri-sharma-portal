/* eslint-disable react/jsx-key */
"use client";
import React from "react";
import Image from "next/image";
import { Swiper, SwiperSlide } from "swiper/react";
import profileImage from "../../../Assets/Images/pageImages/transformation_profile_img.png";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import { SwiperNavButtons } from "./SwiperButtons";

const TestimonialCarousel = () => {
  const data = [
    {
      desc: "The challenge taught me a lot,I immediately applied this knowledge in my work, and my everyday life.",
      name: "Larissa",
      position: "CEO | MediGo",
    },
    {
      desc: "The challenge taught me a lot,I immediately applied this knowledge in my work, and my everyday life.",
      name: "Larissa",
      position: "CEO | MediGo",
    },
    {
      desc: "The challenge taught me a lot,I immediately applied this knowledge in my work, and my everyday life.",
      name: "Larissa",
      position: "CEO | MediGo",
    },
    {
      desc: "The challenge taught me a lot,I immediately applied this knowledge in my work, and my everyday life.",
      name: "Larissa",
      position: "CEO | MediGo",
    },
    {
      desc: "The challenge taught me a lot,I immediately applied this knowledge in my work, and my everyday life.",
      name: "Larissa",
      position: "CEO | MediGo",
    },
    {
      desc: "The challenge taught me a lot,I immediately applied this knowledge in my work, and my everyday life.",
      name: "Larissa",
      position: "CEO | MediGo",
    },
  ];
  return (
    <>
      <Swiper
        spaceBetween={10}
        direction={"horizontal"}
        centerInsufficientSlides={true}
        centeredSlidesBounds={true}
        breakpoints={{
          // when window width is <= 320px
          320: {
            slidesPerView: 1,
            spaceBetween: 10,
          },
          // when window width is <= 480px
          480: {
            slidesPerView: 1,
            spaceBetween: 20,
          },

          // when window width is <= 640px
          640: {
            slidesPerView: 1,
            spaceBetween: 30,
          },
        }}
        // modules={[Navigation]}
        className="mySwiper"
        loop={true}
      >
        {data.map((x) => (
          <SwiperSlide>
            <div className="w-full h-auto border-2 border-[#E1E1E1] rounded-[20px] p-8">
              <p className="paragraph_two_style">{x.desc}</p>
              <div className="mt-6 flex items-center">
                <div className="h-12 w-12 rounded-full overflow-hidden mr-4">
                  <Image
                    src={profileImage}
                    className="w-full h-full object-cover"
                    alt="..."
                  />
                </div>
                <div className="font-bold text-[#505050] text-sm">
                  <p>{x.name}</p>
                  <p>{x.position}</p>
                </div>
              </div>
            </div>
          </SwiperSlide>
        ))}
        <SwiperNavButtons />
      </Swiper>
    </>
  );
};

export default TestimonialCarousel;
