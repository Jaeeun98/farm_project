import { apiClient } from ".";
import { getSession } from "next-auth/react";

export const getUserInfo = async () => {
  const session = await getSession();
  if (!session?.accessToken) {
    throw new Error("Unauthorized");
  }

  const response = await apiClient.get(`/user/my-info`, {
    headers: {
      Authorization: `Bearer ${session.accessToken}`,
    },
  });
  console.log(response);
  return response.data;
};
