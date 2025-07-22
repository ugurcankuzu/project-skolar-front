export default async function LoginWithGoogle(idToken: string) {
  try {
    const response = await fetch("/api/auth/google-login", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        idToken: idToken,
      }),
    });
    const data = await response.json();
    if (response.ok) {
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
