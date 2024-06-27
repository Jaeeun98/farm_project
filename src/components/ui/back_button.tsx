"use client";
import Image from "next/image";
import { useRouter } from "next/navigation";

interface Props {
  text: string;
}

//뒤로가기 버튼
export default function BackButton({ text }: Props) {
  const router = useRouter();

  const handleBack = () => {
    if (text === "예약 완료") router.push("/");
    else router.back();
  };

  return (
    <button onClick={handleBack} className="flex gap-2 items-center my-6">
      <Image
        src="/images/icon/vector.png"
        alt="vector_icon"
        width={11}
        height={21}
      />
      <p className="text-[24px] font-bold">{text}</p>
    </button>
  );
}
