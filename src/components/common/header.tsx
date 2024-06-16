import Link from "next/link";
import Logo from "../ui/logo";
import LoginButton from "../ui/login_button";

export default function Header({page = ""}) {
  return (
    <header className="flex justify-between px-layout_px h-header_height items-center">
      <Logo />
      {page !== 'login' && <Link href={"/login"}>
        <LoginButton />
      </Link> }
     
    </header>
  );
}
