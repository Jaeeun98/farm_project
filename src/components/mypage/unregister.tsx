"use client";
import { userDrop } from "@/app/api/user";
import { signOut } from "next-auth/react";
import { useState } from "react";
import BackAlertModal from "../common/back_alert_modal";
import { useRouter } from "next/navigation";

export default function Unregister() {
  const [alertModal, setAlertModal] = useState(false);
  const router = useRouter();

  const dropModalClose = () => setAlertModal(false);
  const dropModalOpen = () => setAlertModal(true);

  const handleUserDrop = async () => {
    const result = await userDrop();

    if (result.status === 401 || result.status === 500) {
      alert("로그인 인증이 만료되었습니다.");
      router.push("/login");
    } else if (result.status === "SUCCESS") {
      alert("회원탈퇴 되었습니다.");
      signOut({ callbackUrl: "/login" });
    } else {
      alert("회원탈퇴에 실패했습니다.");
    }
  };

  return (
    <>
      <button onClick={dropModalOpen}>회원탈퇴</button>
      {alertModal && (
        <BackAlertModal
          text={"회원탈퇴 하시겠습니까?"}
          modalClose={dropModalClose}
          handleYClick={handleUserDrop}
        />
      )}
    </>
  );
}
