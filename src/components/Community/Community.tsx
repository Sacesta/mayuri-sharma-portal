"use client";
import React, { useEffect, useState } from "react";
import "@/styles/main.css";
import Image from "next/image";
import rightCircle from "@/Assets/icons/Ellipse 24 (Stroke).png";
import programDetailsBanner from "@/Assets/Images/pageImages/programDetails_banner.png";
import profileImage from "@/Assets/Images/pageImages/transformation_profile_img.png";
import Footer from "../../components/footer/Footer";
import approach from "../../Assets/svg/Vectorapproch.svg";
import items from "@/Data/accordion.json";
import sideimage from "../../Assets/Images/pageImages/communityside.png";
import {
  AgendaItem,
  Program,
  ReviewItem,
  getProgram,
  registerProgram,
} from "@/services/Program.services";
import { format, parse } from "date-fns";
import HostCarousel from "../../components/Carousel/HostCarousel";
import { useAppDispatch, useAppSelector } from "@/redux/hooks";
import {
  getUser,
  setLoginModal,
  setRegisterClicked,
} from "@/redux/features/userSlice";
import Accordion from "@/components/Accordion/Accordion";
import { User } from "@/services/auth.services";
import { toast } from "react-toastify";
import RegisterBtn from "../../components/programdetails/RegisterBtn";
import { validUrl } from "../../components/utils";
import ReviewItemComponent from "../../components/programdetails/ReviewItemComponent";
import websiteData from "../../Data/websiteData.json";
import termgirl from "../../Assets/svg/Vectorgirl.svg";
import men from "../../Assets/svg/Vectormen.svg";

const Community = () => {
  const [activeIndex, setActiveIndex] = useState(null);

  const handleClick = (index: any) => {
    setActiveIndex(index === activeIndex ? null : index);
  };

  return (
    <div className="">
      <section className="py-9 productDetails_banner flex items-center bg-[#F9F9F9]">
        <div className="lg:bg-right container mx-auto">
          <div className="grid lg:grid-cols-2 z-[2] gap-10">
            <div className="flex flex-col justify-center">
              <div className="lg:pt-[10%]">
                <h1 className="heading_one_black">Innercord Community</h1>
                {/* <h1 className="heading_one_black">Beyond the Hustle: Find Your Calm</h1> */}

                <p className="text-lg text-[#2B2B27] font-normal leading-7 mt-4 lg:mt-8">
                  Our Innercord community offers a supportive environment to
                  explore your inner world. Join our community for weekly
                  sessions filled with authentic conversations, relatable
                  experiences, and inspiring stories from people just like you.
                  Get ready for epic discussions on relatable topics that&apos;ll
                  have you saying &apos;been there, done that!&apos; Take the first step
                  and join our community today
                </p>
                <ul className="flex flex-wrap items-center mt-8">
                  <li className="flex items-center min-w-[130px] md:mr-11 lg:mr-3 xl:mr-8 w-1/2 md:w-auto mb-6">
                    <div className="program_icon">
                      <svg
                        width="29"
                        height="32"
                        viewBox="0 0 29 32"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          d="M2.4 32C1.76 32 1.2 31.76 0.72 31.28C0.24 30.8 0 30.24 0 29.6V4.8C0 4.16 0.24 3.6 0.72 3.12C1.2 2.64 1.76 2.4 2.4 2.4H5V0H7.6V2.4H21.2V0H23.8V2.4H26.4C27.04 2.4 27.6 2.64 28.08 3.12C28.56 3.6 28.8 4.16 28.8 4.8V29.6C28.8 30.24 28.56 30.8 28.08 31.28C27.6 31.76 27.04 32 26.4 32H2.4ZM2.4 29.6H26.4V12.4H2.4V29.6ZM2.4 10H26.4V4.8H2.4V10ZM14.4 19.2C13.9467 19.2 13.5667 19.0467 13.26 18.74C12.9533 18.4333 12.8 18.0533 12.8 17.6C12.8 17.1467 12.9533 16.7667 13.26 16.46C13.5667 16.1533 13.9467 16 14.4 16C14.8533 16 15.2333 16.1533 15.54 16.46C15.8467 16.7667 16 17.1467 16 17.6C16 18.0533 15.8467 18.4333 15.54 18.74C15.2333 19.0467 14.8533 19.2 14.4 19.2ZM8 19.2C7.54667 19.2 7.16667 19.0467 6.86 18.74C6.55333 18.4333 6.4 18.0533 6.4 17.6C6.4 17.1467 6.55333 16.7667 6.86 16.46C7.16667 16.1533 7.54667 16 8 16C8.45333 16 8.83333 16.1533 9.14 16.46C9.44667 16.7667 9.6 17.1467 9.6 17.6C9.6 18.0533 9.44667 18.4333 9.14 18.74C8.83333 19.0467 8.45333 19.2 8 19.2ZM20.8 19.2C20.3467 19.2 19.9667 19.0467 19.66 18.74C19.3533 18.4333 19.2 18.0533 19.2 17.6C19.2 17.1467 19.3533 16.7667 19.66 16.46C19.9667 16.1533 20.3467 16 20.8 16C21.2533 16 21.6333 16.1533 21.94 16.46C22.2467 16.7667 22.4 17.1467 22.4 17.6C22.4 18.0533 22.2467 18.4333 21.94 18.74C21.6333 19.0467 21.2533 19.2 20.8 19.2ZM14.4 25.6C13.9467 25.6 13.5667 25.4467 13.26 25.14C12.9533 24.8333 12.8 24.4533 12.8 24C12.8 23.5467 12.9533 23.1667 13.26 22.86C13.5667 22.5533 13.9467 22.4 14.4 22.4C14.8533 22.4 15.2333 22.5533 15.54 22.86C15.8467 23.1667 16 23.5467 16 24C16 24.4533 15.8467 24.8333 15.54 25.14C15.2333 25.4467 14.8533 25.6 14.4 25.6ZM8 25.6C7.54667 25.6 7.16667 25.4467 6.86 25.14C6.55333 24.8333 6.4 24.4533 6.4 24C6.4 23.5467 6.55333 23.1667 6.86 22.86C7.16667 22.5533 7.54667 22.4 8 22.4C8.45333 22.4 8.83333 22.5533 9.14 22.86C9.44667 23.1667 9.6 23.5467 9.6 24C9.6 24.4533 9.44667 24.8333 9.14 25.14C8.83333 25.4467 8.45333 25.6 8 25.6ZM20.8 25.6C20.3467 25.6 19.9667 25.4467 19.66 25.14C19.3533 24.8333 19.2 24.4533 19.2 24C19.2 23.5467 19.3533 23.1667 19.66 22.86C19.9667 22.5533 20.3467 22.4 20.8 22.4C21.2533 22.4 21.6333 22.5533 21.94 22.86C22.2467 23.1667 22.4 23.5467 22.4 24C22.4 24.4533 22.2467 24.8333 21.94 25.14C21.6333 25.4467 21.2533 25.6 20.8 25.6Z"
                          fill="#C50019"
                        />
                      </svg>
                    </div>
                    <div className="program_time">
                      <p>When</p>
                      <p>Thursdays</p>
                      {/* <p>{format(new Date(program?.edate), 'do MMMM')}</p> */}
                    </div>
                  </li>
                  <li className="flex items-center min-w-[130px] md:mr-11 lg:mr-3 xl:mr-8 w-1/2 md:w-auto mb-6">
                    <div className="program_icon">
                      <svg
                        width="28"
                        height="32"
                        viewBox="0 0 28 32"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          d="M9.15375 2.28844V0H18.3075V2.28844H9.15375ZM12.5864 19.3373H14.8749V10.565H12.5864V19.3373ZM13.7306 32C11.849 32 10.0755 31.6377 8.41001 30.913C6.74454 30.1883 5.28884 29.203 4.04291 27.9571C2.79698 26.7112 1.81168 25.2555 1.08701 23.59C0.362336 21.9245 0 20.151 0 18.2694C0 16.3878 0.362336 14.6142 1.08701 12.9487C1.81168 11.2833 2.79698 9.82757 4.04291 8.58165C5.28884 7.33572 6.74454 6.35042 8.41001 5.62574C10.0755 4.90107 11.849 4.53874 13.7306 4.53874C15.4342 4.53874 17.0362 4.82479 18.5364 5.3969C20.0366 5.96901 21.3715 6.76361 22.5411 7.78069L24.4863 5.83552L26.0882 7.43743L24.143 9.3826C25.0584 10.3997 25.8403 11.6329 26.4887 13.0822C27.1371 14.5316 27.4613 16.2606 27.4613 18.2694C27.4613 20.151 27.0989 21.9245 26.3743 23.59C25.6496 25.2555 24.6643 26.7112 23.4184 27.9571C22.1724 29.203 20.7167 30.1883 19.0513 30.913C17.3858 31.6377 15.6122 32 13.7306 32ZM13.7306 29.7116C16.909 29.7116 19.6106 28.5991 21.8355 26.3743C24.0604 24.1494 25.1728 21.4478 25.1728 18.2694C25.1728 15.091 24.0604 12.3894 21.8355 10.1645C19.6106 7.93961 16.909 6.82717 13.7306 6.82717C10.5522 6.82717 7.85062 7.93961 5.62574 10.1645C3.40087 12.3894 2.28844 15.091 2.28844 18.2694C2.28844 21.4478 3.40087 24.1494 5.62574 26.3743C7.85062 28.5991 10.5522 29.7116 13.7306 29.7116Z"
                          fill="#C50019"
                        />
                      </svg>
                    </div>
                    <div className="program_time">
                      <p>Timing</p>
                      <p> 5-6 PM</p>
                    </div>
                  </li>
                  <li className="flex items-center min-w-[130px] md:mr-11 lg:mr-3 xl:mr-8 w-1/2 md:w-auto mb-6">
                    <div className="program_icon">
                      <svg
                        width="32"
                        height="32"
                        viewBox="0 0 32 32"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          d="M16 32C13.76 32 11.6667 31.58 9.72 30.74C7.77333 29.9 6.08 28.76 4.64 27.32C3.2 25.88 2.06667 24.18 1.24 22.22C0.413334 20.26 0 18.16 0 15.92C0 13.68 0.413334 11.5933 1.24 9.66C2.06667 7.72667 3.2 6.04 4.64 4.6C6.08 3.16 7.77333 2.03333 9.72 1.22C11.6667 0.406667 13.76 0 16 0C18.24 0 20.3333 0.406667 22.28 1.22C24.2267 2.03333 25.92 3.16 27.36 4.6C28.8 6.04 29.9333 7.72667 30.76 9.66C31.5867 11.5933 32 13.68 32 15.92C32 18.16 31.5867 20.26 30.76 22.22C29.9333 24.18 28.8 25.88 27.36 27.32C25.92 28.76 24.2267 29.9 22.28 30.74C20.3333 31.58 18.24 32 16 32ZM16 29.68C16.9333 28.72 17.7133 27.62 18.34 26.38C18.9667 25.14 19.48 23.6667 19.88 21.96H12.16C12.5333 23.56 13.0333 25 13.66 26.28C14.2867 27.56 15.0667 28.6933 16 29.68ZM12.6 29.2C11.9333 28.1867 11.36 27.0933 10.88 25.92C10.4 24.7467 10 23.4267 9.68 21.96H3.68C4.69333 23.8533 5.86667 25.34 7.2 26.42C8.53333 27.5 10.3333 28.4267 12.6 29.2ZM19.44 29.16C21.36 28.5467 23.0867 27.6267 24.62 26.4C26.1533 25.1733 27.3867 23.6933 28.32 21.96H22.36C22.0133 23.4 21.6067 24.7067 21.14 25.88C20.6733 27.0533 20.1067 28.1467 19.44 29.16ZM2.88 19.56H9.24C9.16 18.84 9.11333 18.1933 9.1 17.62C9.08667 17.0467 9.08 16.48 9.08 15.92C9.08 15.2533 9.09333 14.66 9.12 14.14C9.14667 13.62 9.2 13.04 9.28 12.4H2.88C2.69333 13.04 2.56667 13.6133 2.5 14.12C2.43333 14.6267 2.4 15.2267 2.4 15.92C2.4 16.6133 2.43333 17.2333 2.5 17.78C2.56667 18.3267 2.69333 18.92 2.88 19.56ZM11.72 19.56H20.32C20.4267 18.7333 20.4933 18.06 20.52 17.54C20.5467 17.02 20.56 16.48 20.56 15.92C20.56 15.3867 20.5467 14.8733 20.52 14.38C20.4933 13.8867 20.4267 13.2267 20.32 12.4H11.72C11.6133 13.2267 11.5467 13.8867 11.52 14.38C11.4933 14.8733 11.48 15.3867 11.48 15.92C11.48 16.48 11.4933 17.02 11.52 17.54C11.5467 18.06 11.6133 18.7333 11.72 19.56ZM22.72 19.56H29.12C29.3067 18.92 29.4333 18.3267 29.5 17.78C29.5667 17.2333 29.6 16.6133 29.6 15.92C29.6 15.2267 29.5667 14.6267 29.5 14.12C29.4333 13.6133 29.3067 13.04 29.12 12.4H22.76C22.84 13.3333 22.8933 14.0467 22.92 14.54C22.9467 15.0333 22.96 15.4933 22.96 15.92C22.96 16.5067 22.94 17.06 22.9 17.58C22.86 18.1 22.8 18.76 22.72 19.56ZM22.32 10H28.32C27.44 8.16 26.2333 6.62667 24.7 5.4C23.1667 4.17333 21.4 3.30667 19.4 2.8C20.0667 3.78667 20.6333 4.85333 21.1 6C21.5667 7.14667 21.9733 8.48 22.32 10ZM12.16 10H19.92C19.6267 8.58667 19.1333 7.22 18.44 5.9C17.7467 4.58 16.9333 3.41333 16 2.4C15.1467 3.12 14.4267 4.06667 13.84 5.24C13.2533 6.41333 12.6933 8 12.16 10ZM3.68 10H9.72C10.0133 8.56 10.3867 7.27333 10.84 6.14C11.2933 5.00667 11.8667 3.90667 12.56 2.84C10.56 3.34667 8.81333 4.2 7.32 5.4C5.82667 6.6 4.61333 8.13333 3.68 10Z"
                          fill="#C50019"
                        />
                      </svg>
                    </div>
                    <div className="program_time">
                      <p>Language </p>
                      <p>English</p>
                    </div>
                  </li>
                </ul>
                <div className=" flex gap-3 items-center">
                  <button className="primary_button ">Register now</button>
                  <p className=" text-sm  font-normal text-[#505050]">
                    Join hundreds of others
                  </p>
                </div>
              </div>
              <div className="block lg:hidden mt-12">
                <div className="rounded-[20px] overflow-hidden h-[358px] xl:h-[552px] w-full  sticky left-0 top-[108px]">
                  <Image
                    src={sideimage}
                    width={0}
                    height={0}
                    sizes="100vw"
                    alt="..."
                    className=" w-full h-full object-cover"
                  />
                  <Image
                    className="main-right-circle h-[85%] w-[48%]"
                    src={rightCircle}
                    alt=".."
                  />
                </div>
              </div>
              <div className="">
                <div className="my-20 lg:my-[100px]">
                  {/* <p className="paragraph_one_style   mb-2 text-[#2B2B27]">
                    This program includes
                  </p> */}
                  <h2 className="heading_style_two  max-w-[920px] mx-auto mb-[60px] lg:mb-[71px] text-[#2B2B27]">
                  This program includes
                  </h2>

                  <ul className="journey_details programDetails_journey bg-white border border-[#E1E1E1] rounded-[20px] px-9 py-8">
                    <li className="flex">
                      <div className="journey_points">
                        <svg
                          width="40"
                          height="40"
                          viewBox="0 0 40 40"
                          fill="black"
                          xmlns="http://www.w3.org/2000/svg"
                        >
                          <path
                            d="M17.05 29.1L31.2 14.95L28.9 12.7L17.05 24.55L11.05 18.55L8.8 20.8L17.05 29.1ZM20 40C17.2667 40 14.6833 39.475 12.25 38.425C9.81667 37.375 7.69167 35.9417 5.875 34.125C4.05833 32.3083 2.625 30.1833 1.575 27.75C0.525 25.3167 0 22.7333 0 20C0 17.2333 0.525 14.6333 1.575 12.2C2.625 9.76667 4.05833 7.65 5.875 5.85C7.69167 4.05 9.81667 2.625 12.25 1.575C14.6833 0.525 17.2667 0 20 0C22.7667 0 25.3667 0.525 27.8 1.575C30.2333 2.625 32.35 4.05 34.15 5.85C35.95 7.65 37.375 9.76667 38.425 12.2C39.475 14.6333 40 17.2333 40 20C40 22.7333 39.475 25.3167 38.425 27.75C37.375 30.1833 35.95 32.3083 34.15 34.125C32.35 35.9417 30.2333 37.375 27.8 38.425C25.3667 39.475 22.7667 40 20 40ZM20 37C24.7333 37 28.75 35.3417 32.05 32.025C35.35 28.7083 37 24.7 37 20C37 15.2667 35.35 11.25 32.05 7.95C28.75 4.65 24.7333 3 20 3C15.3 3 11.2917 4.65 7.975 7.95C4.65833 11.25 3 15.2667 3 20C3 24.7 4.65833 28.7083 7.975 32.025C11.2917 35.3417 15.3 37 20 37Z"
                            fill="#EB334A"
                          />
                        </svg>
                      </div>
                      <div className="mb-5">
                        <h3 className="heading_three_style_black mb-[10px]">
                          Expert Weekly Sessions
                        </h3>
                        <p className="paragraph_two_style">
                          Join us every Thursday for a session featuring experts
                          who explore personal journeys, healthy habits, healthy
                          practices , and help you strike inner balance
                        </p>
                      </div>
                    </li>
                    <li className="flex">
                      <div className="journey_points">
                        <svg
                          width="40"
                          height="40"
                          viewBox="0 0 40 40"
                          fill="none"
                          xmlns="http://www.w3.org/2000/svg"
                        >
                          <path
                            d="M17.05 29.1L31.2 14.95L28.9 12.7L17.05 24.55L11.05 18.55L8.8 20.8L17.05 29.1ZM20 40C17.2667 40 14.6833 39.475 12.25 38.425C9.81667 37.375 7.69167 35.9417 5.875 34.125C4.05833 32.3083 2.625 30.1833 1.575 27.75C0.525 25.3167 0 22.7333 0 20C0 17.2333 0.525 14.6333 1.575 12.2C2.625 9.76667 4.05833 7.65 5.875 5.85C7.69167 4.05 9.81667 2.625 12.25 1.575C14.6833 0.525 17.2667 0 20 0C22.7667 0 25.3667 0.525 27.8 1.575C30.2333 2.625 32.35 4.05 34.15 5.85C35.95 7.65 37.375 9.76667 38.425 12.2C39.475 14.6333 40 17.2333 40 20C40 22.7333 39.475 25.3167 38.425 27.75C37.375 30.1833 35.95 32.3083 34.15 34.125C32.35 35.9417 30.2333 37.375 27.8 38.425C25.3667 39.475 22.7667 40 20 40ZM20 37C24.7333 37 28.75 35.3417 32.05 32.025C35.35 28.7083 37 24.7 37 20C37 15.2667 35.35 11.25 32.05 7.95C28.75 4.65 24.7333 3 20 3C15.3 3 11.2917 4.65 7.975 7.95C4.65833 11.25 3 15.2667 3 20C3 24.7 4.65833 28.7083 7.975 32.025C11.2917 35.3417 15.3 37 20 37Z"
                            fill="#EB334A"
                          />
                        </svg>
                      </div>
                      <div className="mb-5">
                        <h3 className="heading_three_style_black mb-[10px]">
                          Motivation Booster
                        </h3>
                        <p className="paragraph_two_style">
                        Start your week with our sessions, where we fill your day with quotes, success stories, or practical tips to set the tone for a week filled with purpose and determination.
                        </p>
                      </div>
                    </li>
                    <li className="flex">
                      <div className="journey_points">
                        <svg
                          width="40"
                          height="40"
                          viewBox="0 0 40 40"
                          fill="none"
                          xmlns="http://www.w3.org/2000/svg"
                        >
                          <path
                            d="M17.05 29.1L31.2 14.95L28.9 12.7L17.05 24.55L11.05 18.55L8.8 20.8L17.05 29.1ZM20 40C17.2667 40 14.6833 39.475 12.25 38.425C9.81667 37.375 7.69167 35.9417 5.875 34.125C4.05833 32.3083 2.625 30.1833 1.575 27.75C0.525 25.3167 0 22.7333 0 20C0 17.2333 0.525 14.6333 1.575 12.2C2.625 9.76667 4.05833 7.65 5.875 5.85C7.69167 4.05 9.81667 2.625 12.25 1.575C14.6833 0.525 17.2667 0 20 0C22.7667 0 25.3667 0.525 27.8 1.575C30.2333 2.625 32.35 4.05 34.15 5.85C35.95 7.65 37.375 9.76667 38.425 12.2C39.475 14.6333 40 17.2333 40 20C40 22.7333 39.475 25.3167 38.425 27.75C37.375 30.1833 35.95 32.3083 34.15 34.125C32.35 35.9417 30.2333 37.375 27.8 38.425C25.3667 39.475 22.7667 40 20 40ZM20 37C24.7333 37 28.75 35.3417 32.05 32.025C35.35 28.7083 37 24.7 37 20C37 15.2667 35.35 11.25 32.05 7.95C28.75 4.65 24.7333 3 20 3C15.3 3 11.2917 4.65 7.975 7.95C4.65833 11.25 3 15.2667 3 20C3 24.7 4.65833 28.7083 7.975 32.025C11.2917 35.3417 15.3 37 20 37Z"
                            fill="#EB334A"
                          />
                        </svg>
                      </div>
                      <div className="mb-5">
                        <h3 className="heading_three_style_black mb-[10px]">
                          Mindfulness Challenges
                        </h3>
                        <p className="paragraph_two_style">
                        Explore our weekly challenges and engage in simple practices to connect with your inner self and the world around you. Through these challenges, discover inner peace alongside practical wisdom for life.
                        </p>
                      </div>
                    </li>
                    <li className="flex">
                      <div className="journey_points">
                        <svg
                          width="40"
                          height="40"
                          viewBox="0 0 40 40"
                          fill="none"
                          xmlns="http://www.w3.org/2000/svg"
                        >
                          <path
                            d="M17.05 29.1L31.2 14.95L28.9 12.7L17.05 24.55L11.05 18.55L8.8 20.8L17.05 29.1ZM20 40C17.2667 40 14.6833 39.475 12.25 38.425C9.81667 37.375 7.69167 35.9417 5.875 34.125C4.05833 32.3083 2.625 30.1833 1.575 27.75C0.525 25.3167 0 22.7333 0 20C0 17.2333 0.525 14.6333 1.575 12.2C2.625 9.76667 4.05833 7.65 5.875 5.85C7.69167 4.05 9.81667 2.625 12.25 1.575C14.6833 0.525 17.2667 0 20 0C22.7667 0 25.3667 0.525 27.8 1.575C30.2333 2.625 32.35 4.05 34.15 5.85C35.95 7.65 37.375 9.76667 38.425 12.2C39.475 14.6333 40 17.2333 40 20C40 22.7333 39.475 25.3167 38.425 27.75C37.375 30.1833 35.95 32.3083 34.15 34.125C32.35 35.9417 30.2333 37.375 27.8 38.425C25.3667 39.475 22.7667 40 20 40ZM20 37C24.7333 37 28.75 35.3417 32.05 32.025C35.35 28.7083 37 24.7 37 20C37 15.2667 35.35 11.25 32.05 7.95C28.75 4.65 24.7333 3 20 3C15.3 3 11.2917 4.65 7.975 7.95C4.65833 11.25 3 15.2667 3 20C3 24.7 4.65833 28.7083 7.975 32.025C11.2917 35.3417 15.3 37 20 37Z"
                            fill="#EB334A"
                          />
                        </svg>
                      </div>
                      <div className="mb-5">
                        <h3 className="heading_three_style_black mb-[10px]">
                        Real Life Connections
                        </h3>
                        <p className="paragraph_two_style">
                        Build meaningful connections with others who understand and appreciate the complexities of the human experience. Dive into discussions that resonate with your own life experiences.
                        </p>
                      </div>
                    </li>
                    {/* <li className="flex">
                      <div className="journey_points">
                        <svg
                          width="40"
                          height="40"
                          viewBox="0 0 40 40"
                          fill="none"
                          xmlns="http://www.w3.org/2000/svg"
                        >
                          <path
                            d="M17.05 29.1L31.2 14.95L28.9 12.7L17.05 24.55L11.05 18.55L8.8 20.8L17.05 29.1ZM20 40C17.2667 40 14.6833 39.475 12.25 38.425C9.81667 37.375 7.69167 35.9417 5.875 34.125C4.05833 32.3083 2.625 30.1833 1.575 27.75C0.525 25.3167 0 22.7333 0 20C0 17.2333 0.525 14.6333 1.575 12.2C2.625 9.76667 4.05833 7.65 5.875 5.85C7.69167 4.05 9.81667 2.625 12.25 1.575C14.6833 0.525 17.2667 0 20 0C22.7667 0 25.3667 0.525 27.8 1.575C30.2333 2.625 32.35 4.05 34.15 5.85C35.95 7.65 37.375 9.76667 38.425 12.2C39.475 14.6333 40 17.2333 40 20C40 22.7333 39.475 25.3167 38.425 27.75C37.375 30.1833 35.95 32.3083 34.15 34.125C32.35 35.9417 30.2333 37.375 27.8 38.425C25.3667 39.475 22.7667 40 20 40ZM20 37C24.7333 37 28.75 35.3417 32.05 32.025C35.35 28.7083 37 24.7 37 20C37 15.2667 35.35 11.25 32.05 7.95C28.75 4.65 24.7333 3 20 3C15.3 3 11.2917 4.65 7.975 7.95C4.65833 11.25 3 15.2667 3 20C3 24.7 4.65833 28.7083 7.975 32.025C11.2917 35.3417 15.3 37 20 37Z"
                            fill="#EB334A"
                          />
                        </svg>
                      </div>
                      <div className="mb-5">
                        <h3 className="heading_three_style_black mb-[10px]">
                          Day 14: How to keep momentum
                        </h3>
                        <p className="paragraph_two_style">
                          Lorem ipsum dolor sit amet, consectetur adipiscing
                          elit. Suspendisse varius enim in eros elementum
                          tristique.
                        </p>
                      </div>
                    </li> */}
                  </ul>
                </div>

                <div></div>
              </div>
            </div>
            <div className="hidden lg:block relative">
              <div className="rounded-[20px] overflow-hidden h-[358px] lg:h-[552px] w-full absolute z-10">
                <Image
                  //   src={
                  //     validUrl(program?.image)
                  //       ? program?.image
                  //       : programDetailsBanner
                  //   }
                  src={sideimage}
                  width={0}
                  height={0}
                  sizes="100vw"
                  alt="..."
                  className=" w-full h-full object-cover"
                />
                <Image
                  className="main-right-circle h-[85%] w-[48%]"
                  src={rightCircle}
                  alt=".."
                />
              </div>
            </div>
          </div>
          <h2 className="heading_style_two  max-w-[920px] mb-[60px] lg:mb-[41px] text-[#2B2B27]">
          What Can You Expect- 
          </h2>
          <div className="lg:grid-cols-2   grid gap-10">
            <div className="mb-5 lg:mb-[20px] ">
              <div className="p-8 border border-[#E1E1E1] rounded-[20px] bg-white relative overflow-hidden mb-4">
                <h4 className="heading_three_style_black mb-2">
                Understanding Diverse Perspectives
                </h4>
                <p className="lg:w-2/3 text-sm text-[#505050] font-medium">
                Explore a variety of personal journeys and gain insights into different perspectives, enriching your own understanding of life.
                </p>
                <div className="absolute right-0 top-0 bg-[#EB334A] h-16 w-16 lg:h-[120px] lg:w-[120px] rounded-s-full rounded-br-full flex items-center justify-center">
                  <Image src={approach} alt="" />
                </div>
              </div>
            </div>
            <div className="mb-5 lg:mb-[20px] ">
              <div className="p-8 border border-[#E1E1E1] rounded-[20px] bg-white relative overflow-hidden mb-4">
                <h4 className="heading_three_style_black mb-2">
                Emotional Wellness
                </h4>
                <p className="lg:w-2/3 text-sm text-[#505050] font-medium">
                Learn practical mindfulness techniques to enhance emotional well-being, reduce stress, and promote a greater sense of inner peace.
                </p>
                <div className="absolute right-0 top-0 bg-[#39315C] h-16 w-16 lg:h-[120px] lg:w-[120px] rounded-s-full rounded-br-full flex items-center justify-center">
                  <svg
                    className="h-6 w-6 lg:h-11 lg:w-11"
                    viewBox="0 0 24 24"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M8.4237 14.6814C8.00661 14.6814 7.65408 14.5374 7.36609 14.2494C7.07811 13.9614 6.93411 13.6089 6.93411 13.1918C6.93411 12.7747 7.07811 12.4222 7.36609 12.1342C7.65408 11.8462 8.00661 11.7022 8.4237 11.7022C8.84078 11.7022 9.19332 11.8462 9.4813 12.1342C9.76929 12.4222 9.91328 12.7747 9.91328 13.1918C9.91328 13.6089 9.76929 13.9614 9.4813 14.2494C9.19332 14.5374 8.84078 14.6814 8.4237 14.6814ZM15.5737 14.6814C15.1566 14.6814 14.8041 14.5374 14.5161 14.2494C14.2281 13.9614 14.0841 13.6089 14.0841 13.1918C14.0841 12.7747 14.2281 12.4222 14.5161 12.1342C14.8041 11.8462 15.1566 11.7022 15.5737 11.7022C15.9908 11.7022 16.3433 11.8462 16.6313 12.1342C16.9193 12.4222 17.0633 12.7747 17.0633 13.1918C17.0633 13.6089 16.9193 13.9614 16.6313 14.2494C16.3433 14.5374 15.9908 14.6814 15.5737 14.6814ZM11.9987 21.5335C14.6601 21.5335 16.9143 20.61 18.7614 18.7629C20.6085 16.9158 21.532 14.6616 21.532 12.0002C21.532 11.5235 21.5022 11.0617 21.4427 10.6148C21.3831 10.168 21.2738 9.736 21.1149 9.31891C20.6979 9.41822 20.2808 9.4927 19.8637 9.54235C19.4466 9.592 19.0097 9.61683 18.5529 9.61683C16.7455 9.61683 15.0374 9.22954 13.4287 8.45495C11.8199 7.68037 10.4495 6.59794 9.31745 5.20766C8.68189 6.75683 7.77325 8.10242 6.59151 9.24443C5.40977 10.3864 4.03439 11.2454 2.46536 11.8214V12.0002C2.46536 14.6616 3.38891 16.9158 5.23599 18.7629C7.08307 20.61 9.33731 21.5335 11.9987 21.5335ZM11.9987 23.9168C10.3502 23.9168 8.80106 23.604 7.3512 22.9784C5.90134 22.3528 4.64016 21.5037 3.56766 20.4312C2.49516 19.3587 1.64609 18.0975 1.02047 16.6477C0.394844 15.1978 0.0820312 13.6486 0.0820312 12.0002C0.0820312 10.3517 0.394844 8.80252 1.02047 7.35266C1.64609 5.9028 2.49516 4.64162 3.56766 3.56912C4.64016 2.49662 5.90134 1.64756 7.3512 1.02193C8.80106 0.396309 10.3502 0.0834961 11.9987 0.0834961C13.6472 0.0834961 15.1963 0.396309 16.6462 1.02193C18.0961 1.64756 19.3572 2.49662 20.4297 3.56912C21.5022 4.64162 22.3513 5.9028 22.9769 7.35266C23.6026 8.80252 23.9154 10.3517 23.9154 12.0002C23.9154 13.6486 23.6026 15.1978 22.9769 16.6477C22.3513 18.0975 21.5022 19.3587 20.4297 20.4312C19.3572 21.5037 18.0961 22.3528 16.6462 22.9784C15.1963 23.604 13.6472 23.9168 11.9987 23.9168ZM10.3899 2.61579C11.2241 4.00607 12.3562 5.12325 13.7862 5.96735C15.2162 6.81145 16.8051 7.2335 18.5529 7.2335C18.8309 7.2335 19.099 7.2186 19.3572 7.18881C19.6154 7.15902 19.8836 7.12426 20.1616 7.08454C19.3274 5.69426 18.1954 4.57707 16.7654 3.73298C15.3354 2.88888 13.7465 2.46683 11.9987 2.46683C11.7206 2.46683 11.4525 2.48172 11.1943 2.51152C10.9361 2.54131 10.668 2.57607 10.3899 2.61579ZM2.97182 8.9912C3.98474 8.41523 4.86856 7.67044 5.62328 6.75683C6.378 5.84322 6.94404 4.82037 7.32141 3.68829C6.30849 4.26426 5.42467 5.00905 4.66995 5.92266C3.91523 6.83627 3.34918 7.85912 2.97182 8.9912Z"
                      fill="white"
                    />
                  </svg>
                </div>
              </div>
            </div>
            <div className="mb-5 lg:mb-[20px] ">
              <div className="p-8 border border-[#E1E1E1] rounded-[20px] bg-white relative overflow-hidden mb-4">
                <h4 className="heading_three_style_black mb-2">
                Balanced Mind and Body
                </h4>
                <p className="lg:w-2/3 text-sm text-[#505050] font-medium">
                Discover practices that promote balance between your mind and body, promoting overall well-being and vitality.
                </p>
                <div className="absolute right-0 top-0 bg-[#39315C] h-16 w-16 lg:h-[120px] lg:w-[120px] rounded-s-full rounded-br-full flex items-center justify-center">
                  <Image src={men} alt="..approach" />
                </div>
              </div>
            </div>
            <div className="mb-5 lg:mb-[20px] ">
              <div className="p-8 border border-[#E1E1E1] rounded-[20px] bg-white relative overflow-hidden mb-4">
                <h4 className="heading_three_style_black mb-2">
                Tools and Techniques
                </h4>
                <p className="lg:w-2/3 text-sm text-[#505050] font-medium">
                 Through expert guidance and shared experiences, you&apos;ll gain valuable insights into breaking old patterns.
                </p>
                <div className="absolute right-0 top-0 bg-[#39315C] h-16 w-16 lg:h-[120px] lg:w-[120px] rounded-s-full rounded-br-full flex items-center justify-center">
                  <Image src={termgirl} alt="..teamgirl" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section className="bg-white pt-12 lg:pt-[100px] pb-[119px]">
        <div className="container mx-auto">
          <div className="faqs max-w-[728px] mx-auto">
            <h1 className="heading_one_black mb-6 text-center">FAQs</h1>
          
            {/*   accordion start  */}
            <div className="accordian">
              {items?.map((item: any, index: any) => (
                <div className="accordian_item" key={index}>
                  <h5
                    className="accordian_header"
                    id={`heading${index}`}
                    onClick={() => handleClick(index)}
                  >
                    <button className="accordion_button">
                      {item.question}
                    </button>
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
                          fillRule="evenodd"
                          clipRule="evenodd"
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
                          fillRule="evenodd"
                          clipRule="evenodd"
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

            {/* accordion end */}
          </div>
          <div className="mt-[132px] lg:mt-[59px]">
            <h2 className="heading_style_two text-center text-[#2B2B27] mb-4">
              Still have a question?
            </h2>
            {/* <p className="text-center">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit.{" "}
            </p> */}
            <div className="mt-6 flex justify-center">
              <button className="primary_button">Contact me</button>
            </div>
          </div>
        </div>
      </section>
      <Footer />
    </div>
  );
};

export default Community;
