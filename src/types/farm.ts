export interface FarmSearchData {
  farmKind: FarmKindKey;
  farmName?: string;
  farmUseDay?: string;
  farmMaxUserCnt?: string;
  orderByKind?: string;
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
  farmEventDiscountRate: string;
  farmEventDiscountOriginalAmt: string;
  farm_event_dicount_YN: boolean;
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
  farmEventDiscountOriginalAmt: string;
  farmEventDiscountRate: string;
  farmUseDay: string;
}

export interface ReservationData {
  farmId: string | null;
  reservationName: string;
  reservationEmail: string;
  reservationTel: string;
  reservationDate: string;
  reservationParticipants: string;
  reservationStartTime: string;
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

//예약완료 후 리턴 데이터
export interface PayData {
  farmAccountNo: string;
  farmKindNm: string;
  farmName: string;
  farmOwnerTel: string;
  farmUseTimeDetail: string;
  reservationDate: string;
  reservationId: string;
  reservationName: string;
  reservationParticipants: string;
  reservationTime: string;
  reviewStar: string;
  reviewStarCnt: string;
  farmMainImageUrl: string;
}

//예약정보
export interface History {
  reservationId: string;
  reservationStatus: string;
  reservationStatusNm: string;
  farmAccountNo: string;
  farmKindNm: string;
  farmName: string;
  farmZip: string;
  farmOwnerTel: string;
  farmUseTimeDetail: string;
  reservationDate: string;
  reservationParticipants: string;
  reservationStartTime: string;
  reservationEndTime: string;
  reservationName: string;
  reservationEmail: string;
  reservationTel: string;
  farmUseAmt: string;
  farmMainImageUrl: string;
}

//농장, 목장, 체험
export type FarmKindKey = "01" | "02" | "03" | string;
export type FarmKind = "농장" | "목장" | "체험";
