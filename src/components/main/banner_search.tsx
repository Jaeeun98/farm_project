"use client";

import { useState } from "react";

import Search from "../common/search";
import { filterArr } from "../common/filterArr";
import MobileSearch from "../common/mobile_search";

//main, 베너 검색페이지
export default function BannerSearch() {
  const [farmData, setFarmData] = useState(filterArr[0]);

  //filter 변경
  const farmChange = (farm: string) => {
    setFarmData(farm);
  };
  return (
    <div className="bg-white w-full h-[158px] rounded-lg">
      <div className="lex p-4 border-b border-b-[#ddd] ">
        {filterArr.map((item) => (
          <button
            onClick={() => farmChange(item)}
            key={item}
            className={`text-[18px] p-2 cursor-pointer ${
              item === farmData
                ? " font-bold text-point_color"
                : "text-text_sub"
            }`}>
            {item}
          </button>
        ))}
      </div>
      <Search farmData={farmData} />
    </div>
  );
}
