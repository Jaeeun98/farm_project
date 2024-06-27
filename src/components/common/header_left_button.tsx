"use client";
import { useSession } from "next-auth/react";
import { usePathname } from "next/navigation";

import MypageButton from "../ui/mypage_button";
import LoginButton from "../ui/login_button";
import { useEffect, useState } from "react";
import { getUserInfo } from "@/app/api/user";

export default function HeaderLeftButton() {
  const { data: session } = useSession();
  const [token, setToken] = useState(false);
  const pathname = usePathname();

  // const handleUserInfo = async () => {
  //   try {
  //     await getUserInfo();
  //   } catch (error) {
  //     alert("로그인이 만료되었습니다.");
  //   }
  // };

  useEffect(() => {
    if (!session) return;
    if (pathname === "/login") return;
    // handleUserInfo();
    setToken(true);
  }, [session]);

  if (pathname === "/login") return <></>;

  return <div>{token ? <MypageButton /> : <LoginButton />}</div>;
}
