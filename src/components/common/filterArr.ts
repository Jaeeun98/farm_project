import { FarmKind } from "@/types/farm";

export const filterArr = ["전체", "농장", "목장", "체험"];

export const getFilterKey = (v: string | null): string => {
  switch (v) {
    case "농장":
      return "01";
    case "목장":
      return "02";
    case "체험":
      return "03";
    default:
      return "00";
  }
};
