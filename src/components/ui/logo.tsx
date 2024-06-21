import Image from "next/image";
import Link from "next/link";

//로고 컴포넌트
interface Props {
  size?: "s" | "b";
}

export default function Logo({ size = "s" }: Props) {
  const textSize = size === "s" ? "text-3xl" : "text-6xl";
  return (
    <Link href={"/"}>
      <h1 className={`text-point_color ${textSize} font-bold cursor-pointer`}>
        <Image src={"/images/logo.png"} alt="logo" width={38} height={38} />
      </h1>
    </Link>
  );
}
