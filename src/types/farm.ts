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

export interface FarmDetailData {
  farmName: string;
  farmZip: string;
  farmUseTimeDetail: string;
  reviewStar: string;
  reviewStarCnt: string;
  bannerImageList: BannerImageList[];
  farmUseAmt: string;
  farmLongitude: string;
  farmLatitude: string;
  farmId: string;
  farmKindNm: string;
  farmUseTimeDetailList: FarmTimeArr[];
  farmOwnerTel: string;
  farmUseTimeAndDetailTimeFormat: string;
  farmIntrcn: string;
  reviewList: ReviewData[];
}

export interface ReviewData {
  revieweContent: string;
  revieweStarScore: string;
  reviewerImage: string;
  reviewerName: string;
}

export interface FarmTimeArr {
  farmUseTimeDetailSlot: string;
}

interface BannerImageList {
  bannerImageUrl: string;
}

//농장, 목장, 체험
export type FarmKindKey = "01" | "02" | "03" | string;
export type FarmKind = "농장" | "목장" | "체험";
