import { NextRequest, NextResponse } from "next/server";
import { auth } from "./utils/auth";

export async function middleware(request: NextRequest) {
  const session = await auth(request);

  if (!session) {
    return NextResponse.redirect(`http://localhost:3000/login`);
  }

  // if (
  //   request.nextUrl.pathname.startsWith("/admin") &&
  //   session.user.level !== "admin"
  // ) {
  //   return NextResponse.redirect(`${process.env.NEXT_PUBLIC_BASE_HOST}/`);
  // }

  return NextResponse.next();
}

// See "Matching Paths" below to learn more
export const config = {
  matcher: ["/reservation_completed", "/reservations/:path*", "/mypage"],
};
