import { NextRequest, NextResponse } from "next/server";
import { auth } from "./utils/auth";

export async function middleware(request: NextRequest) {
  const session = await auth(request);

  if (!session) {
    return NextResponse.redirect(`http://localhost:3000/login`);
  }

  return NextResponse.next();
}

// See "Matching Paths" below to learn more
export const config = {
  matcher: ["/reservation_completed", "/reservations/:path*", "/mypage"],
};
