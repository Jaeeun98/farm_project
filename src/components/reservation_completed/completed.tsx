import Image from "next/image";
import CopyButton from "../common/copy_button";
import { PayData } from "@/types/farm";

interface Props {
  payData: PayData;
}

//예약완료 예약정보 확인 컴포넌트
export default function Completed({ payData }: Props) {
  return (
    <div className="text-center m-auto">
      <Image
        className="m-auto"
        src={"/images/icon/calendar.png"}
        alt="calendar_icon"
        width={156}
        height={156}
      />
      <p className="font-bold text-[28px] my-2">
        {payData.reservationName}님 예약이 신청되었습니다.
      </p>
      <div className="flex justify-center ">
        <p className="me-4 text-[20px]">예약번호</p>
        <span className="flex text-point_color">
          <p className="font-bold text-[20px] me-2">{payData.reservationId}</p>
          <CopyButton copyText={"2222222222"} />
        </span>
      </div>
    </div>
  );
}
