import Link from "next/link";
import Image from "next/image";

export default function MypageButton() {
  return (
    <Link href={"/mypage"}>
      <Image
        src="/images/icon/mypage.png"
        alt="mypage_icon"
        width={28}
        height={28}
      />
    </Link>
  );
}
