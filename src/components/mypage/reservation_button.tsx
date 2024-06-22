"use client";

import { farmCancel } from "@/app/api/user";
import { useState } from "react";
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

  const handleFarmCancel = async () => {
    if (text !== "예약취소") return;
    const result = await farmCancel(id);

    if (result.status === "SUCCESS") alert("예약이 취소되었습니다.");
    else alert(result.errorMessage);

    cancelModalClose();
  };

  const cancelModalClose = () => setAlertModal(!alertModal);

  return (
    <>
      <button
        onClick={cancelModalClose}
        disabled={!(text === "예약취소")}
        className={`w-[120px] h-[48px] rounded-[8px] ${buttonStyle(text)}`}>
        {text}
      </button>
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
