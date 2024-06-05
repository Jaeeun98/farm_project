import { FarmData, FarmSearchData } from "@/types/farm";
import { apiClient } from ".";

//main, 농장 리스트 조회
export const getFarmList = async (
  filterData: string | undefined
): Promise<FarmData[]> => {
  const response = await apiClient.get(`/farm/list?farmKind=${filterData}`);
  return response.data.result;
};
