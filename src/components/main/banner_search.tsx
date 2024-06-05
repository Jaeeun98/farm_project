"use client";

import { useState } from "react";
import Search from "../common/search";
import { filterArr, getFilterKey } from "../common/filterArr";
import { getFarmSearchList } from "@/app/api/farm";

//main, 베너 검색페이지
export default function BannerSearch() {
  const [searchData, setSearchData] = useState({
    farmKind: filterArr[0],
    farmName: "",
    farmUseDay: "",
    farmMaxUserCnt: "",
  });

  //검색 데이터 변경
  const changeSearchData = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;

    setSearchData({
      ...searchData,
      [name]: value,
    });
  };

  //filter 변경
  const farmChange = (farm: string) => {
    setSearchData({
      ...searchData,
      farmKind: farm,
    });
  };

  //검색 버튼 클릭시
  const handleSearch = async () => {
    const result = await getFarmSearchList({
      ...searchData,
      farmKind: getFilterKey(searchData.farmKind),
    });
  };

  return (
    <div className="bg-white w-full h-[158px] rounded-lg">
      <div className="flex p-4 border-b border-b-[#ddd]">
        {filterArr.map((item) => (
          <button
            onClick={() => farmChange(item)}
            key={item}
            className={`text-[18px] p-2 cursor-pointer ${
              item === searchData.farmKind
                ? " font-bold text-point_color"
                : "text-text_sub"
            }`}>
            {item}
          </button>
        ))}
      </div>
      <Search changeSearchData={changeSearchData} handleSearch={handleSearch} />
    </div>
  );
}
