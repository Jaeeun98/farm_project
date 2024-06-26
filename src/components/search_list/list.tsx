import { useSearchParams } from "next/navigation";
import { useEffect, useState } from "react";
import { Suspense } from "react";

import { getFarmSearchList } from "@/app/api/farm";
import { getFilterKey } from "../common/filterArr";
import { FarmData } from "@/types/farm";
import Image from "next/image";
import StarScore from "../ui/star_score";
import Addr from "../ui/addr";
import Time from "../ui/time";
import Link from "next/link";
import { useFarmSearchData } from "@/context/farm_search_context";

interface Props {
  rangeData: string;
}

//searh list ui
export default function List({ rangeData }: Props) {
  const searchParams = useSearchParams();
  const [listData, setListData] = useState<FarmData[]>([]);
  const { farmSearchData } = useFarmSearchData();

  if (!searchParams) return <></>;

  const getRangeKey = () => {
    switch (rangeData) {
      case "최신순":
        return "createDate";
      case "가격 높은순":
        return "highUseAmt";
      case "가격 낮은순":
        return "lowUseAmt";
      default:
        "";
    }
  };

  //검색 리스트 가져오기
  const handleGetSearhData = async () => {
    const result = await getFarmSearchList({
      ...farmSearchData,
      farmKind: getFilterKey(farmSearchData.farmKind),
      orderByKind: getRangeKey() as string,
    });

    if (result.status === "SUCCESS") {
      setListData(result.result);
    } else {
      alert(result.errorMessage);
    }
  };

  useEffect(() => {
    handleGetSearhData();
  }, [farmSearchData]);

  useEffect(() => {
    handleGetSearhData();
  }, [rangeData]);

  return (
    <Suspense>
      <ul className="w-full mt-10 flex gap-4 justify-between flex-wrap box-border ">
        {listData.map((item) => (
          <li
            key={item.farmId}
            className="text-text_default flex w-[49.5%] border shadow-xl rounded-xl px-8 py-5 box-border">
            <Link className="flex " href={`/detail/${item.farmId}`}>
              <Image
                className="rounded-xl me-6"
                src={item.farmMainImageUrl}
                width={280}
                height={192}
                alt="farm_iamge"
              />
              <div className="w-[525px]">
                <div className="mb-12">
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
                </div>
                <div className="flex justify-end gap-2 items-end">
                  {item.farm_event_dicount_YN && (
                    <p className={`text-text_sub text-[14px] line-through`}>
                      {item.farmEventDiscountRate}
                      {item.farmEventDiscountOriginalAmt}
                    </p>
                  )}

                  <p className="text-[20px] font-bold"> {item.farmUseAmt}~</p>
                </div>
              </div>
            </Link>
          </li>
        ))}
      </ul>
    </Suspense>
  );
}
