import getDashboardSummaryStudent from "@/helpers/getDashboardSummaryStudent";
import swrFetchAdapter from "@/helpers/swrFetchAdapter";
import TDashboardSummaryStudent from "@/types/dashboardSummaryStudent";
import useSWR from "swr";

const SWR_KEY = "dashboardSummary";

export default function useDashboardSummaryStudentSWR() {
  const {
    data: summaryData,
    isLoading,
    error,
  } = useSWR(
    SWR_KEY,
    swrFetchAdapter<TDashboardSummaryStudent, []>(getDashboardSummaryStudent)
  );
  return {
    summaryData,
    isLoading,
    error,
  };
}
