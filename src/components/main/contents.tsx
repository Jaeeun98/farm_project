"use client";
import { useState } from "react";
import FilterButton from "./filter_button";
import { filterArr } from "../common/filterArr";
import ContentsList from "./contents_list";

export default function Contents() {
  const [selectFilter, setSelectFilter] = useState(filterArr[0]);

  const changeSelectData = (v: string) => {
    setSelectFilter(v);
  };

  return (
    <section className="px-16 py-12">
      <h2 className="text-[24px] font-bold">추천 체험지</h2>
      <FilterButton
        selectFilter={selectFilter}
        changeSelectData={changeSelectData}
      />
      <ContentsList />
    </section>
  );
}
