import Image from "next/image";
import StarScore from "../ui/star_score";
import { FarmData } from "@/types/farm";
import Link from "next/link";

interface Props {
  contentsData: FarmData[];
}

const sub_text_style = `text-[12px] text-text_sub my-1`;
const default_text_style = `text-text_default font-bold my-1`;

export default function ContentsList({ contentsData }: Props) {
  return (
    <ul className="flex w-full gap-4">
      {contentsData?.map((item) => (
        <li key={item.farmId} className="w-[24.3%]">
          <Link href={`/detail/${item.farmId}`}>
            <Image
              className="w-[100%] h-[193px] rounded-box_rounded"
              src={item.farmMainImageUrl}
              alt="농장이미지"
              width={425}
              height={193}
            />
            <p className={`${sub_text_style} mt-3`}>{item.farmKindNm}</p>
            <p className={`${default_text_style} text-[16px]`}>
              {item.farmName}
            </p>
            <p className={`${sub_text_style}`}>{item.farmZip}</p>
            <div className="flex items-center">
              <StarScore score={item.reviewStar} />
              <span className={`${sub_text_style}`}>{item.reviewStarCnt}</span>
            </div>
            <p className={`${default_text_style} text-[20px] text-right`}>
              {item.farmUseAmt}~
            </p>
          </Link>
        </li>
      ))}
    </ul>
  );
}
