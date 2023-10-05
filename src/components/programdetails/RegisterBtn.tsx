"use client";

import {
  getLoggedIn,
  getRegisterClicked,
  setRegisterClicked,
} from "@/redux/features/userSlice";
import { Program } from "@/services/Program.services";
import React, { useEffect, useRef } from "react";
import { useDispatch, useSelector } from "react-redux";

interface RegisterBtnProp {
  divCls: string;
  btnCls: string;
  pCls: string;
  program: Program;
  handler: (program: Program) => void;
}

const RegisterBtn = ({
  divCls,
  btnCls,
  pCls,
  handler,
  program,
}: RegisterBtnProp) => {
  const isLoggedIn = useSelector(getLoggedIn);
  const registerBtnClicked = useSelector(getRegisterClicked);
  const dispatch = useDispatch();

  console.log(isLoggedIn, registerBtnClicked);

  const btnRef = useRef<HTMLButtonElement | null>(null);

  useEffect(() => {
    console.log(isLoggedIn, registerBtnClicked);
    if (isLoggedIn && registerBtnClicked) {
      if (btnRef && btnRef.current) btnRef.current.click();
    }
  }, [isLoggedIn, registerBtnClicked, dispatch]);

  console.log(btnRef);

  return (
    <div className={divCls}>
      <button
        ref={btnRef}
        className={btnCls}
        onClick={() => {
          handler(program);
          dispatch(setRegisterClicked(false));
        }}
      >
        Register now
      </button>
      <p className={pCls}>25 out of 30 already joined</p>
    </div>
  );
};

export default RegisterBtn;
