import Image from "next/image";

//header, 필터 아이콘
export default function FilterIcon() {
  return (
    <Image
      width={28}
      height={28}
      src={"/images/icon/filter.png"}
      alt="filter_icon"
    />
  );
}
