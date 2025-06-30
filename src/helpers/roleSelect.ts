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
    const response = await fetch(
      /* process.env.API_URL */ "https://localhost:7004" +
        "/user/me/role-select",
      {
        method: "PATCH",
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${tkn}`,
        },
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
