"use client";

import { useRouter, useSearchParams } from "next/navigation";
import { useCallback, useEffect, useState } from "react";

import FarmData from "@/components/reservations/farm_data";
import BackButton from "@/components/ui/back_button";
import Time from "./time";
import BookerInformation from "./booker_information";
import PayInformation from "./pay_information";
import { farmReservation, getFarmDetailData } from "@/app/api/farm";
import { FarmDetailData } from "@/types/farm";
import BackAlertModal from "../common/back_alert_modal";
import { usePayData } from "@/context/pay_context";

//예약확인 및 결제 컨텐츠
export default function Contsnts() {
  const { setPayData } = usePayData();
  const searchParams = useSearchParams();
  const router = useRouter();

  if (!searchParams) return;

  const farmId = searchParams.get("farmId");
  const payData = {
    originalAmt: searchParams.get("originalAmt") || "",
    discountRate: searchParams.get("discountRate") || "",
    amt: searchParams.get("amt") || "",
  };

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
  const timeChange = (reservationStartTime: string) => {
    setReservationData({
      ...reservationData,
      reservationStartTime,
    });
  };

  //농장 데이터 가져오기
  const handleGetFarmDetailData = async () => {
    const result = await getFarmDetailData(farmId as string);

    setFarmData(result);
  };

  //결제하기 클릭 시
  const handlePay = async () => {
    //* 에러처리 추가하기 *
    const result = await farmReservation(reservationData);

    if (result.status === "FAIL") {
      alert(result.errorMessage);
      return;
    }

    setPayData(result.result);
    router.push("/reservation_completed");
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
          payData={payData}
        />
      </div>
      {backAlertModal && (
        <BackAlertModal
          text={"작성중인 정보가 있습니다. 뒤로 가시겠습니까?"}
          modalClose={backAlertModalClose}
          handleYClick={handleBack}
        />
      )}
    </section>
  );
}
