import { getUserInfo } from "@/app/api/user";
import Call from "../ui/call";
import LogoutButton from "./logout_button";
import Unregister from "./unregister";

export default async function Userinfo() {
  const result = await getUserInfo();
  console.log(result);

  return (
    <div>
      <img src="" alt="" />
      <p>이름</p>
      <div>
        <Call phoneNumber="000-0000-0000" />
      </div>
      <div>
        <LogoutButton />
        <Unregister />
      </div>
    </div>
  );
}
