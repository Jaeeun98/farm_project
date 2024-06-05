import Image from "next/image";

interface Props {
  size: number;
  changeSearchData: (e: React.ChangeEvent<HTMLInputElement>) => void;
}

export default function PersonInput({ size, changeSearchData }: Props) {
  return (
    <div
      className={`relative bg-sub_color rounded-sm  flex items-center w-[${size}%]`}>
      <Image
        className={"absolute left-2"}
        width={24}
        height={24}
        src={"/images/icon/stroke.png"}
        alt="search_icon"
      />
      <input
        className={"bg-sub_color w-full ps-9 pe-3 py-2"}
        type="number"
        placeholder="인원"
        name="farmMaxUserCnt"
        onChange={(e) => changeSearchData(e)}
      />
    </div>
  );
}
