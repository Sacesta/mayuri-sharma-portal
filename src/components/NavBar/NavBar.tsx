"use client";

import Link from "next/link";
import React, { useState } from "react";
import Image from "next/image";
import { usePathname } from "next/navigation";
import menuIcon from "@/Assets/icons/menu.png";

import "./NavBar.css";
import LoginModal from "../Modal/LoginModal";

function DynamicTag({ tag, children }: any) {
  const Tag = tag;
  return <Tag>{children}</Tag>;
}

const Links = ({ tag, setIsOpen, isOpen }: any) => {
  const router = usePathname();

  const links = [
    {
      href: "/",
      title: "Home",
    },
    {
      href: "/about",
      title: "About Me",
    },
    {
      href: "/podcast",
      title: "My Podcast",
    },
    {
      href: "/programs",
      title: "Programs",
    },
    {
      href: "/masterclass",
      title: "Masterclass",
    },
  ];
  return (
    <>
      {links?.map((x: any, index: number) => (
        <DynamicTag key={`navbar${index}`} tag={tag}>
          <Link
            onClick={() => setIsOpen(!isOpen)}
            href={x?.href}
            className={`${
              router === x.href ? "active" : "inactivelink"
            } mr-5 xl:mr-10 hover:text-[#eb334a]`}
          >
            {x?.title}
          </Link>
        </DynamicTag>
      ))}
    </>
  );
};
const NavBar = () => {
  const [isOpen, setIsOpen] = useState<boolean>(false);
  const [showModal, setShowModal] = useState<boolean>(false);

  const handleToggle = () => {
    console.log(isOpen);

    setIsOpen(!isOpen);
  };
  return (
    <>
      <nav className="px-6 lg:px-auto py-6 flex justify-between items-center lg:px-16 nav-height sticky left-0 top-0 w-full z-[99999] bg-white">
        <div className="flex gap-20">
          <div className="cursor-pointer">
            <Link href="/">
              <Image
                width="86"
                height="25"
                src="./svg/mayuri.logo.svg"
                alt="Logo..."
              />
            </Link>
          </div>
          <div className="hidden lg:block nan-list">
            <ul className="nav-ul">
              <Links tag="span" setIsOpen={setIsOpen} isOpen={isOpen} />
            </ul>
          </div>
        </div>
        <div className="right-button">
          <button
            className="hidden lg:flex user-btn items-center"
            onClick={() => setShowModal(true)}
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width={23}
              height={18}
              viewBox="0 0 24 24"
              fill="#fff"
            >
              <path d="M7.5 6.5C7.5 8.981 9.519 11 12 11s4.5-2.019 4.5-4.5S14.481 2 12 2 7.5 4.019 7.5 6.5zM20 21h1v-1c0-3.859-3.141-7-7-7h-4c-3.86 0-7 3.141-7 7v1h17z" />
            </svg>
            <span>Login</span>
          </button>
        </div>
        <div className="right-button">
          <button className="hidden lg:block nav-btn">Contact me</button>
          <div className="flex lg:hidden">
            <Image
              onClick={handleToggle}
              className={`${
                isOpen === true ? "hidden" : "btn-animation"
              } menu-icon`}
              src={menuIcon}
              alt="Icon..."
            />
            <div
              onClick={handleToggle}
              className={`menu-icon ${
                isOpen === true ? "btn-animation" : "hidden"
              } cursor-pointer`}
            >
              <Image src="./svg/cancel.svg" width="28" height="28" alt="..." />
            </div>
          </div>
        </div>
      </nav>
      <div className={`navbar ${isOpen ? "open" : ""} mobile_menu lg:hidden `}>
        <ul className="mob_nav navbar-menu">
          <Links tag={"li"} setIsOpen={setIsOpen} isOpen={isOpen} />
        </ul>

        <a href="#">Login</a>

        <a href="#" className="mob_nav_button">
          Contact me
        </a>
      </div>
      {showModal && <LoginModal setShowModal={setShowModal} />}
    </>
  );
};

export default NavBar;
