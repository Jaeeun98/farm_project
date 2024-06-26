"use client";

import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

import { FarmTimeArr } from "@/types/farm";
import { settings } from "./slider_setting";
import "./slider.css";

//예약 시간 컴포넌트

const possible_time_style = "border border-point_color text-point_color";
const unable_time_style = "bg-sub_color text-[#C6C6C6]";
const select_time_style = "bg-point_color text-[white]";

interface Props {
  selectTime: string;
  timeChange: (start: string) => void;
  timeArr: FarmTimeArr[];
}

export default function Time({ selectTime, timeChange, timeArr }: Props) {
  return (
    <div className="border rounded-box_rounded shadow-lg w-full h-[125px] px-8 py-6 ">
      <h2 className="font-bold mb-4">예약시간</h2>
      <Slider {...settings}>
        {timeArr.map((item, i) => {
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
