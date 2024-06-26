"use client";
import { useSession } from "next-auth/react";
import { usePathname } from "next/navigation";

import MypageButton from "../ui/mypage_button";
import LoginButton from "../ui/login_button";
import { useEffect } from "react";
import { getUserInfo } from "@/app/api/user";

export default function HeaderLeftButton() {
  const { data: session } = useSession();
  const pathname = usePathname();

  const handleUserInfo = async () => {
    if (!session) return;
    try {
      const result = await getUserInfo();
      console.log(result);
    } catch (error) {
      alert("로그인이 만료되었습니다.");
    }
  };

  useEffect(() => {
    handleUserInfo;
  }, []);

  if (pathname === "/login") return <></>;

  return (
    <div>{session?.user.accessToken ? <MypageButton /> : <LoginButton />}</div>
  );
}
