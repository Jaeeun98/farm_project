import Image from "next/image";
import StarScore from "../ui/star_score";
import Call from "../ui/call";
import Time from "../ui/time";

export default function FarmData() {
  return (
    <div className="flex">
      <Image src="/images/banner.png" alt="farm_img" width={353} height={192} />
      <div>
        <p>농장</p>
        <p>농장명</p>
        <StarScore score="000" />
        <div className="flex">
          <Call phoneNumber="010-0000-0000" />
          <Time time="00:00 - 00:00 체험시간 2시간" />
        </div>
      </div>
    </div>
  );
}
