"use client";
import { useState } from "react";
import { useRouter } from "next/navigation";

import { signUp } from "@/app/api/auth";
import { Sign } from "@/types/auth";

const input_box_stlye = "w-full my-8";
const input_style = "w-full border-b py-2 mt-3 px-1";
const lable_style = "text-text_default font-semibold";
const warning_style = "text-[#FF5000] pt-3 text-[14px]";
const disabled_button_style = " bg-sub_color text-text_sub";
const button_style = "bg-[#8D50DC] text-[#fff]";

export default function SignUpContents() {
  const router = useRouter();
  const [signUpData, setSignUpData] = useState<Sign>({
    userWebId: "",
    userWebPw: "",
    userName: "",
    userTel: "",
    userEmail: "",
    userBirth: "",
  });
  const [passwordCheck, setPasswordCheck] = useState(false);

  const inputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setSignUpData({
      ...signUpData,
      [name]: value,
    });
  };

  //비밀번호 확인 맞는지 체크
  const passwordCheckChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value;
    let check = false;

    if (value === signUpData.userWebPw) check = true;
    setPasswordCheck(check);
  };

  //회원가입 버튼 disabled 여부
  const signUpBtnDisabledCheck = () => {
    let disabled = true;

    const values = Object.values(signUpData);
    if (!values.includes("") && passwordCheck) disabled = false;
    return disabled;
  };

  //회원가입 요청
  const handleSignUp = async () => {
    const result = await signUp(signUpData);
    if (result.status === "SUCCESS") {
      alert("회원가입 되었습니다.");
      router.push("/login");
    } else {
      alert(result.errorMessage);
    }
  };

  return (
    <div className="h-full">
      <div className={`${input_box_stlye}`}>
        <label className={`${lable_style}`} htmlFor="id">
          아이디
        </label>
        <input
          onChange={(e) => inputChange(e)}
          className={`${input_style}`}
          type="text"
          name="userWebId"
          id="id"
          placeholder="아이디 입력(6~20자리)"
        />
      </div>
      <div className={`${input_box_stlye}`}>
        <label className={`${lable_style}`} htmlFor="password">
          비밀번호
        </label>
        <input
          onChange={(e) => inputChange(e)}
          className={`${input_style}`}
          type="password"
          name="userWebPw"
          id="password"
          placeholder="비밀번호 입력(문자, 숫자, 특수문자 포함 20자 이내)"
        />
        {signUpData.userWebPw.length > 20 && (
          <p className={`${warning_style}`}>
            20자 이내의 비밀번호를 입력해주세요.
          </p>
        )}
      </div>
      <div className={`${input_box_stlye}`}>
        <label className={`${lable_style}`} htmlFor="password_check">
          비밀번호 확인
        </label>
        <input
          onChange={(e) => passwordCheckChange(e)}
          className={`${input_style}`}
          type="password"
          name="passwordCheck"
          id="password_check"
          placeholder="비밀번호 확인 입력"
        />
        {!passwordCheck && (
          <p className={`${warning_style}`}>비밀번호가 일치하지 않습니다.</p>
        )}
      </div>
      <div className={`${input_box_stlye}`}>
        <label className={`${lable_style}`} htmlFor="name">
          이름
        </label>
        <input
          onChange={(e) => inputChange(e)}
          className={`${input_style}`}
          type="text"
          name="userName"
          id="name"
          placeholder="이름 입력"
        />
      </div>
      <div className={`${input_box_stlye}`}>
        <label className={`${lable_style}`} htmlFor="tel">
          전화번호
        </label>
        <input
          onChange={(e) => inputChange(e)}
          className={`${input_style}`}
          type="number"
          name="userTel"
          id="tel"
          placeholder="전화번호 입력('-' 제외)"
        />
      </div>
      <div className={`${input_box_stlye}`}>
        <label className={`${lable_style}`} htmlFor="email">
          이메일
        </label>
        <input
          onChange={(e) => inputChange(e)}
          className={`${input_style}`}
          type="email"
          name="userEmail"
          id="email"
          placeholder="이메일 주소"
        />
      </div>
      <div className={`${input_box_stlye}`}>
        <label className={`${lable_style}`} htmlFor="birth">
          생년월일
        </label>
        <input
          onChange={(e) => inputChange(e)}
          className={`${input_style}`}
          type="text"
          name="userBirth"
          id="birth"
          placeholder="생년월일 8자리 입력(ex 19900000)"
        />
      </div>
      <button
        onClick={handleSignUp}
        disabled={signUpBtnDisabledCheck()}
        className={`w-full h-[48px] rounded-md ${
          signUpBtnDisabledCheck() ? disabled_button_style : button_style
        }`}>
        회원가입
      </button>
    </div>
  );
}
