"use client";

import { Program } from "@/services/Program.services";
import React from "react";

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
  return (
    <div className={divCls}>
      <button className={btnCls} onClick={() => handler(program)}>
        Register now
      </button>
      <p className={pCls}>25 out of 30 already joined</p>
    </div>
  );
};

export default RegisterBtn;
