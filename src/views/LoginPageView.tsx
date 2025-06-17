import Login from "@/components/login";
import LoginSignupHero from "@/components/shared/loginSignupHero";
export default function LoginPageView() {
  return (
    <div className="w-screen h-screen">
      <div className="w-full h-full bg-surface flex flex-col md:flex-row items-center justify-center">
        <Login />
        <LoginSignupHero />
      </div>
    </div>
  );
}
