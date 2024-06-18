import BackButton from "../ui/back_button";
import Completed from "./completed";
import PayCompleted from "./pay_completed";

export default function Contents() {
  return (
    <div className="px-layout_px text-text_default">
      <BackButton text="예약 완료" />
      <Completed />
      <PayCompleted />
      {/* <FarmData farmData={{testFarmData}}/> */}
    </div>
  );
}
