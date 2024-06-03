"use client";

import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { settings } from "./slider_setting";
import { useState } from "react";

//예약 시간 컴포넌트

const testData = {
  timeArr: [
    "10:00",
    "10:30",
    "11:00",
    "11:30",
    "12:00",
    "12:30",
    "13:00",
    "13:30",
  ], //예약시간
  unableArr: ["10:30", "13:30"], //예약 불가 시간
};

const possible_time_style = "border border-point_color text-point_color";
const unable_time_style = "bg-[#F6F6F6] text-[#C6C6C6]";
const select_time_style = "bg-point_color text-[white]";

export default function Time() {
  const [selectTime, setSelectTime] = useState("10:00");
  return (
    <div className="rounded-box_rounded shadow-lg w-full h-[118px] mt-8 px-8 py-6 ">
      <h2 className="font-bold">예약시간</h2>
      <Slider {...settings}>
        {testData.timeArr.map((item) => {
          const possible = !testData.unableArr.includes(item);
          const select = item === selectTime;
          return (
            <button
              disabled={!possible || select}
              className={`${
                select
                  ? select_time_style
                  : possible
                  ? possible_time_style
                  : unable_time_style
              }  rounded-3xl px-4 py-1 w-[70px]`}>
              {item}
            </button>
          );
        })}
      </Slider>
    </div>
  );
}
