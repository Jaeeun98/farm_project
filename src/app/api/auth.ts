"use server";

import { Login, Sign } from "@/types/auth";
import { apiClient } from ".";

export const login = async (loginData: Login) => {
  const response = await apiClient.post(`/user/login`, loginData);
  return response.data;
};

export const signUp = async (signUpData: Sign) => {
  const response = await apiClient.post(`/user/account`, signUpData);
  return response.data;
};

export const getRefreshToken = async (refreshTokenId: string) => {
  const response = await apiClient.get(
    `/user/refresh-token?refreshTokenId=${refreshTokenId}`
  );
  return response.data;
};
