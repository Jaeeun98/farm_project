import Header from "@/components/common/header";
import SignUpContents from "@/components/sign_up_contents";
import BackButton from "@/components/ui/back_button";

export default function SignUp() {
  return (
    <div>
      <Header />
      <div className="flex justify-center">
        <div className="w-[400px]">
          <BackButton text="회원가입" />
          <SignUpContents />
        </div>
      </div>
    </div>
  );
}
