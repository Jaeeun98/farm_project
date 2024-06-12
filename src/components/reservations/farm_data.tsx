import Image from "next/image";
import StarScore from "../ui/star_score";
import Call from "../ui/call";
import Time from "../ui/time";
import CalendarInput from "../ui/calendar_input";
import PersonInput from "../ui/person_input";
import { FarmDetailData } from "@/types/farm";

interface Props {
  inputChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  farmData: FarmDetailData;
}

//예약 확인 및 결제, 농장 데이터
export default function FarmData({ inputChange, farmData }: Props) {
  return (
    <div className="border h-[248px] text-text_default flex shadow-lg rounded-box_rounded px-8 py-6 gap-6">
      <Image
        className="rounded-box_rounded"
        src={farmData.bannerImageList[0].bannerImageUrl}
        alt="farm_img"
        width={353}
        height={192}
      />
      <div className="w-[80%]">
        <p className="text-text_sub">{farmData.farmKindNm}</p>
        <p className="my-3 text-[24px] font-bold">{farmData.farmName}</p>
        <div className="flex">
          <StarScore score={farmData.reviewStar} />
          <p className="text-text_sub text-[14px]">{farmData.reviewStarCnt}</p>
        </div>
        <div className="flex gap-4 my-3">
          <Call phoneNumber={farmData.farmOwnerTel} />
          <Time time={farmData.farmUseTimeAndDetailTimeFormat} />
        </div>
        <div className="flex w-full gap-4">
          <CalendarInput size={50} changeData={inputChange} />
          <PersonInput size={50} changeData={inputChange} />
        </div>
      </div>
    </div>
  );
}
