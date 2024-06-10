"use client";

import { useState } from "react";

import { rangeArr } from "./range";
import Range from "./range";
import List from "./list";

export default function Container() {
  const [rangeData, setRangeData] = useState(rangeArr[0]);

  return (
    <div className="px-layout_px mt-10">
      <Range rangeData={rangeData} setRangeData={setRangeData} />
      <List rangeData={rangeData} />
    </div>
  );
}
