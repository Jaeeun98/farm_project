import Image from "next/image";
import Logo from "../ui/logo";
import Inputs from "./inputs";
import TextLogo from "../ui/text_logo";

//로그인 container
export default function Contents() {
  return (
    <div className="flex h-calc_height items-center justify-center">
      <div className="w-[400px] text-center">
        <div className="flex justify-center">
          <TextLogo size="b" />
        </div>
        <Inputs />
      </div>
    </div>
  );
}
