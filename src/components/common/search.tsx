import Image from "next/image";

const InputBox = `relative bg-[#f6f6f6] rounded-sm  flex items-center`;
const InputStyle = `bg-[#f6f6f6] w-full ps-9 pe-3 py-2`;
const ImgStyle = `absolute left-2`;

export default function Search() {
  return (
    <div className="flex text-[14px] w-full h-[50%] gap-4 items-center p-6">
      <div className={`${InputBox} w-[50%]`}>
        <Image
          className={ImgStyle}
          width={24}
          height={24}
          src={"/images/icon/search.png"}
          alt="search_icon"
        />
        <input
          className={InputStyle}
          type="search"
          placeholder="검색"
          name=""
          id=""
        />
      </div>
      <input
        className={`bg-[#f6f6f6] rounded-sm px-3 py-2 w-[17%] `}
        type="date"
        name=""
        id=""
      />
      <div className={`${InputBox} w-[17%]`}>
        <Image
          className={ImgStyle}
          width={24}
          height={24}
          src={"/images/icon/stroke.png"}
          alt="search_icon"
        />
        <input className={InputStyle} type="number" placeholder="인원" />
      </div>
      <button className="bg-point_color text-white rounded-md w-[16%] px-3 py-2">
        검색
      </button>
    </div>
  );
}
