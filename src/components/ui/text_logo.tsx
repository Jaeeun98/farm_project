import Image from "next/image";

const big_style = `w-[280px] h-[95px]`;
const small_style = `w-[58px]`;

interface Props {
  size: "b" | "s";
}

export default function TextLogo({ size }: Props) {
  return (
    <Image
      className={size === "s" ? small_style : big_style}
      src={"/images/text_logo.png"}
      alt="text_logo"
      width={180}
      height={95}
    />
  );
}
