import Image from "next/image";
import StarScore from "../ui/star_score";
import { FarmData } from "@/types/farm";

interface Props {
  contentsData: FarmData[];
}

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

export default function ContentsList({ contentsData }: Props) {
  return (
    <ul className="flex w-full flex-wrap gap-4">
      {contentsData?.map((item) => (
        <li key={item.farmId} className="w-[24.3%]">
          <Image
            className="w-[100%] h-[193px] rounded-box_rounded"
            src={item.farmMainImageUrl}
            alt="농장이미지"
            width={425}
            height={193}
          />
          <p className={`${sub_text_style} mt-3`}>{item.farmKindNm}</p>
          <p className={`${default_text_style} text-[16px]`}>{item.farmName}</p>
          <p className={`${sub_text_style}`}>{item.farmZip}</p>
          <div className="flex items-center">
            <StarScore score={item.reviewStar} />
            <span className={`${sub_text_style}`}>{item.reviewStarCnt}</span>
          </div>
          <p className={`${default_text_style} text-[20px] text-right`}>
            {item.farmUseAmt}~
          </p>
        </li>
      ))}
    </ul>
  );
}
