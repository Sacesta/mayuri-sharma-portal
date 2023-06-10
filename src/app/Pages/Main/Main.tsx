import React from "react";
import "./main.css";
import Image from "next/image";
import rightCircle from "../../../Assets/icons/Ellipse 24 (Stroke).png";
import profileImage from "../../../Assets/Images/pageImages/transformation_profile_img.png";
import programeone from "../../../Assets/Images/pageImages/program_img_1.png";
import masterclassimg from "../../../Assets/Images/pageImages/masterclass_one.png";
import ellipseOne from "../../../Assets/Images/pageImages/Ellipse_one.png";
import ellipseTwo from "../../../Assets/Images/pageImages/news_ellipse_two.png";
import supportive_banner from "../../../Assets/Images/pageImages/Supportive_banner.png";
import HeroTestimonial from "@/app/components/Carousel/HeroTestimonial";
import TestimonialCarousel from "@/app/components/Carousel/TestimonialCarousel";
import Footer from "@/app/components/footer/Footer";
import Link from "next/link";
import Transformations from "@/app/components/Carousel/Transformations";
import ProgramCards from "@/app/components/ProgramCards/ProgramCards";

const Main = () => {
  return (
    <>
      <section className="md:pt-6 md:pb-20  banner md:px-6 lg:px-16">
        <div className="home_banner container mx-auto">
          <Image className="main-right-circle" src={rightCircle} alt=".." />
          <div className="home_banner_text">
            <div className="relative">
              <svg
                width="98"
                height="88"
                viewBox="0 0 98 88"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  fillRule="evenodd"
                  clipRule="evenodd"
                  d="M23.0115 49.0953L21.7402 50.4614L20.4688 49.0953C21.1833 48.4167 22.297 48.4167 23.0115 49.0953ZM21.7402 53.1937C21.0092 54.0379 20.0552 55.2336 19.1026 56.6964C17.1035 59.7662 15.2199 63.8436 15.2199 68.2306C15.2199 72.9218 16.1201 77.0769 17.493 79.9892C18.9317 83.0413 20.5567 84.1248 21.7402 84.1248C22.9236 84.1248 24.5486 83.0413 25.9873 79.9892C27.3602 77.0769 28.2604 72.9218 28.2604 68.2306C28.2604 63.8436 26.3768 59.7662 24.3777 56.6964C23.4251 55.2336 22.4711 54.0379 21.7402 53.1937ZM20.4688 49.0953C20.4693 49.0949 20.4688 49.0953 21.7402 50.4614C23.0115 49.0953 23.011 49.0949 23.0115 49.0953L23.0163 49.0999L23.0241 49.1074L23.0488 49.1312C23.0691 49.1509 23.0972 49.1783 23.1325 49.2132C23.2032 49.2831 23.3028 49.3831 23.4274 49.5117C23.6762 49.769 24.0252 50.1415 24.4408 50.6173C25.2704 51.5673 26.3739 52.9386 27.4789 54.6354C29.6679 57.9968 31.9725 62.8039 31.9725 68.2306C31.9725 73.3531 30.9976 78.0826 29.3388 81.6015C27.746 84.9806 25.1828 87.8748 21.7402 87.8748C18.2975 87.8748 15.7343 84.9806 14.1415 81.6015C12.4827 78.0826 11.5078 73.3531 11.5078 68.2306C11.5078 62.8039 13.8124 57.9968 16.0014 54.6354C17.1064 52.9386 18.2099 51.5673 19.0395 50.6173C19.4551 50.1415 19.8041 49.769 20.053 49.5117C20.1775 49.3831 20.2771 49.2831 20.3478 49.2132C20.3831 49.1783 20.4112 49.1509 20.4315 49.1312L20.4562 49.1074L20.464 49.0999L20.4668 49.0973L20.4688 49.0953Z"
                  fill="white"
                />
                <path
                  fillRule="evenodd"
                  clipRule="evenodd"
                  d="M49.8142 49.0953L48.5429 50.4614L47.2715 49.0953C47.986 48.4167 49.0998 48.4167 49.8142 49.0953ZM48.5429 53.1937C47.8119 54.0379 46.8579 55.2336 45.9054 56.6964C43.9062 59.7662 42.0227 63.8436 42.0227 68.2306C42.0227 72.9218 42.9229 77.0769 44.2957 79.9892C45.7345 83.0413 47.3594 84.1248 48.5429 84.1248C49.7264 84.1248 51.3513 83.0413 52.7901 79.9892C54.1629 77.0769 55.0631 72.9218 55.0631 68.2306C55.0631 63.8436 53.1796 59.7662 51.1804 56.6964C50.2278 55.2336 49.2739 54.0379 48.5429 53.1937ZM47.2715 49.0953C47.272 49.0949 47.2715 49.0953 48.5429 50.4614C49.8142 49.0953 49.8138 49.0949 49.8142 49.0953L49.819 49.0999L49.8269 49.1074L49.8515 49.1312C49.8719 49.1509 49.9 49.1783 49.9353 49.2132C50.0059 49.2831 50.1056 49.3831 50.2301 49.5117C50.479 49.769 50.8279 50.1415 51.2435 50.6173C52.0731 51.5673 53.1766 52.9386 54.2816 54.6354C56.4706 57.9968 58.7752 62.8039 58.7752 68.2306C58.7752 73.3531 57.8003 78.0826 56.1416 81.6015C54.5487 84.9806 51.9855 87.8748 48.5429 87.8748C45.1003 87.8748 42.5371 84.9806 40.9442 81.6015C39.2854 78.0826 38.3105 73.3531 38.3105 68.2306C38.3105 62.8039 40.6151 57.9968 42.8041 54.6354C43.9091 52.9386 45.0126 51.5673 45.8423 50.6173C46.2579 50.1415 46.6068 49.769 46.8557 49.5117C46.9802 49.3831 47.0798 49.2831 47.1505 49.2132C47.1858 49.1783 47.2139 49.1509 47.2343 49.1312L47.2589 49.1074L47.2667 49.0999L47.2695 49.0973L47.2715 49.0953Z"
                  fill="white"
                />
                <path
                  fillRule="evenodd"
                  clipRule="evenodd"
                  d="M33.8713 38.9044L35.1427 37.5384L36.414 38.9044C35.6995 39.583 34.5858 39.583 33.8713 38.9044ZM35.1427 34.806C35.8737 33.9619 36.8276 32.7661 37.7802 31.3034C39.7793 28.2336 41.6629 24.1561 41.6629 19.7691C41.6629 15.078 40.7627 10.9229 39.3898 8.01054C37.9511 4.95841 36.3261 3.87492 35.1427 3.87492C33.9592 3.87492 32.3342 4.95841 30.8955 8.01054C29.5227 10.9229 28.6224 15.078 28.6224 19.7691C28.6224 24.1561 30.506 28.2336 32.5051 31.3034C33.4577 32.7661 34.4117 33.9619 35.1427 34.806ZM36.414 38.9044C36.4136 38.9049 36.414 38.9044 35.1427 37.5384C33.8713 38.9044 33.8718 38.9049 33.8713 38.9044L33.8665 38.8999L33.8587 38.8923L33.834 38.8686C33.8137 38.8489 33.7856 38.8215 33.7503 38.7865C33.6796 38.7167 33.58 38.6167 33.4555 38.488C33.2066 38.2308 32.8576 37.8583 32.442 37.3824C31.6124 36.4325 30.5089 35.0612 29.4039 33.3644C27.2149 30.003 24.9103 25.1958 24.9103 19.7691C24.9103 14.6466 25.8852 9.91713 27.544 6.39826C29.1368 3.01919 31.7001 0.124915 35.1427 0.124915C38.5853 0.124916 41.1485 3.0192 42.7413 6.39826C44.4001 9.91713 45.375 14.6466 45.375 19.7691C45.375 25.1958 43.0704 30.003 40.8814 33.3644C39.7764 35.0612 38.6729 36.4325 37.8433 37.3824C37.4277 37.8583 37.0788 38.2308 36.8299 38.488C36.7054 38.6167 36.6057 38.7167 36.5351 38.7865C36.4997 38.8215 36.4716 38.8489 36.4513 38.8686L36.4267 38.8923L36.4188 38.8999L36.416 38.9025L36.414 38.9044Z"
                  fill="white"
                />
                <path
                  fillRule="evenodd"
                  clipRule="evenodd"
                  d="M60.674 38.9044L61.9454 37.5384L63.2168 38.9044C62.5023 39.583 61.3885 39.583 60.674 38.9044ZM61.9454 34.806C62.6764 33.9619 63.6303 32.7661 64.5829 31.3034C66.5821 28.2336 68.4656 24.1561 68.4656 19.7691C68.4656 15.078 67.5654 10.9229 66.1926 8.01054C64.7538 4.95841 63.1289 3.87492 61.9454 3.87492C60.7619 3.87492 59.137 4.95841 57.6982 8.01054C56.3254 10.9229 55.4252 15.078 55.4252 19.7691C55.4252 24.1561 57.3087 28.2336 59.3079 31.3034C60.2604 32.7661 61.2144 33.9619 61.9454 34.806ZM63.2168 38.9044C63.2163 38.9049 63.2168 38.9044 61.9454 37.5384C60.674 38.9044 60.6745 38.9049 60.674 38.9044L60.6692 38.8999L60.6614 38.8923L60.6368 38.8686C60.6164 38.8489 60.5883 38.8215 60.553 38.7865C60.4824 38.7167 60.3827 38.6167 60.2582 38.488C60.0093 38.2308 59.6604 37.8583 59.2448 37.3824C58.4152 36.4325 57.3116 35.0612 56.2067 33.3644C54.0176 30.003 51.7131 25.1958 51.7131 19.7691C51.7131 14.6466 52.6879 9.91713 54.3467 6.39826C55.9396 3.01919 58.5028 0.124915 61.9454 0.124915C65.388 0.124916 67.9512 3.0192 69.5441 6.39826C71.2028 9.91713 72.1777 14.6466 72.1777 19.7691C72.1777 25.1958 69.8731 30.003 67.6841 33.3644C66.5792 35.0612 65.4756 36.4325 64.646 37.3824C64.2304 37.8583 63.8815 38.2308 63.6326 38.488C63.5081 38.6167 63.4084 38.7167 63.3378 38.7865C63.3025 38.8215 63.2744 38.8489 63.254 38.8686L63.2294 38.8923L63.2215 38.8999L63.2188 38.9025L63.2168 38.9044Z"
                  fill="white"
                />
                <path
                  fillRule="evenodd"
                  clipRule="evenodd"
                  d="M76.6189 49.0953L75.3476 50.4614L74.0762 49.0953C74.7907 48.4167 75.9045 48.4167 76.6189 49.0953ZM75.3476 53.1937C74.6166 54.0379 73.6626 55.2336 72.71 56.6964C70.7109 59.7662 68.8274 63.8436 68.8274 68.2306C68.8274 72.9218 69.7276 77.0769 71.1004 79.9892C72.5392 83.0413 74.1641 84.1248 75.3476 84.1248C76.5311 84.1248 78.156 83.0413 79.5947 79.9892C80.9676 77.0769 81.8678 72.9218 81.8678 68.2306C81.8678 63.8436 79.9842 59.7662 77.9851 56.6964C77.0325 55.2336 76.0786 54.0379 75.3476 53.1937ZM74.0762 49.0953C74.0767 49.0949 74.0762 49.0953 75.3476 50.4614C76.6189 49.0953 76.6185 49.0949 76.6189 49.0953L76.6237 49.0999L76.6316 49.1074L76.6562 49.1312C76.6765 49.1509 76.7046 49.1783 76.74 49.2132C76.8106 49.2831 76.9103 49.3831 77.0348 49.5117C77.2837 49.769 77.6326 50.1415 78.0482 50.6173C78.8778 51.5673 79.9813 52.9386 81.0863 54.6354C83.2753 57.9968 85.5799 62.8039 85.5799 68.2306C85.5799 73.3531 84.605 78.0826 82.9463 81.6015C81.3534 84.9806 78.7902 87.8748 75.3476 87.8748C71.905 87.8748 69.3418 84.9806 67.7489 81.6015C66.0901 78.0826 65.1152 73.3531 65.1152 68.2306C65.1152 62.8039 67.4198 57.9968 69.6088 54.6354C70.7138 52.9386 71.8173 51.5673 72.647 50.6173C73.0625 50.1415 73.4115 49.769 73.6604 49.5117C73.7849 49.3831 73.8845 49.2831 73.9552 49.2132C73.9905 49.1783 74.0186 49.1509 74.0389 49.1312L74.0636 49.1074L74.0714 49.0999L74.0742 49.0973L74.0762 49.0953Z"
                  fill="white"
                />
                <path
                  fillRule="evenodd"
                  clipRule="evenodd"
                  d="M33.8609 36.1821C34.5782 35.4905 35.7068 35.4905 36.424 36.1821L48.5445 47.8694L60.665 36.1821C61.3823 35.4905 62.5109 35.4905 63.2281 36.1821L75.3185 47.8403L86.8287 36.2126C87.5536 35.4804 88.7288 35.4804 89.4536 36.2126C90.1784 36.9449 90.1784 38.1321 89.4536 38.8643L76.6611 51.7873C75.9481 52.5075 74.7964 52.521 74.0671 51.8177L61.9466 40.1304L49.8261 51.8177C49.1089 52.5093 47.9802 52.5093 47.263 51.8177L35.1425 40.1304L23.022 51.8177C22.2927 52.521 21.1409 52.5075 20.428 51.7872L15.5934 46.9031C14.8686 46.1708 14.8686 44.9836 15.5935 44.2514C16.3183 43.5192 17.4935 43.5192 18.2183 44.2515L21.7707 47.8402L33.8609 36.1821Z"
                  fill="white"
                />
                <path
                  d="M92.7733 33.128C93.2484 33.608 93.8344 33.848 94.5313 33.848C95.2599 33.848 95.8459 33.608 96.2894 33.128C96.7645 32.648 97.0021 32.056 97.0021 31.352C97.0021 30.68 96.7645 30.12 96.2894 29.672C95.8142 29.224 95.2282 29 94.5313 29C93.8344 29 93.2484 29.24 92.7733 29.72C92.2981 30.168 92.0605 30.728 92.0605 31.4C92.0605 32.072 92.2981 32.648 92.7733 33.128Z"
                  fill="#EB334A"
                />
              </svg>

              <h3>Mayuri Sharma</h3>
              <h1>
                Wisdom of the past <br /> practice for the present
              </h1>
            </div>
            <HeroTestimonial />
          </div>
        </div>
      </section>

      <section className="intro_section">
        <div className="container mx-auto">
          <p className="paragraph_one_style mb-2 text-center text-[#090617]">
            Hi I’m Mayuri,
          </p>
          <h2 className="heading_style_two mb-4 text-center text-[#090617]">
            Nice to meet you
          </h2>
          <p className="paragraph_two_style max-w-3xl text-center mx-auto mb-14">
            Born and brought up in Northern India close to Himalayas. She has
            lived in various cities within India and Europe for studies and
            work. Apart from managing projects and people, she has also mastered
            the art of managing mind, emotions and energies through the various
            Mind Management, Art of Breathing, Art of Meditation and more such
            workshops.
          </p>
          <div className="flex justify-center relative z-[2]">
            <button className="primary_button">About me</button>
          </div>
          <div className="intro_background_img">
            <svg
              width="666"
              height="486"
              viewBox="0 0 666 486"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                opacity="0.4"
                fillRule="evenodd"
                clipRule="evenodd"
                d="M0.299213 452.501L38.2262 453.306L32.3198 484.522C12.4351 483.078 -1.59054 469.052 0.299213 452.501ZM82.0631 422.892C104.812 422.701 136.009 421.405 171.474 417.118C245.9 408.123 335.037 386.457 405.421 337.625C480.685 285.408 536.013 227.821 565.449 178.116C596.299 126.024 593.22 93.501 578.316 78.5974C563.412 63.6938 525.566 55.2914 458.48 71.1465C394.467 86.2753 316.467 121.19 241.203 173.407C170.819 222.239 129.121 291.344 105.045 350.689C93.5722 378.968 86.401 404.29 82.0631 422.892ZM32.3198 484.522C32.3066 484.521 32.3198 484.522 38.2262 453.306C0.299201 452.501 0.297958 452.512 0.299213 452.501L0.312083 452.39L0.333714 452.208L0.404596 451.633C0.464557 451.158 0.550556 450.499 0.666129 449.665C0.89725 447.998 1.24689 445.63 1.74336 442.629C2.73586 436.632 4.31812 428.091 6.71922 417.561C11.5126 396.54 19.617 367.379 32.9247 334.577C59.2879 269.595 107.392 187.065 194.456 126.66C276.641 69.6415 364.797 29.2743 442.142 10.9946C516.414 -6.55889 595.127 -6.49665 638.48 36.8561C681.833 80.2089 667.676 144.704 633.522 202.375C597.955 262.433 534.353 327.353 452.168 384.372C365.104 444.776 258.956 469.264 177.461 479.113C136.323 484.085 100.425 485.452 74.7369 485.579C61.8691 485.642 51.4984 485.394 44.2372 485.123C40.6048 484.987 37.7454 484.846 35.735 484.734C34.7296 484.678 33.936 484.629 33.3638 484.592L32.6724 484.546L32.4533 484.531L32.3758 484.526L32.3198 484.522Z"
                fill="url(#paint0_linear_630_3962)"
              />
              <defs>
                <linearGradient
                  id="paint0_linear_630_3962"
                  x1="8.14408"
                  y1="474.176"
                  x2="541.972"
                  y2="-59.6519"
                  gradientUnits="userSpaceOnUse"
                >
                  <stop stopColor="#D8D5E3" />
                  <stop offset="1" stopColor="#D8D5E3" stopOpacity="0" />
                </linearGradient>
              </defs>
            </svg>
          </div>
        </div>
      </section>

      <section className="tranformation_section">
        <div className="container mx-auto">
          <div className="transformation">
            <div className="transformation_profile_img">
              <Image src={profileImage} alt="..." />
              <div className="podcast_listen_icon bg-[#29214B] -right-6 -top-6">
                <svg
                  width="36"
                  height="35"
                  viewBox="0 0 36 35"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M1.35586 25.3094C0.614658 25.3094 0 24.6948 0 23.9535V10.3949C0 9.65372 0.614658 9.03906 1.35586 9.03906C2.09707 9.03906 2.71172 9.65372 2.71172 10.3949V23.9535C2.71172 24.6948 2.09707 25.3094 1.35586 25.3094Z"
                    fill="white"
                  />
                  <path
                    d="M9.49063 29.829C8.74942 29.829 8.13477 29.2143 8.13477 28.4731V5.87539C8.13477 5.13419 8.74942 4.51953 9.49063 4.51953C10.2318 4.51953 10.8465 5.13419 10.8465 5.87539V28.4731C10.8465 29.2143 10.2318 29.829 9.49063 29.829Z"
                    fill="white"
                  />
                  <path
                    d="M17.6264 34.3485C16.8852 34.3485 16.2705 33.7339 16.2705 32.9926V1.35586C16.2705 0.614658 16.8852 0 17.6264 0C18.3676 0 18.9822 0.614658 18.9822 1.35586V32.9926C18.9822 33.7339 18.3676 34.3485 17.6264 34.3485Z"
                    fill="white"
                  />
                  <path
                    d="M25.7611 29.829C25.0199 29.829 24.4053 29.2143 24.4053 28.4731V5.87539C24.4053 5.13419 25.0199 4.51953 25.7611 4.51953C26.5023 4.51953 27.117 5.13419 27.117 5.87539V28.4731C27.117 29.2143 26.5023 29.829 25.7611 29.829Z"
                    fill="white"
                  />
                  <path
                    d="M33.8969 25.3094C33.1557 25.3094 32.541 24.6948 32.541 23.9535V10.3949C32.541 9.65372 33.1557 9.03906 33.8969 9.03906C34.6381 9.03906 35.2527 9.65372 35.2527 10.3949V23.9535C35.2527 24.6948 34.6381 25.3094 33.8969 25.3094Z"
                    fill="white"
                  />
                </svg>
              </div>
            </div>
            <p className="paragraph_one_style mb-2 text-[#29214B]">
              My podcast
            </p>
            <h2 className="heading_style_two mb-16 text-center text-[#29214B]">
              Stories of Transformations
            </h2>
            <ul className="home_story_tab">
              <li className="story_tab_active">Recent</li>
              <li>Inner peace</li>
              <li>Lifestyle</li>
              <li>Health</li>
              <li>Wellness</li>
            </ul>
            <ul className="home_story_section">
              {/* <li>
                <div className="home_story_img">
                  <video autoPlay loop muted>
                    <source src="https://player.vimeo.com/external/458869473.sd.mp4?s=8a12f7ccab0e8c2f76fc4d035432896a94c39867&profile_id=165&oauth2_token_id=57447761" />
                  </video>
                  <p className="home_story_number"># 01</p>
                  <div className="story_podcast">
                    <svg
                      width="36"
                      height="35"
                      viewBox="0 0 36 35"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        d="M1.35586 25.3094C0.614658 25.3094 0 24.6948 0 23.9535V10.3949C0 9.65372 0.614658 9.03906 1.35586 9.03906C2.09707 9.03906 2.71172 9.65372 2.71172 10.3949V23.9535C2.71172 24.6948 2.09707 25.3094 1.35586 25.3094Z"
                        fill="white"
                      />
                      <path
                        d="M9.49063 29.829C8.74942 29.829 8.13477 29.2143 8.13477 28.4731V5.87539C8.13477 5.13419 8.74942 4.51953 9.49063 4.51953C10.2318 4.51953 10.8465 5.13419 10.8465 5.87539V28.4731C10.8465 29.2143 10.2318 29.829 9.49063 29.829Z"
                        fill="white"
                      />
                      <path
                        d="M17.6264 34.3485C16.8852 34.3485 16.2705 33.7339 16.2705 32.9926V1.35586C16.2705 0.614658 16.8852 0 17.6264 0C18.3676 0 18.9822 0.614658 18.9822 1.35586V32.9926C18.9822 33.7339 18.3676 34.3485 17.6264 34.3485Z"
                        fill="white"
                      />
                      <path
                        d="M25.7611 29.829C25.0199 29.829 24.4053 29.2143 24.4053 28.4731V5.87539C24.4053 5.13419 25.0199 4.51953 25.7611 4.51953C26.5023 4.51953 27.117 5.13419 27.117 5.87539V28.4731C27.117 29.2143 26.5023 29.829 25.7611 29.829Z"
                        fill="white"
                      />
                      <path
                        d="M33.8969 25.3094C33.1557 25.3094 32.541 24.6948 32.541 23.9535V10.3949C32.541 9.65372 33.1557 9.03906 33.8969 9.03906C34.6381 9.03906 35.2527 9.65372 35.2527 10.3949V23.9535C35.2527 24.6948 34.6381 25.3094 33.8969 25.3094Z"
                        fill="white"
                      />
                    </svg>
                  </div>
                </div>
                <p className="paragraph_two_style text-center">
                  Episode description goes here with no more than three lines.
                </p>
              </li>
              <li>
                <div className="home_story_img">
                  <video autoPlay loop muted>
                    <source src="http://media.w3.org/2010/05/sintel/trailer.mp4" />
                  </video>
                  <p className="home_story_number"># 02</p>
                  <div className="story_podcast">
                    <svg
                      width="36"
                      height="35"
                      viewBox="0 0 36 35"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        d="M1.35586 25.3094C0.614658 25.3094 0 24.6948 0 23.9535V10.3949C0 9.65372 0.614658 9.03906 1.35586 9.03906C2.09707 9.03906 2.71172 9.65372 2.71172 10.3949V23.9535C2.71172 24.6948 2.09707 25.3094 1.35586 25.3094Z"
                        fill="white"
                      />
                      <path
                        d="M9.49063 29.829C8.74942 29.829 8.13477 29.2143 8.13477 28.4731V5.87539C8.13477 5.13419 8.74942 4.51953 9.49063 4.51953C10.2318 4.51953 10.8465 5.13419 10.8465 5.87539V28.4731C10.8465 29.2143 10.2318 29.829 9.49063 29.829Z"
                        fill="white"
                      />
                      <path
                        d="M17.6264 34.3485C16.8852 34.3485 16.2705 33.7339 16.2705 32.9926V1.35586C16.2705 0.614658 16.8852 0 17.6264 0C18.3676 0 18.9822 0.614658 18.9822 1.35586V32.9926C18.9822 33.7339 18.3676 34.3485 17.6264 34.3485Z"
                        fill="white"
                      />
                      <path
                        d="M25.7611 29.829C25.0199 29.829 24.4053 29.2143 24.4053 28.4731V5.87539C24.4053 5.13419 25.0199 4.51953 25.7611 4.51953C26.5023 4.51953 27.117 5.13419 27.117 5.87539V28.4731C27.117 29.2143 26.5023 29.829 25.7611 29.829Z"
                        fill="white"
                      />
                      <path
                        d="M33.8969 25.3094C33.1557 25.3094 32.541 24.6948 32.541 23.9535V10.3949C32.541 9.65372 33.1557 9.03906 33.8969 9.03906C34.6381 9.03906 35.2527 9.65372 35.2527 10.3949V23.9535C35.2527 24.6948 34.6381 25.3094 33.8969 25.3094Z"
                        fill="white"
                      />
                    </svg>
                  </div>
                </div>
                <p className="paragraph_two_style text-center">
                  Episode description goes here with no more than three lines.
                </p>
              </li>
              <li>
                <div className="home_story_img">
                  <video autoPlay loop muted>
                    <source src="https://player.vimeo.com/external/458879330.sd.mp4?s=b01165b44502a30f9320ebd7576469a6dbcd6159&profile_id=165&oauth2_token_id=57447761" />
                  </video>
                  <p className="home_story_number"># 03</p>
                  <div className="story_podcast">
                    <svg
                      width="36"
                      height="35"
                      viewBox="0 0 36 35"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        d="M1.35586 25.3094C0.614658 25.3094 0 24.6948 0 23.9535V10.3949C0 9.65372 0.614658 9.03906 1.35586 9.03906C2.09707 9.03906 2.71172 9.65372 2.71172 10.3949V23.9535C2.71172 24.6948 2.09707 25.3094 1.35586 25.3094Z"
                        fill="white"
                      />
                      <path
                        d="M9.49063 29.829C8.74942 29.829 8.13477 29.2143 8.13477 28.4731V5.87539C8.13477 5.13419 8.74942 4.51953 9.49063 4.51953C10.2318 4.51953 10.8465 5.13419 10.8465 5.87539V28.4731C10.8465 29.2143 10.2318 29.829 9.49063 29.829Z"
                        fill="white"
                      />
                      <path
                        d="M17.6264 34.3485C16.8852 34.3485 16.2705 33.7339 16.2705 32.9926V1.35586C16.2705 0.614658 16.8852 0 17.6264 0C18.3676 0 18.9822 0.614658 18.9822 1.35586V32.9926C18.9822 33.7339 18.3676 34.3485 17.6264 34.3485Z"
                        fill="white"
                      />
                      <path
                        d="M25.7611 29.829C25.0199 29.829 24.4053 29.2143 24.4053 28.4731V5.87539C24.4053 5.13419 25.0199 4.51953 25.7611 4.51953C26.5023 4.51953 27.117 5.13419 27.117 5.87539V28.4731C27.117 29.2143 26.5023 29.829 25.7611 29.829Z"
                        fill="white"
                      />
                      <path
                        d="M33.8969 25.3094C33.1557 25.3094 32.541 24.6948 32.541 23.9535V10.3949C32.541 9.65372 33.1557 9.03906 33.8969 9.03906C34.6381 9.03906 35.2527 9.65372 35.2527 10.3949V23.9535C35.2527 24.6948 34.6381 25.3094 33.8969 25.3094Z"
                        fill="white"
                      />
                    </svg>
                  </div>
                </div>
                <p className="paragraph_two_style text-center">
                  Episode description goes here with no more than three lines.
                </p>
              </li>
              <li>
                <div className="home_story_img">
                  <video autoPlay loop muted>
                    <source src="https://player.vimeo.com/external/458895408.sd.mp4?s=ecbec3b13a90a4f5c26eb944ad7fda439a88f1a1&profile_id=165&oauth2_token_id=57447761" />
                  </video>
                  <p className="home_story_number"># 04</p>
                  <div className="story_podcast">
                    <svg
                      width="36"
                      height="35"
                      viewBox="0 0 36 35"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        d="M1.35586 25.3094C0.614658 25.3094 0 24.6948 0 23.9535V10.3949C0 9.65372 0.614658 9.03906 1.35586 9.03906C2.09707 9.03906 2.71172 9.65372 2.71172 10.3949V23.9535C2.71172 24.6948 2.09707 25.3094 1.35586 25.3094Z"
                        fill="white"
                      />
                      <path
                        d="M9.49063 29.829C8.74942 29.829 8.13477 29.2143 8.13477 28.4731V5.87539C8.13477 5.13419 8.74942 4.51953 9.49063 4.51953C10.2318 4.51953 10.8465 5.13419 10.8465 5.87539V28.4731C10.8465 29.2143 10.2318 29.829 9.49063 29.829Z"
                        fill="white"
                      />
                      <path
                        d="M17.6264 34.3485C16.8852 34.3485 16.2705 33.7339 16.2705 32.9926V1.35586C16.2705 0.614658 16.8852 0 17.6264 0C18.3676 0 18.9822 0.614658 18.9822 1.35586V32.9926C18.9822 33.7339 18.3676 34.3485 17.6264 34.3485Z"
                        fill="white"
                      />
                      <path
                        d="M25.7611 29.829C25.0199 29.829 24.4053 29.2143 24.4053 28.4731V5.87539C24.4053 5.13419 25.0199 4.51953 25.7611 4.51953C26.5023 4.51953 27.117 5.13419 27.117 5.87539V28.4731C27.117 29.2143 26.5023 29.829 25.7611 29.829Z"
                        fill="white"
                      />
                      <path
                        d="M33.8969 25.3094C33.1557 25.3094 32.541 24.6948 32.541 23.9535V10.3949C32.541 9.65372 33.1557 9.03906 33.8969 9.03906C34.6381 9.03906 35.2527 9.65372 35.2527 10.3949V23.9535C35.2527 24.6948 34.6381 25.3094 33.8969 25.3094Z"
                        fill="white"
                      />
                    </svg>
                  </div>
                </div>
                <p className="paragraph_two_style text-center">
                  Episode description goes here with no more than three lines.
                </p>
              </li> */}
              <Transformations />
            </ul>
            <button className="tertiary_button">
              View full list of episodes
            </button>
          </div>
        </div>
      </section>

      <section className="upcoming_program">
        <div className="container mx-auto ">
          <div className="lg:grid grid-cols-2 pb-8 lg:pb-20 xxl:px-20">
            <h2 className="heading_style_two mb-8 lg:mb-0 text-[#29214B] lg:max-w-[398px] text-start  lg:text-left">
              Join me in an upcoming program
            </h2>
            <div className="flex justify-start lg:justify-end text-start">
              <p className=" max-w-xl ">
                A bit of text about the programs can go here. Lorem ipsum dolor
                sit amet, consectetur adipiscing elit, sed do eiusmod tempor
                incididunt ut labore et dolore magna aliqua. Ut enim ad minim
                veniam, quis nostrud exercitation ullamco laboris nisi ut
                aliquip ex ea commodo consequat.
              </p>
            </div>
          </div>
          <ul className="program_list xxl:px-20">
            <ProgramCards />
          </ul>
        </div>
      </section>

      <section className="news_letter_section md:px-16">
        <div className="container mx-auto">
          <div className="news_letter">
            <div className="lg:w-1/2 flex items-center z-[2]">
              <div>
                <p className="news_letter_head pb-9">News letter</p>
                <h2 className="news_letter_h2">
                  Get your monthly digest of top tips
                </h2>
                <p className="text-white text-lg font-normal pb-9 leading-7">
                  A bit about the news letter and how it works goes here can be
                  this long Lorem ipsum dolor sit amet, consectetur adipiscing
                  elit, sed do eiusmod tempor incididunt ut labore et dolore
                  magna aliqua. Ut enim ad minim veniam, quis nostrud
                  exercitation ullamco laboris nisi ut aliquip ex ea commodo
                  consequat.
                </p>
                <button className="secondary_button">See all challenges</button>
              </div>
            </div>
            <div className="news_letter_form lg:w-1/2 mt-20">
              <p className="news_letter_form_head">Join news letter</p>
              <div className="form_field">
                <label htmlFor="">Name</label>
                <input type="text" placeholder="Enter name" />
              </div>
              <div className="form_field">
                <label htmlFor="">Email address</label>
                <input type="text" placeholder="Enter email address" />
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

              <div className="flex items-center mb-7">
                <div className="checkbox-container">
                  <input
                    className="checkbox-input"
                    id="confirm_2"
                    type="checkbox"
                  />
                  <label className="checkbox" htmlFor="confirm_2">
                    <span>
                      <svg width="12px" height="10px">
                        <use xlinkHref="#check"></use>
                      </svg>
                    </span>
                    <span>
                      If you need to have a confirmation this is how it might
                      look like.
                    </span>
                  </label>
                </div>
              </div>
              <button className="primary_button w-full mb-6">Subscribe</button>
              <p className="text-sm text-[#090617] font-normal">
                *We respect your privacy you can unsubscribe anytime
              </p>
            </div>
            <Image
              src={ellipseOne}
              alt="..."
              className="news_ellipse_one right-0 hidden md:block"
            />
            <Image
              src={ellipseTwo}
              alt="..."
              className="news_ellipse_one left-0 block md:hidden"
            />
          </div>
        </div>
      </section>

      <section className="Supportive_community_section relative">
        <div className="container mx-auto">
          <p className="paragraph_one_style text-center mb-2 text-[#29214B]">
            Let’s work on it togather
          </p>
          <h2 className="heading_style_two text-center max-w-[920px] mx-auto mb-[60px] lg:mb-24 text-[#29214B]">
            Supportive community of like-minded individuals building habits
            together
          </h2>
          <div className="grid lg:grid-rows-2 lg:grid-cols-2 xl:grid-cols-3 xl:grid-flow-col xxl:px-24 gap-10 ">
            <div className="news_letter_form lg:row-span-2 border border-[#E1E1E1] bg-white">
              <p className="news_letter_form_head">
                Join the community for free!
              </p>
              <div className="form_field">
                <label htmlFor="">Name</label>
                <input type="text" placeholder="Enter name" />
              </div>
              <div className="form_field">
                <label htmlFor="">Email address</label>
                <input type="text" placeholder="Enter email address" />
              </div>
              <div className="flex items-center mb-7">
                <div className="checkbox-container">
                  <input
                    className="checkbox-input"
                    id="confirm_1"
                    type="checkbox"
                  />
                  <label className="checkbox" htmlFor="confirm_1">
                    <span>
                      <svg width="12px" height="10px">
                        <use xlinkHref="#check"></use>
                      </svg>
                    </span>
                    <span>
                      If you need to have a confirmation this is how it might
                      look like.
                    </span>
                  </label>
                </div>
              </div>
              <button className="primary_button w-full mb-6">Subscribe</button>
              <p className="text-sm text-[#090617] font-normal">
                *We respect your privacy you can unsubscribe anytime
              </p>
            </div>
            <div className="rounded-[20px] overflow-hidden border border-[#E1E1E1] lg:row-span-2 bg-white flex flex-col justify-between">
              <div>
                <div className="masterclass_img">
                  <Image src={masterclassimg} alt="..." />
                </div>
                <div className="p-8 bg-white">
                  <p className="heading_three_style">
                    Weekly community only meditation session
                  </p>
                  {/* <p className="masterclass_des">A bit of text about the program can go here. all the way until here, with a bit more here and here and there everywhere. oh and also here and here and ya you guessed it here.</p> */}
                  <ul className="flex items-center mt-9 flex-wrap">
                    <li className="flex items-center  w-1/2 mb-6">
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
                        <p>Start date</p>
                        <p>14th April</p>
                      </div>
                    </li>
                    <li className="flex items-center  w-1/2 mb-6">
                      <div className="program_icon">
                        <svg
                          width="32"
                          height="32"
                          viewBox="0 0 32 32"
                          fill="none"
                          xmlns="http://www.w3.org/2000/svg"
                        >
                          <path
                            d="M21.88 23.72L23.68 21.92L17.32 15.52V7.48H14.92V16.48L21.88 23.72ZM16 32C13.8133 32 11.7467 31.58 9.8 30.74C7.85333 29.9 6.15333 28.7533 4.7 27.3C3.24667 25.8467 2.1 24.1467 1.26 22.2C0.42 20.2533 0 18.1867 0 16C0 13.8133 0.42 11.7467 1.26 9.8C2.1 7.85333 3.24667 6.15333 4.7 4.7C6.15333 3.24667 7.85333 2.1 9.8 1.26C11.7467 0.42 13.8133 0 16 0C18.1867 0 20.2533 0.42 22.2 1.26C24.1467 2.1 25.8467 3.24667 27.3 4.7C28.7533 6.15333 29.9 7.85333 30.74 9.8C31.58 11.7467 32 13.8133 32 16C32 18.1867 31.58 20.2533 30.74 22.2C29.9 24.1467 28.7533 25.8467 27.3 27.3C25.8467 28.7533 24.1467 29.9 22.2 30.74C20.2533 31.58 18.1867 32 16 32ZM16 29.6C19.7333 29.6 22.9333 28.2667 25.6 25.6C28.2667 22.9333 29.6 19.7333 29.6 16C29.6 12.2667 28.2667 9.06667 25.6 6.4C22.9333 3.73333 19.7333 2.4 16 2.4C12.2667 2.4 9.06667 3.73333 6.4 6.4C3.73333 9.06667 2.4 12.2667 2.4 16C2.4 19.7333 3.73333 22.9333 6.4 25.6C9.06667 28.2667 12.2667 29.6 16 29.6Z"
                            fill="#C50019"
                          />
                        </svg>
                      </div>
                      <div className="program_time">
                        <p>Timing</p>
                        <p>5-6 PM</p>
                      </div>
                    </li>
                    <li className="flex items-center  w-1/2 mb-6">
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
                        <p>Duration</p>
                        <p>14 days</p>
                      </div>
                    </li>
                    <li className="flex items-center  w-1/2 mb-6">
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
                        <p>1English</p>
                      </div>
                    </li>
                  </ul>
                </div>
              </div>
              {/* <ul className="flex items-center mt-4">
                  <li className="flex items-center md:mr-11 lg:mr-3 xl:mr-8 w-1/2 md:w-auto">
                    <div className="program_icon">
                    <svg width="28" height="32" viewBox="0 0 28 32" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <path d="M9.15375 2.28844V0H18.3075V2.28844H9.15375ZM12.5864 19.3373H14.8749V10.565H12.5864V19.3373ZM13.7306 32C11.849 32 10.0755 31.6377 8.41001 30.913C6.74454 30.1883 5.28884 29.203 4.04291 27.9571C2.79698 26.7112 1.81168 25.2555 1.08701 23.59C0.362336 21.9245 0 20.151 0 18.2694C0 16.3878 0.362336 14.6142 1.08701 12.9487C1.81168 11.2833 2.79698 9.82757 4.04291 8.58165C5.28884 7.33572 6.74454 6.35042 8.41001 5.62574C10.0755 4.90107 11.849 4.53874 13.7306 4.53874C15.4342 4.53874 17.0362 4.82479 18.5364 5.3969C20.0366 5.96901 21.3715 6.76361 22.5411 7.78069L24.4863 5.83552L26.0882 7.43743L24.143 9.3826C25.0584 10.3997 25.8403 11.6329 26.4887 13.0822C27.1371 14.5316 27.4613 16.2606 27.4613 18.2694C27.4613 20.151 27.0989 21.9245 26.3743 23.59C25.6496 25.2555 24.6643 26.7112 23.4184 27.9571C22.1724 29.203 20.7167 30.1883 19.0513 30.913C17.3858 31.6377 15.6122 32 13.7306 32ZM13.7306 29.7116C16.909 29.7116 19.6106 28.5991 21.8355 26.3743C24.0604 24.1494 25.1728 21.4478 25.1728 18.2694C25.1728 15.091 24.0604 12.3894 21.8355 10.1645C19.6106 7.93961 16.909 6.82717 13.7306 6.82717C10.5522 6.82717 7.85062 7.93961 5.62574 10.1645C3.40087 12.3894 2.28844 15.091 2.28844 18.2694C2.28844 21.4478 3.40087 24.1494 5.62574 26.3743C7.85062 28.5991 10.5522 29.7116 13.7306 29.7116Z" fill="#C50019"/>
                    </svg>
                    </div>
                    <div className="program_time">
                      <p>Duration</p>
                      <p>14 days</p>
                    </div>
                  </li>
                  <li className="flex items-center md:mr-11 lg:mr-3 xl:mr-8 w-1/2 md:w-auto">
                    <div className="program_icon">
                    <svg width="32" height="32" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <path d="M16 32C13.76 32 11.6667 31.58 9.72 30.74C7.77333 29.9 6.08 28.76 4.64 27.32C3.2 25.88 2.06667 24.18 1.24 22.22C0.413334 20.26 0 18.16 0 15.92C0 13.68 0.413334 11.5933 1.24 9.66C2.06667 7.72667 3.2 6.04 4.64 4.6C6.08 3.16 7.77333 2.03333 9.72 1.22C11.6667 0.406667 13.76 0 16 0C18.24 0 20.3333 0.406667 22.28 1.22C24.2267 2.03333 25.92 3.16 27.36 4.6C28.8 6.04 29.9333 7.72667 30.76 9.66C31.5867 11.5933 32 13.68 32 15.92C32 18.16 31.5867 20.26 30.76 22.22C29.9333 24.18 28.8 25.88 27.36 27.32C25.92 28.76 24.2267 29.9 22.28 30.74C20.3333 31.58 18.24 32 16 32ZM16 29.68C16.9333 28.72 17.7133 27.62 18.34 26.38C18.9667 25.14 19.48 23.6667 19.88 21.96H12.16C12.5333 23.56 13.0333 25 13.66 26.28C14.2867 27.56 15.0667 28.6933 16 29.68ZM12.6 29.2C11.9333 28.1867 11.36 27.0933 10.88 25.92C10.4 24.7467 10 23.4267 9.68 21.96H3.68C4.69333 23.8533 5.86667 25.34 7.2 26.42C8.53333 27.5 10.3333 28.4267 12.6 29.2ZM19.44 29.16C21.36 28.5467 23.0867 27.6267 24.62 26.4C26.1533 25.1733 27.3867 23.6933 28.32 21.96H22.36C22.0133 23.4 21.6067 24.7067 21.14 25.88C20.6733 27.0533 20.1067 28.1467 19.44 29.16ZM2.88 19.56H9.24C9.16 18.84 9.11333 18.1933 9.1 17.62C9.08667 17.0467 9.08 16.48 9.08 15.92C9.08 15.2533 9.09333 14.66 9.12 14.14C9.14667 13.62 9.2 13.04 9.28 12.4H2.88C2.69333 13.04 2.56667 13.6133 2.5 14.12C2.43333 14.6267 2.4 15.2267 2.4 15.92C2.4 16.6133 2.43333 17.2333 2.5 17.78C2.56667 18.3267 2.69333 18.92 2.88 19.56ZM11.72 19.56H20.32C20.4267 18.7333 20.4933 18.06 20.52 17.54C20.5467 17.02 20.56 16.48 20.56 15.92C20.56 15.3867 20.5467 14.8733 20.52 14.38C20.4933 13.8867 20.4267 13.2267 20.32 12.4H11.72C11.6133 13.2267 11.5467 13.8867 11.52 14.38C11.4933 14.8733 11.48 15.3867 11.48 15.92C11.48 16.48 11.4933 17.02 11.52 17.54C11.5467 18.06 11.6133 18.7333 11.72 19.56ZM22.72 19.56H29.12C29.3067 18.92 29.4333 18.3267 29.5 17.78C29.5667 17.2333 29.6 16.6133 29.6 15.92C29.6 15.2267 29.5667 14.6267 29.5 14.12C29.4333 13.6133 29.3067 13.04 29.12 12.4H22.76C22.84 13.3333 22.8933 14.0467 22.92 14.54C22.9467 15.0333 22.96 15.4933 22.96 15.92C22.96 16.5067 22.94 17.06 22.9 17.58C22.86 18.1 22.8 18.76 22.72 19.56ZM22.32 10H28.32C27.44 8.16 26.2333 6.62667 24.7 5.4C23.1667 4.17333 21.4 3.30667 19.4 2.8C20.0667 3.78667 20.6333 4.85333 21.1 6C21.5667 7.14667 21.9733 8.48 22.32 10ZM12.16 10H19.92C19.6267 8.58667 19.1333 7.22 18.44 5.9C17.7467 4.58 16.9333 3.41333 16 2.4C15.1467 3.12 14.4267 4.06667 13.84 5.24C13.2533 6.41333 12.6933 8 12.16 10ZM3.68 10H9.72C10.0133 8.56 10.3867 7.27333 10.84 6.14C11.2933 5.00667 11.8667 3.90667 12.56 2.84C10.56 3.34667 8.81333 4.2 7.32 5.4C5.82667 6.6 4.61333 8.13333 3.68 10Z" fill="#C50019"/>
                    </svg>
                    </div>
                    <div className="program_time">
                      <p>Language </p>
                      <p>1English</p>
                    </div>
                  </li>
                </ul> */}
              <div className="flex justify-between pt-6 border-t border-[#E1E1E1] mt-10 p-8 bg-white">
                <p className="text-[#EB334A] text-[21px] font-bold">Free</p>
                <a
                  href=""
                  className="flex items-center text-[#4086FF] font-semibold tracking-widest"
                >
                  Register now
                  <svg
                    width="8"
                    height="13"
                    className="ml-2"
                    viewBox="0 0 8 13"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M1.3748 13.0002L0.299805 11.9252L5.2498 6.9752L0.299805 2.0252L1.3748 0.950195L7.3998 6.9752L1.3748 13.0002Z"
                      fill="#4086FF"
                    />
                  </svg>
                </a>
              </div>
            </div>
            <div className="p-8 border border-[#E1E1E1] rounded-[20px] bg-white relative overflow-hidden">
              <h4 className="heading_three_style mb-2">Knowledge</h4>
              <p>
                Joining a community focused on habit-building and mental health
                facilitates knowledge and resource exchange, where members can
                share valuable insights, tips, and strategies to optimize their
                personal growth journey.
              </p>
              <div className="absolute right-0 top-0 bg-[#EB334A] h-16 w-16 rounded-s-full rounded-br-full flex items-center justify-center">
                <svg
                  width="24"
                  height="24"
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
            <div className="p-8 border border-[#E1E1E1] rounded-[20px] bg-white relative overflow-hidden">
              <h4 className="heading_three_style mb-2">Support</h4>
              <p>
                A community of like-minded individuals provides accountability,
                encouragement, and motivation to help members stick to positive
                habits and overcome challenges, promoting personal growth.
              </p>
              <div className="absolute right-0 top-0 bg-[#EB334A] h-16 w-16 rounded-s-full rounded-br-full flex items-center justify-center">
                <svg
                  width="24"
                  height="24"
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
        </div>
        <div className="absolute left-0 top-[30%] w-full -z-50 hidden lg:block">
          <Image className="w-full" src={supportive_banner} alt=".." />
        </div>
      </section>

      <section className="testimonial_section">
        <h2 className="heading_style_two text-center text-[#29214B] mb-20">
          What people say
        </h2>
        <TestimonialCarousel />
      </section>

      <Footer />
    </>
  );
};

export default Main;
