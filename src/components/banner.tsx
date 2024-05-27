import MainSearch from "./main_search";

export default function Banner() {
  return (
    <div className="bg-banner_img bg-cover h-[480px] p-20">
      <h2 className="text-white text-3xl font-bold mb-10">
        체험이 필요할 때, <p>네이밍</p>
      </h2>
      <MainSearch />
    </div>
  );
}
