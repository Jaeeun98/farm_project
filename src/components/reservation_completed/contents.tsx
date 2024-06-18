"use client";
import BackButton from "../ui/back_button";
import Completed from "./completed";
import Farm from "./farm";
import PayCompleted from "./pay_completed";

import { usePayData } from "@/context/pay_context";

const testData = {
  farmAccountNo: "국민 4253014492621111 홍길이",
  farmKindNm: "농장",
  farmName: "부안그린팜",
  farmOwnerTel: "050-2486-6277",
  farmUseTimeDetail: "10:00 ~ 14:00 체험시간 2시간",
  reservationDate: "2024-06-05",
  reservationId: "a4d1150e-2d6a-11ef-83a0-02001701d75b",
  reservationName: "ㄴ",
  reservationParticipants: "2",
  reservationTime: "12:00 ~ 14:00",
  reviewStar: "0",
  reviewStarCnt: "0명",
  farnImgUrl: "",
};

export default function Contents() {
  const { payData } = usePayData();
  //* 데이터 바뀌면 실데이터 넣기
  // if (payData?.farmAccountNo === "") return <></>;

  return (
    <div className="px-layout_px text-text_default">
      <BackButton text="예약 완료" />
      <Completed payData={testData} />
      <PayCompleted payData={testData} />
      <Farm farmData={testData} />
    </div>
  );
}
