import React from "react";
import "./main.css";
import Image from "next/image";
import LogoMark from "../../../Assets/icons/Logo Mark.png";
import rightCircle from "../../../Assets/icons/Ellipse 24 (Stroke).png";
import footerLogo from "../../../Assets/Images/pageImages/footer_logo.png";
import funfactImage from "../../../Assets/Images/pageImages/fun_profile.png";
import bg from '../../../Assets/Images/pageImages/about_banner.png'
import missionEllipse from "../../../Assets/Images/pageImages/Ellipse _six.svg";
import principlesOne from "../../../Assets/Images/pageImages/principles_one.svg";
import social_img_1 from "../../../Assets/Images/pageImages/social_img_1.png";


const About = () => {
  return (
    <>
      <section className="py-6 container mx-auto home-banner">
        <div className="about_banner" style={{backgroundImage: `url(${bg.src})`}}>
          <Image className="main-right-circle" src={rightCircle} alt=".." />
          <p className="about_head w-full">About me</p>
        </div>
      </section>


      <section className="about_funfacts">
        <div className="container mx-auto">
          <div className="lg:grid grid-cols-2 gap-20 lg:px-16">
            <div className="mb-14 lg:mb-0">
              <p className="paragraph_one_style mb-2">This is me</p>
              <h2 className="heading_style_two mb-6">Some fun facts</h2>
              <p className="paragraph_two_style">Born and brought up in Northern India close to Himalayas. She has lived in various cities within India and Europe for studies and work. Apart from managing projects and people, she has also mastered the art of managing mind, emotions and energies through the various Mind Management, Art of Breathing, Art of Meditation and more such workshops. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
            </div>
            <div className="flex">
              <ul className="fun_fact_tab">
                <li>
                  <svg width="41" height="33" viewBox="0 0 41 33" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M20.3259 32.8726L7.30774 25.6443V15.0489L0.380859 11.2104L20.3259 0.121094L40.3809 11.2168V25.7117H36.8405V13.3205L33.388 15.0578V25.6443L20.3259 32.8726ZM20.3259 18.2365L32.8602 11.2104L20.3259 4.3413L7.90147 11.2104L20.3259 18.2365ZM20.3259 28.7646L29.8036 23.4295V17.1815L20.3259 22.3221L10.8481 17.0917V23.4295L20.3259 28.7646Z"/>
                  </svg>
                </li>
                <li>
                  <svg width="40" height="37" viewBox="0 0 40 37" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M14.5018 36.0511C13.1881 36.0511 12.0242 35.6745 11.0102 34.9214C9.9962 34.1683 9.27963 33.1827 8.86051 31.9646C8.44139 32.8553 7.87391 33.5298 7.15807 33.9882C6.44227 34.4466 5.60176 34.6758 4.63654 34.6758C3.32089 34.6758 2.21923 34.2117 1.33155 33.2834C0.443851 32.3551 0 31.2541 0 29.9804C0 28.5013 0.48461 27.3391 1.45383 26.4938C2.42305 25.6486 3.63458 25.2783 5.08841 25.3831C4.5776 24.8592 4.1945 24.2352 3.9391 23.5111C3.68369 22.787 3.55599 22.0544 3.55599 21.3133C3.55599 20.1877 3.85724 19.1505 4.45972 18.2015C5.06221 17.2525 5.9332 16.5029 7.07269 15.9528C7.22986 16.3851 7.44597 16.8468 7.72102 17.3379C7.99607 17.8291 8.23838 18.2646 8.44794 18.6444C7.83235 18.9587 7.37066 19.3603 7.06287 19.8491C6.75508 20.3378 6.60118 20.8642 6.60118 21.4281C6.60118 22.9253 7.23641 23.854 8.50688 24.2141C9.77734 24.5743 10.9627 24.8592 12.0629 25.0688L12.6523 26.0707C12.3772 26.7649 12.1251 27.4241 11.8959 28.0483C11.6667 28.6725 11.5521 29.3011 11.5521 29.9341C11.5521 30.7298 11.8404 31.4407 12.4172 32.0668C12.994 32.6929 13.6978 33.0059 14.5287 33.0059C15.5164 33.0059 16.3313 32.5841 16.9736 31.7404C17.6159 30.8968 18.1433 29.9079 18.5559 28.7738C18.9685 27.6397 19.2895 26.4735 19.5187 25.275C19.7479 24.0766 19.928 23.1303 20.0589 22.4361L22.9862 23.2952C22.7243 24.4252 22.4287 25.73 22.0993 27.2097C21.77 28.6894 21.3018 30.0843 20.6946 31.3944C20.0875 32.7045 19.2916 33.8081 18.307 34.7053C17.3224 35.6025 16.054 36.0511 14.5018 36.0511ZM4.67411 31.6306C5.14612 31.6306 5.53619 31.4804 5.84432 31.18C6.15243 30.8796 6.30648 30.4934 6.30648 30.0214C6.30648 29.5494 6.15299 29.1593 5.84601 28.8512C5.53906 28.5431 5.14957 28.389 4.67756 28.389C4.20555 28.389 3.81877 28.5425 3.51721 28.8495C3.21563 29.1564 3.06483 29.5459 3.06483 30.0179C3.06483 30.4899 3.21505 30.8767 3.51548 31.1783C3.81589 31.4799 4.2021 31.6306 4.67411 31.6306ZM16.0314 23.3792C15.4258 22.8339 14.7276 22.1998 13.9367 21.4771C13.1459 20.7543 12.3838 19.9673 11.6503 19.1159C10.9168 18.2646 10.2947 17.3431 9.78389 16.3516C9.27308 15.3601 9.01768 14.3264 9.01768 13.2505C9.01768 11.5754 9.59944 10.1532 10.7629 8.98389C11.9265 7.81454 13.3421 7.22986 15.0098 7.22986C15.2325 7.22986 15.4519 7.23969 15.668 7.25933C15.8841 7.27898 16.0707 7.29535 16.2279 7.30845C15.907 6.81362 15.6729 6.35766 15.5255 5.94055C15.3782 5.52347 15.3045 5.1019 15.3045 4.67583C15.3045 3.3759 15.7564 2.27162 16.66 1.36299C17.5637 0.454329 18.6666 0 19.9688 0C21.271 0 22.3745 0.454329 23.2793 1.36299C24.1841 2.27162 24.6365 3.3759 24.6365 4.67583C24.6365 5.08055 24.5645 5.49607 24.4204 5.9224C24.2764 6.34872 24.0341 6.83039 23.6935 7.36739C23.8507 7.34119 24.0373 7.31172 24.2534 7.27898C24.4695 7.24623 24.6889 7.22986 24.9116 7.22986C26.5466 7.22986 27.9311 7.78324 29.0651 8.88998C30.1992 9.99673 30.8055 11.3621 30.8841 12.9862C30.4201 12.9208 29.9111 12.9011 29.3573 12.9273C28.8034 12.9535 28.317 12.9862 27.8978 13.0255C27.8062 12.2528 27.4918 11.6012 26.9548 11.0707C26.4178 10.5403 25.7312 10.275 24.8949 10.275C23.9106 10.275 23.1074 10.6156 22.4853 11.2967C21.8631 11.9777 21.205 12.7308 20.5108 13.556H19.4106C18.7124 12.7436 18.0507 11.9937 17.4256 11.3062C16.8005 10.6188 15.9952 10.275 15.0098 10.275C14.1465 10.275 13.4394 10.5528 12.8888 11.1084C12.3382 11.6641 12.0629 12.3724 12.0629 13.2334C12.0629 13.9389 12.3019 14.6831 12.78 15.4661C13.258 16.249 13.831 17.0007 14.499 17.721C15.167 18.4414 15.8448 19.1126 16.5324 19.7348C17.22 20.3569 17.7669 20.8513 18.1729 21.2181L16.0314 23.3792ZM19.959 6.28684C20.431 6.28684 20.821 6.13662 21.1292 5.83619C21.4373 5.53578 21.5914 5.14957 21.5914 4.67756C21.5914 4.20555 21.4379 3.81549 21.1309 3.50739C20.8239 3.19925 20.4344 3.04519 19.9624 3.04519C19.4904 3.04519 19.1036 3.19868 18.8021 3.50566C18.5005 3.81261 18.3497 4.2021 18.3497 4.67411C18.3497 5.14612 18.4999 5.5329 18.8004 5.83446C19.1008 6.13604 19.487 6.28684 19.959 6.28684ZM25.3831 36.0904C24.6979 36.0904 24.0206 35.9729 23.3512 35.7379C22.6818 35.5029 22.0559 35.1424 21.4735 34.6562C21.7092 34.2612 21.9764 33.8109 22.2749 33.3053C22.5733 32.7996 22.7908 32.3134 22.9273 31.8468C23.2809 32.2659 23.6782 32.5704 24.1192 32.7603C24.5601 32.9502 24.9946 33.0452 25.4224 33.0452C26.2606 33.0452 26.9712 32.7264 27.554 32.0887C28.1369 31.4511 28.4283 30.7374 28.4283 29.9477C28.4283 29.3034 28.3039 28.6697 28.055 28.0466C27.8062 27.4235 27.577 26.7649 27.3674 26.0707L27.8585 25.1081C28.9849 24.8985 30.1866 24.616 31.4637 24.2605C32.7407 23.9051 33.3792 22.976 33.3792 21.4734C33.3792 20.4245 32.9895 19.6514 32.2102 19.1543C31.4309 18.6572 30.5632 18.4086 29.6071 18.4086C28.2032 18.4086 26.6899 18.6739 25.067 19.2043C23.4441 19.7348 22.1284 20.1506 21.1198 20.4519L20.3733 17.5246C21.6618 17.1185 23.1215 16.6568 24.7523 16.1395C26.3831 15.6221 27.9817 15.3635 29.5481 15.3635C31.3425 15.3635 32.9371 15.8946 34.332 16.9569C35.7269 18.0193 36.4244 19.5182 36.4244 21.4538C36.4244 22.1892 36.2967 22.9034 36.0413 23.5967C35.7859 24.2899 35.4158 24.8985 34.9312 25.4224C36.3196 25.3176 37.5115 25.6974 38.5069 26.5619C39.5023 27.4263 40 28.5789 40 30.0196C40 31.2934 39.5562 32.3944 38.6684 33.3227C37.7808 34.251 36.6791 34.7151 35.3635 34.7151C34.4244 34.7151 33.5774 34.4761 32.8223 33.998C32.0672 33.52 31.4997 32.8422 31.1198 31.9646C30.6483 33.2089 29.908 34.2076 28.899 34.9607C27.8899 35.7138 26.718 36.0904 25.3831 36.0904ZM35.3716 31.6699C35.8236 31.6699 36.2005 31.5197 36.5022 31.2193C36.804 30.9189 36.9548 30.5327 36.9548 30.0607C36.9548 29.6142 36.798 29.224 36.4845 28.89C36.171 28.556 35.7848 28.389 35.3259 28.389C34.867 28.389 34.4835 28.5458 34.1754 28.8593C33.8672 29.1728 33.7132 29.559 33.7132 30.0179C33.7132 30.4644 33.8765 30.8513 34.2033 31.1788C34.5301 31.5062 34.9195 31.6699 35.3716 31.6699Z"/>
                  </svg>

                </li>
                <li>
                  <svg width="36" height="32" viewBox="0 0 36 32" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M9.73137 19.1462C10.216 19.1462 10.6215 18.9782 10.9479 18.6422C11.2743 18.3063 11.4375 17.9005 11.4375 17.425C11.4375 16.9613 11.2736 16.5628 10.9457 16.2295C10.6179 15.8962 10.2116 15.7295 9.72696 15.7295C9.24232 15.7295 8.83681 15.8954 8.51042 16.2272C8.18403 16.559 8.02083 16.9633 8.02083 17.4402C8.02083 17.8969 8.18476 18.2955 8.51262 18.6357C8.84046 18.976 9.24671 19.1462 9.73137 19.1462ZM9.73137 12.5212C10.216 12.5212 10.6215 12.3532 10.9479 12.0172C11.2743 11.6813 11.4375 11.2755 11.4375 10.8C11.4375 10.3363 11.2736 9.93783 10.9457 9.60449C10.6179 9.27116 10.2116 9.10449 9.72696 9.10449C9.24232 9.10449 8.83681 9.27039 8.51042 9.6022C8.18403 9.93398 8.02083 10.3383 8.02083 10.8152C8.02083 11.2719 8.18476 11.6705 8.51262 12.0107C8.84046 12.351 9.24671 12.5212 9.73137 12.5212ZM13.4167 18.8962H27.8958V16.0003H13.4167V18.8962ZM13.4167 12.2712H27.8958V9.37533H13.4167V12.2712ZM11.3333 31.8962V28.1253H4.3125C3.25642 28.1253 2.35697 27.7499 1.61417 26.9989C0.871389 26.2479 0.5 25.3387 0.5 24.2712V3.95866C0.5 2.89113 0.871389 1.98188 1.61417 1.23091C2.357 0.479964 3.25644 0.104492 4.3125 0.104492H31.6875C32.755 0.104492 33.6643 0.479964 34.4152 1.23091C35.1662 1.98188 35.5417 2.89113 35.5417 3.95866V24.2712C35.5417 25.3387 35.1662 26.2479 34.4152 26.9989C33.6643 27.7499 32.755 28.1253 31.6875 28.1253H24.7083V31.8962H11.3333ZM4.3125 24.2712H31.6875V3.95866H4.3125V24.2712Z"/>
                  </svg>
                </li>
                <li>
                  <svg width="36" height="36" viewBox="0 0 36 36" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M18.0386 35.3493C15.6221 35.3493 13.3501 34.8891 11.2228 33.9688C9.0955 33.0485 7.23412 31.7955 5.63871 30.2099C4.04332 28.6242 2.78801 26.7707 1.87279 24.6494C0.957597 22.528 0.5 20.2614 0.5 17.8495C0.5 15.4353 0.959431 13.1665 1.87829 11.0432C2.79715 8.91983 4.0541 7.06501 5.64912 5.4787C7.24415 3.89242 9.10499 2.63401 11.2316 1.70345C13.3583 0.772895 15.6306 0.307617 18.0485 0.307617C20.4687 0.307617 22.736 0.774728 24.8504 1.70895C26.9647 2.64314 28.8169 3.90009 30.4068 5.47978C31.9967 7.05945 33.25 8.91135 34.1667 11.0355C35.0833 13.1596 35.5417 15.4292 35.5417 17.8443C35.5417 20.2617 35.0828 22.5336 34.1652 24.6601C33.2475 26.7865 31.9922 28.6441 30.3993 30.2327C28.8063 31.8213 26.949 33.0712 24.8274 33.9824C22.7057 34.8937 20.4428 35.3493 18.0386 35.3493ZM16.3125 31.5159V28.1409C15.3403 28.1409 14.5414 27.7943 13.916 27.1011C13.2905 26.4079 12.9778 25.5903 12.9778 24.6484V22.8701L4.72917 14.6201C4.59028 15.1719 4.49306 15.7029 4.4375 16.2131C4.38194 16.7232 4.35417 17.2464 4.35417 17.7827C4.35417 21.2662 5.4834 24.3281 7.74187 26.9683C10.0003 29.6085 12.8572 31.1244 16.3125 31.5159ZM28.125 27.1618C28.7083 26.5368 29.2187 25.8562 29.6562 25.1201C30.0937 24.384 30.4653 23.6155 30.7708 22.8147C31.0764 22.0139 31.3056 21.1946 31.4583 20.3569C31.6111 19.5191 31.6875 18.6539 31.6875 17.7614C31.6875 14.949 30.9167 12.3856 29.375 10.0711C27.8333 7.75655 25.7639 6.05762 23.1667 4.97428V5.68262C23.1667 6.62048 22.8354 7.4348 22.1728 8.12558C21.5102 8.81638 20.7099 9.16178 19.7717 9.16178H16.3125V12.642C16.3125 13.1274 16.1243 13.5167 15.748 13.8099C15.3717 14.1032 14.9422 14.2498 14.4597 14.2498H11.1667V17.7659H21.5443C22.0084 17.7659 22.3948 17.9495 22.7035 18.3166C23.0123 18.6837 23.1667 19.0974 23.1667 19.5578V24.6409H24.875C25.6338 24.6409 26.3122 24.8732 26.9101 25.3377C27.5081 25.8023 27.9131 26.4103 28.125 27.1618Z"/>
                  </svg>
                </li>
              </ul>
              <div className="fun_profile_img">
                <Image src={funfactImage} alt="program..." />
                <p className="fun_profile_name">Bachelors of Engineering in Information Technology.</p>
              </div>
            </div>
          </div>
        </div>
      </section>


      <section className="about_journey">
        <div className="container mx-auto">
          <div className="lg:grid grid-cols-2 gap-20 lg:px-16">
            <div className="mb-14 lg:mb-0">
              <p className="paragraph_one_style mb-2">My story</p>
              <h2 className="heading_style_two mb-6">This is my journey from the beginning until today</h2>
            </div>
            <div>
              <ul className="journey_details">
                <li className="flex">
                  <div className="journey_points">
                    <svg width="40" height="40" viewBox="0 0 40 40" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <path d="M17.05 29.1L31.2 14.95L28.9 12.7L17.05 24.55L11.05 18.55L8.8 20.8L17.05 29.1ZM20 40C17.2667 40 14.6833 39.475 12.25 38.425C9.81667 37.375 7.69167 35.9417 5.875 34.125C4.05833 32.3083 2.625 30.1833 1.575 27.75C0.525 25.3167 0 22.7333 0 20C0 17.2333 0.525 14.6333 1.575 12.2C2.625 9.76667 4.05833 7.65 5.875 5.85C7.69167 4.05 9.81667 2.625 12.25 1.575C14.6833 0.525 17.2667 0 20 0C22.7667 0 25.3667 0.525 27.8 1.575C30.2333 2.625 32.35 4.05 34.15 5.85C35.95 7.65 37.375 9.76667 38.425 12.2C39.475 14.6333 40 17.2333 40 20C40 22.7333 39.475 25.3167 38.425 27.75C37.375 30.1833 35.95 32.3083 34.15 34.125C32.35 35.9417 30.2333 37.375 27.8 38.425C25.3667 39.475 22.7667 40 20 40ZM20 37C24.7333 37 28.75 35.3417 32.05 32.025C35.35 28.7083 37 24.7 37 20C37 15.2667 35.35 11.25 32.05 7.95C28.75 4.65 24.7333 3 20 3C15.3 3 11.2917 4.65 7.975 7.95C4.65833 11.25 3 15.2667 3 20C3 24.7 4.65833 28.7083 7.975 32.025C11.2917 35.3417 15.3 37 20 37Z" fill="#59507D"/>
                    </svg>
                  </div>
                  <div>
                    <p className="journey_time"><span>2023</span> <span>January</span></p>
                    <h3 className="heading_style_three mb-[10px]">Summary of event</h3>
                    <p className="paragraph_two_style">Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
                    <p className="paragraph_two_style">Suspendisse varius enim in eros elementum tristique.</p>
                  </div>
                  <div>
                  </div>
                </li>
                <li className="flex">
                  <div className="journey_points">
                    <svg width="40" height="40" viewBox="0 0 40 40" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <path d="M17.05 29.1L31.2 14.95L28.9 12.7L17.05 24.55L11.05 18.55L8.8 20.8L17.05 29.1ZM20 40C17.2667 40 14.6833 39.475 12.25 38.425C9.81667 37.375 7.69167 35.9417 5.875 34.125C4.05833 32.3083 2.625 30.1833 1.575 27.75C0.525 25.3167 0 22.7333 0 20C0 17.2333 0.525 14.6333 1.575 12.2C2.625 9.76667 4.05833 7.65 5.875 5.85C7.69167 4.05 9.81667 2.625 12.25 1.575C14.6833 0.525 17.2667 0 20 0C22.7667 0 25.3667 0.525 27.8 1.575C30.2333 2.625 32.35 4.05 34.15 5.85C35.95 7.65 37.375 9.76667 38.425 12.2C39.475 14.6333 40 17.2333 40 20C40 22.7333 39.475 25.3167 38.425 27.75C37.375 30.1833 35.95 32.3083 34.15 34.125C32.35 35.9417 30.2333 37.375 27.8 38.425C25.3667 39.475 22.7667 40 20 40ZM20 37C24.7333 37 28.75 35.3417 32.05 32.025C35.35 28.7083 37 24.7 37 20C37 15.2667 35.35 11.25 32.05 7.95C28.75 4.65 24.7333 3 20 3C15.3 3 11.2917 4.65 7.975 7.95C4.65833 11.25 3 15.2667 3 20C3 24.7 4.65833 28.7083 7.975 32.025C11.2917 35.3417 15.3 37 20 37Z" fill="#59507D"/>
                    </svg>
                  </div>
                  <div>
                    <p className="journey_time"><span>2023</span> <span>January</span></p>
                    <h3 className="heading_style_three mb-[10px]">Summary of event</h3>
                    <p className="paragraph_two_style">Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
                    <p className="paragraph_two_style">Suspendisse varius enim in eros elementum tristique.</p>
                  </div>
                  <div>
                  </div>
                </li>
                <li className="flex">
                  <div className="journey_points">
                    <svg width="40" height="40" viewBox="0 0 40 40" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <path d="M17.05 29.1L31.2 14.95L28.9 12.7L17.05 24.55L11.05 18.55L8.8 20.8L17.05 29.1ZM20 40C17.2667 40 14.6833 39.475 12.25 38.425C9.81667 37.375 7.69167 35.9417 5.875 34.125C4.05833 32.3083 2.625 30.1833 1.575 27.75C0.525 25.3167 0 22.7333 0 20C0 17.2333 0.525 14.6333 1.575 12.2C2.625 9.76667 4.05833 7.65 5.875 5.85C7.69167 4.05 9.81667 2.625 12.25 1.575C14.6833 0.525 17.2667 0 20 0C22.7667 0 25.3667 0.525 27.8 1.575C30.2333 2.625 32.35 4.05 34.15 5.85C35.95 7.65 37.375 9.76667 38.425 12.2C39.475 14.6333 40 17.2333 40 20C40 22.7333 39.475 25.3167 38.425 27.75C37.375 30.1833 35.95 32.3083 34.15 34.125C32.35 35.9417 30.2333 37.375 27.8 38.425C25.3667 39.475 22.7667 40 20 40ZM20 37C24.7333 37 28.75 35.3417 32.05 32.025C35.35 28.7083 37 24.7 37 20C37 15.2667 35.35 11.25 32.05 7.95C28.75 4.65 24.7333 3 20 3C15.3 3 11.2917 4.65 7.975 7.95C4.65833 11.25 3 15.2667 3 20C3 24.7 4.65833 28.7083 7.975 32.025C11.2917 35.3417 15.3 37 20 37Z" fill="#59507D"/>
                    </svg>
                  </div>
                  <div>
                    <p className="journey_time"><span>2023</span> <span>January</span></p>
                    <h3 className="heading_style_three mb-[10px]">Summary of event</h3>
                    <p className="paragraph_two_style">Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
                    <p className="paragraph_two_style">Suspendisse varius enim in eros elementum tristique.</p>
                  </div>
                  <div>
                  </div>
                </li>
                <li className="flex">
                  <div className="journey_points">
                    <svg width="40" height="40" viewBox="0 0 40 40" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <path d="M17.05 29.1L31.2 14.95L28.9 12.7L17.05 24.55L11.05 18.55L8.8 20.8L17.05 29.1ZM20 40C17.2667 40 14.6833 39.475 12.25 38.425C9.81667 37.375 7.69167 35.9417 5.875 34.125C4.05833 32.3083 2.625 30.1833 1.575 27.75C0.525 25.3167 0 22.7333 0 20C0 17.2333 0.525 14.6333 1.575 12.2C2.625 9.76667 4.05833 7.65 5.875 5.85C7.69167 4.05 9.81667 2.625 12.25 1.575C14.6833 0.525 17.2667 0 20 0C22.7667 0 25.3667 0.525 27.8 1.575C30.2333 2.625 32.35 4.05 34.15 5.85C35.95 7.65 37.375 9.76667 38.425 12.2C39.475 14.6333 40 17.2333 40 20C40 22.7333 39.475 25.3167 38.425 27.75C37.375 30.1833 35.95 32.3083 34.15 34.125C32.35 35.9417 30.2333 37.375 27.8 38.425C25.3667 39.475 22.7667 40 20 40ZM20 37C24.7333 37 28.75 35.3417 32.05 32.025C35.35 28.7083 37 24.7 37 20C37 15.2667 35.35 11.25 32.05 7.95C28.75 4.65 24.7333 3 20 3C15.3 3 11.2917 4.65 7.975 7.95C4.65833 11.25 3 15.2667 3 20C3 24.7 4.65833 28.7083 7.975 32.025C11.2917 35.3417 15.3 37 20 37Z" fill="#59507D"/>
                    </svg>
                  </div>
                  <div>
                    <p className="journey_time"><span>2023</span> <span>January</span></p>
                    <h3 className="heading_style_three mb-[10px]">Summary of event</h3>
                    <p className="paragraph_two_style">Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
                    <p className="paragraph_two_style">Suspendisse varius enim in eros elementum tristique.</p>
                  </div>
                  <div>
                  </div>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>


      <section className="about_mission">
        <div className="container mx-auto ">
          <div className="mission">
            <div className="max-w-[750px] text-center">
              <p className="news_letter_head pb-2">My mission</p>
              <h2 className="news_letter_h2">Mission goes here</h2>
              <p className="text-white text-lg font-normal pb-9 leading-7">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
            </div>
          </div>
          <Image src={missionEllipse} alt="..." className="mission_ellipse"/>
        </div>
      </section>


      <section className="about_principles">
        <div className="container mx-auto">
          <div className="lg:grid grid-cols-2 lg:px-16">
            <div>
              <p className="paragraph_one_style mb-2">My values</p>
              <h2 className="heading_style_two mb-6">These are the principles important to me </h2>
              <p className="paragraph_two_style">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse varius enim in eros elementum tristique.</p>
            </div>
          </div>
          <ul className="grid md:grid-cols-2 lg:grid-cols-3 gap-10 mt-14 lg:px-16">
            <li>
              <Image src={principlesOne} alt="principle" className="mb-7"/>
              <p className="heading_three_style">Describe value one</p>
              <p className="mt-5 text-base text-black">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse varius enim in eros elementum tristique. Duis cursus, mi quis viverra ornare, eros dolor interdum nulla.</p>
            </li>
            <li>
              <Image src={principlesOne} alt="principle" className="mb-7"/>
              <p className="heading_three_style">Describe value two</p>
              <p className="mt-5 text-base text-black">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse varius enim in eros elementum tristique. Duis cursus, mi quis viverra ornare, eros dolor interdum nulla.</p>
            </li>
            <li>
              <Image src={principlesOne} alt="principle" className="mb-7"/>
              <p className="heading_three_style">Describe value three</p>
              <p className="mt-5 text-base text-black">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse varius enim in eros elementum tristique. Duis cursus, mi quis viverra ornare, eros dolor interdum nulla.</p>
            </li>
            <li>
              <Image src={principlesOne} alt="principle" className="mb-7"/>
              <p className="heading_three_style">Describe value four</p>
              <p className="mt-5 text-base text-black">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse varius enim in eros elementum tristique. Duis cursus, mi quis viverra ornare, eros dolor interdum nulla.</p>
            </li>
            <li>
              <Image src={principlesOne} alt="principle" className="mb-7"/>
              <p className="heading_three_style">Describe value five</p>
              <p className="mt-5 text-base text-black">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse varius enim in eros elementum tristique. Duis cursus, mi quis viverra ornare, eros dolor interdum nulla.</p>
            </li>
            <li>
              <Image src={principlesOne} alt="principle" className="mb-7"/>
              <p className="heading_three_style">Describe value six</p>
              <p className="mt-5 text-base text-black">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse varius enim in eros elementum tristique. Duis cursus, mi quis viverra ornare, eros dolor interdum nulla.</p>
            </li>
          </ul>
        </div>
      </section>


      <section className="socialMedia_moments">
        <div className="container mx-auto">
          <div className="lg:px-16">
            <p className="paragraph_one_style mb-2">Social media</p>
            <h2 className="heading_style_two mb-6">Some of my favourite moments </h2>
            <div className="grid grid-rows-3 md:grid-cols-3 md:grid-flow-col gap-10">
              <div className="social_image">
                <Image src={social_img_1} alt="program..." />
              </div>
              <div className="row-span-2 social_image">
                <Image src={social_img_1} alt="program..." />
              </div>
              <div className="row-span-2 social_image">
                <Image src={social_img_1} alt="program..." />
              </div>
              <div className="social_image">
                <Image src={social_img_1} alt="program..." />
              </div>
              <div className="social_image">
                <Image src={social_img_1} alt="program..." />
              </div>
              <div className="row-span-2 social_image">
                <Image src={social_img_1} alt="program..." />
              </div>
            </div>
          </div>
          
        </div>
      </section>


      <footer>
        <div className="container mx-auto xl:px-24 lg:gap-20">
          <div className=" grid lg:grid-cols-5">
            <div>
              <div className="flex items-center mb-9">
                <div className="footer-logo">
                  <Image src={footerLogo} alt="..." />
                </div>
                <span className="ml-4 text-white">
                  <svg width="86" height="25" viewBox="0 0 86 25" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M0 19.0557V1.77637H2.71087L10.4635 14.3903H9.04469L16.6706 1.77637H19.3815L19.4068 19.0557H16.2906L16.2652 6.54052H16.924L10.4381 17.0809H8.96869L2.38152 6.54052H3.14157V19.0557H0Z" fill="white"/>
                    <path d="M32.2284 19.0557V16.3897L32.0511 15.822V11.1566C32.0511 10.2515 31.7724 9.55206 31.215 9.05837C30.6577 8.54822 29.8131 8.29314 28.6815 8.29314C27.9214 8.29314 27.1698 8.40834 26.4267 8.63873C25.7004 8.86912 25.0839 9.19002 24.5772 9.60143L23.3358 7.35512C24.062 6.81206 24.9234 6.40887 25.92 6.14557C26.9334 5.86581 27.9806 5.72593 29.0615 5.72593C31.0208 5.72593 32.5325 6.18671 33.5966 7.10827C34.6775 8.01338 35.218 9.42041 35.218 11.3294V19.0557H32.2284ZM27.9721 19.2285C26.9587 19.2285 26.072 19.0639 25.3119 18.7348C24.5519 18.3892 23.9607 17.9202 23.5384 17.3278C23.1331 16.7189 22.9304 16.0359 22.9304 15.2789C22.9304 14.5384 23.1077 13.8719 23.4624 13.2795C23.834 12.687 24.4336 12.218 25.2612 11.8724C26.0889 11.5268 27.1867 11.3541 28.5548 11.3541H32.4818V13.4029H28.7828C27.7019 13.4029 26.9756 13.5757 26.604 13.9213C26.2324 14.2504 26.0466 14.6618 26.0466 15.1555C26.0466 15.715 26.2747 16.1593 26.7307 16.4885C27.1867 16.8176 27.8201 16.9822 28.6308 16.9822C29.4078 16.9822 30.1003 16.8094 30.7083 16.4638C31.3333 16.1182 31.7809 15.6081 32.0511 14.9333L32.5831 16.7847C32.2791 17.5582 31.7302 18.1588 30.9363 18.5867C30.1594 19.0146 29.1713 19.2285 27.9721 19.2285Z" fill="white"/>
                    <path d="M40.1497 24.0173C39.491 24.0173 38.8322 23.9104 38.1735 23.6964C37.5148 23.4825 36.9659 23.1863 36.5267 22.8078L37.7935 20.5368C38.1144 20.8165 38.4775 21.0387 38.8829 21.2033C39.2883 21.3678 39.7021 21.4501 40.1243 21.4501C40.6986 21.4501 41.1631 21.3102 41.5178 21.0305C41.8725 20.7507 42.2018 20.2817 42.5059 19.6234L43.2912 17.8955L43.5446 17.5252L48.6623 5.87404H51.7026L45.3687 20.1171C44.9465 21.1045 44.4736 21.8862 43.95 22.4622C43.4433 23.0382 42.869 23.4413 42.2272 23.6717C41.6022 23.9021 40.9097 24.0173 40.1497 24.0173ZM42.9366 19.5247L36.8308 5.87404H40.1243L45.0901 17.2537L42.9366 19.5247Z" fill="white"/>
                    <path d="M59.4076 19.2285C58.2591 19.2285 57.2457 19.0228 56.3674 18.6114C55.4891 18.1835 54.8051 17.5417 54.3153 16.686C53.8254 15.8138 53.5805 14.7194 53.5805 13.4029V5.87404H56.7474V12.9832C56.7474 14.1681 57.0177 15.0568 57.5582 15.6492C58.1155 16.2252 58.9009 16.5132 59.9144 16.5132C60.6575 16.5132 61.2993 16.3651 61.8398 16.0688C62.3972 15.7726 62.8279 15.3283 63.1319 14.7359C63.4528 14.1434 63.6133 13.4111 63.6133 12.5389V5.87404H66.7802V19.0557H63.7653V15.5011L64.2974 16.5872C63.8413 17.443 63.1742 18.1012 62.2959 18.562C61.4176 19.0063 60.4548 19.2285 59.4076 19.2285Z" fill="white"/>
                    <path d="M70.9267 19.0557V5.87404H73.9416V9.50269L73.5869 8.44125C73.9923 7.5526 74.6256 6.87788 75.487 6.4171C76.3653 5.95632 77.4547 5.72593 78.7553 5.72593V8.66341C78.6202 8.6305 78.4935 8.61404 78.3753 8.61404C78.257 8.59759 78.1388 8.58936 78.0206 8.58936C76.8214 8.58936 75.8671 8.93495 75.1577 9.62612C74.4483 10.3008 74.0936 11.3129 74.0936 12.6623V19.0557H70.9267Z" fill="white"/>
                    <path d="M81.4418 19.0557V5.87404H84.6087V19.0557H81.4418Z" fill="white"/>
                    <path d="M81.2526 3.87732C81.6995 4.32159 82.263 4.54373 82.9431 4.54373C83.6426 4.54373 84.2061 4.32159 84.6336 3.87732C85.0611 3.41285 85.2748 2.8474 85.2748 2.18099C85.2748 1.55497 85.0513 1.04001 84.6044 0.636121C84.1769 0.21204 83.6231 0 82.9431 0C82.263 0 81.6995 0.222138 81.2526 0.666413C80.8251 1.09049 80.6113 1.62565 80.6113 2.27187C80.6113 2.89789 80.8251 3.43304 81.2526 3.87732Z" fill="#EB334A"/>
                  </svg>
                </span>
              </div>
              <ul className="social_media_icon">
                <li>
                  <a href="">
                    <svg width="7" height="14" viewBox="0 0 7 14" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <path d="M1.78694 14V7.43079H0V5.06556H1.78694V3.04535C1.78694 1.45785 2.84249 0 5.27471 0C6.25947 0 6.98766 0.09177 6.98766 0.09177L6.93028 2.30049C6.93028 2.30049 6.18765 2.29347 5.37725 2.29347C4.50015 2.29347 4.35963 2.68638 4.35963 3.33851V5.06556H7L6.88512 7.43079H4.35963V14H1.78694Z" fill="white"/>
                    </svg>
                  </a>
                </li>
                <li>
                  <a href="">
                    <svg width="19" height="14" viewBox="0 0 19 14" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <path d="M18.334 1.70441C17.66 1.98888 16.945 2.17561 16.2129 2.25838C16.9755 1.82297 17.561 1.13349 17.8367 0.311979C17.1118 0.721787 16.3187 1.01052 15.4917 1.16571C14.818 0.481989 13.8583 0.0546875 12.7961 0.0546875C10.7566 0.0546875 9.10308 1.62992 9.10308 3.57277C9.10308 3.84855 9.13577 4.11703 9.1987 4.37459C6.12956 4.22782 3.40847 2.82722 1.58702 0.698687C1.26921 1.21829 1.0871 1.82271 1.0871 2.46738C1.0871 3.68799 1.73911 4.76478 2.72995 5.39572C2.14351 5.37822 1.56997 5.22732 1.05722 4.95562C1.05701 4.97036 1.05701 4.9851 1.05701 4.9999C1.05701 6.70448 2.32995 8.12645 4.01927 8.44966C3.47547 8.59056 2.90505 8.61118 2.3516 8.50995C2.8215 9.90767 4.18535 10.9248 5.80127 10.9532C4.53741 11.8968 2.94504 12.4593 1.21493 12.4593C0.916805 12.4593 0.622898 12.4426 0.333984 12.4101C1.96826 13.4083 3.90938 13.9908 5.99484 13.9908C12.7875 13.9908 16.5019 8.62985 16.5019 3.98078C16.5019 3.82819 16.4984 3.67647 16.4912 3.52561C17.2142 3.0277 17.8382 2.41098 18.334 1.70441Z" fill="white"/>
                    </svg>
                  </a>
                </li>
                <li>
                  <a href="">
                    <svg width="17" height="15" viewBox="0 0 17 15" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <path d="M4.2987 15V4.87953H0.868402V15H4.2987ZM2.584 3.49692C3.7802 3.49692 4.52478 2.71978 4.52478 1.74862C4.5025 0.755565 3.78025 0 2.6067 0C1.43333 0 0.666016 0.75558 0.666016 1.74862C0.666016 2.71983 1.41041 3.49692 2.5616 3.49692H2.58389H2.584ZM6.19737 15H9.62767V9.34824C9.62767 9.04576 9.64995 8.7436 9.74054 8.52738C9.98852 7.92304 10.5529 7.29712 11.5005 7.29712C12.7418 7.29712 13.2384 8.2252 13.2384 9.5857V14.9999H16.6685V9.19695C16.6685 6.08834 14.9762 4.64193 12.7192 4.64193C10.8687 4.64193 10.0562 5.65626 9.60485 6.34712H9.62774V4.87932H6.19744C6.24246 5.82897 6.19744 14.9998 6.19744 14.9998L6.19737 15Z" fill="white"/>
                    </svg>
                  </a>
                </li>
                <li>
                  <a href="">
                    <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <path d="M8.00234 3.95732C5.73091 3.95732 3.89877 5.76084 3.89877 7.99677C3.89877 10.2327 5.73091 12.0362 8.00234 12.0362C10.2738 12.0362 12.1059 10.2327 12.1059 7.99677C12.1059 5.76084 10.2738 3.95732 8.00234 3.95732ZM8.00234 10.6229C6.53448 10.6229 5.33448 9.44521 5.33448 7.99677C5.33448 6.54834 6.53091 5.3706 8.00234 5.3706C9.47377 5.3706 10.6702 6.54834 10.6702 7.99677C10.6702 9.44521 9.47019 10.6229 8.00234 10.6229ZM13.2309 3.79209C13.2309 4.31592 12.8023 4.73428 12.2738 4.73428C11.7416 4.73428 11.3166 4.3124 11.3166 3.79209C11.3166 3.27178 11.7452 2.8499 12.2738 2.8499C12.8023 2.8499 13.2309 3.27178 13.2309 3.79209ZM15.9488 4.74834C15.888 3.48623 15.5952 2.36826 14.6559 1.44717C13.7202 0.526074 12.5845 0.237793 11.3023 0.174512C9.98091 0.100684 6.0202 0.100684 4.69877 0.174512C3.4202 0.234277 2.28449 0.522558 1.3452 1.44365C0.405915 2.36474 0.116629 3.48271 0.0523437 4.74482C-0.0226562 6.0456 -0.0226562 9.94443 0.0523437 11.2452C0.113058 12.5073 0.405915 13.6253 1.3452 14.5464C2.28449 15.4675 3.41663 15.7558 4.69877 15.819C6.0202 15.8929 9.98091 15.8929 11.3023 15.819C12.5845 15.7593 13.7202 15.471 14.6559 14.5464C15.5916 13.6253 15.8845 12.5073 15.9488 11.2452C16.0238 9.94443 16.0238 6.04912 15.9488 4.74834ZM14.2416 12.6409C13.963 13.33 13.4238 13.8608 12.7202 14.1386C11.6666 14.5499 9.16662 14.455 8.00234 14.455C6.83805 14.455 4.33448 14.5464 3.28448 14.1386C2.58448 13.8643 2.0452 13.3335 1.76306 12.6409C1.3452 11.6038 1.44163 9.14287 1.44163 7.99677C1.44163 6.85068 1.34877 4.38623 1.76306 3.35263C2.04163 2.66357 2.58091 2.13271 3.28448 1.85498C4.33806 1.44365 6.83805 1.53857 8.00234 1.53857C9.16662 1.53857 11.6702 1.44717 12.7202 1.85498C13.4202 2.1292 13.9595 2.66006 14.2416 3.35263C14.6595 4.38974 14.563 6.85068 14.563 7.99677C14.563 9.14287 14.6595 11.6073 14.2416 12.6409Z" fill="white"/>
                    </svg>
                  </a>
                </li>
              </ul>
            </div>
            <div className="col-span-2 lg:pr-24 mb-8 lg:mb-0">
              <div className="flex justify-between">
                <div>
                  <p className="mb-9 font-semibold text-white text-[21px]">Pages</p>
                  <ul className="footer_links">
                    <li>Home</li>
                    <li>About Me</li>
                    <li>My Content</li>
                    <li>Join a Challenge</li>
                    <li>Free Resources</li>
                  </ul>
                </div>
                <div>
                  <p className="mb-9 font-semibold text-white text-[21px]">Pages</p>
                  <ul className="footer_links">
                    <li>Home</li>
                    <li>About Me</li>
                    <li>My Content</li>
                    <li>Join a Challenge</li>
                    <li>Free Resources</li>
                  </ul>
                </div>
              </div>
              <p className="text-base font-normal text-white mt-24 hidden lg:block copyright_text">© 2023 All rights reserved Mayuri Sharma</p>
            </div>
            <div className="bg-white rounded-[20px] p-8 col-span-2 z-[2]">
              <div className="flex items-center">
                <svg width="30" height="24" viewBox="0 0 30 24" fill="none" xmlns="http://www.w3.org/2000/svg" className="mb-7 mr-4">
                  <path d="M2.25 24C1.65 24 1.125 23.775 0.675 23.325C0.225 22.875 0 22.35 0 21.75V2.25C0 1.65 0.225 1.125 0.675 0.675C1.125 0.225 1.65 0 2.25 0H27.75C28.35 0 28.875 0.225 29.325 0.675C29.775 1.125 30 1.65 30 2.25V21.75C30 22.35 29.775 22.875 29.325 23.325C28.875 23.775 28.35 24 27.75 24H2.25ZM15 12.675L2.25 4.3125V21.75H27.75V4.3125L15 12.675ZM15 10.425L27.6 2.25H2.4375L15 10.425ZM2.25 4.3125V2.25V21.75V4.3125Z" fill="#29214B"/>
                </svg>
                <p className="news_letter_form_head">News letter</p>
              </div>
              <p className="text-lg font-normal leading-7 mb-6 text-[#0E0F1D]">Join my monthly newsletter with tips and free content, no spam promise ;)</p>
              <div className="form_field">
                <label htmlFor="">Email address</label>
                <input type="text" placeholder="Enter email address" />
              </div>
              <button className="primary_button w-full mb-6">Subscribe</button>
              <p className="text-sm text-[#090617] font-normal">*We respect your privacy you can unsubscribe anytime</p>
            </div>
          </div>
          <p className="text-base font-normal text-white mt-16 text-center block lg:hidden copyright_text">© 2023 All rights reserved Mayuri Sharma</p>
        </div>
        <Image className="main-right-circle hidden lg:block" src={footerEllipse} alt=".." />
      </footer>
    </>
  );
};

export default About;
