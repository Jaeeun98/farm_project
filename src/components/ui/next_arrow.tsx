import Image from "next/image";

interface Props {
  arrowStyle: string;
  onClick?: React.MouseEventHandler;
}

export default function NextArrow({ arrowStyle, onClick }: Props) {
  return (
    <Image
      onClick={onClick}
      src="/images/icon/arrow_next.png"
      alt="next_arrow_icon"
      width={68}
      height={68}
      className={`${arrowStyle} right-1`}
    />
  );
}
