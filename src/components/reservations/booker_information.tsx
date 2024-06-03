const input_style = "border-b w-full py-2 mt-2";
const input_box_style = "text-[14px] mb-8 text-text_default";
//예약자 정보
export default function BookerInformation() {
  return (
    <div className={`w-full h-[356px] shadow-lg rounded-box_rounded px-8 py-6`}>
      <h2 className="font-bold text-[20px] my-2">예약자 정보</h2>
      <div className={`${input_box_style}`}>
        <p>이름</p>
        <input
          className={`${input_style}`}
          type="text"
          name=""
          id=""
          placeholder="이름 입력"
        />
      </div>
      <div className={`${input_box_style}`}>
        <p>휴대폰번호</p>
        <input
          className={`${input_style}`}
          type="number"
          name=""
          id=""
          placeholder="휴대폰번호 입력('-'제외)"
        />
      </div>
      <div className={`${input_box_style}`}>
        <p>이메일 주소</p>
        <input
          className={`${input_style}`}
          type="text"
          name=""
          id=""
          placeholder="이메일 주소 입력"
        />
      </div>
    </div>
  );
}
