import Logo from "../ui/logo";
import Inputs from "./inputs";

//로그인 container
export default function Contents() {
  return (
    <div className="flex h-calc_height items-center justify-center">
      <div className="w-[400px] text-center">
        <Logo size="b" />
        <Inputs />
      </div>
    </div>
  );
}
