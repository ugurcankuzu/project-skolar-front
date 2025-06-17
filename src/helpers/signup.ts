import { RegisterFormValues } from "@/types/signupForm";

export default async function signup(credentials: RegisterFormValues) {
  try {
    const response = await fetch("https://localhost:7004" + "/auth/register", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        firstName: credentials.firstName,
        lastName: credentials.lastName,
        email: credentials.email,
        password: credentials.password,
        confirmPassword: credentials.confirmPassword,
      }),
    });
    const data = await response.json();
    if (!response.ok) throw new Error(data.message);
    return {
      success: true,
      message: "User created successfully",
    };
  } catch (err) {
    return {
      success: false,
      message: (err as Error).message,
    };
  }
}
