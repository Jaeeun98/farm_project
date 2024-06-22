import Image from "next/image";

import { History } from "@/types/farm";

import Call from "../ui/call";
import Time from "../ui/time";
import Addr from "../ui/addr";
import Calenadr from "../ui/calendar";
import Email from "../ui/email";
import ReservationButton from "./reservation_button";

interface Props {
  data: History;
}

const title = `my-2 text-[20px] font-bold`;

export default function Reservation({ data }: Props) {
  return (
    <div className="mb-6 border h-[248px] text-text_default flex shadow-lg rounded-box_rounded px-8 py-6 gap-6">
      <div className="flex gap-8">
        <Image
          className="rounded-box_rounded"
          src={data.farmMainImageUrl}
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
            <Time
              time={`${data.reservationStartTime} ~ ${data.reservationEndTime}`}
            />
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
        <div className="flex flex-wrap w-[140px] content-between justify-end">
          <ReservationButton
            text={data.reservationStatusNm}
            id={data.reservationId}
          />
          <p className="text-[28px] font-bold">{data.farmUseAmt}</p>
        </div>
      </div>
    </div>
  );
}
