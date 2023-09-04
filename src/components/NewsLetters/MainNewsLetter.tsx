"use client";

import {
  NewsLetterPayload,
  registerSubscriber,
} from "@/services/newsLetter.services";
import React, { useState } from "react";
import { toast } from "react-toastify";
import useNewsLetterSubmission from "./useNewsLetterSubmission";

const MainNewsLetter = () => {
  const [name, setName] = useState<string>("");
  const [email, setEmail] = useState<string>("");

  const { handleSubmit, loading } = useNewsLetterSubmission();

  const formSubmitHandler = async () => {
    // console.log("clicked");
    // const payload: NewsLetterPayload = {
    //   email,
    //   fullName: name,
    // };
    // try {
    //   console.log(payload);
    //   const response = await registerSubscriber(payload);
    //   if (response.sucess === true) toast.success("You are subscribed");
    // } catch (error: any) {
    //   console.log(error);
    //   const errResp = error?.response?.data?.message;
    //   toast.error(errResp ? errResp : "Couldn't Subscribe");
    // }

    try {
      await handleSubmit(email, name);
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div className="news_letter_form lg:w-1/2 mt-[76px] lg:mt-28">
      <p className="news_letter_form_head">Join news letter</p>
      <div className="form_field">
        <label htmlFor="">Name</label>
        <input
          type="text"
          value={name}
          onChange={(e) => setName(e.target.value)}
          placeholder="Enter name"
        />
      </div>
      <div className="form_field">
        <label htmlFor="">Email address</label>
        <input
          type="text"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          placeholder="Enter email address"
        />
      </div>
      <svg className="checkbox-symbol">
        <symbol id="check" viewBox="0 0 12 10">
          <polyline
            points="1.5 6 4.5 9 10.5 1"
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="2"
          ></polyline>
        </symbol>
      </svg>

      <div className="flex items-center mb-[26px]">
        <div className="checkbox-container">
          <input className="checkbox-input" id="confirm_2" type="checkbox" />
          <label className="checkbox" htmlFor="confirm_2">
            <span>
              <svg width="12px" height="10px">
                <use xlinkHref="#check"></use>
              </svg>
            </span>
            <span>
              If you need to have a confirmation this is how it might look like.
            </span>
          </label>
        </div>
      </div>
      <button
        className="primary_button w-full mb-6 disabled:cursor-not-allowed"
        onClick={formSubmitHandler}
        disabled={loading}
      >
        Submit
      </button>
      <p className="text-sm text-[#090617] font-normal">
        *We respect your privacy you can unsubscribe anytime
      </p>
    </div>
  );
};

export default MainNewsLetter;
