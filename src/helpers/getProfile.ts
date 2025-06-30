"use server";
import getJWT from "./getJWT";

export default async function getProfile(): Promise<{
  success: boolean;
  message?: string;
  data?: TUserProfile;
}> {
  try {
    const tkn = await getJWT();
    if (!tkn) throw new Error("Token not found");
    const response = await fetch(process.env.API_URL + "/user/me", {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${tkn}`,
      },
    });
    console.log(response);
    const result = await response.json();
    if (!response.ok) throw new Error(result.message);
    return {
      success: true,
      data: result.data,
    };
  } catch (err) {
    return {
      success: false,
      message: (err as Error).message,
    };
  }
}
