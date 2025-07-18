import WelcomeSection from "@/components/home/welcomeSection";
import ViewContainer from "@/components/shared/viewContainer";

export default function StudentHomeView() {
  return (
    <div className="size-full flex flex-col items-center">
      <ViewContainer>
        <WelcomeSection />
      </ViewContainer>
    </div>
  );
}
