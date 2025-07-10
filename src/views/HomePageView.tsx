import WelcomeSection from "@/components/home/welcomeSection";

export default function HomePageView() {
  return (
    <div className="w-full flex flex-col items-center ">
      <div className="w-full max-w-screen-xl px-4 py-8">
        <WelcomeSection />
      </div>
    </div>
  );
}
