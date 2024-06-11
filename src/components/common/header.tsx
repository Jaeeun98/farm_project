import Link from "next/link";
import Logo from "../ui/logo";
import LoginButton from "../ui/login_button";

export default function Header() {
  return (
    <header className="flex justify-between px-layout_px h-header_height items-center">
      <Link href={"/"}>
        <Logo />
      </Link>
      <Link href={"/login"}>
        <LoginButton />
      </Link>
    </header>
  );
}
