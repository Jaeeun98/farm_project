import { ReservationData } from "@/types/farm";

const input_style = "border-b w-full p-2 mt-2";
const input_box_style = "text-[14px] mb-8 text-text_default";

interface Props {
  inputChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  reservationData: ReservationData;
}

//예약자 정보
export default function BookerInformation({
  inputChange,
  reservationData,
}: Props) {
  return (
    <div
      className={`mt-6 border w-full h-[356px] shadow-lg rounded-box_rounded px-8 py-6`}>
      <h2 className="font-bold text-[20px]">예약자 정보</h2>
      <div className={`${input_box_style} mt-4`}>
        <label id="reservationName">이름</label>
        <input
          onChange={(e) => inputChange(e)}
          className={`${input_style}`}
          type="text"
          id="reservationName"
          name="reservationName"
          defaultValue={reservationData.reservationName}
          placeholder="이름 입력"
        />
      </div>
      <div className={`${input_box_style}`}>
        <label id="reservationTel">휴대폰번호</label>
        <input
          onChange={(e) => inputChange(e)}
          className={`${input_style}`}
          type="number"
          name="reservationTel"
          id="reservationTel"
          defaultValue={reservationData.reservationTel}
          placeholder="휴대폰번호 입력('-'제외)"
        />
      </div>
      <div className={`${input_box_style}`}>
        <label id="reservationEmail">이메일 주소</label>
        <input
          onChange={(e) => inputChange(e)}
          className={`${input_style}`}
          type="text"
          name="reservationEmail"
          id="reservationEmail"
          defaultValue={reservationData.reservationEmail}
          placeholder="이메일 주소 입력"
        />
      </div>
    </div>
  );
}
