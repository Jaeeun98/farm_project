import Image from "next/image";
import StarScore from "../ui/star_score";
import Call from "../ui/call";
import Time from "../ui/time";
import CalendarInput from "../ui/calendar_input";
import PersonInput from "../ui/person_input";

//예약 확인 및 결제, 농장 데이터
export default function FarmData() {
  return (
    <div className="h-[248px] text-text_default flex shadow-lg rounded-box_rounded px-8 py-6 gap-6">
      <Image
        className="rounded-box_rounded"
        src="/images/banner.png"
        alt="farm_img"
        width={353}
        height={192}
      />
      <div className="w-[80%]">
        <p className="text-text_sub">농장</p>
        <p className="my-3 text-[24px] font-bold">농장명</p>
        <div className="flex">
          <StarScore score="0.0" />
          <p className="text-text_sub text-[14px]">000명</p>
        </div>
        <div className="flex gap-4 my-3">
          <Call phoneNumber="010-0000-0000" />
          <Time time="00:00 - 00:00 체험시간 2시간" />
        </div>
        <div className="flex w-full gap-4">
          <CalendarInput size={50} />
          <PersonInput size={50} />
        </div>
      </div>
    </div>
  );
}
