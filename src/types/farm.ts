export interface FarmSearchData {
  farmKind: FarmKindKey;
  farmName?: string;
  farmUseDay?: string;
  farmMaxUserCnt?: string;
}

export interface FarmData {
  farmId: string;
  farmKindNm: string;
  farmMainImageUrl: string;
  farmName: string;
  farmUseAmt: string;
  farmZip: string;
  reviewStar: string;
  reviewStarCnt: string;
}

//농장, 목장, 체험
export type FarmKindKey = "01" | "02" | "03" | string;
export type FarmKind = "농장" | "목장" | "체험";
