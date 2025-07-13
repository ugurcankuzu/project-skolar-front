import getDashboardSummary from "@/helpers/getDashboardSummary";
import SummaryCard from "./SummaryCard";

export default async function SummaryCards() {
  const { success, data, message } = await getDashboardSummary();
  if (!success) {
    console.log(message);
    return;
  }
  return (
    <div className="w-full h-96 sm:h-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
      <SummaryCard title="Your Courses" value={data?.totalClassrooms || 0} />
      <SummaryCard
        title="Active Assignments"
        value={data?.openAssignments || 0}
      />
      <SummaryCard
        title="Submitted Assignments"
        value={data?.submittedAssignments || 0}
      />
    </div>
  );
}
