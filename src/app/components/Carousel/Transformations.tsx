"use client";
import React, { useRef, useState } from "react";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/navigation";

const Transformations = () => {
  const a = [1, 2, 3, 4];
  return (
    <>
      <Swiper
        slidesPerView={1}
        breakpoints={{
          "@0.00": {
            slidesPerView: 1.5,
            spaceBetween: "20px",
          },
          "@0.75": {
            slidesPerView: 1.5,
            spaceBetween: "20px",
          },
          "@1.00": {
            slidesPerView: 2,
          },
          "@1.50": {
            slidesPerView: 4,
          },
        }}
        className="mySwiper"
      >
        {a.map((x, i) => (
          <SwiperSlide key={`${x}-${i}`}>
            <li>
              <div className="home_story_img">
                <video autoPlay loop muted>
                  <source src="https://player.vimeo.com/external/458869473.sd.mp4?s=8a12f7ccab0e8c2f76fc4d035432896a94c39867&profile_id=165&oauth2_token_id=57447761" />
                </video>
                <p className="home_story_number"># 0{i + 1}</p>
                <div className="story_podcast">
                  <svg
                    width="36"
                    height="35"
                    viewBox="0 0 36 35"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M1.35586 25.3094C0.614658 25.3094 0 24.6948 0 23.9535V10.3949C0 9.65372 0.614658 9.03906 1.35586 9.03906C2.09707 9.03906 2.71172 9.65372 2.71172 10.3949V23.9535C2.71172 24.6948 2.09707 25.3094 1.35586 25.3094Z"
                      fill="white"
                    />
                    <path
                      d="M9.49063 29.829C8.74942 29.829 8.13477 29.2143 8.13477 28.4731V5.87539C8.13477 5.13419 8.74942 4.51953 9.49063 4.51953C10.2318 4.51953 10.8465 5.13419 10.8465 5.87539V28.4731C10.8465 29.2143 10.2318 29.829 9.49063 29.829Z"
                      fill="white"
                    />
                    <path
                      d="M17.6264 34.3485C16.8852 34.3485 16.2705 33.7339 16.2705 32.9926V1.35586C16.2705 0.614658 16.8852 0 17.6264 0C18.3676 0 18.9822 0.614658 18.9822 1.35586V32.9926C18.9822 33.7339 18.3676 34.3485 17.6264 34.3485Z"
                      fill="white"
                    />
                    <path
                      d="M25.7611 29.829C25.0199 29.829 24.4053 29.2143 24.4053 28.4731V5.87539C24.4053 5.13419 25.0199 4.51953 25.7611 4.51953C26.5023 4.51953 27.117 5.13419 27.117 5.87539V28.4731C27.117 29.2143 26.5023 29.829 25.7611 29.829Z"
                      fill="white"
                    />
                    <path
                      d="M33.8969 25.3094C33.1557 25.3094 32.541 24.6948 32.541 23.9535V10.3949C32.541 9.65372 33.1557 9.03906 33.8969 9.03906C34.6381 9.03906 35.2527 9.65372 35.2527 10.3949V23.9535C35.2527 24.6948 34.6381 25.3094 33.8969 25.3094Z"
                      fill="white"
                    />
                  </svg>
                </div>
              </div>
              <p className="paragraph_two_style text-center">
                Episode description goes here with no more than three lines.
              </p>
            </li>
          </SwiperSlide>
        ))}
      </Swiper>
    </>
  );
};

export default Transformations;
