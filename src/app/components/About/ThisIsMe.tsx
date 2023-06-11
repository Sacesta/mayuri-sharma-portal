"use client";
import React, { useState } from "react";
import Image from "next/image";

// import { Tab, Tabs, TabList, TabPanel } from "react-tabs";
import Img1 from "../../../Assets/Images/pageImages/fun_profile.png";
import Img2 from "../../../Assets/Images/pageImages/ThisIsMe_2.png";
import Img3 from "../../../Assets/Images/pageImages/ThisIsMe_3.png";
import Img4 from "../../../Assets/Images/pageImages/ThisIsMe_4.png";

import "react-tabs/style/react-tabs.css";
import "../../styles/main.css";

const ThisIsMe = () => {
  const [currentTab, setCurrentTab] = useState<number>(0);
  const data = [
    { img: Img1, decs: "Bachelors of Engineering in Information Technology." },
    {
      img: Img2,
      decs: "Have conducted 200+ Mind and Meditation workshops in leading corporates and Universities.",
    },
    {
      img: Img3,
      decs: "Description goes here no longer than 4 lines please all the way here like this looks best so try to stick to this",
    },
    {
      img: Img4,
      decs: "Description goes here no longer than 4 lines please all the way here like this looks best so try to stick to this",
    },
  ];
  const changeTab = (num: number) => {
    setCurrentTab(num);
  };
  return (
    <>
      <div className="container mx-auto mt-14 lg:mt-[200px] ">
        <div className="lg:grid grid-cols-2 gap-20">
          <div className="mb-14 lg:mb-0">
            <p className="paragraph_one_style mb-2">This is me</p>
            <h2 className="heading_style_two mb-6">Some fun facts</h2>
            <p className="paragraph_two_style">
              Born and brought up in Northern India close to Himalayas. She has
              lived in various cities within India and Europe for studies and
              work. Apart from managing projects and people, she has also
              mastered the art of managing mind, emotions and energies through
              the various Mind Management, Art of Breathing, Art of Meditation
              and more such workshops. Lorem ipsum dolor sit amet, consectetur
              adipiscing elit, sed do eiusmod tempor incididunt ut labore et
              dolore magna aliqua. Ut enim ad minim veniam, quis nostrud
              exercitation ullamco laboris nisi ut aliquip ex ea commodo
              consequat. Duis aute irure dolor in reprehenderit in voluptate
              velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint
              occaecat cupidatat non proident, sunt in culpa qui officia
              deserunt mollit anim id est laborum.
            </p>
          </div>
          <div>
            <div translate="yes" className="flex">
              <ul className="fun_fact_tab">
                <li
                  onClick={() => changeTab(0)}
                  className={`${currentTab === 0 && "fun_fact_active"}`}
                >
                  <svg
                    width="41"
                    height="33"
                    viewBox="0 0 41 33"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path d="M20.3259 32.8726L7.30774 25.6443V15.0489L0.380859 11.2104L20.3259 0.121094L40.3809 11.2168V25.7117H36.8405V13.3205L33.388 15.0578V25.6443L20.3259 32.8726ZM20.3259 18.2365L32.8602 11.2104L20.3259 4.3413L7.90147 11.2104L20.3259 18.2365ZM20.3259 28.7646L29.8036 23.4295V17.1815L20.3259 22.3221L10.8481 17.0917V23.4295L20.3259 28.7646Z" />
                  </svg>
                </li>
                <li
                  onClick={() => changeTab(1)}
                  className={`${currentTab === 1 && "fun_fact_active"}`}
                >
                  <svg
                    width="40"
                    height="37"
                    viewBox="0 0 40 37"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path d="M14.5018 36.0511C13.1881 36.0511 12.0242 35.6745 11.0102 34.9214C9.9962 34.1683 9.27963 33.1827 8.86051 31.9646C8.44139 32.8553 7.87391 33.5298 7.15807 33.9882C6.44227 34.4466 5.60176 34.6758 4.63654 34.6758C3.32089 34.6758 2.21923 34.2117 1.33155 33.2834C0.443851 32.3551 0 31.2541 0 29.9804C0 28.5013 0.48461 27.3391 1.45383 26.4938C2.42305 25.6486 3.63458 25.2783 5.08841 25.3831C4.5776 24.8592 4.1945 24.2352 3.9391 23.5111C3.68369 22.787 3.55599 22.0544 3.55599 21.3133C3.55599 20.1877 3.85724 19.1505 4.45972 18.2015C5.06221 17.2525 5.9332 16.5029 7.07269 15.9528C7.22986 16.3851 7.44597 16.8468 7.72102 17.3379C7.99607 17.8291 8.23838 18.2646 8.44794 18.6444C7.83235 18.9587 7.37066 19.3603 7.06287 19.8491C6.75508 20.3378 6.60118 20.8642 6.60118 21.4281C6.60118 22.9253 7.23641 23.854 8.50688 24.2141C9.77734 24.5743 10.9627 24.8592 12.0629 25.0688L12.6523 26.0707C12.3772 26.7649 12.1251 27.4241 11.8959 28.0483C11.6667 28.6725 11.5521 29.3011 11.5521 29.9341C11.5521 30.7298 11.8404 31.4407 12.4172 32.0668C12.994 32.6929 13.6978 33.0059 14.5287 33.0059C15.5164 33.0059 16.3313 32.5841 16.9736 31.7404C17.6159 30.8968 18.1433 29.9079 18.5559 28.7738C18.9685 27.6397 19.2895 26.4735 19.5187 25.275C19.7479 24.0766 19.928 23.1303 20.0589 22.4361L22.9862 23.2952C22.7243 24.4252 22.4287 25.73 22.0993 27.2097C21.77 28.6894 21.3018 30.0843 20.6946 31.3944C20.0875 32.7045 19.2916 33.8081 18.307 34.7053C17.3224 35.6025 16.054 36.0511 14.5018 36.0511ZM4.67411 31.6306C5.14612 31.6306 5.53619 31.4804 5.84432 31.18C6.15243 30.8796 6.30648 30.4934 6.30648 30.0214C6.30648 29.5494 6.15299 29.1593 5.84601 28.8512C5.53906 28.5431 5.14957 28.389 4.67756 28.389C4.20555 28.389 3.81877 28.5425 3.51721 28.8495C3.21563 29.1564 3.06483 29.5459 3.06483 30.0179C3.06483 30.4899 3.21505 30.8767 3.51548 31.1783C3.81589 31.4799 4.2021 31.6306 4.67411 31.6306ZM16.0314 23.3792C15.4258 22.8339 14.7276 22.1998 13.9367 21.4771C13.1459 20.7543 12.3838 19.9673 11.6503 19.1159C10.9168 18.2646 10.2947 17.3431 9.78389 16.3516C9.27308 15.3601 9.01768 14.3264 9.01768 13.2505C9.01768 11.5754 9.59944 10.1532 10.7629 8.98389C11.9265 7.81454 13.3421 7.22986 15.0098 7.22986C15.2325 7.22986 15.4519 7.23969 15.668 7.25933C15.8841 7.27898 16.0707 7.29535 16.2279 7.30845C15.907 6.81362 15.6729 6.35766 15.5255 5.94055C15.3782 5.52347 15.3045 5.1019 15.3045 4.67583C15.3045 3.3759 15.7564 2.27162 16.66 1.36299C17.5637 0.454329 18.6666 0 19.9688 0C21.271 0 22.3745 0.454329 23.2793 1.36299C24.1841 2.27162 24.6365 3.3759 24.6365 4.67583C24.6365 5.08055 24.5645 5.49607 24.4204 5.9224C24.2764 6.34872 24.0341 6.83039 23.6935 7.36739C23.8507 7.34119 24.0373 7.31172 24.2534 7.27898C24.4695 7.24623 24.6889 7.22986 24.9116 7.22986C26.5466 7.22986 27.9311 7.78324 29.0651 8.88998C30.1992 9.99673 30.8055 11.3621 30.8841 12.9862C30.4201 12.9208 29.9111 12.9011 29.3573 12.9273C28.8034 12.9535 28.317 12.9862 27.8978 13.0255C27.8062 12.2528 27.4918 11.6012 26.9548 11.0707C26.4178 10.5403 25.7312 10.275 24.8949 10.275C23.9106 10.275 23.1074 10.6156 22.4853 11.2967C21.8631 11.9777 21.205 12.7308 20.5108 13.556H19.4106C18.7124 12.7436 18.0507 11.9937 17.4256 11.3062C16.8005 10.6188 15.9952 10.275 15.0098 10.275C14.1465 10.275 13.4394 10.5528 12.8888 11.1084C12.3382 11.6641 12.0629 12.3724 12.0629 13.2334C12.0629 13.9389 12.3019 14.6831 12.78 15.4661C13.258 16.249 13.831 17.0007 14.499 17.721C15.167 18.4414 15.8448 19.1126 16.5324 19.7348C17.22 20.3569 17.7669 20.8513 18.1729 21.2181L16.0314 23.3792ZM19.959 6.28684C20.431 6.28684 20.821 6.13662 21.1292 5.83619C21.4373 5.53578 21.5914 5.14957 21.5914 4.67756C21.5914 4.20555 21.4379 3.81549 21.1309 3.50739C20.8239 3.19925 20.4344 3.04519 19.9624 3.04519C19.4904 3.04519 19.1036 3.19868 18.8021 3.50566C18.5005 3.81261 18.3497 4.2021 18.3497 4.67411C18.3497 5.14612 18.4999 5.5329 18.8004 5.83446C19.1008 6.13604 19.487 6.28684 19.959 6.28684ZM25.3831 36.0904C24.6979 36.0904 24.0206 35.9729 23.3512 35.7379C22.6818 35.5029 22.0559 35.1424 21.4735 34.6562C21.7092 34.2612 21.9764 33.8109 22.2749 33.3053C22.5733 32.7996 22.7908 32.3134 22.9273 31.8468C23.2809 32.2659 23.6782 32.5704 24.1192 32.7603C24.5601 32.9502 24.9946 33.0452 25.4224 33.0452C26.2606 33.0452 26.9712 32.7264 27.554 32.0887C28.1369 31.4511 28.4283 30.7374 28.4283 29.9477C28.4283 29.3034 28.3039 28.6697 28.055 28.0466C27.8062 27.4235 27.577 26.7649 27.3674 26.0707L27.8585 25.1081C28.9849 24.8985 30.1866 24.616 31.4637 24.2605C32.7407 23.9051 33.3792 22.976 33.3792 21.4734C33.3792 20.4245 32.9895 19.6514 32.2102 19.1543C31.4309 18.6572 30.5632 18.4086 29.6071 18.4086C28.2032 18.4086 26.6899 18.6739 25.067 19.2043C23.4441 19.7348 22.1284 20.1506 21.1198 20.4519L20.3733 17.5246C21.6618 17.1185 23.1215 16.6568 24.7523 16.1395C26.3831 15.6221 27.9817 15.3635 29.5481 15.3635C31.3425 15.3635 32.9371 15.8946 34.332 16.9569C35.7269 18.0193 36.4244 19.5182 36.4244 21.4538C36.4244 22.1892 36.2967 22.9034 36.0413 23.5967C35.7859 24.2899 35.4158 24.8985 34.9312 25.4224C36.3196 25.3176 37.5115 25.6974 38.5069 26.5619C39.5023 27.4263 40 28.5789 40 30.0196C40 31.2934 39.5562 32.3944 38.6684 33.3227C37.7808 34.251 36.6791 34.7151 35.3635 34.7151C34.4244 34.7151 33.5774 34.4761 32.8223 33.998C32.0672 33.52 31.4997 32.8422 31.1198 31.9646C30.6483 33.2089 29.908 34.2076 28.899 34.9607C27.8899 35.7138 26.718 36.0904 25.3831 36.0904ZM35.3716 31.6699C35.8236 31.6699 36.2005 31.5197 36.5022 31.2193C36.804 30.9189 36.9548 30.5327 36.9548 30.0607C36.9548 29.6142 36.798 29.224 36.4845 28.89C36.171 28.556 35.7848 28.389 35.3259 28.389C34.867 28.389 34.4835 28.5458 34.1754 28.8593C33.8672 29.1728 33.7132 29.559 33.7132 30.0179C33.7132 30.4644 33.8765 30.8513 34.2033 31.1788C34.5301 31.5062 34.9195 31.6699 35.3716 31.6699Z" />
                  </svg>
                </li>
                <li
                  onClick={() => changeTab(2)}
                  className={`${currentTab === 2 && "fun_fact_active"}`}
                >
                  <svg
                    width="36"
                    height="32"
                    viewBox="0 0 36 32"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path d="M9.73137 19.1462C10.216 19.1462 10.6215 18.9782 10.9479 18.6422C11.2743 18.3063 11.4375 17.9005 11.4375 17.425C11.4375 16.9613 11.2736 16.5628 10.9457 16.2295C10.6179 15.8962 10.2116 15.7295 9.72696 15.7295C9.24232 15.7295 8.83681 15.8954 8.51042 16.2272C8.18403 16.559 8.02083 16.9633 8.02083 17.4402C8.02083 17.8969 8.18476 18.2955 8.51262 18.6357C8.84046 18.976 9.24671 19.1462 9.73137 19.1462ZM9.73137 12.5212C10.216 12.5212 10.6215 12.3532 10.9479 12.0172C11.2743 11.6813 11.4375 11.2755 11.4375 10.8C11.4375 10.3363 11.2736 9.93783 10.9457 9.60449C10.6179 9.27116 10.2116 9.10449 9.72696 9.10449C9.24232 9.10449 8.83681 9.27039 8.51042 9.6022C8.18403 9.93398 8.02083 10.3383 8.02083 10.8152C8.02083 11.2719 8.18476 11.6705 8.51262 12.0107C8.84046 12.351 9.24671 12.5212 9.73137 12.5212ZM13.4167 18.8962H27.8958V16.0003H13.4167V18.8962ZM13.4167 12.2712H27.8958V9.37533H13.4167V12.2712ZM11.3333 31.8962V28.1253H4.3125C3.25642 28.1253 2.35697 27.7499 1.61417 26.9989C0.871389 26.2479 0.5 25.3387 0.5 24.2712V3.95866C0.5 2.89113 0.871389 1.98188 1.61417 1.23091C2.357 0.479964 3.25644 0.104492 4.3125 0.104492H31.6875C32.755 0.104492 33.6643 0.479964 34.4152 1.23091C35.1662 1.98188 35.5417 2.89113 35.5417 3.95866V24.2712C35.5417 25.3387 35.1662 26.2479 34.4152 26.9989C33.6643 27.7499 32.755 28.1253 31.6875 28.1253H24.7083V31.8962H11.3333ZM4.3125 24.2712H31.6875V3.95866H4.3125V24.2712Z" />
                  </svg>
                </li>
                <li
                  onClick={() => changeTab(3)}
                  className={`${currentTab === 3 && "fun_fact_active"}`}
                >
                  <svg
                    width="36"
                    height="36"
                    viewBox="0 0 36 36"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path d="M18.0386 35.3493C15.6221 35.3493 13.3501 34.8891 11.2228 33.9688C9.0955 33.0485 7.23412 31.7955 5.63871 30.2099C4.04332 28.6242 2.78801 26.7707 1.87279 24.6494C0.957597 22.528 0.5 20.2614 0.5 17.8495C0.5 15.4353 0.959431 13.1665 1.87829 11.0432C2.79715 8.91983 4.0541 7.06501 5.64912 5.4787C7.24415 3.89242 9.10499 2.63401 11.2316 1.70345C13.3583 0.772895 15.6306 0.307617 18.0485 0.307617C20.4687 0.307617 22.736 0.774728 24.8504 1.70895C26.9647 2.64314 28.8169 3.90009 30.4068 5.47978C31.9967 7.05945 33.25 8.91135 34.1667 11.0355C35.0833 13.1596 35.5417 15.4292 35.5417 17.8443C35.5417 20.2617 35.0828 22.5336 34.1652 24.6601C33.2475 26.7865 31.9922 28.6441 30.3993 30.2327C28.8063 31.8213 26.949 33.0712 24.8274 33.9824C22.7057 34.8937 20.4428 35.3493 18.0386 35.3493ZM16.3125 31.5159V28.1409C15.3403 28.1409 14.5414 27.7943 13.916 27.1011C13.2905 26.4079 12.9778 25.5903 12.9778 24.6484V22.8701L4.72917 14.6201C4.59028 15.1719 4.49306 15.7029 4.4375 16.2131C4.38194 16.7232 4.35417 17.2464 4.35417 17.7827C4.35417 21.2662 5.4834 24.3281 7.74187 26.9683C10.0003 29.6085 12.8572 31.1244 16.3125 31.5159ZM28.125 27.1618C28.7083 26.5368 29.2187 25.8562 29.6562 25.1201C30.0937 24.384 30.4653 23.6155 30.7708 22.8147C31.0764 22.0139 31.3056 21.1946 31.4583 20.3569C31.6111 19.5191 31.6875 18.6539 31.6875 17.7614C31.6875 14.949 30.9167 12.3856 29.375 10.0711C27.8333 7.75655 25.7639 6.05762 23.1667 4.97428V5.68262C23.1667 6.62048 22.8354 7.4348 22.1728 8.12558C21.5102 8.81638 20.7099 9.16178 19.7717 9.16178H16.3125V12.642C16.3125 13.1274 16.1243 13.5167 15.748 13.8099C15.3717 14.1032 14.9422 14.2498 14.4597 14.2498H11.1667V17.7659H21.5443C22.0084 17.7659 22.3948 17.9495 22.7035 18.3166C23.0123 18.6837 23.1667 19.0974 23.1667 19.5578V24.6409H24.875C25.6338 24.6409 26.3122 24.8732 26.9101 25.3377C27.5081 25.8023 27.9131 26.4103 28.125 27.1618Z" />
                  </svg>
                </li>
              </ul>
              <div className="fun_profile_img">
                <Image src={data[currentTab].img} alt="program..." />
                <p className="fun_profile_name">{data[currentTab].decs}</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default ThisIsMe;
