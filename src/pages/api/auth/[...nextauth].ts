import { getRefreshToken, login } from "@/app/api/auth";
import { SECRET } from "@/utils/env";

import NextAuth, { NextAuthOptions } from "next-auth";
import CredentialsProvider from "next-auth/providers/credentials";

export const authOptions: NextAuthOptions = {
  secret: SECRET,
  providers: [
    CredentialsProvider({
      // 이 부분을 사용자 정의로 수정
      name: "Credentials",
      credentials: {
        userWebId: { label: "userWebId", type: "text" },
        userWebPw: { label: "userWebPw", type: "password" },
      },
      async authorize(credentials): Promise<any> {
        if (!credentials) return null;
        const res = await login(credentials);
        const { status, result } = res;

        if (status === "SUCCESS") {
          const user = {
            accessToken: result.accessToken,
            refreshToken: result.refreshTokenId,
            id: result.userWebId,
            accessExpires: Math.floor(Date.now() / 1000) + 60,

            // accessExpires: Math.floor(Date.now() / 1000) + 4 * 60,
          };
          return user;
        } else {
          throw new Error(res.errorMessage);
        }
      },
    }),
  ],
  session: {
    strategy: "jwt",
    maxAge: 60,

    // maxAge: 4 * 60,
  },
  jwt: {
    secret: SECRET,
  },
  pages: {
    signOut: "/login",
  },
  callbacks: {
    /**  refreshToken, UserId도 출력되도록 하기 */
    async jwt({ token, user }) {
      if (user) {
        token.id = user.id as string;
        token.accessToken = user.accessToken;
        token.refreshToken = user.refreshToken as string;
      }
      return token;
    },

    async session({ session, token }) {
      session.user = {
        id: token.id,
        accessToken: token.accessToken,
        refreshToken: token.refreshToken,
      };
      return session;
    },
  },
};

export default NextAuth(authOptions);
