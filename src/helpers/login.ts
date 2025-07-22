import { LoginFormValues } from "@/types/loginForm";

export default async function login(credentials: LoginFormValues) {
  try {
    const response = await fetch("/api/auth/login", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        email: credentials.email,
        password: credentials.password,
      }),
      credentials: "include", // Cookie'lerin otomatik olarak set edilmesi için
    });

    const data = await response.json();

    if (!response.ok) {
      return {
        success: false,
        message: data.message || "Login failed",
      };
    }

    return {
      success: true,
      message: "Login successful",
      ...data,
    };
  } catch (error) {
    console.error("Login error:", error);

    return {
      success: false,
      message: "Network error occurred",
    };
  }
}
