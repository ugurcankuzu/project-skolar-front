"use server";

import { cookies } from "next/headers";
import { redirect } from "next/navigation";

export default async function removeJWT() {
  (await cookies()).delete("skolar_access_token");
  redirect("/login");
}
