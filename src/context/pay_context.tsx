"use client";
import { createContext, useContext, useState, ReactNode } from "react";

interface PayContextType {
  payData: string;
  setPayData: (data: any) => void;
}

const PayContext = createContext<PayContextType | undefined>(undefined);

//결제 데이터
export const PayProvier = ({ children }: { children: ReactNode }) => {
  const [payData, setPayData] = useState("");

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
