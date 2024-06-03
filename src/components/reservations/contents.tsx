import FarmData from "@/components/reservations/farm_data";
import BackButton from "@/components/ui/back_button";

export default function Contsnts() {
  return (
    <section className="px-layout_px border-t">
      <BackButton text={"예약 확인 및 결제"} />
      <FarmData />
    </section>
  );
}
