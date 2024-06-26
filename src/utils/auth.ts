import { getToken } from "next-auth/jwt";
import { NextRequest } from "next/server";

const SECRET = process.env.NEXTAUTH_SECRET || "your-secret-key";

export async function auth(req: NextRequest) {
  const token = await getToken({ req, secret: SECRET });
  if (!token) {
    return null;
  }
  return token;
}
