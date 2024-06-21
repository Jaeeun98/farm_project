import Image from "next/image";

import { History } from "@/types/farm";

import Call from "../ui/call";
import Time from "../ui/time";
import Addr from "../ui/addr";
import Calenadr from "../ui/calendar";
import Email from "../ui/email";

interface Props {
  data: History;
}

const title = `my-2 text-[20px] font-bold`;

const waiting_style = `bg-[#FF5000] text-[#fff]`;
const cancel_style = `border border-point_color text-point_color`;
const completed_style = `bg-sub_color text-text_sub`;

export default function Reservation({ data }: Props) {
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
  return (
    <div className="border h-[248px] text-text_default flex shadow-lg rounded-box_rounded px-8 py-6 gap-6">
      <div className="flex">
        <Image
          className="rounded-box_rounded"
          src={""}
          alt="farm_img"
          width={353}
          height={192}
        />
        <div className="w-[80%]">
          <div className="flex mb-8">
            <div className="flex me-6">
              <p className="me-3">예약번호</p>
              <p className="text-point_color">{data.reservationId}</p>
            </div>
            <div className="flex">
              <p className="me-3">입금정보</p>
              <p className="text-point_color">{data.farmAccountNo}</p>
            </div>
          </div>
          <p className="text-text_sub">농장정보</p>
          <p className={title}>{data.farmName}</p>
          <div className="flex gap-4 my-3">
            <Addr addr={data.farmZip} />
            <Call phoneNumber={data.farmOwnerTel} />
            <Calenadr date={data.reservationDate} />
            <Time time={data.farmUseTimeDetail} />
          </div>
        </div>
      </div>
      <div className="border-s ps-16 flex justify-between w-[35%]">
        <div className="flex items-center">
          <div>
            <p className="text-text_sub">예약 정보</p>
            <p className={title}>{data.reservationName}</p>
            <div className="flex gap-6">
              <Call phoneNumber={data.reservationTel} />
              <Email email={data.reservationEmail} />
            </div>
          </div>
        </div>
        <div className="flex flex-wrap w-[120px] content-between justify-end">
          <button
            className={`w-[120px] h-[48px] rounded-[8px] ${buttonStyle(
              data.reservationStatusNm
            )}`}>
            {data.reservationStatusNm}
          </button>
          <p className="text-[28px] font-bold">{data.farmUseAmt}</p>
        </div>
      </div>
    </div>
  );
}
