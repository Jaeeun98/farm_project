"use client";

interface Props {
  session: boolean;
}

//예약하기 버튼
export default function ReservationButton({ session }: Props) {
  const handleBtnClick = () => {
    if (!session) return alert("로그인 후 예약 가능합니다.");
  };

  return (
    <button
      onClick={handleBtnClick}
      className="w-full bg-point_color mt-4 py-3 rounded-lg text-white">
      예약하기
    </button>
  );
}
