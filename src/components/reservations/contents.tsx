"use client";

import { useSearchParams, useRouter } from "next/navigation";
import { useCallback, useEffect, useState } from "react";

import FarmData from "@/components/reservations/farm_data";
import BackButton from "@/components/ui/back_button";
import Time from "./time";
import BookerInformation from "./booker_information";
import PayInformation from "./pay_information";
import { farmReservation, getFarmDetailData } from "@/app/api/farm";
import { FarmDetailData } from "@/types/farm";
import BackAlertModal from "./back_alert_modal";

//예약확인 및 결제 컨텐츠
export default function Contsnts() {
  const searchParams = useSearchParams();
  const router = useRouter();

  const farmId = searchParams.get("farmId");
  const [initialized, setInitialized] = useState(false);

  const [farmData, setFarmData] = useState<null | FarmDetailData>(null);
  const [backAlertModal, setBackAlertModal] = useState(false);
  const [reservationData, setReservationData] = useState({
    farmId,
    reservationName: "",
    reservationEmail: "",
    reservationTel: "",
    reservationDate: "",
    reservationParticipants: "",
    reservationStartTime: "",
    reservationEndTime: "",
  });

  const inputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    let { name, value } = e.target;

    if (name === "farmMaxUserCnt") name = "reservationParticipants";
    if (name === "farmUseDay") name = "reservationDate";

    setReservationData({
      ...reservationData,
      [name]: value,
    });
  };

  //시간 변경 시
  const timeChange = (
    reservationStartTime: string,
    reservationEndTime: string
  ) => {
    setReservationData({
      ...reservationData,
      reservationStartTime,
      reservationEndTime,
    });
  };

  //농장 데이터 가져오기
  const handleGetFarmDetailData = async () => {
    const result = await getFarmDetailData(farmId as string);

    setFarmData(result);
  };

  //결제하기 클릭 시
  const handlePay = async () => {
    //* 결제하기 후 결과 넣어야함 > 로그인 토큰 처리 한 후에 *
    const result = await farmReservation(reservationData);
    console.log(result);
  };

  const handlePopState = useCallback(() => {
    if (!backAlertModal) setBackAlertModal(true);
  }, []);

  //뒤로가기
  const handleBack = () => {
    setBackAlertModal(false);
    history.back();
    history.back();
    window.removeEventListener("popstate", handlePopState);
  };

  //모달 close
  const backAlertModalClose = () => setBackAlertModal(false);

  useEffect(() => {
    if (!initialized) {
      history.pushState(null, "", location.href); // 초기 상태 푸시
      setInitialized(true);
    }

    window.addEventListener("popstate", handlePopState);
  }, []);

  useEffect(() => {
    handleGetFarmDetailData();
  }, []);

  if (!farmData) return <></>;

  return (
    <section className="px-layout_px border-t mb-24">
      <BackButton text={"예약 확인 및 결제"} />
      <FarmData inputChange={inputChange} farmData={farmData} />
      <div className="flex gap-6 mt-6">
        <div className="w-[75%]">
          <Time
            timeArr={farmData.farmUseTimeDetailList}
            selectTime={reservationData.reservationStartTime}
            timeChange={timeChange}
          />
          <BookerInformation inputChange={inputChange} />
        </div>
        <PayInformation
          handlePay={handlePay}
          reservationData={reservationData}
        />
      </div>
      {backAlertModal && (
        <BackAlertModal
          backAlertModalClose={backAlertModalClose}
          handleBack={handleBack}
        />
      )}
    </section>
  );
}
