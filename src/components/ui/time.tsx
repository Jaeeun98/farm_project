import Image from "next/image";

interface Props {
  time: string;
}

export default function Time({ time }: Props) {
  return (
    <div className={`flex items-center text-[14px] gap-2`}>
      <Image
        src="/images/icon/time.png"
        alt="call_icon"
        width={20}
        height={20}
      />
      <p>{time}</p>
    </div>
  );
}
