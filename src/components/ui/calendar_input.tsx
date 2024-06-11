interface Props {
  size: number;
  changeData: (e: React.ChangeEvent<HTMLInputElement>) => void;
}

//날짜 선택
export default function CalendarInput({ size, changeData }: Props) {
  return (
    <input
      className={`text-[14px] bg-sub_color rounded-sm px-3 py-2 w-[${size}%] `}
      type="date"
      name="farmUseDay"
      onChange={(e) => changeData(e)}
    />
  );
}
