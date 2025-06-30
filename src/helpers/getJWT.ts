"use server";

import { cookies } from "next/headers";

export default async function getJWT() {
  const cookieHandler = await cookies();
  const token = cookieHandler.get("skolar_access_token");
  return token?.value;
}
