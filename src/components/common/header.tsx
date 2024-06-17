import Logo from "../ui/logo";
import LoginButton from "../ui/login_button";
import HeaderLeftButton from "./header_left_button";

export default function Header() {
  return (
    <header className="flex justify-between px-layout_px h-header_height items-center">
      <Logo />
      <HeaderLeftButton />
      {/* <LoginButton /> */}
    </header>
  );
}
