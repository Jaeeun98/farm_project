"use client";

import { useSearchParams } from "next/navigation";
import { useEffect, useState } from "react";

import FarmData from "@/components/reservations/farm_data";
import BackButton from "@/components/ui/back_button";
import Time from "./time";
import BookerInformation from "./booker_information";
import PayInformation from "./pay_information";
import { farmReservation, getFarmDetailData } from "@/app/api/farm";
import { FarmDetailData } from "@/types/farm";

//예약확인 및 결제 컨텐츠
export default function Contsnts() {
  const searchParams = useSearchParams();
  const farmId = searchParams.get("farmId");

  const [farmData, setFarmData] = useState<null | FarmDetailData>(null);

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

  const handleGetFarmDetailData = async () => {
    const result = await getFarmDetailData(farmId as string);

    setFarmData(result);
  };

  //결제하기 클릭 시
  const handlePay = async () => {
    const result = await farmReservation(reservationData);
  };

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
    </section>
  );
}
