"use client";

import LoginWithGoogle from "@/helpers/loginWithGoogle";
import useLoading from "@/hooks/useLoading";
import { CredentialResponse, GoogleLogin } from "@react-oauth/google";
import { useRouter } from "next/navigation";
import Loader from "../shared/loader";

export default function GoogleLoginButton() {
  const router = useRouter();
  const { loading, startLoading, stopLoading } = useLoading();
  const handleSuccess = async (credentialResponse: CredentialResponse) => {
    startLoading();
    const idToken = credentialResponse.credential;
    if (!idToken) return;
    const data = await LoginWithGoogle(idToken);
    console.log(data);
    if (!data.success) {
      console.log("Login failed:", data.message);
      return;
    }
    router.push("/skolar");
    stopLoading();
  };
  const handleFailure = () => {
    console.log("Login failed");
  };
  return (
    <>
      {loading ? (
        <div>
          <Loader />
        </div>
      ) : (
        <GoogleLogin
          onSuccess={handleSuccess}
          onError={handleFailure}
          size="large"
          shape="circle"
          text="signin_with"
          width="100%"
          theme="outline"
          logo_alignment="center"
          locale="en"
          useOneTap
        />
      )}
    </>
  );
}
