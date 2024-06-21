import Image from "next/image";
import Logo from "../ui/logo";
import Inputs from "./inputs";

//로그인 container
export default function Contents() {
  return (
    <div className="flex h-calc_height items-center justify-center">
      <div className="w-[400px] text-center">
        <div className="flex justify-center">
          <Image
            src={"/images/text_logo.png"}
            alt="text_logo"
            width={180}
            height={95}
          />
        </div>

        <Inputs />
      </div>
    </div>
  );
}
