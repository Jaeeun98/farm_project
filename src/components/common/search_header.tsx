import Logo from "@/components/ui/logo";
import Search from "@/components/common/search";
import HeaderLeftButton from "./header_left_button";

//검색 포함된 header
export default function SearchHeader() {
  return (
    <div className="flex items-center px-layout_px h-header_height border-b border-b-[#ddd]">
      <Logo />
      <Search detail={true} />
      <HeaderLeftButton />
    </div>
  );
}
