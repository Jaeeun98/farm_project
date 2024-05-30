import ImgContents from "./img_contents";
import StarScore from "../ui/star_score";
import Review from "./review";

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

export default function Contents() {
  return (
    <section className="px-layout_px">
      <ImgContents imgs={imgTestData} />
      <div className="border-b border-b-[#ddd] flex h-[259px]">
        <div className="w-[75%]">
          <div>
            <p className="text-text_sub my-1 text-[16px]">농장</p>
            <p className="text-text_default font-bold my-1 text-[24px]">
              농장명
            </p>
            <p className="flex items-center">
              <span>
                <StarScore score="0.0" />
              </span>
              <span className="text-text_sub my-1 text-[14px]">000명</span>
            </p>
          </div>
          <Review />
        </div>
        <div className="border w-[25%]">지도</div>
      </div>
    </section>
  );
}
