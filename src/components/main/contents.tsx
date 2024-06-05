"use client";
import { useEffect, useState } from "react";

import { getFarmList } from "@/app/api/farm";
import { filterArr, getFilterKey } from "../common/filterArr";

import FilterButton from "./filter_button";
import ContentsList from "./contents_list";
import { FarmData } from "@/types/farm";

export default function Contents() {
  const [selectFilter, setSelectFilter] = useState(filterArr[0]);
  const [contentsData, setContentsData] = useState<FarmData[]>([]);

  const changeSelectData = (v: string) => {
    setSelectFilter(v);
  };

  const handleGetFarmData = async () => {
    const filterkey = getFilterKey(selectFilter);
    const result = await getFarmList(filterkey);

    setContentsData(result.slice(0, 4));
  };

  useEffect(() => {
    handleGetFarmData();
  }, [selectFilter]);

  return (
    <section>
      <div className="px-layout_px py-12">
        <h2 className="text-[24px] font-bold">추천 체험지</h2>
        <FilterButton
          selectFilter={selectFilter}
          changeSelectData={changeSelectData}
        />
        <ContentsList contentsData={contentsData} />
      </div>
    </section>
  );
}
