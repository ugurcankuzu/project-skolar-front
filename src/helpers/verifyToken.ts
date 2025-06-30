"use server";
import getJWT from "./getJWT";

export default async function verifyToken() {
  try {
    const tkn = await getJWT();
    if (!tkn)
      return {
        success: false,
        message: "Token not found",
      };
    const response = await fetch(
      process.env.API_URL + "/user/me/verify-token",
      {
        method: "GET",
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${tkn}`,
        },
        signal: AbortSignal.timeout(3000),
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
