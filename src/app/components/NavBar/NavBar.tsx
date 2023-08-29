"use client";

import Link from "next/link";
import React, { useState } from "react";
import Image from "next/image";
import { usePathname } from "next/navigation";
import menuIcon from "../../../Assets/icons/menu.png";

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
              <svg
                width="86"
                height="25"
                viewBox="0 0 86 25"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M0 19.0553V1.77597H2.71087L10.4635 14.3899H9.04469L16.6706 1.77597H19.3815L19.4068 19.0553H16.2906L16.2652 6.54013H16.924L10.4381 17.0805H8.96869L2.38152 6.54013H3.14157V19.0553H0Z"
                  fill="#090617"
                />
                <path
                  d="M32.2284 19.0553V16.3893L32.0511 15.8216V11.1562C32.0511 10.2511 31.7724 9.55167 31.215 9.05797C30.6577 8.54782 29.8131 8.29275 28.6815 8.29275C27.9214 8.29275 27.1698 8.40794 26.4267 8.63833C25.7004 8.86872 25.0839 9.18962 24.5772 9.60104L23.3358 7.35472C24.062 6.81166 24.9234 6.40848 25.92 6.14517C26.9334 5.86541 27.9806 5.72553 29.0615 5.72553C31.0208 5.72553 32.5325 6.18631 33.5965 7.10788C34.6775 8.01299 35.218 9.42002 35.218 11.329V19.0553H32.2284ZM27.9721 19.2281C26.9587 19.2281 26.072 19.0635 25.3119 18.7344C24.5519 18.3888 23.9607 17.9198 23.5384 17.3274C23.1331 16.7185 22.9304 16.0355 22.9304 15.2785C22.9304 14.538 23.1077 13.8715 23.4624 13.2791C23.834 12.6866 24.4336 12.2176 25.2612 11.872C26.0889 11.5264 27.1867 11.3537 28.5548 11.3537H32.4818V13.4025H28.7828C27.7019 13.4025 26.9756 13.5753 26.604 13.9209C26.2324 14.25 26.0466 14.6614 26.0466 15.1551C26.0466 15.7146 26.2747 16.159 26.7307 16.4881C27.1867 16.8172 27.8201 16.9818 28.6308 16.9818C29.4078 16.9818 30.1003 16.809 30.7083 16.4634C31.3333 16.1178 31.7809 15.6077 32.0511 14.9329L32.5831 16.7843C32.2791 17.5578 31.7302 18.1584 30.9363 18.5863C30.1594 19.0142 29.1713 19.2281 27.9721 19.2281Z"
                  fill="#090617"
                />
                <path
                  d="M40.1497 24.0169C39.491 24.0169 38.8322 23.91 38.1735 23.696C37.5148 23.4821 36.9659 23.1859 36.5267 22.8074L37.7935 20.5364C38.1144 20.8161 38.4775 21.0383 38.8829 21.2029C39.2883 21.3674 39.7021 21.4497 40.1243 21.4497C40.6986 21.4497 41.1631 21.3098 41.5178 21.0301C41.8725 20.7503 42.2018 20.2813 42.5059 19.623L43.2912 17.8951L43.5446 17.5248L48.6623 5.87364H51.7026L45.3687 20.1167C44.9465 21.1041 44.4736 21.8858 43.95 22.4618C43.4433 23.0378 42.869 23.441 42.2272 23.6713C41.6022 23.9017 40.9097 24.0169 40.1497 24.0169ZM42.9366 19.5243L36.8308 5.87364H40.1243L45.0901 17.2533L42.9366 19.5243Z"
                  fill="#090617"
                />
                <path
                  d="M59.4076 19.2281C58.2591 19.2281 57.2457 19.0224 56.3674 18.611C55.4891 18.1831 54.8051 17.5413 54.3153 16.6856C53.8254 15.8134 53.5805 14.719 53.5805 13.4025V5.87364H56.7474V12.9828C56.7474 14.1677 57.0177 15.0564 57.5582 15.6488C58.1155 16.2248 58.9009 16.5128 59.9144 16.5128C60.6575 16.5128 61.2993 16.3647 61.8398 16.0684C62.3972 15.7722 62.8279 15.3279 63.1319 14.7355C63.4528 14.143 63.6133 13.4107 63.6133 12.5385V5.87364H66.7802V19.0553H63.7653V15.5007L64.2974 16.5868C63.8413 17.4426 63.1742 18.1008 62.2959 18.5616C61.4176 19.0059 60.4548 19.2281 59.4076 19.2281Z"
                  fill="#090617"
                />
                <path
                  d="M70.9267 19.0553V5.87364H73.9416V9.5023L73.5869 8.44085C73.9923 7.5522 74.6256 6.87749 75.487 6.4167C76.3653 5.95592 77.4547 5.72553 78.7553 5.72553V8.66302C78.6202 8.6301 78.4935 8.61365 78.3753 8.61365C78.257 8.59719 78.1388 8.58896 78.0206 8.58896C76.8214 8.58896 75.8671 8.93455 75.1577 9.62572C74.4483 10.3004 74.0936 11.3125 74.0936 12.6619V19.0553H70.9267Z"
                  fill="#090617"
                />
                <path
                  d="M81.4418 19.0553V5.87364H84.6087V19.0553H81.4418Z"
                  fill="#090617"
                />
                <path
                  d="M81.2526 3.87732C81.6995 4.32159 82.263 4.54373 82.9431 4.54373C83.6426 4.54373 84.2061 4.32159 84.6336 3.87732C85.0611 3.41285 85.2748 2.8474 85.2748 2.18099C85.2748 1.55497 85.0513 1.04001 84.6044 0.636121C84.1769 0.21204 83.6231 0 82.9431 0C82.263 0 81.6995 0.222138 81.2526 0.666413C80.8251 1.09049 80.6113 1.62565 80.6113 2.27187C80.6113 2.89789 80.8251 3.43304 81.2526 3.87732Z"
                  fill="#EB334A"
                />
              </svg>
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
              <svg
                width="28"
                height="28"
                viewBox="0 0 28 28"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M2.4501 27.6501L0.350098 25.5501L11.9001 14.0001L0.350098 2.4501L2.4501 0.350098L14.0001 11.9001L25.5501 0.350098L27.6501 2.4501L16.1001 14.0001L27.6501 25.5501L25.5501 27.6501L14.0001 16.1001L2.4501 27.6501Z"
                  fill="#EB334A"
                />
              </svg>
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