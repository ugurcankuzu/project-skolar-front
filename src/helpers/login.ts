"use server";
import { LoginFormValues } from "@/types/loginForm";
import setJWT from "./setJWT";

export default async function login(credentials: LoginFormValues) {
  try {
    const response = await fetch(process.env.API_URL + "/auth/login", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        email: credentials.email,
        password: credentials.password,
      }),
    });
    const data = await response.json();
    console.log(data);
    if (response.ok) {
      await setJWT(data.authToken);
      return data;
    }
    throw new Error(data.message);
  } catch (err) {
    return {
      status: false,
      message: (err as Error).message,
    };
  }
}
