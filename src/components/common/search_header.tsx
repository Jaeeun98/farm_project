import FilterIcon from "@/components/ui/filter_icon";
import Logo from "@/components/ui/logo";
import Search from "@/components/common/search";

//검색 포함된 header
export default function SearchHeader() {
  return (
    <div className="flex items-center px-layout_px h-header_height  border-b border-b-[#ddd]">
      <Logo />
      <Search detail={true} />
      <FilterIcon />
    </div>
  );
}
