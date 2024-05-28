import { filterArr } from "../common/filterArr";

interface Props {
  selectFilter: string;
  changeSelectData: (v: string) => void;
}

export default function FilterButton({
  selectFilter,
  changeSelectData,
}: Props) {
  return (
    <ul className="flex text-center my-6">
      {filterArr.map((item) => (
        <li
          className={`text-[14px] rounded-3xl px-5 py-1 me-4 cursor-pointer ${
            item === selectFilter
              ? "bg-point_color text-white"
              : "bg-sub_color text-[#c6c6c6]"
          }`}
          onClick={() => changeSelectData(item)}
          key={item}>
          {item}
        </li>
      ))}
    </ul>
  );
}
