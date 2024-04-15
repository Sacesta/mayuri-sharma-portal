"use client";

import Link from "next/link";
import React, { useState } from "react";
import Image from "next/image";
import { usePathname } from "next/navigation";
import menuIcon from "@/Assets/icons/menu.png";
import Logo from "../../Assets/svg/mayuri.logo.svg";

import "./NavBar.css";
import LoginModal from "../Modal/LoginModal";
import { useAppSelector } from "@/redux/hooks";
import {
  clearUser,
  getLoggedIn,
  getShowModal,
  getUser,
  setUser,
} from "@/redux/features/userSlice";
import { User } from "@/services/auth.services";
import Dropdown from "./DropDown/Dropdown";

function DynamicTag({ device, children }: any) {
  const Device = device;
  return (
    <li className={device === "mobile" ? "block" : "inline-block"}>
      {children}
    </li>
  );
}

const Links = ({ device, setIsOpen, isOpen }: any) => {
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
    // {
    //   href: "/masterclass",
    //   title: "Masterclass",
    // },
  ];
  return (
    <>
      {links?.map((x: any, index: number) => (
        <DynamicTag key={`navbar${index}`} device={device}>
          <Link
            onClick={() => setIsOpen(!isOpen)}
            href={x?.href}
            className={`${router === x.href ? "active" : "inactivelink"
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

  const isLoggedIn = useAppSelector(getLoggedIn);
  const user: User = useAppSelector(getUser);
  const isLoginModalOpen = useAppSelector(getShowModal);

  const handleToggle = () => {
    setIsOpen(!isOpen);
  };
  return (
    <>
      <nav
        className={`px-6 lg:px-auto py-6 flex justify-between items-center lg:px-16 nav-height sticky left-0 top-0 w-full z-[99999] bg-white`}
      >
        <div className="flex gap-20">
          <div className="cursor-pointer">
            <Link href="/">
              <Image width="86" height="25" src={Logo} alt="Logo..." />
            </Link>
          </div>
          <div className="hidden lg:block nan-list">
            <ul className="nav-ul">
              <Links device="desktop" setIsOpen={setIsOpen} isOpen={isOpen} />
            </ul>
          </div>
        </div>
        <div className="hidden lg:block">
          <Dropdown device="desktop" />
        </div>
        <div className="ml-auto">
          {isLoggedIn ? (
            <button className="hidden lg:flex user-btn items-center">
              Hello {user.fullName}
            </button>
          ) : (
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
          )}
        </div>
        <div className="right-button">
          {/* <button className="hidden lg:block nav-btn">Contact me</button> */}
          <div className="flex lg:hidden">
            <Image
              onClick={handleToggle}
              className={`${isOpen === true ? "hidden" : "btn-animation"
                } menu-icon`}
              src={menuIcon}
              alt="Icon..."
            />
            <div
              onClick={handleToggle}
              className={`menu-icon ${isOpen === true ? "btn-animation" : "hidden"
                } cursor-pointer`}
            >
              <Image src="./svg/cancel.svg" width="28" height="28" alt="..." />
            </div>
          </div>
        </div>
      </nav>
      <div className={`navbar ${isOpen ? "open" : ""} mobile_menu lg:hidden `}>
        <ul className="mob_nav navbar-menu">
          <Links device={"mobile"} setIsOpen={setIsOpen} isOpen={isOpen} />
          <li>
            <Dropdown device="mobile" />
          </li>
          <li
            onClick={() => {
              setIsOpen(!isOpen);
              setShowModal(true);
            }}
          >
            Login
          </li>
        </ul>

        {/* <a href="#" className="mob_nav_button">
          Contact me
        </a> */}
      </div>
      {showModal || isLoginModalOpen ? (
        <LoginModal setShowModal={setShowModal} />
      ) : null}
    </>
  );
};

export default NavBar;
