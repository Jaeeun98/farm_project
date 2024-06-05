import Image from "next/image";
import CalendarInput from "../ui/calendar_input";
import PersonInput from "../ui/person_input";

const InputBox = `relative bg-sub_color rounded-sm  flex items-center`;
const InputStyle = `bg-sub_color w-full ps-9 pe-3 py-2`;
const ImgStyle = `absolute left-2`;

interface Props {
  detail?: boolean; //디테일 페이지의 컴포넌트인지 구분
}

//검색 컴포넌트
export default function Search({ detail = false }: Props) {
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
      <CalendarInput size={17} />
      <PersonInput size={17} />
      <button className="bg-point_color text-white rounded-md w-[16%] px-3 py-2">
        {detail ? "재검색" : "검색"}
      </button>
    </div>
  );
}
