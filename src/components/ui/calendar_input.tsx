interface Props {
  size: number;
}

export default function CalendarInput({ size }: Props) {
  return (
    <input
      className={`bg-sub_color rounded-sm px-3 py-2 w-[${size}%] `}
      type="date"
      name=""
      id=""
    />
  );
}
