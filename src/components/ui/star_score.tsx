import Image from "next/image";

interface Props {
  score: string;
}

//별점 컴포넌트
export default function StarScore({ score }: Props) {
  return (
    <span className="flex bg-point_color rounded-3xl px-2 py-1 w-[50px] h-[21px] justify-between items-center me-2">
      <Image
        src="/images/icon/star.png"
        alt="star_icon"
        width={10.25}
        height={10}
      />
      <span className="text-[12px] text-white">{score}</span>
    </span>
  );
}
