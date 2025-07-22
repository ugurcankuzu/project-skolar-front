"use server";

import getJWT from "./getJWT";

export default async function verifyToken() {
  try {
    //ADD COOKIE TO SERVER ACTION FETCH REQ
    const tkn = await getJWT();
    const headers = new Headers();
    headers.append("Content-Type", "application/json");
    headers.append("Authorization", `Bearer ${tkn}`);

    const response = await fetch(
      process.env.API_URL + "/user/me/verify-token",
      {
        method: "GET",
        headers: headers,
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
