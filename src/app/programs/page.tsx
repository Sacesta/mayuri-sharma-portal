import React from 'react';
import '@/styles/main.css';
import Image from 'next/image';
import rightCircle from '@/Assets/icons/Ellipse 24 (Stroke).png';
// import bg from "@/Assets/Images/pageImages/w_m_1.jpg";
import ellipseOne from '@/Assets/Images/pageImages/Ellipse_one.png';
import ellipseTwo from '@/Assets/Images/pageImages/news_ellipse_two.png';
import TestimonialCarousel from '@/components/Carousel/TestimonialCarousel';
import Footer from '@/components/footer/Footer';
import ProgramCards from '@/components/ProgramCards/ProgramCards';
import flowerPetal from "@/Assets/svg/doubleflowepetal.svg";
import threeflower from "@/Assets/svg/threewhiteflower.svg"


import websiteData from '../../Data/websiteData.json';
import MainNewsLetter from '@/components/NewsLetters/MainNewsLetter';
import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Programs',
  description:
    'An antidote to modern-day stressors, these programs invite you to centre yourself with holistic healing practices inspired from ancient Indian wisdom.',
  alternates: {
    canonical: 'https://mayuri-sharma-portal.vercel.app/programs',
  },
  openGraph: {
    title: 'Programs',
    description:
      'An antidote to modern-day stressors, these programs invite you to centre yourself with holistic healing practices inspired from ancient Indian wisdom.',
    url: `https://mayuri-sharma-portal.vercel.app/programs`,
    siteName: 'Mayuri-Sharma-Portal',
    type: 'website',
  },
};

const page = async () => {
  const { programsPage } = websiteData;

  const { bodyCopy, scroll2, scroll3 } = programsPage;

  return (
    <>
      <section className="md:pt-9 md:pb-20 commonbanner banner md:px-4 xl:px-16">
        <div
          className="program_banner relative !bg-custom-gradient lg:bg-right flex !items-center !justify-center"
        
        >
          {/* <Image className="main-right-circle" src={rightCircle} alt=".." /> */}
        
          <div className="container  z-10  max-w-[896px] mx-auto  ">
          <Image
                src={flowerPetal}
                alt="flower_petals"
                className="w-[135.18] h-[20px]   !text-white"
              />
            <p className="about_head !pb-0 ml-8 max-sm:!text-lg !leading-[60.95px]">Explore the secrets of your breath and experience deep meditation.</p>
          </div>
          <Image
                src={threeflower}
                alt="flower_petals"
                className="w-[66.18] h-[40.04px] absolute right-[29.74px] bottom-[27.94px]  !text-white"
              />
        </div>
      </section>

      <section className="upcoming_program programs">
        <div className="container mx-auto ">
          <div className="lg:grid pb-8 lg:pb-20">
            <p className="">{bodyCopy}</p>
          </div>

          <ul className="program_list ">
            <ProgramCards />
          </ul>
        </div>
      </section>

      <section className="news_letter_section programs_news md:px-6 lg:px-16">
        <div className="news_letter">
          <div className="container mx-auto lg:flex justify-between">
            <div className="lg:w-1/2 flex items-center z-[2]">
              <div>
                <p className="news_letter_head pb-9">News letter</p>
                <h2 className="news_letter_h2">{scroll2.headline}</h2>
                <p className="text-white text-lg font-normal pb-9 leading-7">
                  {scroll2.bodyCopy}
                </p>
                {/* <button className="secondary_button">{scroll2.cta}</button> */}
              </div>
            </div>
            {/* <div className="news_letter_form lg:w-1/2 mt-28">
              <p className="news_letter_form_head">Join news letter</p>
              <div className="form_field">
                <label htmlFor="">Name</label>
                <input type="text" placeholder="Enter name" />
              </div>
              <div className="form_field">
                <label htmlFor="">Email address</label>
                <input type="text" placeholder="Enter email address" />
              </div>
              <div className="flex items-center mb-7">
                <label className="customize_checkbox">
                  <input type="checkbox" />
                  <span className="checkmark"></span>
                </label>
                <p className="checkbox_label">
                  If you need to have a confirmation this is how it might look
                  like.
                </p>
              </div>
              <button className="primary_button w-full mb-6">Subscribe</button>
              <p className="text-sm text-[#090617] font-normal">
                *We respect your privacy you can unsubscribe anytime
              </p>
            </div> */}
            <MainNewsLetter />
            <Image
              src={ellipseOne}
              alt="..."
              className="news_ellipse_one right-0 hidden md:block"
            />
            <Image
              src={ellipseTwo}
              alt="..."
              className="news_ellipse_one left-0 block md:hidden w-full object-cover"
            />
          </div>
        </div>
      </section>
{/* 
      <section className="testimonial_section">
        <h2 className="heading_style_two text-center text-[#29214B] mb-20">
          {scroll3.headline}
        </h2>
        <TestimonialCarousel />
      </section> */}

      <Footer />
    </>
  );
};

export default page;
