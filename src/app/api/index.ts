//axios 기본 설정
import { getServerSession } from "next-auth";
import axios from "axios";
import { getSession } from "next-auth/react";

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

//토큰 저장
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

//401에러 발생시 로그인 페이지로 이동
authApiClient.interceptors.response.use(
  (response) => {
    return response;
  },
  (error) => {
    if (error.response && error.response.status === 401) {
      alert("세션이 만료되었습니다. 다시 로그인해 주세요.");
      return;
    }
    return Promise.reject(error);
  }
);
