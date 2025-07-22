"use server";
import getJWT from "./getJWT";

export default async function roleSelect(
  role: "student" | "educator"
): Promise<{
  success: boolean;
  message?: string;
  data?: TUserProfile;
}> {
  try {
    const tkn = await getJWT();
    //ADD COOKIE TO SERVER ACTION FETCH REQ
    if (!tkn) throw new Error("No JWT found");
    const headers = new Headers();
    headers.append("Content-Type", "application/json");
    headers.append("Authorization", `Bearer ${tkn}`);

    const response = await fetch(
      /* process.env.API_URL */ "https://localhost:7004" +
        "/user/me/role-select",
      {
        method: "PATCH",
        headers: headers,
        body: JSON.stringify({
          isEducator: role === "educator",
        }),
      }
    );
    const result = await response.json();
    if (!response.ok) throw new Error(result.message);
    return result;
  } catch (err) {
    return {
      success: false,
      message: (err as Error).message,
    };
  }
}
