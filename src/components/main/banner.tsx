import BannerSearch from "./banner_search";

export default function Banner() {
  return (
    <div className="bg-banner_img bg-cover h-[480px] py-20 px-16">
      <h2 className="text-white text-3xl font-bold mb-10">
        체험이 필요할 때, <p>네이밍</p>
      </h2>
      <BannerSearch />
    </div>
  );
}
