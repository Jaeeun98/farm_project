interface Props {
  size: number;
  changeSearchData: (e: React.ChangeEvent<HTMLInputElement>) => void;
}

export default function CalendarInput({ size, changeSearchData }: Props) {
  return (
    <input
      className={`bg-sub_color rounded-sm px-3 py-2 w-[${size}%] `}
      type="date"
      name="farmUseDay"
      onChange={(e) => changeSearchData(e)}
    />
  );
}
