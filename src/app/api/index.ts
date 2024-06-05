//axios 기본 설정

import { API_ADDR } from "@/utils/env";
import axios from "axios";

export const apiClient = axios.create({
  baseURL: `${API_ADDR}/api/v1/web`,
  timeout: 10000,
  headers: {
    "Content-Type": "application/json",
  },
});
