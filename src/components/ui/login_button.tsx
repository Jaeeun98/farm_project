import Link from "next/link";

export default function LoginButton() {
  return (
    <Link href={"/login"}>
      <button className="rounded-md text-point_color border border-point_color w-[128px] h-[48px]">
        로그인
      </button>
    </Link>
  );
}
