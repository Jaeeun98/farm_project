"use client";
import { useSession } from "next-auth/react";
import { usePathname } from "next/navigation";

import MypageButton from "../ui/mypage_button";
import LoginButton from "../ui/login_button";

export default function HeaderLeftButton() {
  const { data: session } = useSession();
  const pathname = usePathname();

  if (pathname === "/login") return <></>;

  return (
    <div>{session?.user.accessToken ? <MypageButton /> : <LoginButton />}</div>
  );
}
