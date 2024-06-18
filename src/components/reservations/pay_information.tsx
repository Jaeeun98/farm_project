"use client";

import { ReservationData } from "@/types/farm";
import { useEffect, useState } from "react";

const label_style = "text-text_sub ";
const text_box_style = "flex w-full justify-between text-[14px] ";

const disabled_pay_button_style = "bg-sub_color text-[#C6C6C6] ";
const pay_button_style = "bg-point_color text-white";

interface Props {
  reservationData: ReservationData;
  handlePay: () => void;
  payData: {
    originalAmt: string;
    discountRate: string;
    amt: string;
  };
}

//결제정보
export default function PayInformation({
  reservationData,
  handlePay,
  payData,
}: Props) {
  const [agreement, setAgreement] = useState(false); //동의여부

  const handleSetAreement = (): boolean => {
    let state = false;

    if (
      reservationData.reservationName !== "" &&
      reservationData.reservationEmail !== "" &&
      reservationData.reservationTel !== "" &&
      reservationData.reservationDate !== "" &&
      reservationData.reservationParticipants !== "" &&
      reservationData.reservationStartTime !== "" &&
      agreement
    )
      state = true;

    return state;
  };

  useEffect(() => {
    handleSetAreement;
  }, [reservationData]);

  return (
    <div className="text-text_default">
      <div className=" border w-full h-[340px] shadow-lg rounded-box_rounded px-8 py-6">
        <h2 className="text-[20px] font-bold ">결제정보</h2>
        <div className="py-4 border-b">
          <div className={`${text_box_style}`}>
            <p className={`${label_style}`}>날짜</p>
            <p>{reservationData.reservationDate}</p>
          </div>
          <div className={`${text_box_style} my-2`}>
            <p className={`${label_style}`}>인원</p>
            <p>{reservationData.reservationParticipants}</p>
          </div>
          <div className={`${text_box_style}`}>
            <p className={`${label_style}`}>이벤트</p>
            <p>{payData.discountRate} 할인</p>
          </div>
        </div>
        <div className="flex justify-end gap-2 items-end my-4">
          <p className={`${label_style} text-[14px] line-through`}>
            {payData.discountRate} {payData.originalAmt}
          </p>
          <p>{payData.amt}</p>
        </div>
        <div className="flex gap-2 items-center">
          <input
            onClick={() => setAgreement(!agreement)}
            type="checkbox"
            name=""
            id=""
            defaultChecked={agreement}
          />
          <p className="text-[14px]">
            [필수] 예악자의 개인 정보 수집 및 이용에 동의합니다.
          </p>
        </div>
        <button
          onClick={handlePay}
          className={`${
            handleSetAreement() ? pay_button_style : disabled_pay_button_style
          } w-full rounded-md px-3 py-3 mt-6`}>
          결제하기
        </button>
      </div>
      <div className="mt-4 text-[14px]">
        <p>* 모든 결제는 무통장 입금으로 처리됩니다.</p>
        <p className="ml-3">
          결제 완료창의 계좌번호로 입금 후 예약처리가 됩니다.
        </p>
      </div>
    </div>
  );
}
