'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { usePathname } from 'next/navigation';
import menuIcon from '@/Assets/icons/menu.png';
import Logo from '../../Assets/svg/mayuri.logo.svg';
import flowerPetal from '../../Assets/svg/bannerFlower.svg';
import './NavBar.css';
import LoginModal from '../Modal/LoginModal';
import { useAppSelector } from '@/redux/hooks';
import {
  clearUser,
  getLoggedIn,
  getShowModal,
  getUser,
  setUser,
} from '@/redux/features/userSlice';
import { User } from '@/services/auth.services';
import Dropdown from './DropDown/Dropdown';

function DynamicTag({ device, children }: any) {
  const Device = device;
  return (
    <li className={device === 'mobile' ? 'block' : 'inline-block'}>
      {children}
    </li>
  );
}

const Links = ({ device, setIsOpen, isOpen }: any) => {
  const router = usePathname();

  const [showPodcastDropdown, setShowPodcastDropdown] = useState(false);

  const links = [
    {
      href: '/',
      title: 'Home',
    },
    {
      href: '/about',
      title: 'About Me',
    },
    {
      href: '',
      title: 'My Podcast',
      disabled: true,
    },
    {
      href: '/programs',
      title: 'Programs',
    },
    {
      href: '/community',
      title: 'Community',
    },
  ];

  return (
    <>
      {links?.map((x: any, index: number) => (
        <DynamicTag key={`navbar${index}`} device={device}>
          {x.title === 'My Podcast' ? (
            <div
              className=""
              onMouseEnter={() => setShowPodcastDropdown(true)}
              onMouseLeave={() => setShowPodcastDropdown(false)}
            >
              <a
                onClick={() => setIsOpen(!isOpen)}
                className={` mr-5 xl:mr-10  !text-[#505050]  `}
              >
                {x?.title}
              </a>
              {showPodcastDropdown && (
                <div className="podcast-dropdown relative">
                  <ul className=" absolute top-1">
                    <li>
                      <button className=" bg-[#eb334a] text-white rounded-full user-btn p-2 text-xs !text-nowrap">
                        Coming soon
                      </button>
                    </li>
                  </ul>
                </div>
              )}
            </div>
          ) : (
            <Link
              onClick={() => setIsOpen(!isOpen)}
              href={x?.href}
              className={`${
                router === x.href ? 'active' : 'inactivelink'
              } mr-5 xl:mr-10 hover:text-[#eb334a]`}
            >
              {x?.title}
            </Link>
          )}
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
              <Image
                width="86"
                height="25"
                src={flowerPetal}
                alt="Logo..."
                className=" max-h-8"
              />
            </Link>
          </div>
          <div className="hidden lg:block nan-list">
            <ul className="nav-ul">
              <Links device="desktop" setIsOpen={setIsOpen} isOpen={isOpen} />
            </ul>
          </div>
        </div>
        {/* <div className="hidden lg:block">
          <Dropdown device="desktop" />
        </div> */}
        <div className="ml-auto">
          {isLoggedIn ? (
            <button className="hidden lg:flex user-btn items-center">
              Hello {user.fullName}
            </button>
          ) : (
            <div className=" flex gap-2">
              <button
                className="hidden lg:flex user-btn items-center login-btn"
                onClick={() => setShowModal(true)}
              >
                <span>Login</span>
              </button>
              <Link
                href="/register"
                className="hidden lg:flex user-btn items-center signup-btn "
              >
                <span>Signup</span>
              </Link>
            </div>
          )}
        </div>
        <div className="right-button">
          <div className="flex lg:hidden">
            <Image
              onClick={handleToggle}
              className={`${
                isOpen === true ? 'hidden' : 'btn-animation'
              } menu-icon`}
              src={menuIcon}
              alt="Icon..."
            />
            <div
              onClick={handleToggle}
              className={`menu-icon ${
                isOpen === true ? 'btn-animation' : 'hidden'
              } cursor-pointer`}
            >
              <Image src="./svg/cancel.svg" width="28" height="28" alt="..." />
            </div>
          </div>
        </div>
      </nav>
      <div className={`navbar ${isOpen ? 'open' : ''} mobile_menu lg:hidden `}>
        <ul className="mob_nav navbar-menu">
          <Links device={'mobile'} setIsOpen={setIsOpen} isOpen={isOpen} />
          {/* <li>
            <Dropdown device="mobile" />
          </li> */}
          <li
            onClick={() => {
              setIsOpen(!isOpen);
              setShowModal(true);
            }}
            className="hover:text-[#eb334a]"
          >
            Login
          </li>
          <li>
            <Link
              href="/register"
              className=" items-center  hover:text-[#eb334a] "
            >
              <span>Signup</span>
            </Link>
          </li>
        </ul>
      </div>
      {showModal || isLoginModalOpen ? (
        <LoginModal setShowModal={setShowModal} />
      ) : null}
    </>
  );
};

export default NavBar;
