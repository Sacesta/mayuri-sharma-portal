import React from "react";
import "@/styles/main.css";
import RegisterForm from "@/components/Register/RegisterForm";
import Footer from "@/components/footer/Footer";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Register",
  description: "Sign Up with Mayuri for full benefits !",
  alternates: {
    canonical: "https://mayuri-sharma-portal.vercel.app/register",
  },
  openGraph: {
    title: "Register",
    description: "Sign Up with Mayuri for full benefits !",
    url: `https://mayuri-sharma-portal.vercel.app/register`,
    siteName: "Mayuri-Sharma-Portal",
    type: "website",
  },
};

export default function Register() {
  return (
    <>
      <div className="container mt-[40px] pt-[80px] pb-[30px] mx-auto mb-10">
        <div className="flex items-center justify-center ">
          <div className="col-sm-12 text-center w-full">
            <div className="page-title">
              <h1 className="text-[40px] font-semibold text-[#323a45] py-[25px] bg-[#f7f7f7] rounded-[15px] mb-[20px]">
                Sign Up
              </h1>
              <p className="col-sm-6 mx-auto text-[16px] text-[#666a6f] px-[15px] mb-[16px]">
                Sign Up with Mayuri for full benefits !
              </p>
            </div>
          </div>
        </div>
        <RegisterForm />
      </div>
      <Footer />
    </>
  );
}
