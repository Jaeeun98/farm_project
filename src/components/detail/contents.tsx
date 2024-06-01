import ImgContents from "./img_contents";
import StarScore from "../ui/star_score";
import Review from "./review";
import Map from "./map";
import Image from "next/image";
import Link from "next/link";
import Call from "../ui/call";
import Time from "../ui/time";

const imgTestData = [
  {
    id: 1,
    src: "/images/banner.png",
  },
  {
    id: 2,
    src: "/images/banner.png",
  },
  {
    id: 3,
    src: "/images/banner.png",
  },
  {
    id: 4,
    src: "/images/banner.png",
  },
  {
    id: 5,
    src: "/images/banner.png",
  },
];

const icon_box_style = ``;
const title_style = `font-bold text-[20px] mb-3`;
const pay_sub_text_style = `flex justify-between text-[14px]`;

export default function Contents() {
  return (
    <section className="px-layout_px text-text_default pb-24">
      <ImgContents imgs={imgTestData} />
      <div className="border-b border-b-[#ddd] flex justify-between h-[259px]">
        <div className="w-[75%]">
          <div>
            <p className="text-text_sub my-1 text-[16px]">농장</p>
            <p className="font-bold my-2 text-[24px]">농장명</p>
            <p className="flex items-center pb-2">
              <span>
                <StarScore score="0.0" />
              </span>
              <span className="text-text_sub my-1 text-[14px]">000명</span>
            </p>
          </div>
          <Review />
        </div>
        <Map />
      </div>
      <div className="flex justify-between mt-8">
        <div className="w-[75%]">
          <p className={title_style}>농장소개</p>
          <Call phoneNumber={"000-0000-0000"} />
          <Time time={"00:00 ~ 00:00 체험시간 2시간"} />
          <p className="mt-6">농장소개</p>
        </div>
        <div className="w-[24%] max-[425px] h-[248px] border rounded-2xl px-10 py-5 shadow-md">
          <p className={title_style}>결제정보</p>
          <div className={pay_sub_text_style}>
            <p className="text-text_sub">날짜</p>
            <p className="text-text_default font-semibold">00월 00일</p>
          </div>
          <div className={`${pay_sub_text_style} border-b mb-2 pb-4`}>
            <p className="text-text_sub">인원</p>
            <p className="text-text_default font-semibold">30명</p>
          </div>
          <p className=" text-right font-bold text-[20px]">10,000원</p>
          <Link href={"/reservations"}>
            <button className="w-full bg-point_color mt-4 py-3 rounded-lg text-white">
              예약하기
            </button>
          </Link>
        </div>
      </div>
    </section>
  );
}
