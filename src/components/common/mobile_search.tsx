import Image from "next/image";

export default function MobileSearch() {
  return (
    <div className="relative text-[14px] bg-sub_color rounded-md flex items-center w-full">
      <Image
        className="absolute left-2"
        width={24}
        height={24}
        src={"/images/icon/search.png"}
        alt="search_icon"
      />
      <input
        className="bg-sub_color w-full ps-9 pe-3 py-4 rounded-md"
        type="search"
        placeholder="체험지를 검색해보세요"
        name="farmName"
        disabled
      />
    </div>
  );
}
