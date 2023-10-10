"use client";

import React from "react";

import "./Dropdown.css";
import Link from "next/link";

const Dropdown = ({ device }: any) => {
  return (
    <>
      {device === "desktop" ? (
        <div className="dropdown group inline-block text-[#505050] relative transition delay-700 duration-300">
          <button className="outline-none focus:outline-none  px-3  bg-white rounded-sm flex items-center min-w-32">
            <span className="pr-1  flex-1">Resources</span>
            <span>
              <svg
                className="fill-current h-4 w-4 transform group-hover:-rotate-180
  transition duration-300 delay-300 ease-in-out"
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 20 20"
              >
                <path d="M9.293 12.95l.707.707L15.657 8l-1.414-1.414L10 10.828 5.757 6.586 4.343 8z" />
              </svg>
            </span>
          </button>

          <ul
            className="bg-white  rounded-md transform scale-0 group-hover:scale-100 absolute 
  transition duration-300 delay-300 ease-in-out  min-w-[200px] px-2 border-t-4 border-t-[#EB334A] py-2"
          >
            <li className="cursor-pointer rounded-sm px-3 py-1 hover:bg-gray-100">
              <Link href="/ebooks/1">Ebooks</Link>
            </li>
            <li className="cursor-pointer rounded-sm px-3 py-1 hover:bg-gray-100">
              <Link href="#videos">Videos</Link>
            </li>
            {/* <li className="rounded-sm relative px-3 py-1 hover:bg-gray-100">
              <button className="w-full text-left flex items-center outline-none focus:outline-none">
                <span className="pr-1 flex-1">Langauges</span>
                <span className="mr-auto">
                  <svg
                    className="fill-current h-4 w-4
      transition duration-150 ease-in-out"
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 20 20"
                  >
                    <path d="M9.293 12.95l.707.707L15.657 8l-1.414-1.414L10 10.828 5.757 6.586 4.343 8z" />
                  </svg>
                </span>
              </button>
              <ul
                className=" px-2 bg-white border rounded-md absolute top-0 right-0 
  transition duration-150 ease-in-out origin-top-left
  min-w-32
  "
              >
                <li className="px-3 py-1 hover:bg-gray-100">Javascript</li>
                <li className="rounded-sm relative px-3 py-1 hover:bg-gray-100">
                  <button className="w-full text-left flex items-center outline-none focus:outline-none">
                    <span className="pr-1 flex-1">Python</span>
                    <span className="mr-auto">
                      <svg
                        className="fill-current h-4 w-4
          transition duration-150 ease-in-out"
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 20 20"
                      >
                        <path d="M9.293 12.95l.707.707L15.657 8l-1.414-1.414L10 10.828 5.757 6.586 4.343 8z" />
                      </svg>
                    </span>
                  </button>
                  <ul
                    className="bg-white border rounded-md absolute top-0 right-0 
transition duration-150 ease-in-out origin-top-left
min-w-32
"
                  >
                    <li className="px-3 py-1 hover:bg-gray-100">2.7</li>
                    <li className="px-3 py-1 hover:bg-gray-100">3+</li>
                  </ul>
                </li>
                <li className="px-3 py-1 hover:bg-gray-100">Go</li>
                <li className="px-3 py-1 hover:bg-gray-100">Rust</li>
              </ul>
            </li> */}
            <li className="cursor-pointer rounded-sm px-3 py-1 hover:bg-gray-100">
              <Link href="#">Blogs</Link>
            </li>
          </ul>
        </div>
      ) : (
        <div>
          <span className="  w-full block">Resources</span>
          <ul className="mobile_list block ml-5 mt-2">
            <li className="text-black ">Resource 1</li>
            <li className="text-black">Resource 1</li>
            <li className="text-black">Resource 1</li>
          </ul>
        </div>
      )}
      {/* component */}
    </>
  );
};

export default Dropdown;
