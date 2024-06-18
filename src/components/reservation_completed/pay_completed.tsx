import { PayData } from "@/types/farm";
import CopyButton from "../common/copy_button";

interface Props {
  payData: PayData;
}

export default function PayCompleted({ payData }: Props) {
  return (
    <div className="text-[20px] items-center bg-[#F0F8FF] shadow-lg rounded-md py-4 mt-16 flex justify-center">
      <p className="me-4">계좌번호</p>
      <span className="flex text-point_color me-4">
        <p className="me-2">{payData.farmAccountNo}</p>
        <CopyButton copyText={payData.farmAccountNo} />
      </span>
      <p className="text-[14px]">
        *입금하시면 확인 후 예약확정 안내를 보내드립니다.
      </p>
    </div>
  );
}
