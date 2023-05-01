import React from "react";
import "./main.css";
import Image from "next/image";
import LogoMark from "../../../Assets/icons/Logo Mark.png";
import rightCircle from "../../../Assets/icons/Ellipse 24 (Stroke).png";
const Main = () => {
  return (
    <>
      <section className="pt-6">
        <div className="main_div flex items-center justify-center relative">
          <Image className="main-right-circle" src={rightCircle} alt=".." />
          <div className="grid grid-rows-2">
            <div className="h-full"></div>
            <div>
              <Image src={LogoMark} alt="LogoMark..." />
              <h3>Mayuri Sharma</h3>
              <h1>
                Wisdom of the past <br /> practice for the present
              </h1>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Main;
