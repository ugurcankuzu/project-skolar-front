"use server";

import { cookies } from "next/headers";

export default async function removeJWT() {
  const cookie = await cookies();
  cookie.delete("skolar_access_token");
}
