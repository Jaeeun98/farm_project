import BannerSearch from "./banner_search";
import MobileSearch from "../common/mobile_search";

export default function Banner() {
  return (
    <div className="bg-banner_img bg-cover h-[260px] sm:h-[480px] py-10 px-8 sm:py-20 sm:px-16">
      <h2 className="text-white text-3xl font-bold mb-6 sm:mb-10">
        체험이 필요할 때, <p>위팜</p>
      </h2>
      <div className="hidden sm:block">
        <BannerSearch />
      </div>
      <div className="sm:hidden">
        <MobileSearch />
      </div>
    </div>
  );
}
