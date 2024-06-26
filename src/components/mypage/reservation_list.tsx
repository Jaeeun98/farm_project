import { userFarmHistory } from "@/app/api/user";
import NoReservation from "./no_reservation";
import { History } from "@/types/farm";
import Reservation from "./reservation";

//예약정보
export default async function ReservationList() {
  const result = await userFarmHistory();

  return (
    <div className="mt-12">
      <h2 className="text-[24px] font-semibold">예약 정보</h2>
      <div className="mt-6">
        {result?.result.length === 0 ? (
          <NoReservation />
        ) : (
          result?.result.map((item: History) => (
            <Reservation key={item.reservationId} data={item} />
          ))
        )}
      </div>
    </div>
  );
}
