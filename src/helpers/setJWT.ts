"use server";

import { cookies } from "next/headers";

export default async function setJWT(tkn: string) {
  const cookie = await cookies();
  cookie.set("skolar_access_token", tkn);
}
