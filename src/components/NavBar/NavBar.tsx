"use client";

import Link from "next/link";
import React, { useState } from "react";
import Image from "next/image";
import { usePathname } from "next/navigation";
import menuIcon from "@/Assets/icons/menu.png";

import "./NavBar.css";

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
        <a href="#" className="mob_nav_button">
          Contact me
        </a>
      </div>
    </>
  );
};

export default NavBar;
