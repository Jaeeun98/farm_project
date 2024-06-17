import Logo from "../ui/logo";
import HeaderLeftButton from "./header_left_button";

export default function Header({ page = "" }) {
  return (
    <header className="flex justify-between px-layout_px h-header_height items-center">
      <Logo />
      <HeaderLeftButton />
    </header>
  );
}
