"use client";

import { useState } from "react";
import Search from "./common/search";

const filterArr = ["농장", "목장", "체험"];

export default function MainSearch() {
  const [searchData, setSearchData] = useState(filterArr[0]);

  const changeSearchData = (filterMenu: string) => {
    setSearchData(filterMenu);
  };

  return (
    <div className="bg-white w-full h-[158px] rounded-lg">
      <ul className="flex p-4 border-b border-b-[#ddd]">
        {filterArr.map((item) => (
          <li
            onClick={() => changeSearchData(item)}
            key={item}
            className={`text-[18px] p-2 cursor-pointer ${
              item === searchData
                ? " font-bold text-point_color"
                : "text-text_sub"
            }`}>
            {item}
          </li>
        ))}
      </ul>
      <Search />
    </div>
  );
}
