"use client";
import BackButton from "../ui/back_button";
import Completed from "./completed";
import Farm from "./farm";
import PayCompleted from "./pay_completed";

import { usePayData } from "@/context/pay_context";

export default function Contents() {
  const { payData } = usePayData();
  // if (payData?.farmAccountNo === "") return <></>;

  return (
    <div className="px-layout_px text-text_default">
      <BackButton text="예약 완료" />
      <Completed payData={payData} />
      <PayCompleted payData={payData} />
      <Farm farmData={payData} />
    </div>
  );
}
