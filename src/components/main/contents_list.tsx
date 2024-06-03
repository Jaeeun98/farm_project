import Image from "next/image";
import StarScore from "../ui/star_score";

const testData = [
  {
    img: "/images/banner.png",
    filter: "농장",
    name: "농장1",
    addr: "주소1",
    score: "0.0",
    num: "000",
    price: "10,000",
  },
  {
    img: "/images/banner.png",
    filter: "농장",
    name: "농장2",
    addr: "주소2",
    score: "0.0",
    num: "000",
    price: "10,000",
  },
  {
    img: "/images/banner.png",
    filter: "농장",
    name: "농장3",
    addr: "주소3",
    score: "0.0",
    num: "000",
    price: "10,000",
  },
  {
    img: "/images/banner.png",
    filter: "농장",
    name: "농장4",
    addr: "주소4",
    score: "0.0",
    num: "000",
    price: "10,000",
  },
];

const sub_text_style = `text-[12px] text-text_sub my-1`;
const default_text_style = `text-text_default font-bold my-1`;

export default function ContentsList() {
  return (
    <ul className="flex w-full justify-between">
      {testData.map((item) => (
        <li className="w-[24%]">
          <Image
            className="w-[100%] h-[193px] rounded-box_rounded"
            src={item.img}
            alt="농장이미지"
            width={425}
            height={193}
          />
          <p className={`${sub_text_style} mt-3`}>{item.filter}</p>
          <p className={`${default_text_style} text-[16px]`}>{item.name}</p>
          <p className={`${sub_text_style}`}>{item.addr}</p>
          <div className="flex items-center">
            <StarScore score={item.score} />
            <span className={`${sub_text_style}`}>{item.num}명</span>
          </div>
          <p className={`${default_text_style} text-[20px] text-right`}>
            {item.price}원~
          </p>
        </li>
      ))}
    </ul>
  );
}
