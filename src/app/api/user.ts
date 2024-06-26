"use server";

import { authApiClient } from ".";

//유저 정보 가져오기
export const getUserInfo = async () => {
  const response = await authApiClient.get(`/user/my-info`);
  return response?.data;
};

//회원탈퇴
export const userDrop = async () => {
  const response = await authApiClient.post(`/user/drop`, {});
  return response?.data;
};

//농장 예약 정보
export const userFarmHistory = async () => {
  const response = await authApiClient.get(`/reservation/farm-history`);
  return response?.data;
};

//예약 취소
export const farmCancel = async (reservationId: string) => {
  const response = await authApiClient.put(`/reservation/farm-cancel`, {
    reservationId,
  });
  return response?.data;
};
