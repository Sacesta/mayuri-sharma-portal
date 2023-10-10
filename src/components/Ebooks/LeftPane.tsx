"use client";

import React from "react";
import Pagination from "../Pagination/Pagination";
import Image from "next/image";

const LeftPane = ({ currentPage }: { currentPage: number }) => {
  const itemPerPage = 6;
  const startIndex = (currentPage - 1) * itemPerPage;
  const endingIndex = itemPerPage * currentPage;
  const itemsToDisplay = [
    {
      id: 1,
      title: "Ebook Title 1",
      category: "Category 1",
      description: "Description of Ebook 1.",
    },
    {
      id: 2,
      title: "Ebook Title 2",
      category: "Category 2",
      description: "Description of Ebook 2.",
    },
    {
      id: 3,
      title: "Ebook Title 3",
      category: "Category 1",
      description: "Description of Ebook 3.",
    },
    {
      id: 4,
      title: "Ebook Title 4",
      category: "Category 2",
      description: "Description of Ebook 4.",
    },
    {
      id: 5,
      title: "Ebook Title 5",
      category: "Category 3",
      description: "Description of Ebook 5.",
    },
    {
      id: 6,
      title: "Ebook Title 6",
      category: "Category 3",
      description: "Description of Ebook 6.",
    },
    {
      id: 7,
      title: "Ebook Title 7",
      category: "Category 1",
      description: "Description of Ebook 7.",
    },
    {
      id: 8,
      title: "Ebook Title 8",
      category: "Category 2",
      description: "Description of Ebook 8.",
    },
    {
      id: 9,
      title: "Ebook Title 9",
      category: "Category 3",
      description: "Description of Ebook 9.",
    },
    {
      id: 10,
      title: "Ebook Title 10",
      category: "Category 1",
      description: "Description of Ebook 10.",
    },
    {
      id: 11,
      title: "Ebook Title 11",
      category: "Category 2",
      description: "Description of Ebook 11.",
    },
    {
      id: 12,
      title: "Ebook Title 12",
      category: "Category 3",
      description: "Description of Ebook 12.",
    },
    {
      id: 13,
      title: "Ebook Title 13",
      category: "Category 1",
      description: "Description of Ebook 13.",
    },
    {
      id: 14,
      title: "Ebook Title 14",
      category: "Category 2",
      description: "Description of Ebook 14.",
    },
    {
      id: 15,
      title: "Ebook Title 15",
      category: "Category 3",
      description: "Description of Ebook 15.",
    },
    {
      id: 16,
      title: "Ebook Title 16",
      category: "Category 1",
      description: "Description of Ebook 16.",
    },
    {
      id: 17,
      title: "Ebook Title 17",
      category: "Category 2",
      description: "Description of Ebook 17.",
    },
    {
      id: 18,
      title: "Ebook Title 18",
      category: "Category 3",
      description: "Description of Ebook 18.",
    },
    {
      id: 19,
      title: "Ebook Title 19",
      category: "Category 1",
      description: "Description of Ebook 19.",
    },
    {
      id: 20,
      title: "Ebook Title 20",
      category: "Category 2",
      description: "Description of Ebook 20.",
    },
  ].slice(startIndex, endingIndex);

  return (
    <>
      <section className="w-full md:w-[70%] mt-10">
        <div
          className="About px-5"
          style={{ fontFamily: "var(--font-montserrat)" }}
        >
          <h1 className="text-4xl underline-offset-4 underline">
            About the Ebooks
          </h1>
          <p className="mt-2 font-light text-gray-700">
            Embark on a transformative inner journey with Mayuri Sharmas
            collection of insightful ebooks. In the pages of these digital
            tomes, youll find the keys to unlocking your inner potential,
            fostering personal growth, and embracing a life filled with purpose
            and meaning.
          </p>
          <br />
          <p className="mt-2 font-light text-gray-700">
            Mayuri Sharma, a seasoned author and guide, invites you to delve
            into the profound realm of self-discovery and empowerment. Through
            her ebooks, she provides valuable insights, practical wisdom, and
            inspirational narratives that can act as your companions on your
            inner journey.
          </p>
        </div>
        <div className="ebooks mt-10">
          <h2 className="text-3xl text-center">Mayuri Sharma Ebooks</h2>
          <section className="text-gray-600 body-font px-3">
            <div className="container px-5 py-24 mx-auto">
              <div className="flex flex-wrap -m-4">
                {itemsToDisplay.map((item: any, i) => {
                  return (
                    <div key={i} className="p-4 md:w-1/3">
                      <div className="h-full border-2 border-gray-200 border-opacity-60 rounded-lg overflow-hidden">
                        <Image
                          width={0}
                          height={0}
                          sizes="100vw"
                          className="lg:h-48 md:h-36 w-full object-cover object-center"
                          src="https://dummyimage.com/720x400"
                          alt="blog"
                        />
                        <div className="p-6">
                          <h2 className="tracking-widest text-xs title-font font-medium text-gray-400 mb-1">
                            {item.category} {item.id}
                          </h2>
                          <h1 className="title-font text-lg font-medium text-gray-900 mb-3">
                            {item.title}
                          </h1>
                          <p className="leading-relaxed mb-3">
                            {item.description}
                          </p>
                          <div className="flex items-center flex-wrap ">
                            <a className="text-[#EB334A] inline-flex items-center md:mb-2 lg:mb-0">
                              Download
                              <svg
                                className="w-4 h-4 ml-2"
                                viewBox="0 0 24 24"
                                stroke="currentColor"
                                strokeWidth={2}
                                fill="none"
                                strokeLinecap="round"
                                strokeLinejoin="round"
                              >
                                <path d="M5 12h14" />
                                <path d="M12 5l7 7-7 7" />
                              </svg>
                            </a>
                          </div>
                        </div>
                      </div>
                    </div>
                  );
                })}
              </div>
              <Pagination currentPage={currentPage} />
            </div>
          </section>
        </div>
      </section>
    </>
  );
};

export default LeftPane;
