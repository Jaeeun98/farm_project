import { FarmData, FarmDetailData, FarmSearchData } from "@/types/farm";
import { apiClient } from ".";

//main, 농장 리스트 조회
export const getFarmList = async (
  filterData: string | undefined
): Promise<FarmData[]> => {
  const response = await apiClient.get(`/farm/list?farmKind=${filterData}`);
  return response.data.result;
};

//banner, 농장 검색 조회
export const getFarmSearchList = async (
  searchData: FarmSearchData
): Promise<FarmData[]> => {
  const response = await apiClient.get(`/farm/list`, { params: searchData });
  return response.data.result;
};

//농장 detail
//banner, 농장 검색 조회
export const getFarmDetailData = async (
  farmId: string
): Promise<FarmDetailData> => {
  const response = await apiClient.get(`/farm/detail`, { params: { farmId } });
  return response.data.result;
};
