interface Props {
  modalClose: () => void;
  handleYClick: () => void;
  text: string;
}

const button_style = "w-[145px] h-[48px] rounded-md";

export default function BackAlertModal({
  modalClose,
  handleYClick,
  text,
}: Props) {
  return (
    <div className="flex justify-center items-center w-full h-full absolute top-0 left-0 bg-text_default bg-opacity-75 overflow-hidden z-50">
      <div className="bg-[#fff] rounded-md  text-center py-8 px-4">
        <div className="text-text_default font-bold text-[20px]">{text}</div>
        <div className="flex mt-6 gap-2 justify-center">
          <button
            onClick={handleYClick}
            className={`${button_style} border border-[#696969] text-[#696969]`}>
            네
          </button>
          <button
            onClick={modalClose}
            className={`${button_style} bg-point_color text-[#fff]`}>
            아니요
          </button>
        </div>
      </div>
    </div>
  );
}
