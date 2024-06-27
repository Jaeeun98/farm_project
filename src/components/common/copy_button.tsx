"use client";
import { useCallback } from "react";
import CopyIcon from "../ui/copy_icon";

interface Props {
  copyText: string;
}

export default function CopyButton({ copyText }: Props) {
  const writeClipboardText = () => {
    const textarea = document.createElement("textarea");
    document.body.appendChild(textarea);
    textarea.value = copyText;
    textarea.select();
    document.execCommand("copy");
    document.body.removeChild(textarea);

    alert("복사되었습니다.");
  };

  return (
    <button onClick={writeClipboardText} className="flex items-center">
      <CopyIcon />
      <span className="text-[14px] text-point_color">복사</span>
    </button>
  );
}
