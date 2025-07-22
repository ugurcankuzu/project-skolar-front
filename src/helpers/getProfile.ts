// helpers/getProfile.ts - Server component için güncellenmiş versiyon
"use server";
import { cookies } from "next/headers";

export default async function getProfile(): Promise<{
  success: boolean;
  message?: string;
  data?: TUserProfile;
}> {
  try {
    const cookieStore = await cookies();
    const allCookies = cookieStore.toString();

    const response = await fetch(
      process.env.NEXT_PUBLIC_BASE_URL + "/api/user/me",
      {
        method: "GET",
        headers: {
          "Content-Type": "application/json",
          Cookie: allCookies, // Server-side'da cookie'leri manuel gönder
        },
      }
    );

    const data = await response.json();
    if (!response.ok) throw new Error(data.message);
    return data;
  } catch (err) {
    return {
      success: false,
      message: (err as Error).message,
    };
  }
}
/* try {
    const response = await fetchWrapper<TUserProfile>({
      url: process.env.NEXT_PUBLIC_API_URL + "/user/me",
      method: "GET",
    });
    console.log("Profil Response'u:", response);
    if (!response.success) throw new Error(response.message);
    return {
      success: true,
      data: response.data,
    };
  } catch (err) {
    return {
      success: false,
      message: (err as Error).message,
    };
  } */
