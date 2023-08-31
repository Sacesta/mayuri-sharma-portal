import React from "react";
// import "./podcast.css";
import "@/styles/main.css";
import Image from "next/image";
import rightCircle from "@/Assets/icons/Ellipse 24 (Stroke).png";
import podcastBanner from "@/Assets/Images/pageImages/podcast_banner.png";
import spotify from "@/Assets/Images/pageImages/spotify.png";
import Footer from "@/components/footer/Footer";
import CategoryTabs from "@/components/CategoryTabs/CategoryTabs";
import SpotifyCard from "@/components/CategoryTabs/SpotifyCard";

const page = () => {
  return (
    <>
      <div className="podcast_back">
        <section className="md:pt-9 md:pb-20 commonbanner banner md:px-4 xl:px-16">
          <div
            className="about_banner bg-center mx-auto"
            style={{ backgroundImage: `url(${podcastBanner.src})` }}
          >
            <Image className="main-right-circle" src={rightCircle} alt=".." />
            <div className="container mx-auto z-10">
              <div className="lg:flex items-center pb-8 lg:pb-14 ">
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
          </div>
        </section>

        <section className="pt-24 pb-16 lg:py-16 container mx-auto">
          <div className="grid lg:grid-cols-2 gap-[73px]">
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
            <div className="flex justify-center">
              <SpotifyCard />
            </div>
          </div>
        </section>
      </div>

      <section className="pb-24 lg:pb-60 pt-16 lg:pt-24">
        <div className="container mx-auto">
          <CategoryTabs />
        </div>
      </section>
      <Footer />
    </>
  );
};

export default page;
