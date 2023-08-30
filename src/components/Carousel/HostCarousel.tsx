/* eslint-disable react/jsx-key */
"use client";
import React from "react";
import Image from "next/image";
import { Swiper, SwiperSlide } from "swiper/react";
import profileImage from "@/Assets/Images/pageImages/transformation_profile_img.png";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import { SwiperNavButtons } from "./SwiperButtons";
import { HostItem } from "@/services/Program.services";
import { validUrl } from "../utils";

const HostCarousel = ({ data = [] }: any) => {
  //   const data = [
  //     {
  //       desc: "The challenge taught me a lot,I immediately applied this knowledge in my work, and my everyday life.",
  //       name: "Larissa",
  //       position: "CEO | MediGo",
  //     },
  //     {
  //       desc: "The challenge taught me a lot,I immediately applied this knowledge in my work, and my everyday life.",
  //       name: "Larissa",
  //       position: "CEO | MediGo",
  //     },
  //     {
  //       desc: "The challenge taught me a lot,I immediately applied this knowledge in my work, and my everyday life.",
  //       name: "Larissa",
  //       position: "CEO | MediGo",
  //     },
  //     {
  //       desc: "The challenge taught me a lot,I immediately applied this knowledge in my work, and my everyday life.",
  //       name: "Larissa",
  //       position: "CEO | MediGo",
  //     },
  //     {
  //       desc: "The challenge taught me a lot,I immediately applied this knowledge in my work, and my everyday life.",
  //       name: "Larissa",
  //       position: "CEO | MediGo",
  //     },
  //     {
  //       desc: "The challenge taught me a lot,I immediately applied this knowledge in my work, and my everyday life.",
  //       name: "Larissa",
  //       position: "CEO | MediGo",
  //     },
  //   ];
  return (
    <>
      <Swiper
        spaceBetween={10}
        loop={true}
        direction={"horizontal"}
        centerInsufficientSlides={true}
        centeredSlidesBounds={true}
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
        className="mySwiper"
      >
        {data.map((host: HostItem, index: number) => (
          <SwiperSlide key={`${host.name}-${index}`}>
            <div className="w-full h-auto border-2 border-[#E1E1E1] rounded-[20px] p-8">
              <p className="paragraph_two_style">{host.description}</p>
              <div className="mt-6 flex items-center">
                <div className="h-12 w-12 rounded-full overflow-hidden mr-4">
                  <Image
                    width={0}
                    height={0}
                    sizes="100vw"
                    src={validUrl(host?.img) ? host?.img : profileImage}
                    className="w-full h-full object-cover"
                    alt="..."
                  />
                </div>
                <div className="font-bold text-[#505050] text-sm">
                  <p>{host.name}</p>
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

export default HostCarousel;
