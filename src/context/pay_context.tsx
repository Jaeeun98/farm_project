"use client";
import { PayData } from "@/types/farm";
import { createContext, useContext, useState, ReactNode } from "react";

interface PayContextType {
  payData: PayData;
  setPayData: (data: PayData) => void;
}

const PayContext = createContext<PayContextType | undefined>(undefined);

//결제 데이터
export const PayProvier = ({ children }: { children: ReactNode }) => {
  const [payData, setPayData] = useState<PayData>({
    farmAccountNo: "",
    farmKindNm: "",
    farmName: "",
    farmOwnerTel: "",
    farmUseTimeDetail: "",
    reservationDate: "",
    reservationId: "",
    reservationName: "",
    reservationParticipants: "",
    reservationTime: "",
    reviewStar: "",
    reviewStarCnt: "",
    farmMainImageUrl: "",
  });

  return (
    <PayContext.Provider value={{ payData, setPayData }}>
      {children}
    </PayContext.Provider>
  );
};

export const usePayData = () => {
  const context = useContext(PayContext);
  if (context === undefined) {
    throw new Error("에러 확인!");
  }
  return context;
};
