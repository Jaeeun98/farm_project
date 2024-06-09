import Logo from "../ui/logo";
import Inputs from "./inputs";



//로그인 container
export default function LoginContents(){
    return (
        <div className="flex h-[calc(100vh - 80px)] items-center justify-center">
            <div className="w-[400px] text-center">
                <Logo size='b'/>
               <Inputs/>
            </div>
        </div>
    )
}