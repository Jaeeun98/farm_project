//axios 기본 설정

import { API_ADDR } from "@/utils/env";
import axios from "axios";
import { getSession } from "next-auth/react";

export const apiClient = axios.create({
  baseURL: `${API_ADDR}/api/v1/web`,
  timeout: 10000,
  headers: {
    "Content-Type": "application/json",
  },
});

apiClient.interceptors.request.use(
  async (config) => {
    const session = await getSession();

    if (session?.user?.accessToken) {
      config.headers.Authorization = `Bearer ${session.user.accessToken}`;
    }

    return config;
  },
  (error) => {
    return Promise.reject(error);
  }
);
