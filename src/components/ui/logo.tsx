"use client";

import Image from "next/image";
import Link from "next/link";
import TextLogo from "./text_logo";

export default function Logo() {
  const handleRouter = () => (window.location.href = "/");
  return (
    <h1
      onClick={handleRouter}
      className={`flex items-center gap-2 text-point_color font-bold cursor-pointer`}>
      <Image
        className="w-[28px] h-[28px]"
        src={"/images/logo.png"}
        alt="logo"
        width={38}
        height={38}
      />
      <TextLogo size="s" />
    </h1>
  );
}
