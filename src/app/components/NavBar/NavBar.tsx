"use client";

import Link from "next/link";
import React from "react";
import Image from "next/image";
import { usePathname } from "next/navigation";

import Logo from "../../../Assets/Images/Logotype.png";
import menuIcon from "../../../Assets/icons/menu.png";

import "./NavBar.css";
const NavBar = () => {
  const router = usePathname();
  return (
    <>
      <nav
        style={{ boxShadow: "0px 12px 24px rgba(0, 0, 0, 0.1)" }}
        className="px-6 lg:px-auto py-6 flex justify-between items-center lg:px-16 nav-height"
      >
        <div className="flex gap-20">
          <div className="cursor-pointer">
            <Link href="/">
              <Image src={Logo} alt="Logo..." />
            </Link>
          </div>
          <div className="hidden lg:block nan-list">
            <ul className="nav-ul">
              <Link
                href="/"
                className={`${
                  router === "/" && "active"
                } mr-10 hover:text-gray-900`}
              >
                Home
              </Link>
              <Link
                href="/about"
                className={`${
                  router === "/about" && "active"
                } mr-10 hover:text-gray-900`}
              >
                About Me
              </Link>
              <Link
                href="/podcast"
                className={`${
                  router === "/podcast" && "active"
                } mr-10 hover:text-gray-900`}
              >
                My Podcast
              </Link>
              <Link
                href="/programs"
                className={`${
                  router === "/programs" && "active"
                } mr-10 hover:text-gray-900`}
              >
                Programs
              </Link>
              <Link
                href="/"
                className={`${
                  router === "/masterclass" && "active"
                } mr-10 hover:text-gray-900`}
              >
                Masterclass
              </Link>
            </ul>
          </div>
        </div>
        <div className="right-button">
          <button className="hidden lg:block nav-btn">Contact me</button>
          <Image
            className="menu-icon block lg:hidden"
            src={menuIcon}
            alt="Icon..."
          />
        </div>
      </nav>
    </>
  );
};

export default NavBar;
