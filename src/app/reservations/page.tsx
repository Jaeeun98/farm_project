import Header from "@/components/common/header";
import BackButton from "@/components/ui/back_button";

export default function reservations() {
  return (
    <div>
      <Header />
      <section className="px-layout_px">
        <BackButton text={"예약 확인 및 결제"} />
        <div></div>
      </section>
    </div>
  );
}
