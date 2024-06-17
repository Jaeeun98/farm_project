"use client";

import Link from "next/link";
import { useState } from "react";
import { signIn } from "next-auth/react";

//로그인 input, button 컴포넌트
const input_style = " w-full px-6 py-3 rounded-md my-2";
const button_style = "bg-point_color text-[#fff]";
const disabled_button_style = "bg-sub_color text-text_sub cursor-default";

export default function Inputs() {
  const [loginData, setLoginData] = useState({
    userWebId: "",
    userWebPw: "",
  });

  const btn_disabled =
    loginData.userWebPw !== "" && loginData.userWebId !== "" ? false : true;

  const inputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;

    setLoginData({
      ...loginData,
      [name]: value,
    });
  };

  const handleLogin = async () => {
    const result = await signIn("credentials", {
      redirect: false,
      ...loginData,
    });

    if (result?.error) {
      // 에러 처리
      alert(result.error);
    } else {
      // 로그인 성공 처리 (예: 리다이렉트)
      alert("로그인에 성공했습니다.");
      // window.location.href = "/";
    }
  };

  return (
    <div>
      <input
        onChange={(e) => inputChange(e)}
        className={`${input_style} border mt-10`}
        type="text"
        name="userWebId"
        id=""
        placeholder="아이디 입력"
      />
      <input
        onChange={(e) => inputChange(e)}
        className={`${input_style} border`}
        type="userWebPw"
        name="userWebPw"
        placeholder="비밀번호 입력"
      />
      <button
        onClick={handleLogin}
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
