import Image from "next/image";

interface Props {
  arrowStyle: string;
  onClick?: React.MouseEventHandler;
}
export default function PrevArrow({ arrowStyle, onClick }: Props) {
  return (
    <Image
      onClick={onClick}
      src="/images/icon/arrow_prev.png"
      alt="prev_arrow_icon"
      width={68}
      height={68}
      className={`${arrowStyle} `}
    />
  );
}
