"use client";
import { signOut } from "next-auth/react";
import BackAlertModal from "../common/back_alert_modal";
import { useState } from "react";

export default function LogoutButton() {
  const [alertModal, setAlertModal] = useState(false);

  const handleLogout = () => signOut({ callbackUrl: "/login" });
  const logoutModalClose = () => setAlertModal(false);
  const logoutModalOpen = () => setAlertModal(true);

  return (
    <>
      <button onClick={logoutModalOpen}>로그아웃</button>
      {alertModal && (
        <BackAlertModal
          text={"로그아웃 하시겠습니까?"}
          modalClose={logoutModalClose}
          handleYClick={handleLogout}
        />
      )}
    </>
  );
}
