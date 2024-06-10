import { useSearchParams } from "next/navigation";
import { useEffect, useState } from "react";

import { getFarmSearchList } from "@/app/api/farm";
import { getFilterKey } from "../common/filterArr";
import { FarmData } from "@/types/farm";
import Image from "next/image";
import StarScore from "../ui/star_score";
import Addr from "../ui/addr";
import Time from "../ui/time";
import Link from "next/link";

interface Props {
  rangeData: string;
}

//searh list ui
export default function List({ rangeData }: Props) {
  const searchParams = useSearchParams();
  const [listData, setListData] = useState<FarmData[]>([]);

  //검색 리스트 가져오기
  const handleGetSearhData = async () => {
    const farmKind = searchParams.get("farmKind") || "";
    const farmName = searchParams.get("farmName") || "";
    const farmUseDay = searchParams.get("farmUseDay") || "";
    const farmMaxUserCnt = searchParams.get("farmMaxUserCnt") || "";

    //*rangeData 추가하기(백엔드 api 바뀌면)*
    const result = await getFarmSearchList({
      farmKind: getFilterKey(farmKind),
      farmName,
      farmUseDay,
      farmMaxUserCnt,
    });

    if (result.status === "SUCCESS") {
      setListData(result.result);
    } else {
      alert(result.errorMessage);
    }
  };

  useEffect(() => {
    handleGetSearhData();
  }, [rangeData]);

  return (
    <ul className="w-full mt-10 flex gap-2 justify-between">
      {listData.map((item) => (
        <li
          key={item.farmId}
          className="text-text_default flex w-[49.5%] border shadow-xl rounded-xl px-8 py-5 ">
          <Link className="flex " href={`/detail/${item.farmId}`}>
            <Image
              className="rounded-xl me-6"
              src={item.farmMainImageUrl}
              width={280}
              height={192}
              alt="farm_iamge"
            />
            <div className="w-[70%]">
              <p className="text-text_sub">{item.farmKindNm}</p>
              <p className="text-[24px] font-bold my-1">{item.farmName}</p>
              <div className="flex items-center">
                <StarScore score={item.reviewStar} />
                <span className="text-[14px] text-text_sub">
                  {item.reviewStarCnt}
                </span>
              </div>
              <div className="flex my-3 gap-4">
                <Addr addr={item.farmZip} />
                <Time time={"체험시간 두시간 "} />
              </div>
              <p className="text-right font-bold text-[20px] mt-7">
                {item.farmUseAmt}~
              </p>
            </div>
          </Link>
        </li>
      ))}
    </ul>
  );
}