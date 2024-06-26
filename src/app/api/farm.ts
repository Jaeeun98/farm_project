"use server";

import {
  FarmData,
  FarmDetailData,
  FarmSearchData,
  ReservationData,
} from "@/types/farm";
import { apiClient, authApiClient } from ".";

//main, 농장 리스트 조회
export const getFarmList = async (
  filterData: string | undefined
): Promise<FarmData[]> => {
  const response = await apiClient.get(`/farm/list?farmKind=${filterData}`);
  return response.data.result;
};

//banner, 농장 검색 조회
export const getFarmSearchList = async (searchData: FarmSearchData) => {
  const response = await apiClient.get(`/farm/list`, { params: searchData });
  return response.data;
};

//농장 detail
export const getFarmDetailData = async (
  farmId: string
): Promise<FarmDetailData> => {
  const response = await apiClient.get(`/farm/detail`, { params: { farmId } });
  return response.data.result;
};

//농장예약(결제하기)
export const farmReservation = async (payData: ReservationData) => {
  const response = await authApiClient.post(`/reservation/farm`, payData);
  return response.data;
};
