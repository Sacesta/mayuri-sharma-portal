"use client";

import React from "react";
import { ToastContainer, toast } from "react-toastify";
import Logo from "@/Assets/Images/pageImages/Logotype.png";
import Image from "next/image";
import Link from "next/link";
import loginService, { LoginPayload } from "@/services/auth.services";
import { useAppDispatch } from "@/redux/hooks";
import {
  getRegisterClicked,
  setLoginModal,
  setRegisterClicked,
  setUser,
} from "@/redux/features/userSlice";
import { useRouter, usePathname } from "next/navigation";
import { useSelector } from "react-redux";

interface PropTypes {
  setShowModal: (bool: boolean) => void;
}

const LoginModal = ({ setShowModal }: PropTypes) => {
  const pathName = usePathname();
  const registerBtnClicked = useSelector(getRegisterClicked);

  const dispatch = useAppDispatch();
  const router = useRouter();
  const toggleModal = () => {
    setShowModal(false);
    dispatch(setLoginModal(false));
  };

  const handleFormSubmit = async (e: any) => {
    try {
      console.log(pathName);
      e.preventDefault();
      console.log(e);
      const email = e.target.email.value;
      const password = e.target.password.value;

      const payload: LoginPayload = {
        email,
        password,
      };
      const data = await loginService(payload);
      const user = data.data.session.userData;
      dispatch(setUser(user));
      e.target.reset();
      toggleModal();
      router.push(`${pathName}`);
      toast.success("Logged in successfully");
    } catch (error: any) {
      const { response } = error;
      toast.error(response?.data?.message || "Error during registration");
    }
  };

  return (
    <>
      <div className="fixed top-0 left-0 right-0 z-50 w-full h-screen flex justify-center items-center bg-black bg-opacity-50">
        <div className="relative bg-white rounded-lg shadow w-full max-w-md mx-4 md:max-h-full overflow-y-auto md:overflow-hidden">
          <div className="flex items-start justify-between p-4  rounded-t">
            <Image src={Logo} alt="Logo" />
            <button
              type="button"
              className="text-gray-400 bg-transparent hover:bg-gray-200 hover:text-gray-900 rounded-lg text-sm w-8 h-8 ml-auto inline-flex justify-center items-center dark:hover:bg-gray-600 dark:hover:text-white"
              onClick={toggleModal}
            >
              <svg
                className="w-3 h-3"
                aria-hidden="true"
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 14 14"
              >
                <path
                  stroke="currentColor"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="m1 1 6 6m0 0 6 6M7 7l6-6M7 7l-6 6"
                />
              </svg>
              <span className="sr-only">Close modal</span>
            </button>
          </div>

          <div className="p-6 space-y-6">
            <form onSubmit={handleFormSubmit}>
              <div className="form-group mb-[1rem]">
                <label className="text-[14px] text-black inline-block mb-[0.5rem]">
                  Email
                </label>
                <input
                  type="email"
                  className="block w-full border-[1px] text-[#666] border-[#ced4da] font-normal  rounded-[0.25rem] bg-clip-padding form-control h-[45px] px-[15px] py-[10px] text-[14px] focus:border focus:border-[#80bdff] outline-none"
                  id="email1"
                  placeholder="Your email address..."
                  name="email"
                  defaultValue=""
                />
              </div>
              <div className="form-group mb-[1rem]">
                <label className="text-[14px] text-black inline-block mb-[0.5rem]">
                  Password
                </label>
                <input
                  type="password"
                  className="block w-full border-[1px] text-[#666] border-[#ced4da] font-normal  rounded-[0.25rem] bg-clip-padding form-control h-[45px] px-[15px] py-[10px] text-[14px] focus:border focus:border-[#80bdff] outline-none"
                  id="password"
                  placeholder="Your Password..."
                  name="password"
                  defaultValue=""
                />
              </div>
              <div className="flex items-center p-6 space-x-2  border-gray-200 rounded-b border-b">
                <button
                  type="submit"
                  className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800 w-full"
                >
                  Login
                </button>
              </div>
            </form>
          </div>

          <div className="modal-footer flex justify-center text-center p-[1rem] text-[15px] text-[#636363] ">
            <div className="signup-section text-[14px]">
              Not a member yet?
              <Link
                href="/register"
                className="text-[#28a745] font-bold"
                onClick={toggleModal}
              >
                Sign Up
              </Link>
              <br />
              <Link
                href="/forgot-password"
                className="text-[#636363] font-bold"
              >
                Forgot Password?{" "}
              </Link>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default LoginModal;
