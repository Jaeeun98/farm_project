import { login } from "@/app/api/auth";

import NextAuth, { NextAuthOptions } from "next-auth";
import CredentialsProvider from "next-auth/providers/credentials";

const authOptions: NextAuthOptions = {
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

        try {
          const res = await login(credentials);
          const { status, errorMessage, result } = res;

          if (status === "SUCCESS") return result;
          else {
            throw new Error(errorMessage || "Login failed");
          }
        } catch (error) {
          throw new Error(error as string);
        }
      },
    }),
  ],
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
    async session({ session, token, user }) {
      // console.log("session", session);
      // console.log("token", token);
      // console.log("user", user);
      // session.user = {
      //   accessToken: session.accessToken,
      // };
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
