"use client";
import { useSession } from "next-auth/react";
import MypageButton from "../ui/mypage_button";
import LoginButton from "../ui/login_button";

export default function HeaderLeftButton() {
  const { data: session } = useSession();

  if (!session) return <></>;

  return (
    <div>{session?.user.accessToken ? <MypageButton /> : <LoginButton />}</div>
  );
}
