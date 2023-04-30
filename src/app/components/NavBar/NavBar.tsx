import Link from "next/link";
import React from "react";
import Image from "next/image";
import Logo from "../../../Assets/Images/Logotype.png";
import "./NavBar.css";
const NavBar = () => {
  return (
    <>
      <nav
        style={{ boxShadow: "0px 12px 24px rgba(0, 0, 0, 0.1)" }}
        className="py-6 flex justify-between items-center md:px-16 nav-height"
      >
        <div className="flex gap-20">
          <div className="logo">
            <Image src={Logo} alt="Logo..." />
          </div>
          <div className="nan-list">
            <ul className="nav-ul">
              <a className="mr-10 hover:text-gray-900">Home</a>
              <a className="mr-10 hover:text-gray-900">About Me</a>
              <a className="mr-10 hover:text-gray-900">My Podcast</a>
              <a className="mr-10 hover:text-gray-900">Programs</a>
              <a className="mr-10 hover:text-gray-900">Masterclass</a>
            </ul>
          </div>
        </div>
        <div className="right-button">
          <button className="nav-btn">Contact me</button>
        </div>
      </nav>
    </>
  );
};

export default NavBar;
