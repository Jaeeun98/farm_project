import { Login } from "@/types/auth";
import { apiClient } from ".";


export const login = async (
    loginData: Login
  ) => {
    const response = await apiClient.post(`/user/login`, { loginData });
    return response.data.result;
  };
  