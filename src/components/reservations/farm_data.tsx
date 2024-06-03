import Image from "next/image";
import StarScore from "../ui/star_score";
import Call from "../ui/call";
import Time from "../ui/time";
import CalendarInput from "../ui/calendar_input";
import PersonInput from "../ui/person_input";

export default function FarmData() {
  return (
    <div className="h-[248px] flex shadow-lg rounded-[20px] px-8 py-4 gap-6">
      <Image
        className="rounded-[20px]"
        src="/images/banner.png"
        alt="farm_img"
        width={353}
        height={192}
      />
      <div>
        <p className="text-text_sub">농장</p>
        <p>농장명</p>
        <div className="flex">
          <StarScore score="0.0" />
          <p className="text-text_sub">000명</p>
        </div>

        <div className="flex">
          <Call phoneNumber="010-0000-0000" />
          <Time time="00:00 - 00:00 체험시간 2시간" />
        </div>
        <div className="flex w-full">
          <CalendarInput />
          <PersonInput />
        </div>
      </div>
    </div>
  );
}
