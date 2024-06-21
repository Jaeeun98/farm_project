import { getUserInfo } from "@/app/api/user";
import Call from "../ui/call";
import LogoutButton from "./logout_button";
import Email from "../ui/email";
import Calenadr from "../ui/calendar";
import Unregister from "./unregister";
// import Unregister from "./unregister";

export default async function Userinfo() {
  const result = await getUserInfo();
  const userData = result.result;

  if (result.status !== "SUCCESS") alert(result.errorMessage);

  return (
    <div className="flex justify-center flex-wrap text-center">
      <div className="w-[120px] h-[120px] bg-gray-300 rounded-full"></div>
      <p className="w-full text-[24px] font-bold py-4">{userData.userName}</p>
      <div className="w-full flex justify-center gap-4">
        <Call phoneNumber={userData.userTel} />
        <Email email={userData.userEmail} />
        <Calenadr date={userData.userBirth} />
      </div>
      <div className="text-text_sub text-[14px] mt-6">
        <LogoutButton />
        <span className="mx-4">|</span>
        <Unregister />
      </div>
    </div>
  );
}
