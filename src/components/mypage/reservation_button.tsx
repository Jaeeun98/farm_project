"use client";
import { useRouter } from "next/navigation";
import { useState } from "react";

import { farmCancel } from "@/app/api/user";
import BackAlertModal from "../common/back_alert_modal";

interface Props {
  text: string;
  id: string;
}

const waiting_style = `bg-[#FF5000] text-[#fff]`;
const cancel_style = `border border-point_color text-point_color`;
const completed_style = `bg-sub_color text-text_sub`;

const buttonStyle = (text: string) => {
  switch (text) {
    case "예약대기":
      return waiting_style;
    case "예약확정":
      return completed_style;
    case "예약취소":
      return cancel_style;
  }
};

export default function ReservationButton({ text, id }: Props) {
  const [alertModal, setAlertModal] = useState(false);
  const router = useRouter();

  const handleFarmCancel = async () => {
    console.log("dddd");

    const result = await farmCancel(id);
    console.log("dd");
    console.log(result);
    console.log(result?.status);

    if (result.status === 401 || result.status === 500) {
      alert("로그인 인증이 만료되었습니다.");
      router.push("/login");
    } else if (result.status === "SUCCESS") {
      alert("예약이 취소되었습니다.");
      router.refresh();
    } else alert(result.errorMessage);

    cancelModalClose();
  };

  const cancelModalClose = () => setAlertModal(!alertModal);

  return (
    <>
      <div className="flex">
        <div
          className={`cursor-default text-center pt-[11.5px] w-[120px] h-[48px] rounded-[8px] ${buttonStyle(
            text
          )}`}>
          {text}
        </div>
        {text === "예약대기" && (
          <button
            className="ms-3 bg-point_color text-[#fff] rounded-lg w-[120px] h-[48px]"
            onClick={cancelModalClose}>
            예약취소
          </button>
        )}
      </div>

      {alertModal && (
        <BackAlertModal
          text={"예약취소 하시겠습니까?"}
          modalClose={cancelModalClose}
          handleYClick={handleFarmCancel}
        />
      )}
    </>
  );
}
