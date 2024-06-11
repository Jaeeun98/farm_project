"use client";

import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { settings } from "./slider_setting";
import { useState } from "react";
import { FarmTimeArr } from "@/types/farm";

//예약 시간 컴포넌트

// const testData = {
//   timeArr: [
//     "10:00",
//     "10:30",
//     "11:00",
//     "11:30",
//     "12:00",
//     "12:30",
//     "13:00",
//     "13:30",
//   ], //예약시간
//   unableArr: ["10:30", "13:30"], //예약 불가 시간
// };

const possible_time_style = "border border-point_color text-point_color";
const unable_time_style = "bg-sub_color text-[#C6C6C6]";
const select_time_style = "bg-point_color text-[white]";

interface Props {
  selectTime: string;
  timeChange: (v: string) => void;
  timeArr: FarmTimeArr[];
}

export default function Time({ selectTime, timeChange, timeArr }: Props) {
  return (
    <div className="border rounded-box_rounded shadow-lg w-full h-[118px] px-8 py-6 ">
      <h2 className="font-bold">예약시간</h2>
      <Slider {...settings}>
        {timeArr.map((item) => {
          // const possible = !testData.unableArr.includes(item);
          const select = item.farmUseTimeDetailSlot === selectTime;

          return (
            <button
              key={item.farmUseTimeDetailSlot}
              onClick={() => timeChange(item.farmUseTimeDetailSlot)}
              // disabled={!possible || select}
              className={`${
                select ? select_time_style : possible_time_style
                // : possible
                // ? possible_time_style
                // unable_time_style
              }  rounded-3xl px-4 py-1 w-[70px]`}>
              {item.farmUseTimeDetailSlot}
            </button>
          );
        })}
      </Slider>
    </div>
  );
}
