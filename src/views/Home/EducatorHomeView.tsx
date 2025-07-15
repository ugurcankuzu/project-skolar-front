import Classrooms from "@/components/home/Classrooms";
import QuickActions from "@/components/home/quickActions";
import SummaryCards from "@/components/home/SummaryCards";
import WelcomeSection from "@/components/home/welcomeSection";
import ViewContainer from "@/components/shared/viewContainer";

export default function EducatorHomeView() {
  return (
    <div className="w-full h-full flex flex-col items-center ">
      <ViewContainer>
        <div className="w-full flex flex-col gap-4">
          <WelcomeSection />
          <QuickActions />
        </div>
        <SummaryCards />
        <Classrooms />
      </ViewContainer>
    </div>
  );
}
