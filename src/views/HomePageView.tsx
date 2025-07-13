import SummaryCards from "@/components/home/SummaryCards";
import WelcomeSection from "@/components/home/welcomeSection";
import SummaryCardsSkeleton from "@/skeletons/summaryCardsSkeleton";
import { Suspense } from "react";

export default function HomePageView() {
  return (
    <div className="w-full flex flex-col items-center ">
      <div className="w-full max-w-screen-xl px-4 py-8 space-y-4 md:space-y-12">
        <WelcomeSection />
        <Suspense fallback={<SummaryCardsSkeleton />}>
          <SummaryCards />
        </Suspense>
      </div>
    </div>
  );
}
