"use client";

import React, { useState } from "react";
import useNewsLetterSubmission from "./useNewsLetterSubmission";

const FooterNewsLetter = () => {
  const [email, setEmail] = useState<string>("");
  const { handleSubmit, loading } = useNewsLetterSubmission();
  const formSubmitHandler = async () => {
    try {
      await handleSubmit(email, "");
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div className="bg-white rounded-[20px] p-8 col-span-2 ">
      <div className="flex items-center">
        <svg
          width="30"
          height="24"
          viewBox="0 0 30 24"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          className="mb-7 mr-4"
        >
          <path
            d="M2.25 24C1.65 24 1.125 23.775 0.675 23.325C0.225 22.875 0 22.35 0 21.75V2.25C0 1.65 0.225 1.125 0.675 0.675C1.125 0.225 1.65 0 2.25 0H27.75C28.35 0 28.875 0.225 29.325 0.675C29.775 1.125 30 1.65 30 2.25V21.75C30 22.35 29.775 22.875 29.325 23.325C28.875 23.775 28.35 24 27.75 24H2.25ZM15 12.675L2.25 4.3125V21.75H27.75V4.3125L15 12.675ZM15 10.425L27.6 2.25H2.4375L15 10.425ZM2.25 4.3125V2.25V21.75V4.3125Z"
            fill="#29214B"
          />
        </svg>
        <p className="news_letter_form_head">News letter</p>
      </div>
      <p className="text-lg font-normal leading-7 mb-6 text-[#0E0F1D]">
        Join my monthly newsletter with tips and free content, no spam promise
        ;)
      </p>
      <div className="form_field">
        <label htmlFor="">Email address</label>
        <input
          type="text"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          placeholder="Enter email address"
        />
      </div>
      <button
        className="primary_button w-full mb-6 disabled:cursor-not-allowed"
        disabled={loading}
        onClick={formSubmitHandler}
      >
        Subscribe
      </button>
      {/* <p className="text-sm text-[#090617] font-normal">
                *We respect your privacy you can unsubscribe anytime
              </p> */}
    </div>
  );
};

export default FooterNewsLetter;
