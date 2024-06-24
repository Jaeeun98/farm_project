"use client";
import nextDate from "@/components/common/nextDate";
import { FarmSearchData } from "@/types/farm";
import { createContext, useContext, useState, ReactNode } from "react";

interface FarmSearchContextType {
  farmSearchData: FarmSearchData;
  setFarmSearchData: (data: FarmSearchData) => void;
}

const FarmSearchContext = createContext<FarmSearchContextType | undefined>(
  undefined
);

//결제 데이터
export const FarmSearchProvier = ({ children }: { children: ReactNode }) => {
  const [farmSearchData, setFarmSearchData] = useState<FarmSearchData>({
    farmKind: "",
    farmName: "",
    farmUseDay: nextDate(),
    farmMaxUserCnt: "2",
    orderByKind: "",
  });

  return (
    <FarmSearchContext.Provider value={{ farmSearchData, setFarmSearchData }}>
      {children}
    </FarmSearchContext.Provider>
  );
};

export const useFarmSearchData = () => {
  const context = useContext(FarmSearchContext);
  if (context === undefined) {
    throw new Error("에러 확인!");
  }
  return context;
};
