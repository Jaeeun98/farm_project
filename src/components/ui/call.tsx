import Image from "next/image";

interface Props {
  phoneNumber: string;
}

export default function Call({ phoneNumber }: Props) {
  return (
    <div className={`flex items-center mb-2 text-[14px] gap-2`}>
      <Image
        src="/images/icon/call.png"
        alt="call_icon"
        width={20}
        height={20}
      />
      <p>{phoneNumber}</p>
    </div>
  );
}
