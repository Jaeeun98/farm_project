import FilterIcon from "../ui/filter_icon";
import Logo from "../ui/logo";

export default function Header() {
  return (
    <header className="flex justify-between px-layout_px h-header_height items-center">
      <Logo />
      <FilterIcon />
    </header>
  );
}
