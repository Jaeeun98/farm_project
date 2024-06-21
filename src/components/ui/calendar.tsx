import Image from "next/image";

interface Props {
  date: string;
}

export default function Calenadr({ date }: Props) {
  return (
    <div className={`flex items-center text-[14px] gap-2`}>
      <Image
        src="/images/icon/calendar_icon.png"
        alt="calendar_icon"
        width={24}
        height={24}
      />
      <p>{date}</p>
    </div>
  );
}
