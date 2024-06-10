import { Login, Sign } from "@/types/auth";
import { apiClient } from ".";

export const login = async (loginData: Login) => {
  const response = await apiClient.post(`/user/login`, loginData);
  return response.data.result;
};

export const signUp = async (signUpData: Sign) => {
  const response = await apiClient.post(`/user/account`, signUpData);
  return response.data;
};
