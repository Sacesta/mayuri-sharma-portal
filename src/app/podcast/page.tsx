import React from 'react';
import '@/styles/main.css';
import Image from 'next/image';
import rightCircle from '@/Assets/icons/Ellipse 24 (Stroke).png';
import bannerImage from '@/Assets/Images/pageImages/profileImage.jpg';
import HeroTestimonial from '@/components/Carousel/HeroTestimonial';

import Footer from '@/components/footer/Footer';
import CategoryTabs from '@/components/CategoryTabs/CategoryTabs';
import SpotifyCard from '@/components/CategoryTabs/SpotifyCard';
import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Podcasts',
  description:
    'Listen to the latest episode. In this podcast episode, Mayuri explores the topic of wellbeing, discussing various strategies and practices that can help individuals enhance their overall sense of mental, physical, and emotional health. Drawing on expert insights and personal experiences, the episode delves into topics such as mindfulness, self-care, exercise, and social connection, offering practical tips and advice for listeners looking to improve their wellbeing.',
  alternates: {
    canonical: 'https://mayuri-sharma-portal.vercel.app/podcast',
  },
  openGraph: {
    title: 'Podcasts',
    description:
      'Listen to the latest episode. In this podcast episode, Mayuri explores the topic of wellbeing, discussing various strategies and practices that can help individuals enhance their overall sense of mental, physical, and emotional health. Drawing on expert insights and personal experiences, the episode delves into topics such as mindfulness, self-care, exercise, and social connection, offering practical tips and advice for listeners looking to improve their wellbeing.',
    url: `https://mayuri-sharma-portal.vercel.app/podcast`,
    siteName: 'Mayuri-Sharma-Portal',
    type: 'website',
  },
};

const page = () => {
  return (
    <>
      <div className="podcast_back">
        <section className="md:pt-9 md:pb-20  commonbanner banner md:px-4 xl:px-16">
          <div className="about_banner bg-center mx-auto relative">
            <div className="font-[400] text-white z-10 absolute bottom-10 left-10">
              <p className="text-[80px] leading-none">In momentum</p>
              <p className="text-[25px] ">With Mayuri</p>
            </div>
            <div className=" absolute top-28 0 z-50 right-10">
              <Image
                src={bannerImage}
                alt="banner_image"
                width={0}
                height={0}
                sizes="100%"
                className=" h-full w-full"
              />
            </div>
          </div>
        </section>

        <section className="pt-24 pb-16 lg:py-16 container mx-auto">
          <div className="grid lg:grid-cols-2 gap-[73px]">
            <div>
              <p className="paragraph_one_style mb-2">
                Listen to the latest episode
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
