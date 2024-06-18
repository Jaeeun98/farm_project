import Image from "next/image";

interface Props {
  icon: string;
  value: string;
}

export default function IconInputText({ icon, value }: Props) {
  return (
    <div className="relative bg-sub_color rounded-1xl flex items-center w-[33.3333%]">
      <Image
        className={"absolute left-3"}
        width={24}
        height={24}
        src={`/images/icon/${icon}.png`}
        alt={`${icon}_icon`}
      />
      <input
        className={"text-[14px] bg-sub_color w-full ps-11 pe-3 py-3 font-bold"}
        type="text"
        defaultValue={value}
        disabled
      />
    </div>
  );
}
