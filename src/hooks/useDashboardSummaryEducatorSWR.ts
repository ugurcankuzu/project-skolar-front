import getDashboardSummaryEducator from "@/helpers/getDashboardSummaryEducator";
import swrFetchAdapter from "@/helpers/swrFetchAdapter";
import TDashboardSummaryEducator from "@/types/dashboardSummaryEducator";
import useSWR from "swr";

const SWR_KEY = "dashboardSummary";

export default function useDashboardSummaryEducatorSWR() {
  const {
    data: summaryData,
    isLoading,
    error,
  } = useSWR(
    SWR_KEY,
    swrFetchAdapter<TDashboardSummaryEducator, []>(getDashboardSummaryEducator),
    {
      onError: (err) => console.log(err),
    }
  );

  return {
    summaryData,
    isLoading,
    error,
  };
}
