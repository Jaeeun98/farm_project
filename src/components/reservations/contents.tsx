import FarmData from "@/components/reservations/farm_data";
import BackButton from "@/components/ui/back_button";
import Time from "./time";
import BookerInformation from "./booker_information";
import PayInformation from "./pay_information";

//예약확인 및 결제 컨텐츠
export default function Contsnts() {
  return (
    <section className="px-layout_px border-t">
      <BackButton text={"예약 확인 및 결제"} />
      <FarmData />
      <div className="flex gap-6 mt-6">
        <div className="w-[75%]">
          <Time />
          <BookerInformation />
        </div>
        <PayInformation />
      </div>
    </section>
  );
}
