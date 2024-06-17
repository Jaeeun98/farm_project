interface Props {
  backAlertModalClose: () => void;
  handleBack: () => void;
}

const button_style = "w-[145px] h-[48px] rounded-md";

export default function BackAlertModal({
  backAlertModalClose,
  handleBack,
}: Props) {
  return (
    <div className="flex justify-center items-center w-full h-full absolute top-0 left-0 bg-text_default bg-opacity-75 overflow-hidden z-50">
      <div className="bg-[#fff] rounded-md w-[335px] h-[185px] text-center py-8 px-4">
        <div className="text-text_default font-bold text-[20px]">
          <p>작성 중인 정보가 있습니다.</p>
          <p>뒤로 가시겠습니까?</p>
        </div>
        <div className="flex mt-4 gap-2 justify-center">
          <button
            onClick={handleBack}
            className={`${button_style} border border-[#696969] text-[#696969]`}>
            네
          </button>
          <button
            onClick={backAlertModalClose}
            className={`${button_style} bg-point_color text-[#fff]`}>
            아니요
          </button>
        </div>
      </div>
    </div>
  );
}
