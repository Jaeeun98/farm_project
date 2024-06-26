//axios 기본 설정
import { getServerSession } from "next-auth";
import axios from "axios";
import { getSession, signOut } from "next-auth/react";

import { authOptions } from "@/pages/api/auth/[...nextauth]";
import { API_ADDR } from "@/utils/env";

export const apiClient = axios.create({
  baseURL: `${API_ADDR}/api/v1/web`,
  timeout: 10000,
  headers: {
    "Content-Type": "application/json",
  },
});

export const authApiClient = axios.create({
  baseURL: `${API_ADDR}/api/v1/web`,
  timeout: 10000,
  headers: {
    "Content-Type": "application/json",
  },
});

//api 요청시, header에 토큰 저장
authApiClient.interceptors.request.use(
  async (config) => {
    let session = await getSession();

    if (!session) session = await getServerSession(authOptions);

    if (session?.user?.accessToken) {
      config.headers.Authorization = `Bearer ${session.user.accessToken}`;
    }

    return config;
  },
  (error) => {
    return Promise.reject(error);
  }
);

//api 응답
authApiClient.interceptors.response.use(
  (response) => {
    const res = response;
    console.log("res", res);
    return res;
  },
  async (error) => {
    // const pathname = usePathname();

    // if (pathname !== "/login")
    signOut({ redirect: false });

    return Promise.reject(error);
  }
);
