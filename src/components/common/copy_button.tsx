"use client";
import { useCallback } from "react";
import CopyIcon from "../ui/copy_icon";

interface Props {
  copyText: string;
}

export default function CopyButton({ copyText }: Props) {
  const writeClipboardText = useCallback(async () => {
    if (typeof navigator !== "undefined" && navigator.clipboard) {
      try {
        await navigator.clipboard.writeText(copyText);
        alert("복사되었습니다");
      } catch (error) {
        console.error("클립보드에 복사하는 데 실패했습니다:", error);
      }
    } else {
      console.error("클립보드 API를 사용할 수 없습니다.");
    }
  }, [copyText]);

  return (
    <button onClick={writeClipboardText} className="flex items-center">
      <CopyIcon />
      <span className="text-[14px] text-point_color">복사</span>
    </button>
  );
}
