import LoginSignupHero from "@/components/shared/loginSignupHero";
import SignupSide from "@/components/signup/signupSide";
export default function SignupPageView() {
  return (
    <div className="w-screen h-screen">
      <div className="w-full h-full bg-surface flex flex-col md:flex-row items-center justify-center">
        <SignupSide />
        <LoginSignupHero />
      </div>
    </div>
  );
}
