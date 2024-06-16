import FarmData from "../reservations/farm_data";
import BackButton from "../ui/back_button";
import Completed from "./completed";
import PayCompleted from "./pay_completed";

const testFarmData = {
  farmName: "",
  farmZip: "",
  farmUseTimeDetail: "",
  reviewStar: "",
  reviewStarCnt: "",
  bannerImageList: [],
  farmUseAmt: "",
  farmLongitude: "",
  farmLatitude: "",
  farmId: "",
  farmKindNm: "",
  farmUseTimeDetailList: [],
  farmOwnerTel: "",
  farmUseTimeAndDetailTimeFormat: "",
  farmIntrcn: "",
  reviewList: [],
  farmEventDiscountOriginalAmt: "",
  farmEventDiscountRate: "",
}

export default function Contents() {
  return (
    <div className="px-layout_px text-text_default">
      <BackButton text="예약 완료" />
      <Completed />
      <PayCompleted />
      <FarmData farmData={{testFarmData}}/>
    </div>
  );
}
