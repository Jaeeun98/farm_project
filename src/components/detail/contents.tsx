import { authOptions } from "@/pages/api/auth/[...nextauth]";
import { getServerSession } from "next-auth";

import ImgContents from "./img_contents";
import StarScore from "../ui/star_score";
import Review from "./review";
import Map from "./map";
import Link from "next/link";
import Call from "../ui/call";
import Time from "../ui/time";
import { getFarmDetailData } from "@/app/api/farm";
import ReservationButton from "./reservation_button";

interface Props {
  farmId: string;
}

const title_style = `font-bold text-[20px] mb-3`;

export default async function Contents({ farmId }: Props) {
  const farmData = await getFarmDetailData(farmId);
  const session = await getServerSession(authOptions);

  const payData = {
    originalAmt: farmData.farmEventDiscountOriginalAmt,
    discountRate: farmData.farmEventDiscountRate,
    amt: farmData.farmUseAmt,
  };

  return (
    <section className="px-layout_px text-text_default pb-24">
      <ImgContents imgs={farmData.bannerImageList} />
      <div className="border-b border-b-[#ddd] flex justify-between h-[259px]">
        <div className="w-[75%]">
          <div>
            <p className="text-text_sub my-1 text-[16px]">
              {farmData.farmKindNm}
            </p>
            <p className="font-bold my-2 text-[24px]">{farmData.farmName}</p>
            <p className="flex items-center pb-2">
              <span>
                <StarScore score={farmData.reviewStar} />
              </span>
              <span className="text-text_sub my-1 text-[14px]">
                {farmData.reviewStarCnt}
              </span>
            </p>
          </div>
          <Review reviewData={farmData.reviewList} />
        </div>
        <Map
          lat={Number(farmData.farmLatitude)}
          lng={Number(farmData.farmLongitude)}
          zip={farmData.farmZip}
        />
      </div>
      <div className="flex justify-between mt-8">
        <div className="w-[75%]">
          <p className={title_style}>농장소개</p>
          <Call phoneNumber={farmData.farmOwnerTel} />
          <Time time={farmData.farmUseTimeAndDetailTimeFormat} />
          <p className="mt-6 pe-16">{farmData.farmIntrcn}</p>
        </div>
        <div className="w-[24%] max-[425px] h-[180px] border rounded-2xl px-10 py-5 shadow-md">
          <p className={title_style}>결제정보</p>
          <p className=" text-right font-bold text-[20px]">10,000원</p>
          {session ? (
            <Link
              href={{
                pathname: "/reservations",
                query: { farmId, ...payData },
              }}>
              <ReservationButton session={true} />
            </Link>
          ) : (
            <ReservationButton session={false} />
          )}
        </div>
      </div>
    </section>
  );
}
