import Image from "next/image";
import React from "react";
import principlesOne from "@/Assets/Images/pageImages/principles_one.svg";
import websiteData from "../../../Data/websiteData.json";

const Principles = () => {
  const { aboutPage } = websiteData;
  const scroll2: Record<string, string> = aboutPage.scroll2;

  const a = ["1", "2", "3", "4", "5", "6"];
  return (
    <div>
      <div className="container mx-auto">
        <div className="lg:grid grid-cols-2">
          <div>
            <p className="paragraph_one_style mb-2">My Driving Purpose</p>
            <h2 className="heading_style_two mb-6">Inner Peace for All</h2>
            <p className="paragraph_two_style">{scroll2.heading}</p>
          </div>
        </div>
        <ul className="grid md:grid-cols-2 lg:grid-cols-3 gap-10 mt-14">
          {a.map((item: string, index: number) => {
            const key = `subHeading${item}`;
            const key2 = `subBody${item}`;
            const heading: string = scroll2[key];
            const body: string = scroll2[key2];
            return (
              <li key={`principleItem-${index}`}>
                <Image
                  src={principlesOne}
                  alt="principle"
                  className="mb-4 lg:mb-7"
                />
                <p className="heading_three_style">{heading}</p>
                <p className="mt-2 lg:mt-5 text-base text-black">{body}</p>
              </li>
            );
          })}
        </ul>
      </div>
    </div>
  );
};

export default Principles;
