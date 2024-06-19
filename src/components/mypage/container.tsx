import Userinfo from "./user_info";
import ReservationList from "./reservation_list";

export default function Container() {
  return (
    <div className="border-t p-layout_px">
      <Userinfo />
      <ReservationList />
    </div>
  );
}
