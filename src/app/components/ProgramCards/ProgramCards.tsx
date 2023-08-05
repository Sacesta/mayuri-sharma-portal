"use client";

import Image from "next/image";
import Link from "next/link";
import React, { useEffect, useState } from "react";
import programeone from "../../../Assets/Images/pageImages/program_img_1.png";
import { Program, getPrograms } from "@/services/Program.services";
import { format } from "date-fns";

const ProgramCards = () => {
  const [programs, setPrograms] = useState<Program[]>([]);

  useEffect(() => {
    const fetchProgramsData = async () => {
      try {
        const res: any = await getPrograms();
        setPrograms(res?.data || []);
      } catch (error) {
        console.log("Error fetching the programs");
      }
    };
    fetchProgramsData();
  }, []);

  console.log(programs);

  const array = [1, 2, 3];
  return (
    <>
      {programs?.map((program: Program, index: any) => (
        <li key={`programitem-${index}`} className="program_list_li">
          <div className="program_img">
            <Image src={programeone} alt="program..." />
          </div>
          <div className="program_details">
            <div className="flex justify-between items-center mb-2">
              <p className="heading_three_style">{program?.title}</p>
              <p className="heading_three_style hidden lg:block">
                € {program?.price}
              </p>
            </div>
            <p className="program_description">{program?.description}</p>
            <ul className="flex items-center flex-wrap lg:flex-auto">
              <li className="flex items-center mb-5 xl:mb-0 lg:mr-8 xxl:mr-11 w-1/2 lg:w-auto">
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
                  <p>{format(new Date(program?.sdate), "do MMMM")}</p>
                </div>
              </li>
              <li className="flex items-center mb-5 xl:mb-0 lg:mr-8 xxl:mr-11 w-1/2 lg:w-auto">
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
                  <p>End date</p>
                  <p>{format(new Date(program?.edate), "do MMMM")}</p>
                </div>
              </li>
              <li className="flex items-center mb-5 xl:mb-0 lg:mr-8 xxl:mr-11 w-1/2 lg:w-auto">
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
                  <p>Duration</p>
                  <p>{program?.duration}</p>
                </div>
              </li>
              <li className="flex items-center mb-5 xl:mb-0 lg:mr-8 xxl:mr-11 w-1/2 lg:w-auto">
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
                  <p>Language</p>
                  <p>{program?.language}</p>
                </div>
              </li>
            </ul>
            <div className="flex justify-between items-center pt-6 border-t border-[#E1E1E1] mt-4 lg:hidden">
              <p className="heading_three_style">€ 100</p>
              <Link
                href="/programdetails"
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
              </Link>
            </div>
          </div>
          <Link href="/programdetails" className="program_register">
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
          </Link>
        </li>
      ))}
    </>
  );
};

export default ProgramCards;
