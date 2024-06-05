import { FarmKind } from "@/types/farm";

export const filterArr = ["농장", "목장", "체험"];

export const getFilterKey = (v: string) => {
  switch (v) {
    case "농장":
      return "01";
    case "목장":
      return "02";
    case "체험":
      return "03";
  }
};
