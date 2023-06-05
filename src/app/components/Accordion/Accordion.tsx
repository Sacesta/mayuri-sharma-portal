"use client";
import React, { useState } from "react";

const Accordion = ({ items }: any) => {
  const [activeIndex, setActiveIndex] = useState(null);

  const handleClick = (index: any) => {
    setActiveIndex(index === activeIndex ? null : index);
  };

  return (
    <div className="accordian">
      {items?.map((item: any, index: any) => (
        <div className="accordian_item" key={index}>
          <h5
            className="accordian_header"
            id={`heading${index}`}
            onClick={() => handleClick(index)}
          >
            <button className="accordion_button">{item.question}</button>
            {index == activeIndex ? (
              <svg
                width="32"
                height="32"
                viewBox="0 0 32 32"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
                className="absolute right-0 top-[45%]"
              >
                <path
                  fill-rule="evenodd"
                  clip-rule="evenodd"
                  d="M14.9697 11.8231C15.2626 11.5302 15.7374 11.5302 16.0303 11.8231L23.6768 19.4696C23.9697 19.7625 23.9697 20.2373 23.6768 20.5302L23.3233 20.8838C23.0304 21.1767 22.5555 21.1767 22.2626 20.8838L15.5 14.1212L8.73744 20.8838C8.44454 21.1767 7.96974 21.1767 7.67684 20.8838L7.32324 20.5302C7.03034 20.2373 7.03034 19.7625 7.32324 19.4696L14.9697 11.8231Z"
                  fill="black"
                />
              </svg>
            ) : (
              <svg
                width="18"
                height="11"
                className="absolute right-0 top-[45%]"
                viewBox="0 0 18 11"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  fill-rule="evenodd"
                  clip-rule="evenodd"
                  d="M9.53026 9.88389C9.23736 10.1768 8.76256 10.1768 8.46966 9.88389L0.823183 2.23739C0.530293 1.94449 0.530293 1.46969 0.823183 1.17679L1.17674 0.823191C1.46963 0.530291 1.9445 0.530291 2.2374 0.823191L8.99996 7.58579L15.7626 0.823191C16.0555 0.530291 16.5303 0.530291 16.8232 0.823191L17.1768 1.17679C17.4697 1.46969 17.4697 1.94449 17.1768 2.23739L9.53026 9.88389Z"
                  fill="black"
                />
              </svg>
            )}
          </h5>
          <div
            id={`collapse${index}`}
            className={`accordion_collapse ${
              activeIndex === index ? "show" : "hidden"
            }`}
          >
            <div className="accordion_body">{item.answer}</div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default Accordion;
