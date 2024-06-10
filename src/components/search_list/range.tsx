"use client";
export const rangeArr = ["최신순", "인기순", "가격 높은순", "가격 낮은순"];

interface Props {
  rangeData: string;
  setRangeData: (v: string) => void;
}

const button_style = "bg-sub_color text-[#C6C6C6]";
const select_button_style = "bg-point_color text-[#fff]";

//정렬 array
export default function Range({ setRangeData, rangeData }: Props) {
  return (
    <div>
      {rangeArr.map((item) => (
        <button
          onClick={() => setRangeData(item)}
          className={`
          me-4 py-[4px] px-[16px] rounded-full text-[14px]
          ${item === rangeData ? select_button_style : button_style}`}
          key={item}>
          {item}
        </button>
      ))}
    </div>
  );
}
