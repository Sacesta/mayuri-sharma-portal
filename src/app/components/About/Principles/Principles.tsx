import Image from "next/image";
import React from "react";
import principlesOne from "../../../../Assets/Images/pageImages/principles_one.svg";

const Principles = () => {
  const a = [1, 2, 3, 4, 5, 6];
  return (
    <div>
      <div className="container mx-auto">
        <div className="lg:grid grid-cols-2">
          <div>
            <p className="paragraph_one_style mb-2">My values</p>
            <h2 className="heading_style_two mb-6">
              These are the principles important to me
            </h2>
            <p className="paragraph_two_style">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit.
              Suspendisse varius enim in eros elementum tristique.
            </p>
          </div>
        </div>
        <ul className="grid md:grid-cols-2 lg:grid-cols-3 gap-10 mt-14">
          {a.map(() => (
            <li>
              <Image
                src={principlesOne}
                alt="principle"
                className="mb-4 lg:mb-7"
              />
              <p className="heading_three_style">Describe value one</p>
              <p className="mt-2 lg:mt-5 text-base text-black">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                Suspendisse varius enim in eros elementum tristique. Duis
                cursus, mi quis viverra ornare, eros dolor interdum nulla.
              </p>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default Principles;
