import Classrooms from "@/components/home/Classrooms";
import QuickActions from "@/components/home/quickActions";
import SummaryCards from "@/components/home/SummaryCards";
import WelcomeSection from "@/components/home/welcomeSection";
import SummaryCardsSkeleton from "@/skeletons/summaryCardsSkeleton";
import { Suspense } from "react";

export default function HomePageView() {
  return (
    <div className="w-full flex flex-col items-center ">
      <div className="w-full max-w-screen-xl px-4 py-8 space-y-4 md:space-y-12">
        <div className="w-full flex flex-col gap-4">
          <WelcomeSection />
          <QuickActions />
        </div>
        <Suspense fallback={<SummaryCardsSkeleton />}>
          {/** Server component
           * Bu yüzden suspense pattern kullanıyoruz.
           */}
          <SummaryCards />
        </Suspense>
        <Classrooms />
      </div>
    </div>
  );
}
