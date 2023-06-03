import React from "react";
import "./podcast.css";
import "../styles/main.css";
import Image from "next/image";
import rightCircle from "../../Assets/icons/Ellipse 24 (Stroke).png";
import podcastBanner from "../../Assets/Images/pageImages/podcast_banner.png";
import spotify from "../../Assets/Images/pageImages/spotify.png";
import Footer from "@/app/components/footer/Footer";

const page = () => {
  return (
    <>
      <div className="podcast_back">
        <section className="md:pt-6 md:pb-20  banner md:px-16">
          <div
            className="about_banner bg-center mx-auto"
            style={{ backgroundImage: `url(${podcastBanner.src})` }}
          >
            <Image className="main-right-circle" src={rightCircle} alt=".." />
            <div className="absolute bottom-0 left-0 lg:flex items-center pl-6 lg:pl-[90px] pb-8 lg:pb-14 z-[2]">
              <div className="h-20 w-20 lg:h-[132px] lg:w-[132px] bg-[#29214B] rounded-[50%] mb-4 lg:mb-0 flex items-center justify-center">
                <svg
                  className="h-[42px] w-[43px] lg:w-[73px] lg:h-[71px]"
                  viewBox="0 0 73 71"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M3.21633 51.8597C1.71112 51.8597 0.462891 50.6115 0.462891 49.1062V21.5718C0.462891 20.0666 1.71112 18.8184 3.21633 18.8184C4.72155 18.8184 5.96978 20.0666 5.96978 21.5718V49.1062C5.96978 50.6115 4.72155 51.8597 3.21633 51.8597Z"
                    fill="white"
                  />
                  <path
                    d="M19.7359 61.0373C18.2306 61.0373 16.9824 59.789 16.9824 58.2838V12.3931C16.9824 10.8879 18.2306 9.63965 19.7359 9.63965C21.2411 9.63965 22.4893 10.8879 22.4893 12.3931V58.2838C22.4893 59.789 21.2411 61.0373 19.7359 61.0373Z"
                    fill="white"
                  />
                  <path
                    d="M36.2593 70.2158C34.7541 70.2158 33.5059 68.9676 33.5059 67.4624V3.21536C33.5059 1.71014 34.7541 0.461914 36.2593 0.461914C37.7645 0.461914 39.0127 1.71014 39.0127 3.21536V67.4624C39.0127 68.9676 37.7645 70.2158 36.2593 70.2158Z"
                    fill="white"
                  />
                  <path
                    d="M52.7788 61.0373C51.2736 61.0373 50.0254 59.789 50.0254 58.2838V12.3931C50.0254 10.8879 51.2736 9.63965 52.7788 9.63965C54.284 9.63965 55.5323 10.8879 55.5323 12.3931V58.2838C55.5323 59.789 54.284 61.0373 52.7788 61.0373Z"
                    fill="white"
                  />
                  <path
                    d="M69.3003 51.8597C67.7951 51.8597 66.5469 50.6115 66.5469 49.1062V21.5718C66.5469 20.0666 67.7951 18.8184 69.3003 18.8184C70.8055 18.8184 72.0538 20.0666 72.0538 21.5718V49.1062C72.0538 50.6115 70.8055 51.8597 69.3003 51.8597Z"
                    fill="white"
                  />
                </svg>
              </div>
              <p className="podcast_head">Stories of Transformations</p>
            </div>
          </div>
        </section>

        <section className="pt-24 pb-16 lg:py-36 container mx-auto">
          <div className="grid lg:grid-cols-2 gap-[73px] lg:px-20">
            <div>
              <p className="paragraph_one_style mb-2">
                Listen to the latest episod
              </p>
              <h2 className="heading_style_two mb-6">Episode #08 Title here</h2>
              <p className="paragraph_two_style">
                In this podcast episode, Mayuri explores the topic of wellbeing,
                discussing various strategies and practices that can help
                individuals enhance their overall sense of mental, physical, and
                emotional health. Drawing on expert insights and personal
                experiences, the episode delves into topics such as mindfulness,
                self-care, exercise, and social connection, offering practical
                tips and advice for listeners looking to improve their
                wellbeing.
              </p>
            </div>
            <div>
              <Image src={spotify} alt=".." />
            </div>
          </div>
        </section>
      </div>

      <section className="pb-24 lg:pb-60 pt-24">
        <div className="container mx-auto">
          <div className="lg:px-20">
            <ul className="home_story_tab">
              <li className="story_tab_active">Recent</li>
              <li>Inner peace</li>
              <li>Lifestyle</li>
              <li>Health</li>
              <li>Wellness</li>
            </ul>
            <ul className="home_story_section">
              <li>
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
              </li>
              <li>
                <div className="home_story_img">
                  <video autoPlay loop muted>
                    <source src="https://player.vimeo.com/external/458869473.sd.mp4?s=8a12f7ccab0e8c2f76fc4d035432896a94c39867&profile_id=165&oauth2_token_id=57447761" />
                  </video>
                  <p className="home_story_number"># 05</p>
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
                    <source src="https://player.vimeo.com/external/458869473.sd.mp4?s=8a12f7ccab0e8c2f76fc4d035432896a94c39867&profile_id=165&oauth2_token_id=57447761" />
                  </video>
                  <p className="home_story_number"># 06</p>
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
                    <source src="https://player.vimeo.com/external/458869473.sd.mp4?s=8a12f7ccab0e8c2f76fc4d035432896a94c39867&profile_id=165&oauth2_token_id=57447761" />
                  </video>
                  <p className="home_story_number"># 07</p>
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
                    <source src="https://player.vimeo.com/external/458869473.sd.mp4?s=8a12f7ccab0e8c2f76fc4d035432896a94c39867&profile_id=165&oauth2_token_id=57447761" />
                  </video>
                  <p className="home_story_number"># 08</p>
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
                    <source src="https://player.vimeo.com/external/458869473.sd.mp4?s=8a12f7ccab0e8c2f76fc4d035432896a94c39867&profile_id=165&oauth2_token_id=57447761" />
                  </video>
                  <p className="home_story_number"># 09</p>
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
                    <source src="https://player.vimeo.com/external/458869473.sd.mp4?s=8a12f7ccab0e8c2f76fc4d035432896a94c39867&profile_id=165&oauth2_token_id=57447761" />
                  </video>
                  <p className="home_story_number"># 10</p>
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
                    <source src="https://player.vimeo.com/external/458869473.sd.mp4?s=8a12f7ccab0e8c2f76fc4d035432896a94c39867&profile_id=165&oauth2_token_id=57447761" />
                  </video>
                  <p className="home_story_number"># 11</p>
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
                    <source src="https://player.vimeo.com/external/458869473.sd.mp4?s=8a12f7ccab0e8c2f76fc4d035432896a94c39867&profile_id=165&oauth2_token_id=57447761" />
                  </video>
                  <p className="home_story_number"># 12</p>
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
            </ul>
          </div>
        </div>
      </section>
      <Footer />
    </>
  );
};

export default page;
