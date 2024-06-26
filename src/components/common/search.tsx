"use client";

import Image from "next/image";
import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";

import CalendarInput from "../ui/calendar_input";
import PersonInput from "../ui/person_input";
import { useFarmSearchData } from "@/context/farm_search_context";

const InputBox = `relative bg-sub_color rounded-sm flex items-center`;
const InputStyle = `bg-sub_color w-full ps-9 pe-3 py-2`;
const ImgStyle = `absolute left-2`;

interface Props {
  detail?: boolean; //디테일 페이지의 컴포넌트인지 구분
  farmData?: string;
}

//검색 컴포넌트
export default function Search({ detail = false, farmData = "" }: Props) {
  const router = useRouter();
  const { setFarmSearchData } = useFarmSearchData();
  const { farmSearchData } = useFarmSearchData();

  const [searchData, setSearchData] = useState({
    farmKind: farmData,
    farmName: farmSearchData.farmName as string,
    farmUseDay: farmSearchData.farmUseDay as string,
    farmMaxUserCnt: farmSearchData.farmMaxUserCnt as string,
  });

  //검색 데이터 변경
  const changeSearchData = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;

    setSearchData({
      ...searchData,
      [name]: value,
    });
  };

  //검색 버튼 클릭시, 검색 리스트 페이지로 이동
  const handleSearch = async () => {
    const queryString = new URLSearchParams(searchData).toString();

    setFarmSearchData(searchData);
    router.push(`/search_list?${queryString}`);
  };

  const handleEnter = (e: React.KeyboardEvent<HTMLInputElement>) =>
    e.key === "Enter" && handleSearch();

  useEffect(() => {
    setSearchData({
      ...searchData,
      farmKind: farmData,
    });
  }, [farmData]);

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
          onKeyDown={handleEnter}
          type="search"
          placeholder="검색"
          name="farmName"
          defaultValue={searchData.farmName}
          onChange={(e) => changeSearchData(e)}
        />
      </div>
      <CalendarInput
        size={18}
        changeData={changeSearchData}
        value={searchData.farmUseDay}
      />
      <PersonInput
        size={18}
        changeData={changeSearchData}
        value={searchData.farmMaxUserCnt}
      />

      <button
        onClick={handleSearch}
        className="bg-point_color text-white rounded-md w-[18%] px-3 py-2">
        {detail ? "재검색" : "검색"}
      </button>
    </div>
  );
}
