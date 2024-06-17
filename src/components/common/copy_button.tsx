'use client'
import CopyIcon from "../ui/copy_icon";

interface Props {
    copyText: string;
}

export default function CopyButton({copyText}: Props){

    const writeClipboardText = async () => {
        await navigator.clipboard.writeText(copyText);
        alert('복사되었습니다')
    }

    return (
        <button onClick={writeClipboardText} className="flex items-center">
            <CopyIcon />
            <span className="text-[14px] text-point_color">복사</span> 
        </button>
    )
}