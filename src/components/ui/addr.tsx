import Image from "next/image";

interface Props {
  addr: string;
}

//주소지
export default function Addr({ addr }: Props) {
  return (
    <div className="flex items-center text-[14px] gap-2">
      <Image
        src="/images/icon/marker.png"
        alt="marker_icon"
        width={20}
        height={20}
      />
      <p>{addr}</p>
    </div>
  );
}
