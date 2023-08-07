import React from "react";
import { useSwiper } from "swiper/react";
import Prev from "@/Assets/Images/pageImages/Left-Arrow.png";
import Next from "@/Assets/Images/pageImages/Rignt_Arrow.png";
import Image from "next/image";
export const SwiperNavButtons = () => {
  const swiper = useSwiper();

  return (
    <div className="flex items-center justify-center mt-11 gap-5">
      <button
        className="bg-[#D8D5E3] h-[60px] w-[60px] d-flex rounded-full mr-4"
        onClick={() => swiper.slidePrev()}
      >
        <Image className="m-auto" src={Prev} alt="..." />
      </button>
      <button
        className="bg-[#D8D5E3] h-[60px] w-[60px] d-flex rounded-full ml-4"
        onClick={() => swiper.slideNext()}
      >
        <Image className="m-auto" src={Next} alt="..." />
      </button>
    </div>
  );
};
