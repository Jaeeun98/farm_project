"use client";

import { login } from "@/app/api/auth";
import Link from "next/link";
import { useState } from "react";

//로그인 input, button 컴포넌트
const input_style = " w-full px-6 py-3 rounded-md my-2";
const button_style = "bg-point_color text-[#fff]";
const disabled_button_style = "bg-sub_color text-text_sub cursor-default";

export default function Inputs() {
  const [loginData, setLoginData] = useState({
    userEmail: "",
    password: "",
  });

  const btn_disabled =
    loginData.password !== "" && loginData.userEmail !== "" ? false : true;

  const inputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;

    setLoginData({
      ...loginData,
      [name]: value,
    });
  };

  const handleLogin = async () => {
    const result = await login(loginData);
  };

  return (
    <div>
      <input
        onChange={(e) => inputChange(e)}
        className={`${input_style} border mt-10`}
        type="text"
        name="userEmail"
        id=""
        placeholder="아이디 입력"
      />
      <input
        onChange={(e) => inputChange(e)}
        className={`${input_style} border`}
        type="password"
        name="password"
        placeholder="비밀번호 입력"
      />
      <button
        disabled={btn_disabled}
        className={`${input_style}  ${
          btn_disabled ? disabled_button_style : button_style
        }`}>
        로그인
      </button>
      <Link href={"/sign_up"}>
        <button className="text-text_sub text-[14px] mt-4">회원가입</button>
      </Link>
    </div>
  );
}
