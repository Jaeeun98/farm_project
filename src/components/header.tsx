import Image from "next/image";

export default function Header() {
  return (
    <header className="flex justify-between px-16 h-[80px] items-center">
      <h1 className="text-point_color text-4xl font-bold">logo</h1>
      <Image
        width={28}
        height={28}
        src={"/images/filter.png"}
        alt="filter_icon"
      />
    </header>
  );
}
